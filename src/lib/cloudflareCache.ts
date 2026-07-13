import "server-only";

import { siteConfig } from "@/lib/site";

interface CloudflarePurgeResponse {
  success?: boolean;
  errors?: Array<{ code?: number; message?: string }>;
}

export async function purgeBlogCache() {
  const zoneId = process.env.CLOUDFLARE_ZONE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!zoneId || !apiToken) {
    if (process.env.NODE_ENV === "production") {
      console.warn("Cloudflare cache purge credentials are not configured.");
    }
    return false;
  }

  const hostname = new URL(siteConfig.url).hostname;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    console.warn("Cloudflare cache purge skipped for a local site URL.");
    return false;
  }

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prefixes: [`${hostname}/blogs`, `${hostname}/sitemap.xml`],
        }),
        cache: "no-store",
      },
    );
    const result = (await response.json().catch(() => ({}))) as CloudflarePurgeResponse;

    if (!response.ok || !result.success) {
      console.error("Cloudflare blog cache purge failed:", {
        status: response.status,
        errors: result.errors ?? [],
      });
      return false;
    }

    return true;
  } catch (error) {
    console.error("Unable to contact the Cloudflare Purge API:", error);
    return false;
  }
}
