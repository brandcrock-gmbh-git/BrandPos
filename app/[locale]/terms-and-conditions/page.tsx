// import { detectRegionFromAPI } from "@/util/detectRegion";

import { getMessages } from "next-intl/server";
import Image from "next/image";
import React from "react";
import termandcondition from "@/public/Terms-image.svg";
import { useTranslations } from "next-intl";

import TermsSidebar from "@/components/TermsSidebar";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const detectedRegion = await detectRegionFromAPI();
  const messages: any = await getMessages({ locale });
  const title = messages.Page.TermsandConditions.Title;
  const description = messages.Page.TermsandConditions.Description;
  const keywords = messages.Page.TermsandConditions.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.Page.TermsandConditions.path;
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

const Privacy = () => {
  // const tPrivacy = useTranslations("privacy");

  const tTermsBody = useTranslations("termsofservice");
  const tTermsBodyAcceptanceofTerms = tTermsBody.raw("AcceptanceofTerms");
  const sanitizedAcceptanceofTerms = tTermsBodyAcceptanceofTerms;

  const tPrivacyBody = useTranslations("termsofservice");

  const tTermsProhibitedActivities = tPrivacyBody.raw("ProhibitedActivities");
  const sanitizedtTermsProhibitedActivitiess = tTermsProhibitedActivities;

  return (
    <div className="privacy pb-7 lg:pb-10">
      <div className="bg-blue-default pb-12 sm:pb-32 ">
        <div className="container mx-auto  px-4 py-8 sm:py-10 md:py-11">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-48 font-bold mt-28 lg:mt-44">
            {tPrivacyBody("heading")}
          </h1>
        </div>
      </div>

      <div className="bg-white container mx-auto px-4 py-8 sm:py-10 md:py-12  -mt-[70px] sm:-mt-44 rounded-20">
        <div className="flex py-14 px-8 items-center flex-col lg:flex-row ">
          <Image
            src={termandcondition}
            alt={"Terms and Conditions - BrandPos"}
            width={330}
            height={380}
            className="max-h-[200px] sm:max-h-[420px] object-contain rounded-lg sm:rounded-20 mb-6 sm:mb-12 sm:mr-12"
          />
          <div className="text-left  text-gray-200 text-16 lg:text-18  font-normal mb-4 sm:mb-10 mt-4">
            {tPrivacyBody("descriptionOne")}
          </div>
        </div>

        <div className="flex custom-sidebar ">
          {/* <div className="bg-blue-100 rounded-20 pt-8 pb-64 px-6 mr-8 h-max shrink-0 w-[350px] sticky top-[128px] mt-9">
            <Link
              href={`#${tTermsBody("sidebar.listLink.AcceptanceofTerms")}`}
              className=" bg-blue-800  flex"
            >
              <div className="text-left  text-gray-100 text-14 no-underline font-bold py-6 px-4 block  border-b border-gray-900">
                {tTermsBody("sidebar.list.AcceptanceofTerms")}
              </div>
            </Link>
            <Link href={`#${tTermsBody("sidebar.listLink.OfferedServices")}`}>
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.OfferedServices")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.UserResponsibilities")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.UserResponsibilities")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.AccountRegistration")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.AccountRegistration")}
              </div>
            </Link>
            <Link href={`#${tTermsBody("sidebar.listLink.PaymentProcessing")}`}>
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.PaymentProcessing")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.ProhibitedActivities")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.ProhibitedActivities")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.IntellectualProperty")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.IntellectualProperty")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.DataProtectionSecurity")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.DataProtectionSecurity")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.ThirdPartyServices")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.ThirdPartyServices")}
              </div>
            </Link>
            <Link href={`#${tTermsBody("sidebar.listLink.Disclaimer")}`}>
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.Disclaimer")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.LimitationLiability")}`}
            >
              <div className="text-left  text-listLink-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.LimitationLiability")}
              </div>
            </Link>
            <Link href={`#${tTermsBody("sidebar.listLink.Indemnification")}`}>
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.Indemnification")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.TerminationBlocking")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.TerminationBlocking")}
              </div>
            </Link>
            <Link href={`#${tTermsBody("sidebar.listLink.ApplicableLaw")}`}>
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.ApplicableLaw")}
              </div>
            </Link>
            <Link href={`#${tTermsBody("sidebar.listLink.Changes")}`}>
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.Changes")}
              </div>
            </Link>
            <Link
              href={`#${tTermsBody("sidebar.listLink.ContactInformation")}`}
            >
              <div className="text-left  text-gray-100 text-14  font-normal py-6 px-4  block  border-b border-gray-900">
                {tTermsBody("sidebar.list.ContactInformation")}
              </div>
            </Link>
          </div> */}

            <div className="hidden md:block">
            <TermsSidebar  />
            </div>
          <div>
            <div className="text-left  text-gray-200 text-16 md:text-20  font-normal mb-5 mt-4">
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedAcceptanceofTerms }}
              />
            </div>
            <div className="text-left  text-gray-200 text-16 md:text-20  font-normal mb-5 mt-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizedtTermsProhibitedActivitiess,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
