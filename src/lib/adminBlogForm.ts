import type { BlogStatus } from "./cmsBlogs";
import {
  MAX_SOURCE_IMAGE_BYTES,
  SAFE_IMAGE_UPLOAD_BYTES,
  isAllowedImageType,
} from "./blogImageConfig";

export interface StoredBlogDraft {
  version: 1;
  sourceUpdatedAt: string | null;
  title: string;
  slug: string;
  slugEdited: boolean;
  excerpt: string;
  category: string;
  coverImage: string;
  status: BlogStatus;
  contentHtml: string;
}

function isStoredBlogDraft(value: unknown): value is StoredBlogDraft {
  if (!value || typeof value !== "object") return false;
  const draft = value as Record<string, unknown>;

  return (
    draft.version === 1 &&
    (draft.sourceUpdatedAt === null || typeof draft.sourceUpdatedAt === "string") &&
    typeof draft.title === "string" &&
    typeof draft.slug === "string" &&
    typeof draft.slugEdited === "boolean" &&
    typeof draft.excerpt === "string" &&
    typeof draft.category === "string" &&
    typeof draft.coverImage === "string" &&
    (draft.status === "draft" || draft.status === "published") &&
    typeof draft.contentHtml === "string"
  );
}

export function parseStoredBlogDraft(
  storedValue: string | null,
  expectedSourceUpdatedAt: string | null,
) {
  if (!storedValue) return null;

  try {
    const draft: unknown = JSON.parse(storedValue);
    if (!isStoredBlogDraft(draft) || draft.sourceUpdatedAt !== expectedSourceUpdatedAt) {
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

export async function getApiResponse<T extends object>(
  response: Response,
  fallbackError: string,
  payloadTooLargeError = "The request is too large to send. Reduce its size and try again.",
): Promise<T & { error?: string }> {
  const responseText = await response.text();

  if (responseText) {
    try {
      const parsed: unknown = JSON.parse(responseText);
      if (parsed && typeof parsed === "object") {
        return parsed as T & { error?: string };
      }
    } catch {
      // Some hosting layers return plain text or HTML before the request reaches Next.js.
    }
  }

  if (response.status === 413 || /request entity too large/i.test(responseText)) {
    return {
      error: payloadTooLargeError,
    } as T & { error?: string };
  }

  const plainError = responseText.trim();
  const safePlainError = plainError.length <= 200 && !/[<>]/.test(plainError);
  return {
    error: safePlainError && plainError ? plainError : fallbackError,
  } as T & { error?: string };
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => blob ? resolve(blob) : reject(new Error("Unable to optimize this image.")),
      "image/webp",
      quality,
    );
  });
}

async function optimizeRasterImage(file: File) {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    bitmap.close();
    throw new Error("This browser cannot optimize the selected image.");
  }

  try {
    let scale = Math.min(1, 2560 / Math.max(bitmap.width, bitmap.height));
    const qualities = [0.84, 0.72, 0.6, 0.48];

    for (let resizeAttempt = 0; resizeAttempt < 4; resizeAttempt += 1) {
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

      for (const quality of qualities) {
        const blob = await canvasToBlob(canvas, quality);
        if (blob.size <= SAFE_IMAGE_UPLOAD_BYTES) {
          const baseName = file.name.replace(/\.[^.]+$/, "") || "image";
          return new File([blob], `${baseName}.webp`, {
            type: "image/webp",
            lastModified: file.lastModified,
          });
        }
      }

      scale *= 0.78;
    }
  } finally {
    bitmap.close();
  }

  throw new Error("The image could not be reduced to a safe upload size.");
}

export async function prepareImageForUpload(file: File) {
  if (!isAllowedImageType(file.type)) {
    throw new Error("Use a JPG, PNG, WebP, or GIF image.");
  }
  if (file.size > MAX_SOURCE_IMAGE_BYTES) {
    throw new Error("Choose an image that is 20 MB or smaller.");
  }
  if (file.size <= SAFE_IMAGE_UPLOAD_BYTES) return file;
  if (file.type === "image/gif") {
    throw new Error("Animated GIF files must be 3.5 MB or smaller.");
  }

  try {
    return await optimizeRasterImage(file);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("The image")) throw error;
    throw new Error("The selected image could not be optimized. Try a different JPG, PNG, or WebP file.");
  }
}
