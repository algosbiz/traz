#!/usr/bin/env node
// Re-encode the raster images in public/images at a sane quality.
//
// Most images here were exported nearly lossless — a 526x560 WebP weighing
// 800 KB instead of ~55 KB. Their pixel dimensions are already fine, so this
// script does not resize; it only re-encodes, which is where the weight is.
//
// Fixing the source files (rather than Next.js' image optimizer) keeps
// `images: { unoptimized: true }` in next.config.js and uses no Vercel image
// optimization quota — the files are served straight from /public and cached
// by Cloudflare.
//
// A file is only overwritten when the re-encode is meaningfully smaller, so
// already-correct images (the LCP hero, icons) are left untouched.
//
// Usage:
//   node scripts/optimize-images.mjs            # dry run, writes nothing
//   node scripts/optimize-images.mjs --apply    # overwrite the files
//   node scripts/optimize-images.mjs --apply --quality 88

import sharp from "sharp";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Read every image into a Buffer before handing it to sharp, and keep libvips'
// operation cache off. Given a *path*, sharp keeps the file open, and on Windows
// that lock makes the later writeFileSync to the same path fail with EUNKNOWN.
sharp.cache(false);

const ROOT = "public/images";

// Below this saving the re-encode is not worth the quality loss.
const MIN_SAVING_RATIO = 0.05;

// The per-service subfolders of public/images/client (client/chimney_repair/…)
// hold the uncompressed PNG originals of the WebP files under
// images/services/service/. Nothing in src/ references them, so they are never
// downloaded — re-encoding them would only churn 52 MB of dead files. The loose
// files directly in client/ (user1.png, shape1.png, quote.svg) *are* used.
const isDeadClientOriginal = (path) =>
  relative(ROOT, path).split(sep).length > 2 &&
  relative(ROOT, path).split(sep)[0] === "client";

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const qualityArg = args.indexOf("--quality");
const quality = qualityArg === -1 ? 82 : Number(args[qualityArg + 1]);

if (!Number.isFinite(quality) || quality < 1 || quality > 100) {
  console.error(`Invalid --quality value: ${args[qualityArg + 1]}`);
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, out);
    else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) out.push(path);
  }
  return out;
}

// Keep the extension: the paths are hardcoded across src/, so a png must stay
// a png. Only the encoder settings change.
function encode(pipeline, file) {
  if (/\.webp$/i.test(file)) return pipeline.webp({ quality }).toBuffer();
  if (/\.png$/i.test(file))
    return pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
  return pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
}

const files = walk(ROOT).filter((file) => !isDeadClientOriginal(file));
const results = [];
let failed = 0;

for (const file of files) {
  const before = statSync(file).size;
  try {
    const source = readFileSync(file);
    const meta = await sharp(source).metadata();
    const buffer = await encode(sharp(source), file);
    results.push({
      file,
      before,
      after: buffer.length,
      width: meta.width,
      height: meta.height,
      buffer,
    });
  } catch (error) {
    failed += 1;
    console.error(`  ! skipped (unreadable): ${file} — ${error.message}`);
  }
}

const shrunk = results.filter(
  (r) => r.after < r.before * (1 - MIN_SAVING_RATIO),
);
const kept = results.filter((r) => !shrunk.includes(r));

const sum = (rows, key) => rows.reduce((total, row) => total + row[key], 0);
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
const kb = (bytes) => Math.round(bytes / 1024);

const totalBefore = sum(results, "before");
const totalAfter = sum(shrunk, "after") + sum(kept, "before");

// Group the savings by top-level folder so it is clear where the weight sits.
const byFolder = new Map();
for (const row of shrunk) {
  const parts = relative(ROOT, row.file).split(sep);
  const folder = parts.length > 1 ? parts[0] : ".";
  const bucket = byFolder.get(folder) ?? { before: 0, after: 0, count: 0 };
  bucket.before += row.before;
  bucket.after += row.after;
  bucket.count += 1;
  byFolder.set(folder, bucket);
}

console.log(
  `\n${apply ? "APPLY" : "DRY RUN"} — quality ${quality}, ${results.length} files scanned` +
    (failed ? `, ${failed} unreadable` : ""),
);

console.log(`\nBy folder (only files that shrink):`);
for (const [folder, bucket] of [...byFolder].sort(
  (a, b) => b[1].before - b[1].after - (a[1].before - a[1].after),
)) {
  console.log(
    `  ${folder.padEnd(14)} ${String(bucket.count).padStart(3)} files  ` +
      `${mb(bucket.before).padStart(5)} MB -> ${mb(bucket.after).padStart(5)} MB`,
  );
}

console.log(`\nTop 10 savings:`);
for (const row of [...shrunk]
  .sort((a, b) => b.before - b.after - (a.before - a.after))
  .slice(0, 10)) {
  console.log(
    `  ${String(kb(row.before)).padStart(4)} KB -> ${String(kb(row.after)).padStart(4)} KB  ` +
      `${row.width}x${row.height}  ${row.file}`,
  );
}

console.log(
  `\n${kept.length} files left untouched (already well encoded, e.g. the LCP hero).`,
);
console.log(
  `TOTAL  ${mb(totalBefore)} MB -> ${mb(totalAfter)} MB  ` +
    `(${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}% smaller, ${shrunk.length} files rewritten)`,
);

if (!apply) {
  console.log(`\nNothing written. Re-run with --apply to overwrite.`);
  process.exit(0);
}

for (const row of shrunk) writeFileSync(row.file, row.buffer);
console.log(`\nWrote ${shrunk.length} files.`);
