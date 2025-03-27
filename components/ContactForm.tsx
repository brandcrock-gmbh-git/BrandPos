import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProfileForm } from "./ContactFormComp";

const ContactForm = () => {
  const tContactForm = useTranslations("ContactPage");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="">
        <h2 className="text-2xl sm:text-40 text-gray-100 font-semibold pb-9">
          {tContactForm("title")}
        </h2>

        <div>
          <ProfileForm />
        </div>
      </div>
      <div>
        <div className="box-shadow-custom p-6 rounded-20 mb-5">
          <Image
            src="/LocationIcon.svg"
            alt="LocationIcon - BrandPos"
            width={40}
            height={37}
            className="mb-6 h-auto" // Use w-[40px] instead of w-[40]
          />
          <div className="text-18 text-gray-200">
            {tContactForm("ContactInfo.Address")} <br />
            {tContactForm("ContactInfo.AddressHalf")}
          </div>
        </div>
        <div className="box-shadow-custom p-6 rounded-20 mb-5">
          <Image
            src="/PhoneIcon.svg"
            alt="PhoneIcon - BrandPos"
            width={40}
            height={37}
            className="mb-6 h-auto aspect-auto"
          />
          <div className="text-18 text-gray-200">
            <Link href={tContactForm("ContactInfo.PhoneOneLink")}>
              {tContactForm("ContactInfo.PhoneOne")}
            </Link>
            <br />
            <Link href={tContactForm("ContactInfo.PhoneTwoLink")}>
              {tContactForm("ContactInfo.PhoneTwo")}
            </Link>
          </div>
        </div>
        <div className="box-shadow-custom p-6 rounded-20 mb-5">
          <Image
            src="/Envelop.svg"
            alt="Envelop - BrandPos"
            width={40}
            height={37}
            className="mb-6 h-auto"
          />
          <div className="text-18 text-gray-200">
            <Link href={tContactForm("ContactInfo.EmailOneLink")}>
              {tContactForm("ContactInfo.EmailOne")}
            </Link>
            <br />
            <Link href={tContactForm("ContactInfo.PhoneTwoLink")}>
              {tContactForm("ContactInfo.EmailTwo")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
