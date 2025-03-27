import CharacteristicsSection from "@/components/CharacteristicsSection";
import FaqsPlan from "@/components/FaqsPlan";

import PriceCompare from "@/components/PriceCompare";
import PricePlan from "@/components/PricePlan";
import SectionTitle from "@/components/SectionTitle";
// import { detectRegionFromAPI } from "@/util/detectRegion";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const detectedRegion = await detectRegionFromAPI();
  const messages: any = await getMessages({ locale });
  const title = messages.Page.plan.Title;
  const description = messages.Page.plan.Description;
  const keywords = messages.Page.plan.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.plan.path;
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

const Pricefeatures = () => {
   const tPlanPageFaqs = useTranslations("PlanPage.Faqs");
   const tPlanPage = useTranslations("PlanPage");
   const tPlanPageCharacteristics = useTranslations("PlanPage.Characteristics");

  //  const region =  detectRegionFromAPI(); 
   
  return (
    <div>
      <div className="bg-blue-default pb-32 ">
        <div className="container mx-auto  px-4 py-8 sm:py-10 md:py-11">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-48 font-bold mt-28 lg:mt-44">
           
            {tPlanPage("MainHeading")}
          </h1>
          <div className="text-left  text-white text-16 md:text-20  font-normal mb-10 mt-4">
           
            {tPlanPage("MainDescription")}
           
            
          </div>
        </div>
      </div>
      
      <div className="bg-white plan-container px-4 py-4 sm:py-4 md:py-4 -mt-44 rounded-20">
        <CharacteristicsSection
          CharacteristicsImage={tPlanPageCharacteristics("Image")}
          CharacteristicsTitle={tPlanPageCharacteristics("title")}
          CharacteristicsDescription={tPlanPageCharacteristics("Description")}
        />
      </div>
      <PricePlan />
      <PriceCompare />
      <div className="container mx-auto px-4 pt-8 sm:pt-10 md:pt-12">
        <SectionTitle
          SectionTitle={tPlanPageFaqs("Title")}
          sectionDescription={tPlanPageFaqs("Description")}
        />
      </div>
      <FaqsPlan />
    </div>
  );
};

export default Pricefeatures;
