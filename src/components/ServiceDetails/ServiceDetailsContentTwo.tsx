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
                    At DMG Masonry, we believe good masonry work starts with clear planning and the right expectations. Our role is to help clients understand where masonry performs best and what practical considerations need to be addressed, so every project is built to last and completed efficiently.
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
                <h2>Why We Use Masonry Construction</h2>
                <p>
                  We work with masonry because it offers long-term performance and reliable structural strength across a wide range of projects. Masonry construction provides strong fire resistance and stands up well to weather, moisture, and everyday wear over time. Its durability allows masonry structures to support substantial loads, making it suitable for both residential and commercial applications.

                </p>

                <p>Masonry also offers natural thermal mass, which helps regulate indoor temperatures and improve energy efficiency. From a visual standpoint, it delivers a classic, timeless appearance that continues to add value to a property over the long term. With proper construction, masonry buildings typically last longer, require less maintenance, and often contribute to higher resale value. Masonry materials are also resistant to pests such as termites and ants, and in many cases, masonry labor can be a cost-effective alternative to wood construction.</p>
                <h2>What We Consider During Masonry Planning</h2>

                <p>Because masonry materials are heavy, our team carefully plans handling, transportation, and installation to maintain safety and efficiency on site. Some materials may require advance sourcing, which is why we coordinate material selection early in the process to avoid delays.</p>

                <p>
                  Proper masonry performance depends on a well-prepared foundation. We assess site conditions and foundation requirements to reduce the risk of cracking and structural issues. Weather is another key factor, as rain or extreme temperatures can affect construction schedules. Our team plans timelines carefully and adjusts workflows when needed to maintain quality.
                </p>

                <p>Masonry projects also require detailed coordination and experienced craftsmanship. We manage this by maintaining clear communication, realistic timelines, and consistent on-site supervision throughout the build.</p>
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
