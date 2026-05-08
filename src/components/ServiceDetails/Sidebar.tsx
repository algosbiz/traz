"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../public/images/arrow-right.svg";

import { servicesData } from "@/lib/servicesData";

import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {servicesData && (
        <ul className="services-details-info-side">
          {servicesData &&
            servicesData
              .filter(
                (value) =>
                  value.link.replace(/\/$/, "") !==
                  pathname.replace(/\/$/, "")
              )
              .map((value, i) => (
                <li
                  className="d-flex align-items-center justify-content-between"
                  key={i}
                >
                  <Link href={value.link}>{value.title}</Link>
                  <Link href={value.link}>
                    <Image
                      src={arrowIcon}
                      alt="arrow-right"
                      width={18}
                      height={18}
                    />
                  </Link>
                </li>
              ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
