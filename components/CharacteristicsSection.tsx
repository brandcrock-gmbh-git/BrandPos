// import Image from "next/image";
import Image from "next/image";
import React from "react";

type CharacteristicsSection = {
  CharacteristicsTitle?: string;
  CharacteristicsDescription?: any;
  CharacteristicsImage?: string;
};

const CharacteristicsSection = ({
  CharacteristicsTitle,
  CharacteristicsDescription,
  CharacteristicsImage,
}: CharacteristicsSection) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row items-center pt-2 pb-9 sm:py-9">
        <Image
          src={CharacteristicsImage || "/default-image-path.jpg"}
          alt={`${CharacteristicsTitle}-image - BrandPos`}
          width={350}
          height={350}
          className="px-3 mt-2 pb-5 sm:px-4 w-64 h-48 w- sm:w-72 md:h-72"
        />
        <div className="flex flex-col px-3 md:px-8">
          <h2 className="text-center sm:text-left font-bold mb-4 text-26 md:text-32 lg:text-40  text-gray-100">
            {CharacteristicsTitle}
          </h2>
          <div className="text-16 sm:text-18 font-normal text-gray-200 lg:text-22 text-center sm:text-left  mb-4">
            {CharacteristicsDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsSection;
