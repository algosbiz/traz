"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import shapeImg from "../../../public/images/main-banner/shape.png";
import arrowRightIcon from "../../../public/images/main-banner/arrow-right.svg";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/",
  },
  {
    id: "3",
    icon: "ri-twitter-line",
    link: "https://www.twitter.com/",
  },
];

const HeroBanner: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://dmgmasonry.ca/wp-content/uploads/2025/06/suite_home_renos-720p.mp4",
        ]}
        types={["video"]}
      />

      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="main-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              A Legacy of Timeless Masonry <span>Craftsmanship & Quality</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              Welcome to DMG Masonry, where timeless craftsmanship and enduring materials define every project. With durability at the core, our work stands as a lasting legacy.
            </p>
            <div
              className="banner-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Link href="/contact-us" className="default-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div
          className="main-banner-image"
          style={{ backgroundImage: `url(/images/main-banner/banner1.png)` }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-once="false"
        ></div>

        <div className="main-banner-wrap-shape">
          <Image src={shapeImg} alt="Shape" width={502} height={287} />
        </div>

        <div className="main-banner-video">
          <svg
            viewBox="0 0 100 100"
            width="182"
            height="182"
            style={{ animation: "rotateme 10s linear infinite" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text
              fill="var(--headingColor)"
              fontSize="11.5"
              fontWeight="500"
              letterSpacing="0.8"
            >
              <textPath href="#circlePath" startOffset="0%">
                *Best Masonry Contractors in Calgary
              </textPath>
            </text>
          </svg>

          <div onClick={() => setToggler(!toggler)} className="video-btn">
            <i className="ri-play-fill"></i>
          </div>
        </div>

        {socialLinksData && (
          <ul className="main-banner-social">
            {socialLinksData &&
              socialLinksData.map((value, i) => (
                <li key={i}>
                  <a href={value.link} target="_blank">
                    <i className={value.icon}></i>
                  </a>
                </li>
              ))}
          </ul>
        )}

        <div className="main-banner-arrow">
          <Link href="/contact-us">
            <Image src={arrowRightIcon} alt="arrow right" width={24} height={24} />
          </Link>
        </div>

        <ul className="main-banner-info">
          <li>
            <span>CALL:</span>
            <a href="tel:3214264567">+321 426 4567</a>
          </li>
          <li>
            <span>MAIL:</span>
            <a href="mailto:trazteam@gmail.com">DMG Masonry</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroBanner;
