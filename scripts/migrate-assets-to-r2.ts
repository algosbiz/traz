import { loadEnvConfig } from "@next/env";

import { getSql } from "../src/lib/db";
import { uploadR2Asset } from "../src/lib/r2";

loadEnvConfig(process.cwd());

async function main() {
  const sql = getSql();
  const assets = await sql`
    SELECT id, mime_type, data_base64
    FROM blog_assets
    WHERE object_key IS NULL AND data_base64 IS NOT NULL
    ORDER BY created_at
  `;

  if (!assets.length) {
    console.log("No Neon-stored assets need migration.");
    return;
  }

  let migrated = 0;
  for (const asset of assets) {
    const bytes = Buffer.from(String(asset.data_base64), "base64");
    const objectKey = await uploadR2Asset(bytes, String(asset.mime_type));
    await sql`
      UPDATE blog_assets
      SET object_key = ${objectKey}, data_base64 = NULL
      WHERE id = ${String(asset.id)} AND object_key IS NULL
    `;
    migrated += 1;
    console.log(`Migrated asset ${migrated}/${assets.length}.`);
  }

  console.log(`Migration complete: ${migrated} asset(s) moved from Neon to R2.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
