"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about/about5.jpg";
import arrowIcon from "../../../public/images/about/arrow2.svg";
import videoThumb from "../../../public/images/about/about4.png";
import videoCircleImg from "../../../public/images/about/wrap.png";
import textShape from "../../../public/images/about/archi-text2.png";

import OurMissionAndVision from "./OurMissionAndVision";

const AboutUsContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/sVi2pdF1aIc?si=wuP0-H9KuJnEk0Js",
        ]}
      />

      <div className="about-area pt-100">
        <div className="container">
          <div className="about-three-title">
            <span>ABOUT US</span>
            <h2>
              Built on <b>Quality Workmanship</b> and Long-Lasting Masonry
              Solutions
            </h2>
          </div>

          <div className="about-image-three">
            <Image src={aboutImg} alt="image" width={1320} height={430} />
          </div>

          <div className="about-three-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-three-left-content">
                  <p className="mb-0">
                    At DMG Masonry, we create durable and visually timeless
                    masonry and hardscape spaces for residential and commercial
                    properties in Calgary, combining quality workmanship,
                    practical design, and long-lasting performance.
                  </p>

                  <ul className="list">
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Durable Masonry & Hardscape Solutions
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Skilled Workmanship & Reliable Construction
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />{" "}
                      Custom Outdoor Spaces Built Around Your Needs company
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Quality-Focused Planning & Execution
                    </li>
                  </ul>

                  <div className="about-image-wrap">
                    <Image
                      src={videoThumb}
                      alt="image"
                      width={1052}
                      height={1120}
                    />
                    <div className="wrap-video">
                      {/* <Image
                        src={videoCircleImg}
                        alt="image"
                        width={184}
                        height={184}
                      />

                      <div
                        className="video-btn text-decoration-none"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="ri-play-fill"></i>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-three-right-content">
                  {/* OurMissionAndVision */}
                  <OurMissionAndVision />

                  <div className="about-wrap-content">
                    <h2>
                      Quality Masonry Work Built Through Experience, Planning,
                      and Precision
                    </h2>
                    <p>
                      DMG Masonry provides residential and commercial masonry
                      services throughout Calgary, including masonry repair,
                      retaining walls, patio stone installation, stone veneer,
                      outdoor kitchens, fireplaces, pizza ovens, and custom
                      hardscape construction. Every project is completed with a
                      focus on durability, proper construction methods, and
                      long-term performance.
                    </p>
                    <p>
                      We approach each project by understanding the property,
                      project goals, and practical requirements before
                      construction begins. From repairs and restorations to
                      custom outdoor features, our team works carefully to
                      ensure every installation remains functional, structurally
                      sound, and visually consistent over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrap-shape">
          <Image src={textShape} alt="image" width={768} height={140} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
