"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import AliPay from "@/public/AliPay.svg";
import ApplePay from "@/public/ApplePay.svg";
import Master from "@/public/Master.svg";
import MasterCard from "@/public/MasterCard.svg";
import pay from "@/public/pay.svg";
import Paypal from "@/public/Paypal.svg";
import GPay from "@/public/GPay.svg";
import visa from "@/public/Visa.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";

const PaymentSection = () => {
  const paymentMethords = [
    GPay,
    visa,
    Paypal,
    pay,
    MasterCard,
    Master,
    ApplePay,
    AliPay,
  
  ];
  const tPaymentSection = useTranslations("PaymentSection");
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <SectionTitle
        SectionTitle={tPaymentSection('title')}
        sectionDescription=""
      />
      <div>
        <Swiper
          spaceBetween={30}
          // draggable={false}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="SolutionSwiper"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            450: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {paymentMethords.map((paymentMethord, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col ">
                <Image
                  src={paymentMethord}
                  alt={`${index}-image - BrandPos`}
                  className="rounded-lg w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PaymentSection;
