import { siteConfig } from "@/lib/site";
import { getPublishedBlogs } from "@/lib/cmsBlogs";

// Static sitemap generator. Implemented as a Route Handler (instead of the
// metadata `sitemap.ts` convention) because that convention is incompatible
// with `output: 'export'` in this Next.js version. `force-static` makes it
// emit a static /sitemap.xml file at build time.
export const dynamic = "force-dynamic";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// Public, indexable routes. Edit this list to control the sitemap.
const routes: {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blogs/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact-us/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/hardscape-contractor/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/outdoor-kitchen-contractor/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/patio-stone-installation/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/masonry-repair/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/brick-repair/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/stone-veneer/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/chimney-repair/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/custom-pizza-oven/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/custom-fire-pits/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/retaining-wall-construction/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/fireplace-installation/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calgary/foundation-repair/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/request-quote/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-conditions/", priority: 0.3, changeFrequency: "yearly" },
];

export async function GET() {
  const lastmod = new Date().toISOString();
  const blogRoutes = (await getPublishedBlogs()).map((post) => ({
    path: `/blogs/${post.slug}/`,
    priority: 0.6,
    changeFrequency: "monthly" as ChangeFrequency,
  }));

  const urls = [...routes, ...blogRoutes]
    .map(
      ({ path, priority, changeFrequency }) =>
        `  <url>\n` +
        `    <loc>${siteConfig.url}${path}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>${changeFrequency}</changefreq>\n` +
        `    <priority>${priority.toFixed(1)}</priority>\n` +
        `  </url>`,
    )
    .join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
