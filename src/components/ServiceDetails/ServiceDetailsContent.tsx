"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

import serviceImg from "../../../public/images/services-details/services-details1.jpg";
import arrowIcon from "../../../public/images/services-details/arrow.svg";

interface ServiceDetailsContentProps {
  title?: string;
  subtitle?: string;
  mainImage?: any;
  description1?: string;
  paragraphs?: string[];
  benefits?: string[];
  extraParagraphs?: string[];
}

const ServiceDetailsContent: React.FC<ServiceDetailsContentProps> = ({ 
  title,
  subtitle = "SERVICE",
  mainImage = serviceImg,
  description1,
  paragraphs,
  benefits,
  extraParagraphs
}) => {
  return (
    <>
      <div className="services-details-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <div className="title">
                  <span>{subtitle}</span>
                  <h2>{title || "Interior Design"}</h2>
                  <p>
                    {description1 || "We are leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting."}
                  </p>
                </div>

                <Image src={mainImage} alt={title || "service"} width={1400} height={645} />

                {paragraphs && paragraphs.length > 0 ? (
                  paragraphs.map((p, index) => <p key={index}>{p}</p>)
                ) : (
                  <>
                    <p>
                      DMG Masonry full-service design firm providing architecture, master
                      planning, urban design, interior architecture, space planning
                      and programming. Our portfolio completed work includes highly
                      acclaimed and award-winning projects for clients around the
                      country.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                )}

                {benefits && benefits.length > 0 ? (
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6">
                      <ul className="list">
                        {benefits.slice(0, Math.ceil(benefits.length / 2)).map((benefit, i) => (
                          <li key={i}>
                            <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <ul className="list">
                        {benefits.slice(Math.ceil(benefits.length / 2)).map((benefit, i) => (
                          <li key={i}>
                            <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6">
                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Innovative Design
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Highly Skilled Expertise
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Sustainable Design Practices
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          A Client-Centric Approach
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {extraParagraphs && extraParagraphs.length > 0 ? (
                  extraParagraphs.map((p, index) => <p key={index}>{p}</p>)
                ) : (
                  <>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>

                    <p>
                      We design with people in mind and use every expertise at our
                      disposal.Our practice connects communities and is committed to
                      the stewardship of place, the environment.
                    </p>

                    <p>
                      You don&apos;t create unforgettable spaces all over the world with a single design tool. Our expertise in drawing people together is as broad as it is deep. It draws from a variety of disciplines, each one contributing to the bigger picture and sustainable growth. More than 3,000 projects fill our portfolio, but it&apos;s the millions of people who experience them who matter most. We&apos;ve grouped our work into five categories: places, venues, spaces, experiences and events.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
