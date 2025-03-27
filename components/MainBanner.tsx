import Image from "next/image";
import React from "react";
import Button from "./ButtonCustom";
import IconType from "@/public/ButtonIconBlue.svg";
// import HeroVideo from "@/public/video.avif";
import Link from "next/link";


type MainBanner = {
  bannerMainHeading?: string;
  bannerBtnLabel?: string;
  bannerBtnLink?: string;
  bannerDesktop?: string;
  bannerMobile?: string;
  BannerSubHeading?: string;
};



const MainBanner = ({bannerMainHeading,bannerBtnLabel, bannerBtnLink, bannerDesktop,bannerMobile, BannerSubHeading}:MainBanner) => {
const MainHeading = bannerMainHeading;
  return (
    <div>
      <div className="mainbanner bg-blue-default   relative flex flex-col lg:flex-row items-center justify-center w-full max-w-full">
        <div className="container mx-auto px-4 pt-[155px] pb-[20px] lg:pt-[0] lg-pb-[20px] lg:top-[55%] lg:-translate-y-2/4 xl:top-[55%] xl:-translate-y-2/4 lg:absolute text-white z-50">
          <div className="content text-center lg:text-start lg:max-w-[80%] ">
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-48  font-extrabold text-white flex justify-center lg:justify-start items-center">
              <h1 dangerouslySetInnerHTML={{ __html: MainHeading || "" }} />
            </div>
            <ul className="text-white text-16 lg:text-18 font-normal lg:font-bold grid gap-2 md:gap-3 lg:max-w-[55%] py-5 lg:py-8 flex gap-3 items-start justify-center lg:justify-start">


            
            {BannerSubHeading && Object.entries(BannerSubHeading).map(([key,value], i) => {
                return (
                  <li key={i} className="flex items-start gap-3 break-all sm:break-normal">
                    <Image src="/WhiteCheckMark.svg" width={20} height={20} alt={`${key}-imge-BrandPos`} className="mt-1" />
                    <span className="text-start"> {value}</span>
                  </li>
                );
            })}
           
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Button
                type="submit"
                icon={IconType.src}
                iconPosition="right"
                variant="primaryBanner"
                size="Bannermd"

              >
                <Link href={bannerBtnLink || ""} className="font-bold" target="_blank">
                    {bannerBtnLabel}
                </Link>
               
              </Button>
             
            </div>
          </div>
        </div>

        <Image
          src={bannerDesktop || "no image"}
          alt="Main-Banner - BrandPos"
          height={1080}
          width={1920}
          quality={100}
          loading="eager"
          className="w-full relative hidden lg:flex"
        />

        {/* <Image src={HeroVideo}  alt="Main-Banner - BrandPos"
          height={1080}
          width={1920}
          quality={100}
          loading="eager"> 

        </Image> */}

        <Image
          src={bannerMobile || "no image mobile"}
           alt="Main-Banner - BrandPos"
          height={850}
          width={1920}
          quality={100}
          loading="eager"
          className="w-full relative flex lg:hidden"
        />

      </div>
    </div>
  );
};

export default MainBanner;
