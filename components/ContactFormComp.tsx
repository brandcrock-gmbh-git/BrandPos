"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import IconType from "@/public/ButtonIconWhite.svg";
import Button from "./ButtonCustom";
import { useState } from "react";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-hot-toast";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";

export function ProfileForm() {
  const tContactFormValidation = useTranslations("ContactPage.Formvalidation");
  const tContactFormData = useTranslations("ContactPage.ContactForm");
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const formSchema = z.object({
    username: z.string().min(2, {
      message: `${tContactFormValidation("NameMessage")}`,
    }),
    phone: z
      .string()
      .min(11, { message: `${tContactFormValidation("PhoneMessage")}` })
      .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
    email: z.string().email({
      message: `${tContactFormValidation("EmailMessage")}`,
    }),
    messageBody: z.string().min(20, {
      message: `${tContactFormValidation("Message")}`,
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      messageBody: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    if (!recaptchaToken) {
      toast.error(`${tContactFormValidation("ReCaptecha")}`);
      setLoading(false);
      return;
    }

    const locale = "en";

    try {
      const response = await sendContactForm({ ...data, recaptchaToken }, locale);
        /* eslint-disable @typescript-eslint/no-unused-vars */
      if (response.ok) {
        const jsonResponse = await response.json();
        // toast.success(jsonResponse.message);
        toast.success(tContactFormData("MessageSuccess"));
        // toast.success(<MdEmail />);
        // toast('👏', { icon: '👏',});
        form.reset();
       /* eslint-enable @typescript-eslint/no-unused-vars */
      } else {
        const errorResponse = await response.json();
        toast.error(errorResponse.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        // toast.error("Failed to send the email: " + error.message);
        toast.error(tContactFormData("MessageError") + error.message);
      } else {
        toast.error(tContactFormData("MessageError") + String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={tContactFormData("Name")}
                  {...field}
                  className="focus-visible:ring-blue-default focus-visible:ring-2"
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
                  placeholder={tContactFormData("Phone")}
                  {...field}
                  className="focus-visible:ring-blue-default focus-visible:ring-2"
                />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={tContactFormData("Email")}
                  {...field}
                  className="focus-visible:ring-blue-default focus-visible:ring-2"
                />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messageBody"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={tContactFormData("Message")}
                  {...field}
                  rows={10}
                  className="focus-visible:ring-blue-default focus-visible:ring-2"
                />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
          <Button
            type="submit"
            icon={IconType}
            iconPosition="right"
            variant="primarySubmit"
            size="md"
            className="mx-auto sm:mx-0"
          >
            {loading
              ? `${tContactFormData("SendingLabel")}`
              : `${tContactFormData("SubmitLabel")}`}
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
  );
}
