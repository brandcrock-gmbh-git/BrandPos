import CharacteristicsSection from "@/components/CharacteristicsSection";
import { OrderPlace } from "@/components/OrderPlace";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import MainBanner from "@/components/MainBanner";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Page.IntegrationPos.Title;
  const description = messages.Page.IntegrationPos.Description;
  const keywords = messages.Page.IntegrationPos.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path =  messages.Page.IntegrationPos.path;
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

const IntegrationsPosSystem = () => {
  const IntegrationsPosSystemData = {
    pickware: {
      Image: "/Integrations/pickware.svg",
    },
    Gk: {
      Image: "/Integrations/Gk.svg",
    },
    etron: {
      Image: "/Integrations/etron.svg",
    },
    Light: {
      Image: "/Integrations/Light.svg",
    },
    Ready2Order: {
      Image: "/Integrations/Ready2Order.svg",
    },
    possum: {
      Image: "/Integrations/possum.svg",
    },
    UCS: {
      Image: "/Integrations/UCS.svg",
    },
    Vectron: {
      Image: "/Integrations/Vectron.svg",
    },
  };
  const tIntegrationsPosSystem = useTranslations("IntegrationsPosSystem");
  const tIntegrationsMainBanner = useTranslations(
    "IntegrationsPosSystem.MainBanner"
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
        CharacteristicsImage={tIntegrationsPosSystem("Image")}
        CharacteristicsTitle={tIntegrationsPosSystem("title")}
        CharacteristicsDescription={tIntegrationsPosSystem("Description")}
      />
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1">
          {Object.entries(IntegrationsPosSystemData).map(([key, value], i) => {
            return (
              <>
                <div
                  key={i}
                  className="flex py-6 sm:py-4 gap-2 flex-col sm:flex-row sm:gap-10 items-center "
                >
                  <div className="w-44 flex-shrink-0">
                    <Image
                      src={value.Image}
                      alt="Pos aplications - BrandPos"
                      width={100}
                      height={100}
                      className="pb-8 w-full "
                    />
                  </div>

                  <div className="py-8 px-8 md:py-20 md:px-16 box-shadow-custom rounded-[24px] text-gray-200 text-18">
                    {tIntegrationsPosSystem(`${key}.Description`)}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <OrderPlace />
    </>
  );
};

export default IntegrationsPosSystem;
