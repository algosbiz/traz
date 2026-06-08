"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Strip non-digit characters from the telephone for the wa.me link
  const waNumber = siteConfig.telephone.replace(/\D/g, "");

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float"
        className="position-fixed text-center border-0 p-0"
        style={{
          display: showScroll ? "flex" : "none",
          right: "20px",
          bottom: "75px",
          height: "45px",
          width: "45px",
          borderRadius: "50px",
          background: "#25D366",
          color: "#fff",
          fontSize: "24px",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          cursor: "pointer",
          transition: "0.5s",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        }}
      >
        <i className="ri-whatsapp-line"></i>
      </a>

      {/* Back to Top Button */}
      <div
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
        id="back-to-top"
        className="position-fixed text-center border-0 p-0"
      >
        <i className="ri-arrow-up-s-line"></i>
      </div>
    </>
  );
};

export default BackToTop;