import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaRocket, FaTools } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import ServiceAvailable from "@/public/CheckGreen.svg";
// import ServiceNotAvailable from "@/public/CrossRed.svg";
import ArrowLeft from "@/public/ArrowLeft.svg";

const PricePlan = () => {
  const tpricingPlan = useTranslations("pricingPlan");

  const obj = {
    Basic: FaShoppingCart,
    Standard: FaRocket,
    Premium: FaTools,
    
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
       {/* <h2 className="text-gray-100 text-3xl font-bold pb-6"> {tpricingPlan('pricingPlanwhy.title')}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Object.entries(obj).map(([key], i) => {
          return (
            <div key={i} className="border border-blue-default rounded-[24px]">
              <div className="flex flex-col px-9 pt-16 pb-10 sm:pt-28 sm:pb-12">
                <div className="flex flex-col items-center">
                  <div className="text-30 font-extrabold text-gray-100">
                    {/* <Link href="#" target="_blank" className="cursor-auto"> */}
                      {tpricingPlan(`pricingPlanwhy.services.${key}.pricingPlanLabel`)}
                    {/* </Link> */}
                    </div>
                    <div className="text-18 font-normal text-gray-200 text-center mt-2">
                    {/* <Link href="#" target="_blank" className="cursor-auto"> */}
                      {tpricingPlan(`pricingPlanwhy.services.${key}.packageDescription`)}
                    {/* </Link> */}
                    </div>
                  <div className="text-[60px] lg:text-[70px] leading-[90px] font-normal text-gray-100 py-3">
                    <span className="text-[40px] font-semibold">
                      {tpricingPlan(`pricingPlanwhy.services.${key}.pricingCurrency`)}
                    </span>
                    {tpricingPlan(`pricingPlanwhy.services.${key}.pricing`)}
                  </div>
                 

                  {tpricingPlan(`pricingPlanwhy.services.${key}.pricingBuyNowEnable`) === 'true'
                          ?   <Link href="https://www.google.com" target="_blank" className="font-semibold text-18 py-[14px] px-14 sm:py-[17px] border text-center bg-blue-default border-blue-default rounded-14 text-white">
                          {tpricingPlan(`pricingPlanwhy.services.${key}.pricingBuyNowLabel`)}
                        </Link>
                          :   <Link href="https://www.google.com" target="_blank" className="font-semibold text-18 py-[14px] sm:py-[17px] px-14 sm:px-20 border text-center border-blue-default rounded-14 text-blue-default">
                          {tpricingPlan(`pricingPlanwhy.services.${key}.pricingBuyNowLabel`)}
                        </Link>}
                  
                  
                  <div className="py-6 sm:py-8 border-b w-full border-gray-100"></div>
                </div>
                <div className="flex flex-col justify-center py-8 sm:py-12 px-1 sm:px-4">
                  {/* Rendering descriptions */}
                  {['descriptionOne', 'descriptiontwo', 'descriptionthree', 'descriptionfour', 'descriptionfive','descriptionSix', 'descriptionSeven', 'descriptionEight', 'descriptionNine', 'descriptionTen','descriptionEleven'].map((desc, index) => (
                    <div key={index} className="flex gap-8 py-3 items-center">

                      <div className="flex shrink-0">
                        {tpricingPlan(`pricingPlanwhy.services.${key}.description.${desc}.isService`) === 'true'
                          ? <Image src={ArrowLeft} alt="Service Available Check - BrandPos" className="shrink-0"/>
                          : <Image src={ArrowLeft} alt="Service Not Available Check - BrandPos" className="shrink-0"/>}
                      </div>
                      <div className="text-18 leading-[22px] text-gray-200 font-medium">
                        {tpricingPlan(`pricingPlanwhy.services.${key}.description.${desc}.service`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default PricePlan;
