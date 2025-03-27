
import React from "react";

import { FaShoppingCart, FaRocket, FaTools,  } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ServiceAvailable from "@/public/GreenTick.svg";
import ServiceNotAvailable from "@/public/CompareCross.svg";
// import ServiceNotAvailable from "@/public/CrossRed.svg";
// import ArrowLeft from "@/public/ArrowLeft.svg";

const PriceCompare = () => {
  const tpricingPlan = useTranslations("pricingCompare");

  const obj = {
    descriptionOne: FaShoppingCart,
    descriptiontwo: FaRocket,
    descriptionthree: FaTools,
    descriptionfour: FaTools,
    descriptionfive: FaTools,
    descriptionSix: FaShoppingCart,
    descriptionSeven: FaRocket,
    descriptionEight: FaTools,
    descriptionNine: FaTools,
    descriptionTen: FaTools,
    descriptionEleven: FaTools,
    descriptionTwelve: FaTools,
    
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className="rounded-[20px] border-blue-default sm:border">
        <div className="table-head hidden sm:flex w-full border-b border-blue-default">
          <div className="w-full py-4 px-1 sm:px-10  rounded-tl  text-16 lg:text-18 font-bold text-blue-default">  {tpricingPlan(`pricingPlanwhy.tableHead.tableLabelOne`)}</div>
          <div className="w-1/3 md:w-1/4   py-4 text-center border-l border-blue-default text-16 lg:text-18 font-bold text-blue-default">
          {tpricingPlan(`pricingPlanwhy.tableHead.tableLabelTwo`)}
          </div>
          <div className="w-1/3 md:w-1/4  py-4 text-center border-l  text-16 lg:text-18 border-blue-default  font-bold text-blue-default">
          {tpricingPlan(`pricingPlanwhy.tableHead.tableLabelThree`)}
          </div>
          <div className="w-1/3 md:w-1/4  rounded-tr py-4 text-center  text-16 lg:text-18 border-l border-blue-default font-bold text-blue-default">
          {tpricingPlan(`pricingPlanwhy.tableHead.tableLabelFour`)}
          </div>
        </div>
        {Object.entries(obj).map(([key], i) => {
          return (
            <  >
              <div key={i} className="table-body py-4 sm:py-0 border-t border-b sm:border-none flex flex-col sm:flex-row w-full  sm:odd:bg-white sm:even:bg-blue-400 sm:last:rounded-b-[20px]">
                <div className="w-full pb-3 py-0 sm:py-5 px-0 sm:px-10 text-18 text-gray-100 font-bold sm:font-normal">
                            {tpricingPlan(`pricingPlanwhy.services.description.${key}.service`)}
                </div>
                <div className="w-full sm:w-1/3 md:w-1/4 py-1 sm:py-4 text-start sm:border-l border-blue-default flex justify-between sm:justify-center">
                  <div className="flex w-full sm:w-auto justify-between">
                    <div className="block text-center  sm:hidden font-medium text-gray-200">{tpricingPlan(`pricingPlanwhy.tablePackages.Basic`)}</div>
                    <div className="flex shrink-0">
                        {tpricingPlan(`pricingPlanwhy.services.description.${key}.isBasicService`) === "true" ? (
                          <Image
                            src={ServiceAvailable}
                            alt="Service Available Check - BrandPos"
                            className="shrink-0"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <Image
                          src={ServiceNotAvailable}
                          alt="Service Available Check - BrandPos"
                          className="shrink-0"
                          width={14}
                          height={14}
                        />
                        )}
                      </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/3 md:w-1/4 py-1 sm:py-4 text-start sm:border-l border-blue-default flex justify-between sm:justify-center">
                  <div className="flex  w-full sm:w-auto justify-between ">
                    <div className="block text-center sm:hidden font-medium text-gray-200">{tpricingPlan(`pricingPlanwhy.tablePackages.Standard`)}</div>
                    {tpricingPlan(`pricingPlanwhy.services.description.${key}.isStandardService`) === "true" ? (
                          <Image
                            src={ServiceAvailable}
                            alt="Service Available Check - BrandPos"
                            className="shrink-0"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <Image
                          src={ServiceNotAvailable}
                          alt="Service Available Check - BrandPos"
                          className="shrink-0"
                          width={14}
                          height={14}
                        />
                        )}
                  </div>
                </div>
                <div className="w-full sm:w-1/3 md:w-1/4 py-1 sm:py-4 text-start sm:border-l border-blue-default flex justify-between sm:justify-center">
                  <div className="flex  w-full sm:w-auto justify-between">
                    <div className="block text-center sm:hidden font-medium text-gray-200">{tpricingPlan(`pricingPlanwhy.tablePackages.Premium`)}</div>
                    {tpricingPlan(`pricingPlanwhy.services.description.${key}.isPremiumService`) === "true" ? (
                          <Image
                            src={ServiceAvailable}
                            alt="Service Available Check - BrandPos"
                            className="shrink-0"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <Image
                          src={ServiceNotAvailable}
                          alt="Service Available Check - BrandPos"
                          className="shrink-0"
                          width={14}
                          height={14}
                        />
                        )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

     
    </div>
  );
};

export default PriceCompare;
