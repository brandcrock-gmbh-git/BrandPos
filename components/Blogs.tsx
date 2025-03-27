"use client"
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "./ButtonCustom";
import  IconType  from "@/public/ButtonIconGray.svg"
import Image from "next/image";

const Blogs = () => {
  const tBlogSection = useTranslations("BlogSection");
  const tblogs = tBlogSection.raw('Blogs');
  const [visible, setvisble] = useState(3)

  const ShowMoreItem = () =>{
    setvisble((prevValue) => prevValue + 3 )
  }
  const totalBlogs = Object.keys(tblogs).length; 
  const allBlogsVisible = visible >= totalBlogs; 
  return (
    <div>
       
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
       <div className="">
        <SectionTitle
            SectionTitle={tBlogSection("Title")}
            sectionDescription=""
            />
       </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 lg:gap-20 py-8 sm:py-10 md:py-12 pr-12 lg:pr-12">
     
        {Object.entries(tblogs).slice(0,visible).map(([key],index) => {
            return (
                <>
                    <div key={index} className="box-shadow-custom rounded-20">
                      
                        <div className="relative -top-4 -right-9 after:content-[''] after:absolute after:inset-0 after:bg-black/30 after:rounded-20">
                            <Image src={tBlogSection(`Blogs.${key}.BlogThumnail`)} alt="BlogThumbnail - BrandPos" width={420} height={320} className="w-full rounded-[20px]" />
                            {/* <Image src={tBlogSection(`Blogs.${key}.BlogThumnail`)} alt="BlogThumbnail - BrandPos" width={420} height={320} className="w-full min-h-[340px] object-contain" /> */}
                            <div className="absolute bottom-4 left-4 text-white z-10">{tBlogSection(`Blogs.${key}.BlogPublishDate`)}</div>
                        </div>
                        <div className="pl-9 pb-6 pr-6">
                                <h3 className="text-18 font-semibold text-gray-100 pt-3  pb-2">
                                {tBlogSection(`Blogs.${key}.BlogTitle`).trim().length > 57 
                                    ? tBlogSection(`Blogs.${key}.BlogTitle`).substring(0, 57) + "..." 
                                    : tBlogSection(`Blogs.${key}.BlogTitle`)}
                                </h3>
                            <div className="text-gray-200 text-18 pb-5">
                        
                            {tBlogSection(`Blogs.${key}.BlogContent`).trim().length > 100 ? tBlogSection(`Blogs.${key}.BlogContent`).substring(0, 200) + "..." : tBlogSection(`Blogs.${key}.BlogContent`)}
                            </div>
                                <Button type="submit" icon={IconType}  iconPosition="rightRelative" variant="TransparentBg" size="TransparentMd" className="mx-auto sm:mx-0 flex w-full justify-end">
                                    <Link href= {tBlogSection(`Blogs.${key}.BlogLink`)}>{tBlogSection(`Blogs.${key}.BlogLabel`)}</Link>
                                </Button>
                    </div>
                    </div>
                 </>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            onClick={ShowMoreItem}
            icon={IconType}
            iconPosition="right"
            variant="secondary"
            size="md"
            className="mx-auto sm:mx-0"
            disabled={allBlogsVisible} 
          >
            {allBlogsVisible
              ? tBlogSection("NoLoadMore")
              : tBlogSection("LoadMore")}
          </Button>
        </div>

        
      </div>
    </div>
  );
};

export default Blogs;
