import { NextResponse } from "next/server";

import { getSql } from "@/lib/db";
import { getR2Asset, getR2PublicUrl } from "@/lib/r2";

interface RouteContext {
  params: { id: string };
}

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    const sql = getSql();
    const rows = await sql`
      SELECT mime_type, object_key, data_base64
      FROM blog_assets WHERE id = ${params.id} LIMIT 1
    `;

    if (!rows[0]) {
      return NextResponse.json({ error: "Image not found." }, { status: 404 });
    }

    const objectKey = rows[0].object_key ? String(rows[0].object_key) : null;
    if (objectKey) {
      const publicUrl = getR2PublicUrl(objectKey);
      if (publicUrl) {
        return Response.redirect(publicUrl, 302);
      }

      const object = await getR2Asset(objectKey);
      if (!object.Body) {
        return NextResponse.json({ error: "Image body is empty." }, { status: 404 });
      }
      const bytes = await object.Body.transformToByteArray();
      return new Response(bytes, {
        headers: {
          "Content-Type": String(object.ContentType || rows[0].mime_type),
          "Cache-Control": "public, max-age=31536000, immutable",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }

    if (!rows[0].data_base64) {
      return NextResponse.json({ error: "Image data is missing." }, { status: 404 });
    }

    return new Response(Buffer.from(String(rows[0].data_base64), "base64"), {
      headers: {
        "Content-Type": String(rows[0].mime_type),
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "Unable to load image." }, { status: 500 });
  }
}
