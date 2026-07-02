// All CSS consolidated into a single file to guarantee cascade ordering
// in production builds (fixes responsive styles being overridden on Vercel)
import "@/styles/globals.css";

import React, { Suspense } from "react";
import AosAnimation from "@/components/Layout/AosAnimation";
import BackToTop from "@/components/Layout/BackToTop";
import Preloader from "@/components/Layout/Preloader";

import type { Metadata } from "next";
import { Jost } from "next/font/google";

import { siteConfig } from "@/lib/site";

const jost = Jost({ subsets: ["latin"] });

const defaultTitle = "DMG Masonry — Masonry Contractor in Calgary";
const defaultDescription =
  "Transform your space with our masonry contractor service in Calgary. We specialize in durable repairs and unique designs.";

const INDEX_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

// Static metadata keeps every page statically rendered so both CDN layers
// (Cloudflare + Vercel) can cache the HTML. Non-canonical *.vercel.app hosts
// (preview builds, the production deployment's default Vercel URL) are kept out
// of search by the `X-Robots-Tag: noindex` header set in src/middleware.ts — an
// HTTP-level backstop, so we no longer need a per-request headers() call here.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: defaultTitle,
  description: defaultDescription,
  robots: INDEX_ROBOTS,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [siteConfig.ogImage],
  },
};

import { ThemeProvider } from "@/components/Layout/ThemeProvider";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      logo: `${siteConfig.url}/images/logo.webp`,
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      sameAs: siteConfig.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* Preloader */}
        <Suspense fallback={null}>
          <Preloader />
        </Suspense>

        {/* AosAnimation */}
        <AosAnimation />

        {/* BackToTop */}
        <BackToTop />
      </body>
    </html>
  );
}
