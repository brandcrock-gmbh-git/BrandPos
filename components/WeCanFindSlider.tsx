"use client"
import React from "react";
import SectionTitle from "./SectionTitle";
import WeCanFindSliderTwo from "@/public/finderSliderImgOne.webp";
import WeCanFindSliderOne from "@/public/finderSliderImgTwo.webp";
import WeCanFindSliderThree from "@/public/finderSliderImgThree.webp";
// import WeCanFindSliderFour from "@/public/finderSliderImgThree.svg";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";

const WeCanFindSlider = () => {
  const tWeCanFindSlider = useTranslations("WeCanFindSlider");
  const obj = {
    WeCanFindSliderOne: WeCanFindSliderOne,
    WeCanFindSliderTwo: WeCanFindSliderTwo,
    WeCanFindSliderThree: WeCanFindSliderThree,
    // WeCanFindSliderFour: WeCanFindSliderFour,
   
  };
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <SectionTitle  SectionTitle={tWeCanFindSlider("title")} />
      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        draggable={false}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="WeCanFindSliderSwiper"
        breakpoints={{
          400: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.9,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 30,
          },
        }}
      >
        {Object.entries(obj).map(([key, value], i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col rounded-20 gap-4 bg-white relative pt-5">
              <Image
                src={value}
                alt={`${key}-image - BrandPos`}
                className="rounded-lg w-full"
              />
              <div className="absolute bottom-10 left-5">
              <h3 className="leading-9 text-xl sm:2xl: lg:text-[26px] text-white font-semibold tracking-tight">
                {tWeCanFindSlider(`WeCanFindSliders.${key}.WeCanFindSliderTitle`)}
              </h3>
            </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeCanFindSlider;
