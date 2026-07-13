/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: `output: 'export'` was removed so the /api/* Route Handlers
  // (contact, quote, newsletter) can run as serverless functions on Vercel.
  // Static export has no server, so a POST handler cannot exist under it.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/services/service-details",
        destination: "/services/",
        permanent: true,
      },
    ];
  },
  // Multi-tier caching for the Cloudflare (layer 1) + Vercel (layer 2) setup.
  // Three headers target three different caches:
  //   Vercel-CDN-Cache-Control — Vercel's edge only (stripped before the
  //     response leaves Vercel). A long TTL is safe: Vercel purges it on deploy.
  //   CDN-Cache-Control         — Cloudflare (and any intermediate CDN).
  //   Cache-Control             — the visitor's browser.
  // These only take effect for statically rendered responses (see the static
  // `metadata` export in src/app/layout.tsx); dynamic responses ignore them.
  async headers() {
    // Shared by static HTML pages and the SEO feeds (see header roles above).
    const cdnCache = [
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
      {
        key: "CDN-Cache-Control",
        value: "public, s-maxage=3600, stale-while-revalidate=86400",
      },
      { key: "Vercel-CDN-Cache-Control", value: "public, s-maxage=31536000" },
    ];

    // Blog HTML and the sitemap are generated from Neon. Cloudflare may cache
    // them briefly, but Vercel must always return fresh data after a CF purge.
    const dynamicBlogCache = [
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
      {
        key: "CDN-Cache-Control",
        value: "public, s-maxage=300, stale-while-revalidate=3600",
      },
      { key: "Vercel-CDN-Cache-Control", value: "no-store" },
    ];

    // Static assets served straight from /public (images, video, fonts).
    // Vercel's default for these is `max-age=0, must-revalidate`, so neither
    // CDN caches them — force a long CDN TTL. Browser TTL stays modest because
    // the filenames aren't content-hashed; the CDN copies are purged on deploy.
    const mediaCache = [
      { key: "Cache-Control", value: "public, max-age=86400" },
      { key: "CDN-Cache-Control", value: "public, s-maxage=31536000" },
      { key: "Vercel-CDN-Cache-Control", value: "public, s-maxage=31536000" },
    ];

    return [
      {
        // HTML pages only: exclude /api, /_next and anything with a file
        // extension (a dot) so static assets keep their own long-lived caching.
        source: "/((?!api/|_next/|.*\\.).*)",
        headers: cdnCache,
      },
      // SEO feeds are static (regenerated each build) but have a file extension,
      // so the HTML rule above skips them — and Cloudflare doesn't cache
      // .xml/.txt by default. Give them the same CDN caching explicitly;
      // freshness on redeploy is handled by the Cloudflare purge workflow.
      { source: "/sitemap.xml", headers: dynamicBlogCache },
      { source: "/robots.txt", headers: cdnCache },
      { source: "/blogs/:path*", headers: dynamicBlogCache },
      {
        // Admin HTML is personalized by an httpOnly session cookie and must
        // never be stored by the browser, Cloudflare, or Vercel's edge cache.
        source: "/admin/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      // Static media served straight from /public — see mediaCache above.
      { source: "/images/:path*", headers: mediaCache },
      { source: "/video/:path*", headers: mediaCache },
      { source: "/fonts/:path*", headers: mediaCache },
      {
        // Form endpoints must never be cached by any layer.
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
      {
        // Blog asset IDs are immutable; this rule overrides the generic API
        // no-store header above for public cover and inline images.
        source: "/api/blog-assets/:path*",
        headers: mediaCache,
      },
    ];
  },
}

module.exports = nextConfig
