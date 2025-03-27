import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OurMisstion = () => {
  const tOurMission = useTranslations("AboutPage");
  return (
    <div className="relative  py-8 sm:py-10 md:py-12">
      <div className="max-w-[685px] max-h-[500px]">
        <Image
          src="/OurMissionThumbnail.jpg"
          alt="OurMissionThumbnail - BrandPos"
          width={685}
          height={500}
        />
      </div>
      <div className="relative mt-10 md:mt-0 md:absolute md:right-0 md:top-[50%] md:-translate-y-[50%] max-w-[100%] md:max-w-[85%] lg:max-w-[74%] border-20 p-8 sm:p-10 bg-white box-shadow-custom rounded-20 opacity-90">
        <h2 className="text-gray-100 text-2xl sm:text-3xl font-bold pb-2 ">
          {tOurMission("OurMission.Title")}
        </h2>
        <div className="text-16 sm:text-18 text-gray-200">
          {tOurMission("OurMission.content")}
        </div>
      </div>
    </div>
  );
};

export default OurMisstion;
