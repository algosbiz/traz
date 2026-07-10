"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoWebp from "../../../public/images/logo.webp";
import whiteLogo from "../../../public/images/whitelogo.webp";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    link: "https://www.facebook.com/DMGMasonry/",
  },
  {
    id: "instagram",
    label: "Instagram",
    link: "https://www.instagram.com/d.m.gmasonry/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    link: "https://wa.me/14036198727",
  },
];

import { servicesData } from "@/lib/servicesData";

const footerServices = [
  ...servicesData,
  {
    id: "brick-repair",
    title: "Brick Repair",
    link: "/calgary/brick-repair",
  },
];

const Footer: React.FC = () => {
  const { theme } = useTheme();

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
                  src={theme === "dark" ? whiteLogo : logoWebp}
                  alt="DMG Masonry Logo"
                  width={160}
                  height={52}
                />
              </Link>

              <div className="footer-contact">
                <h3>D.M.G Masonry LTD</h3>
                <p>1111 - 46 Ave S.E., Calgary,<br />Alberta T2G 2A5</p>
                <a href="mailto:will@dmgmasonry.ca">will@dmgmasonry.ca</a>
                <a href="tel:+14036198727" className="footer-phone">
                  Call us: 1-403-619-8727
                </a>
              </div>
            </div>

            <div
              className="footer-links-column"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3>Follow Us</h3>

              <ul className="footer-links-list">
                {socialLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <span className="footer-link-arrow">&rarr;</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="footer-links-column"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3>Services</h3>

              <ul className="footer-links-list footer-links-list-plain footer-services-list">
                {footerServices.map((value) => (
                  <li key={value.id}>
                    <Link href={value.link}>{value.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="footer-newsletter-column"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3>Subscribe Newsletter</h3>

              <form className="footer-newsletter-form">
                <input
                  type="email"
                  className="footer-newsletter-input"
                  placeholder="Your Email Here"
                  aria-label="Your Email Here"
                />

                <button type="submit" className="footer-newsletter-button">
                  <span className="footer-link-arrow">&rarr;</span>
                  <span>Subscribe Newsletter</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              &copy; <span>DMG Masonry</span>. Crafted spaces, built to last.
            </p>
            <ul className="footer-bottom-links">
              <li>
                <Link href="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
