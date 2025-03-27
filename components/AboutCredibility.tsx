import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutCredibility = () => {
  const tAboutPage = useTranslations("AboutPage");
  const tCredibilitySection = tAboutPage.raw("CredibilitySection");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8  py-8 sm:py-10 md:py-12">
      {Object.entries(tCredibilitySection).map(([key], i) => {
        return (
          <>
            <div key={i} className="box-shadow-custom rounded-20 p-4 lg:p-4 flex gap-5 items-center">
              <div className="bg-blue-default flex items-center justify-center p-5 rounded-2xl flex-shrink-0  max-w-20 max-h-20  lg:max-w-[100px] lg:max-h-[100px]">
                <Image
                  src={tAboutPage(`CredibilitySection.${key}.Image`)}
                  width={100}
                  height={100}
                  alt="AboutCredibility - BrandPos"
                />
              </div>
              <div className="content">
                <h3 className="text-blue-default text-22 lg:text-26 font-semibold ">
                  {tAboutPage(`CredibilitySection.${key}.Title`)}
                </h3>
                <div className=" text-16 lg:text-18 text-gray-200">{tAboutPage(`CredibilitySection.${key}.content`)}</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AboutCredibility;
