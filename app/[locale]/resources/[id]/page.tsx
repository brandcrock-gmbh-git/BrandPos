import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BlogCategoryIcon from "@/public/Blog-category-icon.svg";
import BlogDate from "@/public/BlogDate.svg";
import BlogAuthor from "@/public/BlogAuthor.svg";
import Link from "next/link";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  const messages: any = await getMessages({ locale });

  // Dynamically fetch the title based on the id
  const title = messages.BlogDetail?.[id]?.BlogTitle || "BrandPos | Blog";  // Default if id doesn't exist
  const description = messages.BlogDetail?.[id]?.Description || "BrandPos | Blog Description";
  const keywords = messages.Page.Home.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = messages.BlogDetail?.[id]?.BlogUrl;
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

const Pagess = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tblog = useTranslations("BlogDetail");
  <h1>{id}</h1>
  // Directly sanitize the content during rendering
  const rawHTML = tblog.raw(`${id}.BlogBody`);
  const rawTitle = tblog.raw(`${id}.Title`);
  const sanitizedHTML = rawHTML;
  const sanitizedTitle = rawTitle;

  return (
    <div className="privacy">
      <div className="bg-blue-default pb-8 sm:pb-32">
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-11">
          <div className="text-white text-34 md:text-36 lg:text-40 font-bold mt-28 lg:mt-44">
            {/* Recent */}
          </div>
          
          <div className="text-left text-white text-16 md:text-20 lg:text-22 font-normal mb-10 mt-4"></div>
        </div>
      </div>
      <div className="bg-white container mx-auto p-0   -mt-[70px] sm:-mt-44 rounded-20">
        <Image
          src={tblog(`${id}.BlogThumnail`)}
          alt={sanitizedTitle}
          width={1280}
          height={380}
          className="w-full max-h-[420px] object-cover rounded-20"
        />
        <div className="pt-5 flex gap-4 sm:gap-7 px-4 flex-wrap blog-author">
          <Link href="#" className="flex gap-3">
            <Image src={BlogCategoryIcon} alt="BlogCategoryIcon - BrandPos" />
            <div>{tblog(`${id}.Category`)}</div>
          </Link>

          <Link href="#" className="flex gap-3">
            <Image src={BlogDate} alt="BlogDate - BrandPos" />
            <div>{tblog(`${id}.Date`)}</div>
          </Link>

          <Link href="#" className="flex gap-3">
            <Image src={BlogAuthor} alt="BlogAuthor - BrandPos" />
            <div>{tblog(`${id}.Author`)}</div>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div
          className="text-16 text-gray-100 font-bold"
          dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
        />
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    </div>
  );
};

export default Pagess;
