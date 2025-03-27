import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AppFeatures = () => {
  const tAppFeatures = useTranslations("AppFeatures");
  const tAppFeaturesobj = {
    Transaction: {
      Image: "/FeatureAppZero.svg",
      testin: "1testin",
    },
    Payment: {
      Image: "/FeatureAppCloud.svg",
      testin: "2testin",
    },
    Billing: {
      Image: "/FeatureAppCloud2.svg",
      testin: "3testin",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        
        {Object.entries(tAppFeaturesobj).map(([key, value], i) => {
          return (
            <>
              <div key={i} className="box-shadow-custom p-6 lg:p-8 rounded-20">
                <div className="  flex justify-start items-center pb-12 sm:pb-16">
                  <Image
                    src={value.Image}
                    alt={`${key} feature - BrandPos`}
                    width={80}
                    height={80}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                  />
                </div>
                <h2 className="text-26   lg:text-32  text-gray-100 font-bold  pb-4">
                  {tAppFeatures(`points.${key}.title`)}
                </h2>
                <div className="text-16 lg:text-18  font-normal text-gray-200 ">
                  {tAppFeatures(`points.${key}.Description`)}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AppFeatures;
