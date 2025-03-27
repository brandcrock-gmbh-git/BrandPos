// "use client";
import Image from "next/image";
import React from "react";
// import Button from './ButtonCustom'
// import  IconType  from "@/public/ButtonIconGray.svg"
import image1 from "@/public/AppStore.svg"
import image2 from "@/public/GoogleStore.svg"
import Link from "next/link";
// import { useRegionStore } from "@/store/useRegionStore";



type FeaturesSectionLeft ={
  features: string,
  description: string,
  ImageDirection: string,
  FeatureImage: string,
  ButtonLabel?:string,
  GooglePlaystoreImage?: string,
  ApplePlaystoreImage?: string,
  ButtonLink?: any,
  buttonEnabled?: boolean;
  playStoreImageEnabled?: boolean;

}


// export const FeaturesSectionLeft = ({ features, description, ImageDirection, FeatureImage,  ButtonLabel,ButtonLink, buttonEnabled,playStoreImageEnabled}: FeaturesSectionLeft ) => {
export const FeaturesSectionLeft = ({ features, description, ImageDirection, FeatureImage,  playStoreImageEnabled}: FeaturesSectionLeft ) => {
  // const region = useRegionStore((state) => state.region); // Access region from Zustand store
   
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-11">

      {/* {region} */}

      <div className={`flex-col-reverse sm:flex-row flex items-center ${ImageDirection}`}>
        
        <div className="right w-full sm:w-[55%] flex justify-start">
            <Image src={FeatureImage} alt={features} width={685} height={580} quality={100}  className="px-7 sm:px-3"/>   
        </div>
        <div className="left w-full sm:w-[45%] mb-9 sm:mb-0">
          <h2 className="text-center sm:text-left text-26  text-gray-100 lg:text-32  font-bold mb-4">{features}</h2>
          <p className="text-center sm:text-left text-gray-200 text-16 md:text-20 lg:text-22 font-normal mb-6 mt-6">{description}</p>
         
        


          {/* {buttonEnabled && (
          <Button type="submit"  icon={IconType} iconPosition="right" variant="secondary" size="md" className="mx-auto sm:mx-0">
                <Link href={ButtonLink || "#"}>{ButtonLabel}</Link>
               
          
          </Button>
            )} */}
        
          {playStoreImageEnabled && (
          <div className="flex gap-2">
            <Link href="/https://www.apple.com/app-store/" target="_blank"><Image src={image1} width={170} height={60} alt="playstore - BrandPos" className="w-24 sm:w-[100px] md:w-[170px] cursor-pointer"/></Link>
            <Link href="/https://play.google.com/store/games?hl=en" target="_blank"><Image src={image2} width={170} height={60} alt="playstore - BrandPos" className="w-24 sm:w-[100px] md:w-[170px] cursor-pointer"/></Link>
          </div>
            )}


        </div>
      </div>
    </div>
  );
};
