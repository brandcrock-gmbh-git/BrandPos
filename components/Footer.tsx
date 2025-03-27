"use client";

import Image from "next/image";
import React, { ChangeEvent } from "react";
import logo from "@/public/Logo.svg";
import emailIcon from "@/public/Email.svg";
import phoneIcon from "@/public/Phone.svg";
import Address from "@/public/Location.svg";
import GoogleStore from "@/public/GoogleStore.svg";
import AppStore from "@/public/AppStore.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

const Footer = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname?.split("/").slice(2).join("/") ?? "";
    router.push(`/${newLocale}/${path}`);
  };

  const tfooter = useTranslations("footer");
  const htmlContent: string = tfooter("LinkTwo");
  const AddressTwo: string = tfooter("AddressTwo");

  return (
    <div className="bg-blue-100 pt-4 lg:pt-4 pb-4 mt-0 sm:mt-8">
      <div className="container mx-auto px-4 ">
        <div className="footer-top flex flex-col lg:flex-row justify-between items-center lg:items-end"></div>
        <div className="footer-middle flex flex-col lg:flex-row justify-between pt-10 pb-12 gap-7 lg:gap-0">
          <div>
            <div className="pb-0 justify-center flex">
              <Image src={logo} alt="Footer-logo - BrandPos" width={180} height={45} />
            </div>
            <div className="social mt-6">
              <ul className="flex justify-center gap-4 text-22">
                <li>
                  <Link href="https://www.linkedin.com/" target="_blank" aria-label="linkedin">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/" target="_blank" aria-label="youtube">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.Instagram.com/" target="_blank" aria-label="Instagram">
                    <RiInstagramFill />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.github.com/" target="_blank" aria-label="github">
                    <SiGithub />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.x.com/" target="_blank" aria-label="Twitter">
                    <BsTwitterX />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-20 sm:text-3xl text-gray-100 font-bold text-center pb-6">
              {tfooter("FooterHeading")}
            </h2>
            <div className="footerLogo flex justify-center gap-3">
              <Link href="https://play.google.com/store/apps/details?id=com.brandcrock.brandpos" target="_blank">
                <Image src={GoogleStore} alt="googleStore - BrandPos" width={120} height={40} />
              </Link>
              <Link href="https://apps.apple.com/ma/app/brandpos/id1604542825" target="_blank">
                <Image src={AppStore} alt="googleStore - BrandPos" width={120} height={40} />
               
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center md:items-start text-center w-full lg:w-auto sm:text-start flex-col md:flex-row lg:flex-col gap-7 lg:gap-1 justify-center lg:justify-center">
              <div className="flex flex-col justify-end text-gray-100 text-16 gap-1">
                <div className="flex">
                  <Image src={phoneIcon} alt="phoneIcon - BrandPos" width={16} height={16} className="mr-2" />
                  <Link href="tel:+49(0)892154 7447">{tfooter("PhoneNumber")}</Link>
                </div>
                <div className="flex">
                  <Image src={emailIcon} alt="emailIcon - BrandPos" width={16} height={16} className="mr-2" />
                  <Link href="mailto:info@brandpos.com">{tfooter("EmailAddress")}</Link>
                </div>
              </div>
              <div className="address-two text-16 text-gray-100 text-start flex items-start">
                <Link href="https://maps.app.goo.gl/NC5Vnq8vudCMR25p9" target="_blank" className="text-start flex items-start">
                  <Image src={Address} alt="Address-icon - BrandPos" width={16} height={16} className="mr-2 mt-[4px]" />
                  <span className="text-16 text-gray-100" dangerouslySetInnerHTML={{ __html: AddressTwo }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t text-center flex-col gap-3 xl:flex-row items-center flex justify-between border-blue-default pt-6 pb-4">
          <div className="footer-copyright text-center md:text-start text-gray-100 text-16">
            {tfooter("Copyright")}
          </div>
          <div className="footer-nav text-c md:text-end flex lg:flex-row flex-col  items-center gap-4">
            <div className="relative">
              <label id="language-select"></label>
              <select
                aria-label="Switch-Langauge"
                value={locale}
                onChange={handleLanguageChange}
                className="py-[9px] pl-[9px] pr-[10px] language-select hover:outline-none focus:outline-none bg-transparent text-default rounded-full cursor-pointer"
                aria-labelledby="language-select"
                suppressHydrationWarning
              >
                <option value="en" label="en" className="EnFlag">
                  English
                </option>
                <option value="de" label="de" className="DeFlag">
                  German
                </option>
              </select>

              <div className="absolute inset-y-0 left-[8px] flex items-center pr-3 pointer-events-none">
                <Image
                  src={locale === "en" ? "/Language-Icon.svg" : "/Language-Icon.svg"}
                  alt="Flag"
                  width={30}
                  height={20}
                />
              </div>
            </div>
            <div>
              <ul className="text-gray-100 text-16 flex flex-col lg:flex-row items-center">
                <li>
                  <Link href={`/${locale}/${tfooter("AboutLink")}`}>{tfooter("AboutLabel")}</Link>
                </li>

                <li className="border hidden lg:flex border-gray-200 mx-2 text-[10px] h-[14px]"></li>

                <li>
                  <Link href={`/${locale}/${tfooter("contactLink")}`}>{tfooter("contactLabel")}</Link>
                </li>
                <li className="border hidden lg:flex border-gray-200 mx-2 text-[10px] h-[14px]"></li>
                <li>
                  <Link href={`/${locale}/data-protection`}>{tfooter("dataProtectionLabel")}</Link>
                </li>
                <li className="border hidden lg:flex border-gray-200 mx-2 text-[10px] h-[14px]"></li>
                <li>
                  <Link href={`/${locale}/privacy-policy`}>{tfooter("LinkOne")}</Link>
                </li>
                <li className="border hidden lg:flex border-gray-200 mx-2 text-[10px] h-[14px]"></li>
                <li>
                  <Link href={`/${locale}/terms-and-conditions`}>
                    <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
