"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import { GoPlus } from "react-icons/go";
// import { FaMinus } from "react-icons/fa6";



import { cn } from "@/lib/utils";
import Image from "next/image";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("box-shadow-faq py-4 px-6 rounded-20 my-5 text-gray-200", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn("flex flex-1 items-center text-gray-200 text-16 sm:text-18 justify-between py-2 sm:py-3  font-semibold transition-all hover:no-underline", "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
        onClick={() => setIsOpen(!isOpen)} 
      >
        {children}
        {/* <div className="bg-blue-100 p-2 rounded-md shadow-sm flex flex-shrink-0 ml-4"> */}
             {/* <ChevronDownIcon className="h-20 w-20 shrink-0 text-muted-foreground transition-transform duration-200 bg-blue-100 p-2 rounded-md shadow-sm flex flex-shrink-0 ml-4" /> */}
        {/* </div> */}
        {/* <GoPlus  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 flex" />
        <FaMinus  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" /> */}
     
        {!isOpen ? (
          <div className="bg-blue-100 p-2 rounded-md shadow-sm flex flex-shrink-0 ml-4">
          <Image src="/PlusIcon.svg" alt="Expand Icon - BrandPos" width={20} height={20} />
          </div>
        ) : (
          <div className="bg-blue-100 p-2 rounded-md shadow-sm flex flex-shrink-0 ml-4">
          <Image src="/MinusIcon.svg" alt="Collapse Icon - BrandPos" width={20} height={20} className="h-[20px]"/>
          </div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-18", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
