"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const FaqSlider = () => {
    const tFaqPage = useTranslations("FaqPage");
    const tFaqCategoerySlider = tFaqPage.raw("FaqCategoery.FaqCategoerySlider");

    const [selectedSlide, setSelectedSlide] = useState<number | null>(1);
  
    const obj = {
      FaqOne: "FaqOne",
      FaqTwo: "FaqTwo",
      FaqThree: "FaqThree",
      FaqFour: "FaqFour",
      FaqFive: "FaqFive",
      FaqSix: "FaqSix",
      FaqSeven: "FaqSeven",
      FaqEight: "FaqEight",
    };
  return (
    <div> <div className="pb-12 lg:pb-16">
    <div className="relative">
      <div>
        <div className="bg-blue-400 absolute w-full h-[70%] top-0"></div>
        <div className="bg-white absolute w-full h-[30%] bottom-0"></div>

        <div className="container mx-auto px-4 pt-24 pb-0 lg:pt-28 lg:pb-0 relative z-10">
          <div className="">
            <div className="text-26 md:text-32 lg:text-40 font-bold w-full lg:w-5/12 text-gray-100 mx-auto text-balance text-center">
              
              {tFaqPage(`slider.sliders.${selectedSlide}.heading`)}
            </div>
            <div className="text-16 sm:text-18 font-normal text-gray-200 lg:text-22 text-balance text-center py-4 lg:max-w-[80%] mx-auto">
              {tFaqPage(`slider.sliders.${selectedSlide}.content`)}
            </div>

            <div className="pb-0 lg:pb-8 lg:pt-0">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                draggable={false}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="FaqSwiper"
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  
                  1200: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 4,
                  }
                }}
              >
                {Object.entries(tFaqCategoerySlider).map(([key], i) => (
                  <SwiperSlide key={i}>
                   
                    <div key={i} onClick={() => setSelectedSlide(i)} className={`${ selectedSlide === i ? "border-2 rounded-20 border-blue-default transition-all" : "border-2 border-transparent transition-all"}`}>
                      <div className="flex flex-col rounded-20 gap-4 bg-white shadow-lg p-12 lg:p-14 cursor-pointer">
                        <div className="flex flex-col items-center">
                          <Image
                            src={tFaqPage( `FaqCategoery.FaqCategoerySlider.${key}.FaqCategoeryImage`)}
                            alt={tFaqPage(`FaqCategoery.FaqCategoerySlider.${key}.FaqCategoeryName`)}
                            width={60}
                            height={60}
                            className="w-14 h-14"
                          />
                          <div className="leading-9 text-20 lg:text-[22px] text-gray-100 font-semibold text-center mt-3">
                            
                            {tFaqPage(
                              `FaqCategoery.FaqCategoerySlider.${key}.FaqCategoeryName`
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      {selectedSlide !== null && (
        <div className="px-4">
          <Accordion
            type="multiple"
            
            className="max-w-[960px] mx-auto"
          >
            {Object.entries(obj).map(([key, value], i) => {
              return (
                <>
                  <AccordionItem key={i} value={value}>
                    <AccordionTrigger className="text-start">
                      {tFaqPage(
                        `slider.sliders.${selectedSlide}.divContent.faqs.${key}.Question`
                      )}
                      
                    </AccordionTrigger>

                    <AccordionContent>
                      <div className="text-gray-200 text-16">
                        {tFaqPage(`slider.sliders.${selectedSlide}.divContent.faqs.${key}.FaqContent`)}
                        
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </div>
      )}
    </div>
  </div></div>
  )
}

export default FaqSlider