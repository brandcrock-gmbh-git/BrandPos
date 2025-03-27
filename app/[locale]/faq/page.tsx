import React from "react";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainBanner from "@/components/MainBanner";
import FaqContact from "@/components/FaqContact";
import FaqSlider from "@/components/FaqSlider";
import { getMessages } from "next-intl/server";
import FaqCharacteristics from "@/components/FaqCharacteristics";
import logo from "@/public/Logo.svg"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Page.FAQ.Title;
  const description = messages.Page.FAQ.Description;
  const keywords = messages.Page.FAQ.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.FAQ.path;
  const canonicalUrl = `${baseUrl}/${locale}/${path}`;
  const OgImage = logo

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
          // url: {OgImage}, // Use a default image if none provided
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
      images: {OgImage}, // Use a default image if none provided
    },
  };
}

const SolutionSection = () => {
  const tFaqPage = useTranslations("FaqPage.MainBanner");
  const tBannerSubHeading = tFaqPage.raw("BannerSubHeading");

  return (
    <>
      <MainBanner
        bannerMainHeading={tFaqPage("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tFaqPage("BannerImageDesktop")}
        bannerMobile={tFaqPage("BannerImageMobile")}
        bannerBtnLabel={tFaqPage("MainBannerBtnLabel")}
        bannerBtnLink={tFaqPage("MainBannerBtnLink")}
      />
      <FaqCharacteristics />

      <FaqSlider />
      <FaqContact />
    </>
  );
};

export default SolutionSection;
