// Central site configuration used for SEO metadata, sitemap and robots.
//
// The production domain is not live yet, so this defaults to localhost for dev.
// When deploying, set NEXT_PUBLIC_SITE_URL (e.g. https://dmgmasonry.ca) at build
// time and every canonical / OpenGraph URL, the sitemap and robots.txt update.

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "DMG Masonry",
  // No trailing slash here; paths are appended starting with "/".
  url: rawUrl.replace(/\/+$/, ""),
  locale: "en_US",
  // Default social-share image (used for og:image / twitter:image).
  ogImage: "/images/main-banner/home/1.png",
  telephone: "+1-403-619-8727",
  email: "will@dmgmasonry.ca",
  sameAs: [
    "https://www.facebook.com/DMGMasonry/",
    "https://www.instagram.com/d.m.gmasonry/",
  ],
} as const;
