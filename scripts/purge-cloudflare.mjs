#!/usr/bin/env node
// Purge the entire Cloudflare cache. Used after a production deploy so the
// Cloudflare edge (layer 1) drops stale HTML and re-pulls fresh pages from
// Vercel (layer 2). The GitHub Action (.github/workflows/purge-cloudflare.yml)
// does this automatically on deploy; run this script for a manual purge.
//
// Required env vars:
//   CLOUDFLARE_ZONE_ID   — zone id for the domain (CF dashboard -> the domain ->
//                          Overview -> "API" box in the right sidebar).
//   CLOUDFLARE_API_TOKEN — scoped token with Zone -> Cache Purge = Purge.
//
// Usage:
//   CLOUDFLARE_ZONE_ID=xxx CLOUDFLARE_API_TOKEN=yyy npm run purge:cf

const zoneId = process.env.CLOUDFLARE_ZONE_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;

if (!zoneId || !apiToken) {
  console.error(
    "Missing CLOUDFLARE_ZONE_ID and/or CLOUDFLARE_API_TOKEN environment variables.",
  );
  process.exit(1);
}

const res = await fetch(
  `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ purge_everything: true }),
  },
);

const data = await res.json().catch(() => ({}));

if (!res.ok || !data.success) {
  console.error(
    `Cloudflare purge failed (HTTP ${res.status}):`,
    JSON.stringify(data.errors ?? data, null, 2),
  );
  process.exit(1);
}

console.log("✓ Cloudflare cache purged (purge_everything).");
