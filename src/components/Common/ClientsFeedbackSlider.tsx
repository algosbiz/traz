"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import quoteIcon from "../../../public/images/client/quote.svg";

const clientsFeedbackData = [
  {
    id: "1",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user1.png",
    name: "Jonathon Ronan",
    designation: "CEO of HiBootstrap",
  },
  {
    id: "2",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user2.png",
    name: "Angela Carter",
    designation: "CEO of EnvyTheme",
  },
  {
    id: "3",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user3.png",
    name: "Skyler White",
    designation: "CEO of HiboTheme",
  },
  {
    id: "4",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user4.png",
    name: "Angela Carter",
    designation: "CEO of Abc",
  },
];

interface ClientsFeedbackProps {
  feedbacks?: {
    id: string;
    feedbackText: string;
    name: string;
    image?: string;
    designation?: string;
  }[];
}

const ClientsFeedbackSlider: React.FC<ClientsFeedbackProps> = ({
  feedbacks = clientsFeedbackData,
}) => {
  return (
    <>
      <div className="client-wrap-area pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>REVIEWS</span>
            <h2>Our Clients Talk About Us & Believe In Our Work</h2>
          </div>
        </div>

        {feedbacks && (
          <div className="container-fluid">
            <Swiper
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="client-swiper"
            >
              {feedbacks &&
                feedbacks.map((value, i) => (
                  <SwiperSlide key={i} style={{ paddingBottom: '30px' }}>
                    <div className="client-wrap-card">
                      <div className="icon">
                        <Image src={quoteIcon} alt="quote" width={56} height={56} />
                      </div>

                      <p>{value.feedbackText}</p>

                      <div className="info">
                        <div className="title ms-0">
                          <h3>{value.name}</h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default ClientsFeedbackSlider;
