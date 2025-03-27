
import React from "react";
import  IconType  from "@/public/ButtonIconGray.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Button from "./ButtonCustom";
import Link from "next/link";

const FaqsPlan = () => {


  const tPlanPageFaqs = useTranslations("PlanPage");
  const ResourcesFaqs = {
    FaqOne: "FaqOne",
    FaqTwo: "FaqTwo",
    FaqThree: "FaqThree",
    FaqFour: "FaqFour",
    FaqFive: "FaqFive",
  };
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <Accordion   type="multiple"  className="max-w-[960px] mx-auto">
        {Object.entries(ResourcesFaqs).map(([key, value], i) => {
          return (
            <>
              <AccordionItem key={i} value={value}>
                <AccordionTrigger className="text-start">
                  {tPlanPageFaqs(`Faqs.${key}.Question`)}
                </AccordionTrigger>

                <AccordionContent>
                  <div className="text-gray-200 text-16">{tPlanPageFaqs(`Faqs.${key}.FaqContent`)}</div>
                </AccordionContent>
              </AccordionItem>
            </>
          );
        })}
      </Accordion>
           <div className="flex justify-center">
           <Button type="submit"  icon={IconType} iconPosition="right" variant="secondary" size="md" className="mx-auto sm:mx-0">
                <Link href={tPlanPageFaqs("Faqs.BtnLink")}> {tPlanPageFaqs("Faqs.BtnLabel")}</Link>
          </Button>
           </div>
    </div>
  );
};

export default FaqsPlan;
