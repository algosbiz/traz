"use client";

import React from "react";
import Image from "next/image";

import serviceImg from "../../../public/images/services-details/services-details1.jpg";
import arrowIcon from "../../../public/images/services-details/arrow.svg";
// You should move the generated image to public/images/ or use the absolute path if allowed
// For now, I'll use a placeholder or assume the user will provide the path. 
// But I can use the generated image path for now to show it works.
import sidebarImg from "/public/images/sidebar-service.png";

const ServiceDetailsContentTwo: React.FC = () => {
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
                    At DMG Masonry, we believe good masonry work starts with clear planning and the right expectations. We help clients understand where masonry performs best so every project is built to last and completed efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-left">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <Image
                  src={serviceImg}
                  alt="service"
                  width={1400}
                  height={645}
                  style={{
                    width: '100%',
                    height: '550px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
                <p>
                  We works with masonry because it provides long-term durability, reliable structural strength, and timeless performance across residential and commercial projects. Its natural resistance to weather, moisture, fire, and everyday wear makes masonry a dependable solution designed to last for years.


                </p>

                <p>Masonry also offers lasting visual appeal and practical long-term value for a property. With proper construction, masonry structures typically require less maintenance, improve energy efficiency through natural thermal mass, and maintain their strength and appearance over time. Its durability, pest resistance, and long lifespan continue to make masonry a trusted choice for timeless construction.
                </p>
                {/* <h2>What We Consider During Masonry Planning</h2> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                        Weather Resistance
                      </li>
                      <li>
                        <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                        Timeless Durability
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                        Energy Efficiency
                      </li>
                      <li>
                        <Image src={arrowIcon} alt="arrow" width={28} height={10} />Low Maintenance
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Proper masonry planning starts with careful coordination, material preparation, and experienced project management. Because masonry materials require precise handling and installation, our team plans each stage carefully to support safe workflows, efficient construction, and lasting structural performance.
                </p>

                <p>At DMG Masonry, we focus on practical planning that supports both durability and long-term project quality. From foundation preparation to material selection and scheduling, every detail is considered to help masonry structures perform reliably over time.</p>
                <p>Timeless masonry work requires more than durable materials alone. Through clear communication, realistic timelines, and consistent on-site supervision, our team carefully manages every stage of the project to maintain quality, efficiency, and long-term performance. By combining practical planning with experienced workmanship, we help create masonry projects designed to remain strong, functional, and visually lasting for years to come.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="service-details-sidebar-image">
                <Image
                  src={sidebarImg}
                  alt="sidebar"
                  width={400}
                  height={800}
                  style={{
                    width: '100%',
                    height: '550px',
                    objectFit: 'cover',
                    borderRadius: '10px'
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
