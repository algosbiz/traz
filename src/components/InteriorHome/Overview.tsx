"use client";

import React from "react";
import Image from "next/image";

import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

export interface OverviewItem {
  image: any;
  titleNormal: string;
  titleHighlight: string;
  aosDelay: string;
}

interface OverviewProps {
  fullWidth?: boolean;
  items?: OverviewItem[];
}

const defaultOverviewItems: OverviewItem[] = [
  {
    image: overviewImg1,
    titleNormal: "Exterior",
    titleHighlight: "Architecture",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Interior",
    titleHighlight: "Home/Office",
    aosDelay: "200"
  }
];

const Overview: React.FC<OverviewProps> = ({ 
  fullWidth = false,
  items = defaultOverviewItems
}) => {
  const columnClass = fullWidth ? "col-lg-6 col-md-6" : "col-lg-5 col-md-6";

  return (
    <>
      <div className="overview-area wrap-color pt-100">
        <div className="container">
          <div className="overview-inner-area">
            <div className="row justify-content-center">
              {items && items.map((item, index) => (
                <div
                  className={columnClass}
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay}
                  data-aos-duration="600"
                  data-aos-once="false"
                  key={index}
                >
                  <div className="overview-card">
                    <div className="image">
                      <Image src={item.image} alt={item.titleNormal} width={1320} height={780} />
                    </div>
                    <h3>
                      {item.titleNormal} <span>{item.titleHighlight}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
