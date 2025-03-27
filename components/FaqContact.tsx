import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";




const FaqContact = () => {
  const tFaqPageContact = useTranslations("FaqPage.FaqContact");
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <SectionTitle
        SectionTitle={tFaqPageContact('Title')}
        
        sectionDescription={tFaqPageContact('Description')}
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 py-10 ">
        <div className="rounded-20 box-shadow-custom text-center p-11 pb-7 flex items-center flex-col xl:min-w-[500px]">
          <Image
            src="/faq/FaqContactPhone.svg"
            alt="FaqContactPhone - BrandPos"
            height={60}
            width={60}
            className="h-14 w-14 mb-4"
          />
          <div className="text-gray-100 text-20 lg:text-24 font-semibold mb-2">
            <Link href={tFaqPageContact('PhoneLink')}>{tFaqPageContact('Phone')}</Link>
          </div>
          <div className="text-gray-100 text-18 lg:text-20 mb-3">{tFaqPageContact('ContactTitle')}</div>
        </div>
        <div className="rounded-20 box-shadow-custom text-center p-11 pb-7 flex items-center flex-col xl:min-w-[500px]">
          <Image
            src="/faq/FaqContactEnvlap.svg"
            alt="FaqContactPhone - BrandPos"
            height={60}
            width={60}
            className="h-14 w-14 mb-4"
          />
         <div className="text-gray-100 text-20 lg:text-24 font-semibold mb-2">
            <Link href={tFaqPageContact('EmailLink')}>{tFaqPageContact('Email')}</Link>
          </div>
          <div className="text-gray-100 text-18 lg:text-20 mb-3">{tFaqPageContact('EmailTitle')}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqContact;
