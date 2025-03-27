"use client";

import React, { useEffect, useState } from "react";
import DesktopMenu from "@/components/DesktopMenu";
import MobMenu from "@/components/MobMenu";
import { useTranslations } from "next-intl";
import { Dessert, ShieldPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import RegionSelector from "./RegionSelector";

const Mainnav = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");

  type NavItem = {
    name: string;
    link?: string;
    gridCols?: number;
    subMenuHeading?: string[];
    subMenu?: NavItem[];
    icon?: React.ElementType;
  };

  const Menus: NavItem[] = [
    { name: t("home"), link: "/" },
    { name: t("plans"), link: "/plans" },
    { name: t("Features"), link: "/features" },
    {
      name: "Integrations",
      gridCols: 2,
      subMenuHeading: ["Integrations", "Integrations", "Integrations"],
      subMenu: [
        { name: t("IntegrationsZero"), link: "/integrations", icon: Dessert },
        {
          name: t("IntegrationsOne"),
          link: "/integrations/integrations-pos-system",
          icon: Dessert,
        },
        {
          name: t("Integrationstwo"),
          link: "integrations/integrations-accounting",
          icon: ShieldPlus,
        },
      ],
    },
    { name: t("Resources"), link: "/resources" },
  ];

  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    setHeader(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={`${
        header ? "fixed" : "absolute"
      } mx-auto w-full -translate-x-2/4 left-2/4 px-0 z-[1000]`}
    >
      <header
        className={`${
          header
            ? "bg-blue-50 backdrop-blur-[15px] shadow-md fixed w-full"
            : "bg-nav-transparent"
        } flex justify-between py-5  items-center  text-blue-default transition-all`}
      >
        <nav className="px-3.5 flex justify-between w-full container mx-auto">
          <div className="flex items-center gap-x-3 z-[999] relative min-w-[225px]">
            <Link href={`/${locale}/`}>
              <Image
                src="/BrandPos-White.svg"
                alt="Logo - BrandPos"
                width={160}
                height={44}
                priority={false}
              />
            </Link>
          </div>
          <div className="flex w-full justify-end">
            <ul className="xl:flex w-full justify-center items-center hidden gap-4">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} locale={locale} />
              ))}
            </ul>
           
            <div className="flex items-center gap-4 lg:min-w-[225px] justify-end">
              <div className="gap-2 items-center text-white bg-blue-default rounded-full font-normal py-[9px] px-4 hidden lg:flex">
                <Link
                  href="https://brandpos.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("signIn")}
                </Link>
                <span> | </span>
                <Link
                  href="https://brandpos.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("signUp")}
                </Link>
              </div>
              <div className="xl:hidden">
                <MobMenu Menus={Menus} locale={locale} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Mainnav;
