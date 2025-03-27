"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CustomerLogo1 from "@/public/MeetCustomer/Airbus.svg";
import CustomerLogo6 from "@/public/MeetCustomer/allianz.svg";
import CustomerLogo2 from "@/public/MeetCustomer/Avon.svg";
import CustomerLogo3 from "@/public/MeetCustomer/SWM.svg";
import CustomerLogo4 from "@/public/MeetCustomer/drk.svg";
import CustomerLogo5 from "@/public/MeetCustomer/fraport.svg";
import CustomerLogo7 from "@/public/MeetCustomer/hilti.svg";
import CustomerLogo8 from "@/public/MeetCustomer/jungheinrich-logo.svg";

import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MeetOutCustomer = () => {
  const tMeetOutCustomer = useTranslations("MeetOutCustomer");

  const arrs = [CustomerLogo1,CustomerLogo2,CustomerLogo3,CustomerLogo4,CustomerLogo5,CustomerLogo6,CustomerLogo7,CustomerLogo8]
  return (
    <>
      <div className="container mx-auto px-4 py-10 md:pt-16 pb-0 ">
        <SectionTitle
          SectionTitle={tMeetOutCustomer("title")}
          sectionDescription={tMeetOutCustomer("Description")}
        />

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="CustomerSlider"
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {arrs.map((arr, index) => (
              <SwiperSlide key={index}>
                <Image
                  className="box-shadow-custom grayscale hover:grayscale-0 transition rounded-20 m-5 py-8 px-8 sm:py-16 md:py-16 md:px-12 bg-white w-[200px] sm:w-[240px] h-[170px] md:h-[200px] object-contain"
                  src={arr}
                  alt="Meet Our Customer - BrandPos"
                  width={130}
                  height={40}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default MeetOutCustomer;
