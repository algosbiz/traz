import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Keep non-canonical deployment URLs out of search indexes.
 *
 * When the site is served from a `*.vercel.app` host — preview builds, or the
 * production deployment's default Vercel alias before/instead of the custom
 * domain — we add `X-Robots-Tag: noindex, nofollow`. Search engines honor this
 * HTTP header exactly like a `<meta name="robots">` tag, so only the canonical
 * domain (dmgmasonry.ca) gets indexed. Doing it in middleware keeps every page
 * statically cacheable (no per-request rendering).
 *
 * Note: Vercel already adds noindex to *preview* deployments automatically;
 * this also covers the production deployment when reached via its vercel.app URL.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const host = request.headers.get("host") ?? "";
  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Run on page routes only — skip API routes, Next internals and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
