"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Button from "./ButtonCustom";
import IconType from "@/public/ButtonIconBlue.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactForm } from "@/lib/api";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

export const OrderPlace = () => {
  const tOrderPlace = useTranslations("OrderPlace");
  const tOrderPlaceValid = useTranslations("OrderPlace.Formvalidation");

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const formSchema = z.object({
    username: z.string().min(2, {
      message: `${tOrderPlaceValid("NameMessage")}`,
    }),
    IsBusinessOwner: z.boolean().default(true).optional(),
    phone: z
      .string()
      .min(11, { message: `${tOrderPlaceValid("PhoneMessage")}` })
      .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      IsBusinessOwner: true,
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    if (!recaptchaToken) {
      toast.error(`${tOrderPlaceValid("ReCaptecha")}`);
      setLoading(false);
      return;
    }

    const locale = "en";

    try {
      const response = await sendContactForm(
        { ...data, recaptchaToken },
        locale
      );

      if (response.ok) {
         /* eslint-disable @typescript-eslint/no-unused-vars */
        const jsonResponse = await response.json();
        // toast.success(jsonResponse.message);
        toast.success(tOrderPlace("MessageSuccess"));
        form.reset();
      } else {
        const errorResponse = await response.json();
        // toast.error(errorResponse.error);
        toast.error(tOrderPlace("MessageError"));
      }
      /* eslint-enable @typescript-eslint/no-unused-vars */
    } catch (error) {
      toast.error(tOrderPlace("MessageError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-14">
      <div className="bg-blue-default rounded-20 py-7 px-7 sm:py-12 sm:px-10 text-white grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 items-center">
        <div className="OrderPlaceContent">
          <div className="text-center sm:text-left text-26 text-white lg:text-32 font-bold w-full lg:w-3/6 mb-3">
            {tOrderPlace("title")}
          </div>
          <div className="text-16 lg:text-18 font-normal text-white">
            {tOrderPlace("Description")}
          </div>
        </div>
        <div className="OrderPlaceForm flex justify-center flex-col w-full md:w-10/12 lg:w-1/2 mx-auto pt-6 md:pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={tOrderPlace("NamePlaceHolder")}
                        {...field}
                        className="bg-transparent border-2 border-white rounded-full placeholder:text-white focus-visible:border-2 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="pt-3 px-3" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={tOrderPlace("NumberPlaceHolder")}
                        {...field}
                        className="bg-transparent border-2 border-white rounded-full placeholder:text-white focus-visible:border-2 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="pt-3 px-3" />
                  </FormItem>
                )}
              />
              <div className="flex justify-between flex-col gap-1 items-start">
                <FormField
                  control={form.control}
                  name="IsBusinessOwner"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 items-center">
                      <FormControl>
                        <Checkbox
                          id="business-owner-checkbox"
                          aria-label="business-owner-checkbox"
                          // checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel htmlFor="business-owner-checkbox">
                          {tOrderPlace("IsBusinessOwner")}
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col items-start  justify-between">
                <Button
                  type="submit"
                  icon={IconType.src}
                  iconPosition="right"
                  variant="primary"
                  size="md"
                >
                  {loading
                    ? `${tOrderPlace("ButtonTextSending")}`
                    : `${tOrderPlace("ButtonText")}`}
                </Button>
                <div className="mt-3">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_CAPTACHA_SITE_KEY || ""}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
