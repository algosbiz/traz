import { readFile } from "fs/promises";
import path from "path";

import { neon } from "@neondatabase/serverless";
import { loadEnvConfig } from "@next/env";

import { blogPosts } from "../src/lib/blogsData";
import { createBlog, legacyPostToInput } from "../src/lib/cmsBlogs";
import { uploadR2Asset } from "../src/lib/r2";

loadEnvConfig(process.cwd());

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is missing from .env.local.");

  const sql = neon(databaseUrl);
  const schema = await readFile(path.join(process.cwd(), "database/schema.sql"), "utf8");
  const statements = schema
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await sql.query(statement);
  }
  console.log(`Database schema ready (${statements.length} statements).`);

  const initialPost = blogPosts[0];
  if (!initialPost) return;

  const existing = await sql`SELECT id FROM blogs WHERE slug = ${initialPost.slug} LIMIT 1`;
  if (existing[0]) {
    console.log("Initial blog already exists; seed skipped.");
    return;
  }

  const imagePath = path.join(process.cwd(), "public", initialPost.image);
  const image = await readFile(imagePath);
  const objectKey = await uploadR2Asset(image, "image/png");
  const assetRows = await sql`
    INSERT INTO blog_assets (filename, mime_type, object_key, size_bytes)
    VALUES ('century-old-chimney.png', 'image/png', ${objectKey}, ${image.byteLength})
    RETURNING id
  `;
  const assetUrl = `/api/blog-assets/${String(assetRows[0].id)}`;

  await createBlog({
    ...legacyPostToInput(initialPost),
    coverImage: assetUrl,
  });
  console.log(`Seeded: ${initialPost.title}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
