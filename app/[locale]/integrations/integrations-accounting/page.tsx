import { AnimatedBeamDemo } from "@/components/Beam";
import CharacteristicsSection from "@/components/CharacteristicsSection";
import IntegrationAccount from "@/components/IntegrationAccount";

import MainBanner from "@/components/MainBanner";
import { OrderPlace } from "@/components/OrderPlace";

import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Page.IntegrationAccounting.Title;
  const description = messages.Page.IntegrationAccounting.Description;
  const keywords = messages.Page.IntegrationAccounting.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.IntegrationAccounting.path;
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

const IntegrationsAccounting = () => {
  const tIntegrationsAccounting = useTranslations("IntegrationsAccounting");
  const tIntegrationsMainBanner = useTranslations(
    "IntegrationsAccounting.MainBanner"
  );
  const tBannerSubHeading = tIntegrationsMainBanner.raw("BannerSubHeading");

  return (
    <>
      <MainBanner
        bannerMainHeading={tIntegrationsMainBanner("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tIntegrationsMainBanner("BannerImageDesktop")}
        bannerMobile={tIntegrationsMainBanner("BannerImageMobile")}
        bannerBtnLabel={tIntegrationsMainBanner("MainBannerBtnLabel")}
        bannerBtnLink={tIntegrationsMainBanner("MainBannerBtnLink")}
      />

      <CharacteristicsSection
        CharacteristicsImage={tIntegrationsAccounting("Image")}
        CharacteristicsTitle={tIntegrationsAccounting("title")}
        CharacteristicsDescription={tIntegrationsAccounting("Description")}
      />
      <div className="container mx-auto px-4 ">
        <div className="hidden lg:flex">
          <AnimatedBeamDemo />
        </div>
        <div className="flex lg:hidden">
          <IntegrationAccount />
        </div>
      </div>
      <OrderPlace />
    </>
  );
};

export default IntegrationsAccounting;
