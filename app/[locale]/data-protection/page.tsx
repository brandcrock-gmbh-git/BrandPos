// import { detectRegionFromAPI } from "@/util/detectRegion";

import { getMessages } from "next-intl/server";
import Image from "next/image";
import React from "react";
import DataProtection from "@/public/DataProtection.svg";
import { useTranslations } from "next-intl";
import DataProtectionSidebar from "@/components/DataProtectionSidebar";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const detectedRegion = await detectRegionFromAPI();
  const messages: any = await getMessages({ locale });
  const title = messages.Page.PrivacyPolicy.Title;
  const description = messages.Page.PrivacyPolicy.Description;
  const keywords = messages.Page.PrivacyPolicy.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.PrivacyPolicy.path;
  const canonicalUrl = `${baseUrl}/${locale}/${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: "/logo.svg", // Use a default image if none provided
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: "/logo.svg", // Use a default image if none provided
    },
    // region: detectedRegion, // Adding region to metadata
  };
}

const DataProduction = () => {
  // const tPrivacy = useTranslations("privacy");
  const tDataPortection = useTranslations("dataprotection");
  const tPrivacyDefinitions = tDataPortection.raw("Definitions");
  const sanitizedTitle = tPrivacyDefinitions;

  

  return (
    <div className="privacy pb-7 lg:pb-10">
      <div className="bg-blue-default pb-12 sm:pb-32">
        <div className="container mx-auto  px-4 py-8 sm:py-10 md:py-11">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-48 font-bold mt-28 lg:mt-44">
            {tDataPortection("heading")}
          </h1>
        </div>
      </div>

      <div className="bg-white container  mx-auto px-4 py-8 sm:py-10 md:py-12 -mt-[70px] sm:-mt-44 rounded-20">
        <div className="flex pb-8 sm:pb-14 md:px-8 items-center flex-col lg:flex-row ">
          <Image
            src={DataProtection}
            alt={"Data Protection - BrandPos"}
            width={331}
            height={380}
            className=" max-h-[200px] sm:max-h-[420px] object-contain rounded-lg sm:rounded-20 mb-6 sm:mb-12 sm:mr-12"
          />

          <div>
            <div className="text-left  text-gray-200 text-16 md:text-18  font-normal mb-5 mt-4">
              {tDataPortection("descriptionOne")}
            </div>
            <div className="text-left  text-gray-200 text-16 md:text-18  font-normal mb-5 mt-4">
              {tDataPortection("descriptionTwo")}
            </div>
            
          </div>
        </div>
        <div className="flex custom-sidebar">
          {/* <div className="bg-blue-100 rounded-20 pt-8 pb-64 px-6 mr-8 h-max w-[61%] max-w-[350px] sticky top-[128px] mt-9"> */}
          <div className="hidden md:block">
            <DataProtectionSidebar />
          </div>
          <div>
            <div className="text-left  text-gray-200 text-16 md:text-20  font-normal mb-5 mt-4">
              <div dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProduction;
