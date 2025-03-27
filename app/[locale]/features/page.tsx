import AppFeatures from "@/components/AppFeatures";
import CharacteristicsSection from "@/components/CharacteristicsSection";
import { FeaturesSectionLeft } from "@/components/FeaturesSectionLeft";
import { FeaturesSectionRight } from "@/components/FeaturesSectionRight";
import MainBanner from "@/components/MainBanner";
import { OrderPlace } from "@/components/OrderPlace";
import PaymentSection from "@/components/PaymentSection";

import WeCanFindSlider from "@/components/WeCanFindSlider";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Page.Features.Title;
  const description = messages.Page.Features.Description;
  const keywords = messages.Page.Features.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path =  messages.Page.Features.path;
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
  };
}

const Pricefeatures = () => {
  const tFeaturesCharacteristics = useTranslations("FeaturesCharacteristics");
  // const FeatureSectionDiscover = useTranslations("FeatureSectionDiscover");
  const tFeaturesPagePaymentsSection = useTranslations(
    "FeaturesPagePaymentsSection"
  );
  const tFeaturesPageWalletPaymentsSection = useTranslations(
    "FeaturesPageWalletPaymentsSection"
  );
  const tFeaturesPageBrandposSection = useTranslations(
    "FeaturesPageBrandposSection"
  );
  const tFeaturesPageBankPaySection = useTranslations(
    "FeaturesPageBankPaySection"
  );
  const tFeaturesPageSecuritySection = useTranslations(
    "FeaturesPageSecuritySection"
  );
  const tPriceFeatures = useTranslations("PriceFeatures.MainBanner");
  const tBannerSubHeading = tPriceFeatures.raw("BannerSubHeading");

  return (
    <div>
      <MainBanner
        bannerMainHeading={tPriceFeatures("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tPriceFeatures("BannerImageDesktop")}
        bannerMobile={tPriceFeatures("BannerImageMobile")}
        bannerBtnLabel={tPriceFeatures("MainBannerBtnLabel")}
        bannerBtnLink={tPriceFeatures("MainBannerBtnLink")}
      />
      <CharacteristicsSection
        CharacteristicsImage={tFeaturesCharacteristics("Image")}
        CharacteristicsTitle={tFeaturesCharacteristics("title")}
        CharacteristicsDescription={tFeaturesCharacteristics("description")}
      />

      <div></div>
      
      <FeaturesSectionLeft
        features={tFeaturesPagePaymentsSection("title")}
        description={tFeaturesPagePaymentsSection("Description")}
        FeatureImage={tFeaturesPagePaymentsSection("Image")}
        ImageDirection="flex-tFeaturesPagePaymentsSection-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={tFeaturesPagePaymentsSection("BtnLabel")}
        ButtonLink={tFeaturesPagePaymentsSection("BtnLink")}
      />
      <FeaturesSectionRight
        features={tFeaturesPageWalletPaymentsSection("title")}
        description={tFeaturesPageWalletPaymentsSection("Description")}
        FeatureImage={tFeaturesPageWalletPaymentsSection("Image")}
        ImageDirection="my-custom-class"
        // locale={locale}
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={tFeaturesPageWalletPaymentsSection("BtnLabel")}
      />
      <FeaturesSectionLeft
        features={tFeaturesPageBrandposSection("title")}
        description={tFeaturesPageBrandposSection("Description")}
        FeatureImage={tFeaturesPageBrandposSection("Image")}
        ImageDirection="flex-row-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={tFeaturesPageBrandposSection("BtnLabel")}
      />
      <FeaturesSectionRight
        features={tFeaturesPageBankPaySection("title")}
        description={tFeaturesPageBankPaySection("Description")}
        FeatureImage={tFeaturesPageBankPaySection("Image")}
        ImageDirection="my-custom-class"
        // locale={locale}
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={tFeaturesPageBankPaySection("BtnLabel")}
      />
      <OrderPlace />
      <AppFeatures />
      <PaymentSection />
      <WeCanFindSlider />
      <FeaturesSectionRight
        features={tFeaturesPageSecuritySection("title")}
        description={tFeaturesPageSecuritySection("Description")}
        FeatureImage={tFeaturesPageSecuritySection("Image")}
        ImageDirection="flex-row-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        // locale={locale}
        ButtonLabel={tFeaturesPageSecuritySection("BtnLabel")}
      />
    </div>
  );
};

export default Pricefeatures;
