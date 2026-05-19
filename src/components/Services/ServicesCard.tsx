"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../public/images/arrow-right.svg";

import { servicesData } from "@/lib/servicesData";


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
                        width={80}
                        height={80}
                        style={{ borderRadius: "0px", objectFit: "cover" }}
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
