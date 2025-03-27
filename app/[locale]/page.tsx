
import { FeaturesSectionRight } from "@/components/FeaturesSectionRight";
import { FeaturesSectionLeft } from "@/components/FeaturesSectionLeft";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import ManufactureSlider from "@/components/ManufactureSlider";
import SolutionSection from "@/components/SolutionSection";
import FeatureSectionBg from "@/public/Watch-a-video-bg.svg";
import { OrderPlace } from "@/components/OrderPlace";
import WhyBrandPos from "@/components/WhyBrandPos";
import PersonalisedSolution from "@/components/PersonalisedSolution";
import MeetOutCustomer from "@/components/MeetOutCustomer";
import MainBanner from "@/components/MainBanner";
// import { detectRegionFromAPI } from "@/util/detectRegion";
// import logo from "@/public/Logo.svg";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {

  // const detectedRegion = await detectRegionFromAPI();
  const messages: any = await getMessages({ locale });
  const title = messages.Page.Home.Title;
  const description = messages.Page.Home.Description;
  const keywords = messages.Page.Home.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const path = `/`;
  const canonicalUrl = `${baseUrl}/${locale}`;
  
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
      // url: `baseUrl/${slug}`,
      images: [
        {
          url: "/Logo.svg", // Use a default image if none provided
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
      images: "/Logo.svg", // Use a default image if none provided
    },
    // region: detectedRegion, // Adding region to metadata
  };
}

// export default function Home ({ locale }: { locale: string }) {
export default function Home() {
  const FeatureSectionDiscover = useTranslations("FeatureSectionDiscover");
  
  const FeatureSectionNFC = useTranslations("FeatureSectionNFC");
  const FeatureSectionQR = useTranslations("FeatureSectionQR");
  const FeatureSectionManagement = useTranslations("FeatureSectionManagement");
  const FeatureSectionVideo = useTranslations("FeatureSectionVideo");
  const tHomePage = useTranslations("HomePage.MainBanner");
  const tBannerSubHeading = tHomePage.raw("BannerSubHeading");


  // const region =  detectRegionFromAPI(); 
  // console.log(region);
  return (
    <>
      <MainBanner
        bannerMainHeading={tHomePage("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tHomePage("BannerImageDesktop")}
        bannerMobile={tHomePage("BannerImageMobile")}
        bannerBtnLabel={tHomePage("MainBannerBtnLabel")}
        bannerBtnLink={tHomePage("MainBannerBtnLink")}
      />
      {/* <h1 className="text-8xl text-center">Region: {region}</h1> */}
      <div className="bg-gray-300 py-5">
        <div className="container mx-auto">
          <ManufactureSlider />
        </div>
      </div>

      <div className="py-8 sm:py-10 md:py-14">
        <FeaturesSectionRight
        
          features={FeatureSectionDiscover("title")}
          description={FeatureSectionDiscover("Description")}
          // FeatureImage={FeatureSectionDiscover("region.pk.Image")}
          FeatureImage={FeatureSectionDiscover(`region.default.Image`)}
          ImageDirection="my-custom-class"
          // locale={locale}
          playStoreImageEnabled={true}
          buttonEnabled={false}
        />
      </div>
      <SolutionSection />
        
      <FeaturesSectionLeft
        features={FeatureSectionNFC("title")}
        description={FeatureSectionNFC("Description")}
        FeatureImage={FeatureSectionNFC("Image")}
        ImageDirection="flex-row-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={FeatureSectionNFC("BtnLabel")}
        ButtonLink={FeatureSectionNFC("BtnLink")}
      />
      <FeaturesSectionRight
        features={FeatureSectionQR("title")}
        description={FeatureSectionQR("Description")}
        FeatureImage={FeatureSectionQR("Image")}
        ImageDirection="my-custom-class"
        // locale={locale}
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={FeatureSectionQR("BtnLabel")}
        ButtonLink={FeatureSectionQR("BtnLink")}
      />
      <FeaturesSectionLeft
        features={FeatureSectionManagement("title")}
        description={FeatureSectionManagement("Description")}
        FeatureImage={FeatureSectionManagement("Image")}
        ImageDirection="flex-row-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={FeatureSectionManagement("BtnLabel")}
      />
      <div
        style={{ backgroundImage: `url(${FeatureSectionBg.src})` }}
        className="bg-cover bg-center"
      >
        <FeaturesSectionRight
          features={FeatureSectionVideo("title")}
          description={FeatureSectionVideo("Description")}
          FeatureImage={FeatureSectionVideo("Image")}
          ImageDirection="my-custom-class"
          // locale={locale}
          playStoreImageEnabled={true}
          buttonEnabled={false}
          isVideo={true}
        />
      </div>
      <OrderPlace />
      <WhyBrandPos />
      <PersonalisedSolution />
      <MeetOutCustomer />
    </>
  );
}
