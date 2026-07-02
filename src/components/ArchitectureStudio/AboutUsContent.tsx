"use client";

import React from "react";
// import React, { useState } from "react";
// import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/about/about4.png";
// import videoCircleImg from "../../../public/images/about/wrap.png";
import arrowIcon from "../../../public/images/about/arrow2.svg";

interface AboutUsProps {
  subtitle?: string;
  title?: string;
  description?: string;
  listItems?: string[];
  videoUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: any;
}

const AboutUsContent: React.FC<AboutUsProps> = ({
  subtitle = "ABOUT US",
  title = "We Create Unique And Sustainable Living Spaces, Designed For Sharing",
  description = "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.",
  listItems = [
    "Innovative Design Approach",
    "Highly Skilled Expertise and Specialization",
    "A client-centric approach for an architectural company",
    "Sustainable Design Practices"
  ],
  videoUrl = "/video/video.mp4",
  buttonText = "Know More About Us",
  buttonLink = "/about-us",
  image = aboutImg
}) => {
  // To open the lightbox change the value of the "toggler" prop.
  // const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={[videoUrl]}
      /> */}

      <div className="about-area pt-100">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="about-image-two"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Image src={image} alt="image" width={1052} height={1120} />

                {/* <div className="wrap-video">
                  <Image src={videoCircleImg} alt="image" width={184} height={184} />

                  <div
                    className="video-btn text-decoration-none"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="ri-play-fill"></i>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="about-two-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <span>{subtitle}</span>
                <h2>{title}</h2>
                <p>{description}</p>

                <ul className="list">
                  {listItems.map((item, index) => (
                    <li key={index}>
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="about-btn">
                  <Link href={buttonLink} className="default-btn">
                    {buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
