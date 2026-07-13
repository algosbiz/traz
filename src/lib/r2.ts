import {
  DeleteObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

let r2Client: S3Client | undefined;

function getR2Config() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucket = process.env.R2_BUCKET_NAME;

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    throw new Error(
      "R2 is not configured. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, and R2_BUCKET_NAME.",
    );
  }

  return { accountId, accessKeyId, secretAccessKey, bucket };
}

export function isR2Configured() {
  return Boolean(
    process.env.R2_ACCOUNT_ID &&
      process.env.R2_ACCESS_KEY_ID &&
      process.env.R2_SECRET_ACCESS_KEY &&
      process.env.R2_BUCKET_NAME,
  );
}

export function getR2Client() {
  if (!r2Client) {
    const config = getR2Config();
    r2Client = new S3Client({
      region: "auto",
      endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }
  return r2Client;
}

const extensions: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function uploadR2Asset(body: Uint8Array, contentType: string) {
  const { bucket } = getR2Config();
  const extension = extensions[contentType];
  if (!extension) throw new Error("Unsupported image type.");

  const now = new Date();
  const objectKey = `blogs/${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, "0")}/${randomUUID()}.${extension}`;

  await getR2Client().send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: body,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );

  return objectKey;
}

export async function getR2Asset(objectKey: string) {
  const { bucket } = getR2Config();
  return getR2Client().send(
    new GetObjectCommand({
      Bucket: bucket,
      Key: objectKey,
    }),
  );
}

export async function deleteR2Assets(objectKeys: string[]) {
  if (!objectKeys.length) return;
  const { bucket } = getR2Config();
  await getR2Client().send(
    new DeleteObjectsCommand({
      Bucket: bucket,
      Delete: {
        Objects: objectKeys.map((Key) => ({ Key })),
        Quiet: true,
      },
    }),
  );
}

export function getR2PublicUrl(objectKey: string) {
  const publicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, "");
  return publicUrl ? `${publicUrl}/${objectKey}` : null;
}
