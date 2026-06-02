"use client";

import React from "react";
import Image from "next/image";

const processData = [
  {
    id: "1",
    number: "1",
    image: "/images/main-banner/home/10.webp",
    title: "Project Consultation",
    text: "Reviewing your property and masonry needs.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/main-banner/home/11.webp",
    title: "Site & Material Planning ",
    text: "Coordinating materials and project preparation.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/main-banner/home/12.webp",
    title: "Professional Installation",
    text: "Delivering durable masonry with skilled workmanship.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/main-banner/home/13.webp",
    title: "Final Quality Review",
    text: "Ensuring lasting quality and clean results.",
    aosDelay: "400",
  },
];

const Process: React.FC = () => {
  return (
    <>
      <div className="process-area pt-100 pb-75">
        <div className="container">
          <div
            className="section-title d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2>
              <span>How</span> We Work
            </h2>
          </div>

          {processData && (
            <div className="row justify-content-center">
              {processData &&
                processData.map((value, i) => (
                  <div
                    className="col-xl-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="true"
                    key={i}
                  >
                    <div className="process-card">
                      <div className="process-image">
                        <Image
                          src={value.image}
                          alt={value.title}
                          width={540}
                          height={310}
                        />
                        <span>{value.number}</span>
                      </div>
                      <div className="process-content">
                        <h3>{value.title}</h3>
                        <p>{value.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Process;
