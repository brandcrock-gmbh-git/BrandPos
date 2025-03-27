"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DssLogo from "@/public/DSS-logo.svg";
import SOCLogo from "@/public/SOC-Logo.svg";
import GDPRLogo from "@/public/GDPR-Logo.svg";
import IOSlogo from "@/public/IOS-logo.svg";
import TUVLogo from "@/public/TUV-logo.svg";
import Image from "next/image";

const ManufactureSlider = () => {
  const ManufacturesLogos = [DssLogo, SOCLogo, GDPRLogo, IOSlogo, TUVLogo];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
     
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    
      breakpoints={{
        400: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
    >
      {ManufacturesLogos.map((ManufacturesLogo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={ManufacturesLogo}
            alt="ManufacturesLogo"
            width={70}
            height={70}
            quality={100}
            className="h-10 sm:h-12 md:h-14 object-contain w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ManufactureSlider;
