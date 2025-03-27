// import { useTranslations } from "next-intl";

// export default function ContactDetailPage({ params }: { params: { locale: string; slug: string } }) {
//   const t = useTranslations("ContactPage");
//   const { slug } = params;

//   return (
//     <div>
//       <h1>{t("contactDetailTitle", { slug })}</h1>
//       <p>This is the contact detail page for: {slug}</p>
//     </div>
//   );
// }

import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import MainBanner from "@/components/MainBanner";

import { useTranslations } from "next-intl";

import { getMessages } from "next-intl/server";
import React from "react";


export async function generateMetadata({
  params: { locale, slug   },
}: {
  params: { locale: string; slug: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.aboutTitle;

  const baseUrl = 'https://www.yoursite.com';
  const currentPath = `/${locale}/${slug}`; 
  const canonicalUrl = `${baseUrl}${currentPath}`;


  return {
    title,
    alternates: {
      canonical: canonicalUrl, 
    },
   
  };
}

const ContactPage = () => {
  const tMainBanner = useTranslations("ContactPage.MainBanner");
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

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-20">
        <ContactForm />
      </div>

     
    <ContactMap />
    
    </>
  );
};

export default ContactPage;
