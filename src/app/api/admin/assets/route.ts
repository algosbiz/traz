import { NextRequest, NextResponse } from "next/server";

import { getAdminSessionFromRequest } from "@/lib/adminAuth";
import { SAFE_IMAGE_UPLOAD_BYTES, isAllowedImageType } from "@/lib/blogImageConfig";
import { getSql } from "@/lib/db";
import { deleteR2Assets, uploadR2Asset } from "@/lib/r2";

export async function POST(request: NextRequest) {
  if (!getAdminSessionFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "An image file is required." }, { status: 400 });
    }
    if (!isAllowedImageType(file.type)) {
      return NextResponse.json({ error: "Use a JPG, PNG, WebP, or GIF image." }, { status: 415 });
    }
    if (file.size > SAFE_IMAGE_UPLOAD_BYTES) {
      return NextResponse.json({ error: "Image must be 3.5 MB or smaller." }, { status: 413 });
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 180);
    const objectKey = await uploadR2Asset(bytes, file.type);
    const sql = getSql();
    let rows;
    try {
      rows = await sql`
        INSERT INTO blog_assets (filename, mime_type, object_key, size_bytes)
        VALUES (${safeName || "image"}, ${file.type}, ${objectKey}, ${file.size})
        RETURNING id
      `;
    } catch (databaseError) {
      await deleteR2Assets([objectKey]).catch(() => undefined);
      throw databaseError;
    }
    const id = String(rows[0].id);

    return NextResponse.json({
      id,
      url: `/api/blog-assets/${id}`,
    }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to upload image.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
