"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg from "../../../public/images/main-banner/home/6.webp";
import arrowIcon from "../../../public/images/features/arrow.svg";
import architecturalShape from "../../../public/images/features/architectural-shape.png";

const CoreFeatures: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div
                className="features-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h2>
                  Form & Function: <span>Masonry Spaces Designed</span> to Last for Years
                </h2>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <div className="inner-box">
                      <div className="title">
                        <h3 className="counter">35+</h3>
                        <span>
                          YEARS OF <b>EXPERIENCE</b>
                        </span>
                      </div>
                      <div className="wrap">
                        <Image
                          src={featureImg}
                          alt="Brick masonry outdoor fireplace built by DMG Masonry in Calgary"
                          width={161}
                          height={231}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-7">
                    <div className="inner-content">
                      <p>
                        DMG Masonry creates outdoor spaces that combine everyday function with timeless masonry design, helping your property maintain its strength and appearance for years to come.
                      </p>

                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Outdoor masonry designed for long-term use
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Timeless masonry that complements your property
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />Practical layouts with clean professional finishing
                        </li>
                      </ul>

                      <div className="features-btn">
                        <Link href="/services" className="default-btn">
                          What We Offer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div
                className="features-image"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
                style={{
                  backgroundImage: `url(/images/main-banner/home/7.webp)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="features-shape">
          <Image src={architecturalShape} alt="Architectural Shape" width={477} height={562} />
        </div>
      </div>
    </>
  );
};

export default CoreFeatures;
