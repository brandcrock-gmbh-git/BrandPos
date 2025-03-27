"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import Laptop from "@/public/Integrations/Pos/Laptop.svg";
import { useTranslations } from "next-intl";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex  items-center justify-center rounded-20 max-w-[350px] xl:max-w-[420px] bg-white p-3 xl:p-5 box-shadow-custom",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const tAccountSectionContent = useTranslations("IntegrationsAccounting.AccountSection.AccountSectionContent");

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full px-4 pb-8 pt-2 sm:pb-10 sm:pt-2 md:pb-12 md:pt-2 items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-col container mx-auto px-0 max-h-[720px] items-stretch justify-between gap-5">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="ml-[3%]">
            <div className="flex gap-6 items-center">
              <Image
                src={tAccountSectionContent("ContentOne.Image")}
                alt="datev - BrandPos"
                width={150}
                height={150}
                className="w-[100px] xl:w-[150px]"
              />
              <div className="text-gray-200 text-16 xl:text-18">
                {tAccountSectionContent("ContentOne.Description")}
              </div>
            </div>
          </Circle>
          <Circle ref={div5Ref} className="mr-[3%]">
            <div className="flex gap-6 items-center">
              <Image
                src={tAccountSectionContent("ContentTwo.Image")}
                alt="zoho-Book - BrandPos"
                width={150}
                height={150}
                className="w-[100px] xl:w-[150px]"
              />
                <div className="text-gray-200 text-16 xl:text-18">
                {tAccountSectionContent("ContentTwo.Description")}
              </div>
            </div>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <div className="flex gap-6 items-center">
              <Image
                src={tAccountSectionContent("ContentThree.Image")}
                alt="datev - BrandPos"
                width={150}
                height={150}
                className="w-[100px] xl:w-[150px]"
              />
              <div className="text-gray-200 text-16 xl:text-18">
                {tAccountSectionContent("ContentThree.Description")}
              </div>
            </div>
          </Circle>
          <Circle
            ref={div4Ref}
            className="w-[475px] bg-transparent border-none shadow-none p-0 integration-box"
          >
            <Image src={Laptop} alt="laptop - BrandPos" width={470} height={370} />
          </Circle>
          <Circle ref={div6Ref}>
            <div className="flex gap-6 items-center">
              <Image
                src={tAccountSectionContent("ContentFour.Image")}
                alt="datev - BrandPos"
                width={150}
                height={150}
                className="w-[100px] xl:w-[150px]"
              />
                <div className="text-gray-200 text-16 xl:text-18">
                {tAccountSectionContent("ContentFour.Description")}
              </div>
            </div>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="ml-[3%]">
            <div className="flex gap-6 items-center">
              <Image
                src={tAccountSectionContent("ContentFive.Image")}
                alt="datev - BrandPos"
                width={150}
                height={150}
                className="w-[100px] xl:w-[150px]"
              />
                <div className="text-gray-200 text-16 xl:text-18">
                {tAccountSectionContent("ContentFive.Description")}
              </div>
            </div>
          </Circle>
          <Circle ref={div7Ref} className="mr-[3%]">
            <div className="flex gap-6 items-center">
              <Image
                src={tAccountSectionContent("ContentSix.Image")}
                alt="datev - BrandPos"
                width={150}
                height={150}
                className="w-[100px] xl:w-[150px]"
              />
               <div className="text-gray-200 text-16 xl:text-18">
                {tAccountSectionContent("ContentSix.Description")}
              </div>
            </div>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
