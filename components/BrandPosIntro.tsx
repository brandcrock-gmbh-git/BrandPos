import { useTranslations } from "next-intl";
import React from "react";


const BrandPosIntro = () => {
  const tAboutPage = useTranslations("AboutPage");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
        <h2 className="text-center sm:text-left text-26   lg:text-32  font-bold mb-4 text-gray-100 mx-auto text-balance  flex flex-col justify-center">
          {tAboutPage('Introduction.Intro')} <br />
          <span className="text-blue-default">   {tAboutPage('Introduction.pos')}  </span>
        </h2>
        <div className="text-16 font-normal text-gray-200 sm:text-18">
        {tAboutPage('Introduction.contentOne')}
        </div>
        <div className="text-16 font-normal text-gray-200 sm:text-18">
        {tAboutPage('Introduction.contentTwo')}
        </div>
      </div>
      <div className="py-7 md:py-7 text-16 font-normal text-gray-200 sm:text-18">
      {tAboutPage('Introduction.contentThree')}
      </div>
    
    </>
  );
};

export default BrandPosIntro;
