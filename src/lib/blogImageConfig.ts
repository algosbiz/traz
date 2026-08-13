export const SAFE_IMAGE_UPLOAD_BYTES = Math.floor(3.5 * 1024 * 1024);
export const MAX_SOURCE_IMAGE_BYTES = 20 * 1024 * 1024;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;

export function isAllowedImageType(type: string) {
  return ALLOWED_IMAGE_TYPES.some((allowedType) => allowedType === type);
}
