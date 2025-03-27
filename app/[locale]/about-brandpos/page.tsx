import AboutCredibility from "@/components/AboutCredibility";
import BrandPosIntro from "@/components/BrandPosIntro";
import MainBanner from "@/components/MainBanner";
import OurMisstion from "@/components/OurMisstion";
import OurTeam from "@/components/OurTeam";
// import OurTeam from "@/components/OurTeam";
import { useTranslations } from "next-intl";
// import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Page.About.Title;
  const description = messages.Page.About.Description;
  const keywords = messages.Page.About.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.About.path;
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

const AboutPage = () => {
  const tMainBanner = useTranslations("AboutPage.MainBanner");
  const tBannerSubHeading = tMainBanner.raw("BannerSubHeading");
  return (
    <>
      <MainBanner
        bannerMainHeading={tMainBanner("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tMainBanner("BannerImageDesktop")}
        bannerMobile={tMainBanner("BannerImageMobile")}
        bannerBtnLabel={tMainBanner("MainBannerBtnLabel")}
        bannerBtnLink={tMainBanner("MainBannerBtnLink")}
      />

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <BrandPosIntro />
        <AboutCredibility />
        <OurMisstion />
        <OurTeam />
      </div>
    </>
  );
};

export default AboutPage;
