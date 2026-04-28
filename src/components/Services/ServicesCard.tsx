"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    icon: "/images/icon/MasonryRepair.png",
    title: "Masonry Repair",
    text: "Expert brick and stone repair to restore the strength and beauty of your masonry structures.",
    link: "/services/service-details",
  },
  {
    id: "2",
    icon: "/images/icon/StoneVineer.png",
    title: "Stone Veneer",
    text: "Transform any surface with natural or manufactured stone veneer for a stunning, timeless look.",
    link: "/services/service-details",
  },
  {
    id: "3",
    icon: "/images/icon/HardscapeContractor.png",
    title: "Hardscape Contractor",
    text: "Professional hardscaping solutions including walkways, driveways, and outdoor living spaces.",
    link: "/services/service-details",
  },
  {
    id: "4",
    icon: "/images/icon/ChimneyRepair.png",
    title: "Chimney Repair",
    text: "Comprehensive chimney inspection, repair, and rebuilding services to keep your home safe.",
    link: "/services/service-details",
  },
  {
    id: "5",
    icon: "/images/icon/CustomFirePits.png",
    title: "Custom Fire Pits",
    text: "Design and build custom fire pits that become the centerpiece of your outdoor entertainment area.",
    link: "/services/service-details",
  },
  {
    id: "6",
    icon: "/images/icon/OutdorKitchen.png",
    title: "Outdoor Kitchen Contractor",
    text: "Complete outdoor kitchen construction from design to finish, built for lasting enjoyment.",
    link: "/services/service-details",
  },
  {
    id: "7",
    icon: "/images/icon/PatioStone.png",
    title: "Patio Stone Installation",
    text: "Beautiful patio stone installations that enhance your outdoor space with elegance and durability.",
    link: "/services/service-details",
  },
  {
    id: "8",
    icon: "/images/icon/CustomPizza.png",
    title: "Custom Pizza Oven",
    text: "Handcrafted brick and stone pizza ovens built for authentic wood-fired cooking experiences.",
    link: "/services/service-details",
  },
  {
    id: "9",
    icon: "/images/icon/RetainingWauit.png",
    title: "Retaining Wall Construction",
    text: "Durable retaining walls engineered for structural integrity and aesthetic appeal.",
    link: "/services/service-details",
  },
  {
    id: "10",
    icon: "/images/icon/FirePlaceInsta.png",
    title: "Fireplace Installation",
    text: "Custom indoor and outdoor fireplace installations that add warmth and character to your space.",
    link: "/services/service-details",
  },
];

const ITEMS_PER_PAGE = 6;

const ServicesCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(servicesData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentServices = servicesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of services section
    const section = document.querySelector(".services-wrap-area");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="services-wrap-area without-bg-color pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>SERVICES</span>
            <h2>
              We are here to guide you from the beginning to the end of your
              project.
            </h2>
          </div>

          {currentServices && (
            <div className="row justify-content-center">
              {currentServices.map((value, i) => (
                <div className="col-lg-4 col-md-6" key={value.id}>
                  <div className="services-item">
                    <div className="icon">
                      <Image 
                        src={value.icon} 
                        alt={value.title} 
                        width={60} 
                        height={60} 
                      />
                    </div>
                    <h3>
                      <Link href={value.link}>{value.title}</Link>
                    </h3>
                    <p>{value.text}</p>
                    <Link href={value.link} className="services-btn">
                      <Image src={arrowIcon} alt="arrow-right" width={18} height={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="services-pagination">
              <button
                className={`pagination-btn pagination-prev ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                &larr;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                  onClick={() => handlePageChange(page)}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </button>
              ))}

              <button
                className={`pagination-btn pagination-next ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
