"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import arrowIcon from "../../../public/images/services-details/arrow.svg";
import sidebarImg from "../../../public/images/main-banner/home/9.webp";

// A 540p cut of the banner video. This box is only ~720px wide (col-lg-8), so
// the 720p /video/video.mp4 the lightboxes play was twice the resolution needed
// here — the smaller file halves the bytes with no visible difference at this
// size. The poster is the video's own opening frame, so nothing shifts visually
// when playback starts.
const bannerVideoUrl = "/video/video-loop.mp4";
const bannerPosterUrl = "/images/video-poster.webp";

const ServiceDetailsContentTwo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // This section sits well below the fold, but the video used to carry
  // `autoPlay preload="auto"`, so the browser pulled the whole file during the
  // initial page load — the single biggest contributor to the homepage load
  // time. The markup now ships `preload="none"`, and the download only starts
  // once the video is about to scroll into view.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Without IntersectionObserver (very old browsers) fall back to the
    // previous behaviour rather than leaving a video that never plays.
    if (typeof IntersectionObserver === "undefined") {
      video.preload = "auto";
      void video.play().catch(() => {});
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        video.preload = "auto";
        video.load();
        // Autoplay is only permitted while muted; the mute button below may
        // have already unmuted it, in which case the promise rejects and the
        // visitor presses play themselves.
        void video.play().catch(() => {});
        observer.disconnect();
      },
      // Start fetching a little before it is actually visible so playback has
      // a head start by the time the section is on screen.
      { rootMargin: "300px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <>
      <div className="services-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <div className="title">
                  <span>SERVICE</span>
                  <h2>What Works and What to Consider in Masonry Services</h2>
                  <p>
                    At DMG Masonry, we believe good masonry work starts with
                    clear planning and the right expectations. We help clients
                    understand where masonry performs best so every project is
                    built to last and completed efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-left ">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <div style={{ position: "relative" }}>
                  <video
                    ref={videoRef}
                    src={bannerVideoUrl}
                    poster={bannerPosterUrl}
                    muted
                    loop
                    playsInline
                    preload="none"
                    style={{
                      width: "100%",
                      height: "550px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "none",
                      background: "rgba(0, 0, 0, 0.55)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "20px",
                      zIndex: 2,
                    }}
                  >
                    <i
                      className={
                        isMuted ? "ri-volume-mute-line" : "ri-volume-up-line"
                      }
                    ></i>
                  </button>
                </div>
                <p style={{ marginTop: "30px" }}>
                  We works with masonry because it provides long-term
                  durability, reliable structural strength, and timeless
                  performance across residential and commercial projects. Its
                  natural resistance to weather, moisture, fire, and everyday
                  wear makes masonry a dependable solution designed to last for
                  years.
                </p>

                <p>
                  Masonry also offers lasting visual appeal and practical
                  long-term value for a property. With proper construction,
                  masonry structures typically require less maintenance, improve
                  energy efficiency through natural thermal mass, and maintain
                  their strength and appearance over time. Its durability, pest
                  resistance, and long lifespan continue to make masonry a
                  trusted choice for timeless construction.
                </p>
                {/* <h2>What We Consider During Masonry Planning</h2> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Weather Resistance
                      </li>
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Timeless Durability
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Energy Efficiency
                      </li>
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Low Maintenance
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Proper masonry planning starts with careful coordination,
                  material preparation, and experienced project management.
                  Because masonry materials require precise handling and
                  installation, our team plans each stage carefully to support
                  safe workflows, efficient construction, and lasting structural
                  performance.
                </p>

                <p>
                  At DMG Masonry, we focus on practical planning that supports
                  both durability and long-term project quality. From foundation
                  preparation to material selection and scheduling, every detail
                  is considered to help masonry structures perform reliably over
                  time.
                </p>
                <p>
                  Timeless masonry work requires more than durable materials
                  alone. Through clear communication, realistic timelines, and
                  consistent on-site supervision, our team carefully manages
                  every stage of the project to maintain quality, efficiency,
                  and long-term performance. By combining practical planning
                  with experienced workmanship, we help create masonry projects
                  designed to remain strong, functional, and visually lasting
                  for years to come.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
              <div className="service-details-sidebar-image">
                <Image
                  src={sidebarImg}
                  alt="sidebar"
                  width={400}
                  height={800}
                  style={{
                    width: "100%",
                    height: "550px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentTwo;
