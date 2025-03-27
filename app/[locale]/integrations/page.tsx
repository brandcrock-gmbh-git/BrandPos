import CharacteristicsSection from "@/components/CharacteristicsSection";
import MainBanner from "@/components/MainBanner";
import { OrderPlace } from "@/components/OrderPlace";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.Page.Integration.Title;
  const description = messages.Page.Integration.Description;
  const keywords = messages.Page.Integration.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.Integration.path;
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

const Integrations = () => {
  const tintegrationsData = {
    novalnet: {
      Image: "/Integrations/novalnet.svg",
    },
    paypal: {
      Image: "/Integrations/Paypal.svg",
    },
    mollie: {
      Image: "/Integrations/mollie.svg",
    },
    adyen: {
      Image: "/Integrations/adyen.svg",
    },
    payone: {
      Image: "/Integrations/payone.svg",
    },
    Unzer: {
      Image: "/Integrations/Unzer.svg",
    },
    Wordline: {
      Image: "/Integrations/Wordline.svg",
    },
    concardis: {
      Image: "/Integrations/concardis.svg",
    },
    stripe: {
      Image: "/Integrations/stripe.svg",
    },
    giropay: {
      Image: "/Integrations/giropay.svg",
    },
    skrill: {
      Image: "/Integrations/skrill.svg",
    },
    
  };
  const tIntegrations = useTranslations("Integrations");
  const tIntegrationsMainBanner = useTranslations("Integrations.MainBanner");
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
        CharacteristicsImage={tIntegrations("Image")}
        CharacteristicsTitle={tIntegrations("title")}
        CharacteristicsDescription={tIntegrations("Description")}
      />
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(tintegrationsData).map(([key, value], i) => {
            return (
             
                <div
                  key={i}
                  className="box-shadow-custom rounded-[24px] py-12 sm:py-14 px-7"
                >
                  <div className="">
                    <Image
                      src={value.Image}
                      alt="Payment Method Icon - BrandPos"
                      width={100}
                      height={100}
                      className="pb-8"
                    />
                  </div>

                  <div className="text-gray-200 font-normal text-18">
                    {tIntegrations(`${key}.Description`)}
                  </div>
                </div>
             
            );
          })}
        </div>
      </div>
      <OrderPlace />
    </>
  );
};

export default Integrations;
