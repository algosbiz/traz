// All CSS consolidated into a single file to guarantee cascade ordering
// in production builds (fixes responsive styles being overridden on Vercel)
import "@/styles/globals.css";

import React, { Suspense } from "react";
import AosAnimation from "@/components/Layout/AosAnimation";
import BackToTop from "@/components/Layout/BackToTop";
import Preloader from "@/components/Layout/Preloader";

import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DMG Masonry - React Nextjs Architecture & Interior Design Template",
  description: "DMG Masonry - React Nextjs Architecture & Interior Design Template",
};

import { ThemeProvider } from "@/components/Layout/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
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
