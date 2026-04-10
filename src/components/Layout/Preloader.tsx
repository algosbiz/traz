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
        if (
          href && 
          (href.startsWith("/") || href.startsWith(window.location.origin)) &&
          targetAttr !== "_blank" && 
          !href.includes("#") &&
          !href.startsWith("tel:") &&
          !href.startsWith("mailto:")
        ) {
          // DIRECT DOM MANIPULATION for maximum speed
          // This ensures the preloader covers the screen BEFORE the next React render cycle
          const preloader = document.getElementById("preloader");
          if (preloader) {
            preloader.style.transition = "none";
            preloader.style.opacity = "1";
            preloader.style.visibility = "visible";
          }
          setShow(true);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => document.removeEventListener("click", handleAnchorClick, { capture: true });
  }, []);

  return (
    <div 
      id="preloader"
      className={`preloader-area position-fixed text-center ${show ? "" : "preloader-deactivate"}`}
      style={{
        // Transition ONLY when fading out (show = false)
        // When appearing (show = true), it should be INSTANT
        transition: show ? 'none' : 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
        zIndex: 99999,
        pointerEvents: show ? 'auto' : 'none', 
      }}
    >
      <div className="loader">
        <div className="waviy">
          <div className="waviy-line">
            <span>D</span>
            <span>M</span>
            <span>G</span>
          </div>
          <div className="waviy-line">
            <span>M</span>
            <span>A</span>
            <span>S</span>
            <span>O</span>
            <span>N</span>
            <span>R</span>
            <span>Y</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
