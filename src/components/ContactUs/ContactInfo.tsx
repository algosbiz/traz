"use client";

import React from "react";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/DMGMasonry/",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/d.m.gmasonry/",
  },
  {
    id: "3",
    icon: "ri-whatsapp-line",
    link: "https://wa.me/14036198727",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <>
      <ul className="contact-info-list">
        <li>
          <span>ADDRESS</span>
          1111 - 46 Ave S.E., Calgary, Alberta T2G 2A5
        </li>

        <li>
          <span>CONTACT</span>
          <a href="mailto:will@dmgmasonry.ca">will@dmgmasonry.ca</a>
          <a href="tel:+14036198727">1-403-619-8727</a>
        </li>

        <li>
          <span>SOCIAL MEDIA</span>

          {socialLinksData && (
            <ul className="social">
              {socialLinksData &&
                socialLinksData.map((value, i) => (
                  <li key={i}>
                    <a href={value.link} target="_blank">
                      <i className={value.icon}></i>
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
