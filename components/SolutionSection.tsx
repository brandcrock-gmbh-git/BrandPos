"use client";
import React from "react";
import { useTranslations } from "next-intl";
// import Solution1 from "@/public/Solution-1.svg";
// import Solution2 from "@/public/Solution-2.svg";
// import Solution3 from "@/public/Solution-3.svg";
import SolutionGg from "@/public/Solution-bg.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SolutionSection = () => {
  const tSolutions = useTranslations("Solutions");
  const solutionSlides = tSolutions.raw('Solution.solutionSlides');


  return (
    <div className="relative">
      <div className="bg-blue-400 absolute w-full h-1/2 top-0">
        <Image
          src={SolutionGg}
          alt="solution - BrandPos"
          width={300}
          height={300}
          className="bottom-0 opacity-30 absolute left-1/2 -translate-x-2/4 lg:translate-x-0 lg:left-28 "
        />
        <Image
          src={SolutionGg}
          alt="solution - BrandPos"
          width={300}
          height={300}
          className="bottom-0 opacity-30 absolute -scale-x-100 right-28 hidden lg:block"
        />
      </div>
      <div className="bg-white absolute w-full h-1/2 bottom-0"></div>
      <div className="container mx-auto px-4 pt-8 pb-0 lg:pt-28 lg:pb-4 relative z-10">
        <div className="">
          <h2 className="text-26 md:text-32 lg:text-40 font-bold w-full lg:w-5/12 text-gray-100 mx-auto text-balance text-center">
            {tSolutions("Solution.SolutionTitle")}
          </h2>
          <div className="text-16 sm:text-18 font-normal text-gray-200 lg:text-22 text-balance text-center py-4 lg:max-w-[80%] mx-auto">
            {tSolutions("Solution.SolutionDescription")}
          </div>

          <div className="pb-0 lg:pb-8 lg:pt-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              draggable={false}
            
              modules={[Pagination, Navigation]}
              
              navigation={false}
              className="SolutionSwiper"
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  autoplay: {
                    delay: 1000,
                  },
                },
                640: {
                  slidesPerView: 2,
                  autoplay: {
                    delay: 1000,
                  },
                },
                768: {
                  slidesPerView: 2,
                  autoplay: {
                    delay: 1000,
                  },
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {Object.entries(solutionSlides).map(([key], i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col rounded-20 gap-4 bg-white shadow-lg">
                    <Image
                      src= {tSolutions(`Solution.solutionSlides.${key}.Image`)}
                      alt={`${key}-image - BrandPos`}
                      className="rounded-lg w-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-22 lg:text-26 text-gray-100 font-semibold max-w-[90%]">
                    <div dangerouslySetInnerHTML={{ __html: tSolutions(`Solution.solutionSlides.${key}.solutionSlidesTitle`) }} />
                    </h3>
                    <p className="pt-3 text-16 lg:text-18 text-gray-200">
                      {tSolutions( `Solution.solutionSlides.${key}.solutionSlidesDescription` )}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
