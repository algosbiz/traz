"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import whiteLogo from "../../../public/images/whitelogo.webp";

const socialLinks = [
  {
    id: "facebook",
    icon: "ri-facebook-fill",
    label: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: "instagram",
    icon: "ri-instagram-line",
    label: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: "whatsapp",
    icon: "ri-whatsapp-line",
    label: "WhatsApp",
    link: "https://wa.me/14036198727",
  },
];

const masonryServices = [
  "Masonry Repair",
  "Stone Veneer",
  "Hardscape Contractor",
  "Chimney Repair",
  "Custom Fire Pits",
  "Outdoor Kitchen Contractor",
  "Patio Stone Installation",
  "Custom Pizza Oven",
  "Retaining Wall Construction",
  "Fireplace Installation",
];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-inner">
            <div
              className="footer-brand-column"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Link href="/" className="footer-logo" aria-label="DMG Masonry Home">
                <Image
                  src={whiteLogo}
                  alt="DMG Masonry Logo"
                  width={220}
                  height={64}
                />
              </Link>

              <div className="footer-contact">
                <h3>D.M.G Masonry LTD</h3>
                <p>1111 - 46 Ave S.E., Calgary, Alberta T2G 2A5</p>
                <a href="mailto:will@dmgmasonry.ca">will@dmgmasonry.ca</a>
                <a href="tel:+14036198727" className="footer-phone">
                  Call us: 1-403-619-8727
                </a>
              </div>

              <ul className="footer-socials">
                {socialLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      <i className={item.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="footer-services-column"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h2>Masonry Services in Calgary</h2>

              <ul className="footer-service-grid">
                {masonryServices.map((service) => (
                  <li key={service}>
                    <Link href="/services/service-details/">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              © <span>DMG Masonry</span>. Crafted spaces, built to last.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
