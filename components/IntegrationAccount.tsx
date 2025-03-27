import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IntegrationAccount = () => {
  const tAccountSection = useTranslations("IntegrationsAccounting.AccountSection");
  const tAccountSectionContent = tAccountSection.raw("AccountSectionContent");
  return (
    <div className="container mx-auto px-4 pb-8 pt-2 sm:pb-10 sm:pt-2 md:pb-12 md:pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
     

      {Object.entries(tAccountSectionContent).map(([key], i) => {
          return (
            <>
              <div key={i} className="box-shadow-custom p-4 sm:p-6 lg:p-8 rounded-20">
                <div className="flex gap-6 items-center">
                  <Image src=  {tAccountSection(`AccountSectionContent.${key}.Image`)} alt="datev"
                    width={150}
                    height={150}
                    className="w-[100px] xl:w-[150px]"
                  />
                  <div className="text-gray-200 text-16 sm:text-18">
                    {tAccountSection(`AccountSectionContent.${key}.Description`)}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationAccount;
