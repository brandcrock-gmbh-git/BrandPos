"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";
import React, {  useState } from "react";

const sidebarItems = [
  "AcceptanceofTerms",
  "OfferedServices",
  "UserResponsibilities",
  "AccountRegistration",
  "PaymentProcessing",
  "ProhibitedActivities",
  "IntellectualProperty",
  "DataProtectionSecurity",
  "ThirdPartyServices",
  "Disclaimer",
  "LimitationLiability",
  "Indemnification",
  "TerminationBlocking",
  "ApplicableLaw",
  "Changes",
  "ContactInformation",
];

const TermsSidebar = () => {
    const tTermsBody = useTranslations("termsofservice");
    const [activeId, setActiveId] = useState(() => tTermsBody(`sidebar.listLink.${sidebarItems[0]}`));
  
    // useEffect(() => {
    //   const ids = sidebarItems.map((item) =>
    //     tTermsBody(`sidebar.listLink.${item}`)
    //   );
    //   const targets = ids
    //     .map((id) => document.getElementById(id))
    //     .filter((target) => target !== null);
  
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           setActiveId(entry.target.id);
    //         }
    //       });
    //     },
    //     { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    //   );
  
    //   targets.forEach((target) => observer.observe(target));
  
    //   return () => {
    //     targets.forEach((target) => observer.unobserve(target));
    //     observer.disconnect();
    //   };
    // }, [tTermsBody]);
  
    const handleClick = (id: string) => {
      setActiveId(id);  // Update activeId when an item is clicked
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    return (
      <div className="bg-blue-100 custom-sidebar-underline  rounded-20 pt-12 pb-64 px-6 mr-8 h-max shrink-0 w-[280px] lg:w-[350px] sticky top-[128px] overflow-y-scroll max-h-[800px]  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-blue-200 [&::-webkit-scrollbar-thumb]:bg-blue-default [&::-webkit-scrollbar-thumb]:rounded-sm">
        {sidebarItems.map((item) => {
          const id = tTermsBody(`sidebar.listLink.${item}`);
          const isActive = activeId === id;
  
          return (
            <Link
              key={item}
              href={`#${id}`}
              onClick={() => handleClick(id)} // Add onClick to update activeId
              className={`${isActive ? 'bg-blue-800 flex' : ''}`}
            >
              <div className={`text-left text-gray-100 text-14 ${isActive ? 'no-underline font-bold' : 'font-normal'} py-6 px-4 block border-b border-gray-900`}>
                {tTermsBody(`sidebar.list.${item}`)}
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  

export default TermsSidebar;
