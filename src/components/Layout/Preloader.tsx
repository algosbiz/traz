"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Preloader: React.FC = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper to clear any pending hide-timer
  const clearHideTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Helper to schedule hiding after delay
  const scheduleHide = useCallback(
    (delay = 1200) => {
      clearHideTimer();
      timerRef.current = setTimeout(() => {
        setShow(false);
        timerRef.current = null;
      }, delay);
    },
    [clearHideTimer]
  );

  // When pathname / searchParams change → the new page has rendered, schedule hide
  useEffect(() => {
    setShow(true);
    scheduleHide(1200);
    return clearHideTimer;
  }, [pathname, searchParams, scheduleHide, clearHideTimer]);

  // Normalise a pathname by stripping trailing slashes for comparison
  const normalisePath = (p: string) => (p.endsWith("/") && p.length > 1 ? p.slice(0, -1) : p);

  // Intercept link clicks to show the preloader *immediately*
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");

      // Skip non-navigating links
      if (
        !href ||
        target === "_blank" ||
        href === "#" ||
        href.startsWith("#") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:")
      )
        return;

      // Skip dropdown toggle links — these call preventDefault and never navigate
      if (anchor.classList.contains("dropdown-toggle")) return;

      // Only handle internal links
      const isInternal =
        href.startsWith("/") || href.startsWith(window.location.origin);
      if (!isInternal) return;

      // Skip if the link points to the current page (Next.js won't navigate)
      try {
        const dest = new URL(anchor.href, window.location.origin);
        if (
          normalisePath(dest.pathname) === normalisePath(window.location.pathname) &&
          dest.search === window.location.search
        ) {
          return;
        }
      } catch {
        return;
      }

      // Show preloader for genuine navigation
      clearHideTimer();
      setShow(true);

      // Safety net: if navigation somehow doesn't complete (e.g. the click
      // gets cancelled by another handler we didn't anticipate), auto-hide
      // the preloader after 5 seconds so the user is never permanently stuck.
      scheduleHide(5000);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, [clearHideTimer]);

  return (
    <div
      id="preloader"
      className={`preloader-area position-fixed text-center ${show ? "" : "preloader-deactivate"}`}
      style={{
        transition: show
          ? "none"
          : "opacity 0.6s ease-in-out, visibility 0.6s ease-in-out",
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        zIndex: 99999,
        pointerEvents: show ? "auto" : "none",
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
