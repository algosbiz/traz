"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Preloader: React.FC = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle path/search changes (navigation finished or initial load)
  useEffect(() => {
    // Show preloader on every path navigation or initial render
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 1200); // 1.2s minimum visibility to enjoy the animation

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Handle link clicks (start preloader instantly when clicking a link)
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");
        const targetAttr = anchor.getAttribute("target");

        // We check if it's an internal link
        // 1. Must have an href
        // 2. Starts with / or the current origin (using document.location.origin)
        // 3. Is NOT an external link (target="_blank")
        // 4. Is NOT a hash link (e.g. #footer)
        if (
          href && 
          (href.startsWith("/") || href.startsWith(window.location.origin)) &&
          targetAttr !== "_blank" && 
          !href.includes("#") &&
          !href.startsWith("tel:") &&
          !href.startsWith("mailto:")
        ) {
          setShow(true);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div 
      className={`preloader-area position-fixed text-center ${show ? "" : "preloader-deactivate"}`}
      style={{
        transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
        zIndex: 99999,
        pointerEvents: show ? 'auto' : 'none', // Block interaction while loading
      }}
    >
      <div className="loader">
        <div className="waviy">
          <span>T</span>
          <span>R</span>
          <span>A</span>
          <span>Z</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
