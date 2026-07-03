"use client";

import React from "react";
import Link from "next/link";

interface PageBannerTitleProps {
  title: string;
  homeText: string;
  homeUrl: string;
  titleAsHeading?: boolean;
}

const PageTitle: React.FC<PageBannerTitleProps> = ({
  title,
  homeText,
  homeUrl,
  titleAsHeading = false,
}) => {
  return (
    <div className="page-banner-area">
      <div className="container-fluid">
        <div className="page-banner-inner">
          <ul className="list text-uppercase">
            <li>
              <Link href={homeUrl} className="theme-heading-color hover:text-[#717FF8]">
                {homeText}
              </Link>
            </li>
            <li>
              {titleAsHeading ? (
                <h1
                  style={{
                    color: "inherit",
                    font: "inherit",
                    margin: 0,
                    textTransform: "inherit",
                  }}
                >
                  {title}
                </h1>
              ) : (
                title
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
