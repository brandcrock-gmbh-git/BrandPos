import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Mainnav from "@/components/Mainnav";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";
// import RegionSelector from "@/components/RegionSelector";
// import { detectRegionFromAPI } from "@/util/detectRegion"; // Server-side region detection logic
// import RegionModal from "@/components/RegionModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800", "600", "500"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  
  // Detect the region server-side

  // const detectedRegion = await detectRegionFromAPI();

  return (
    // <html lang={locale} className={`region-${detectedRegion?.toLowerCase()}`}>
    <html lang={locale} className={`region-default`}>
      <body className={plusJakartaSans.className} >
        <NextIntlClientProvider messages={messages}>
          <Mainnav locale={locale} />
          {/* <RegionModal /> */}
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Toaster position="top-right" reverseOrder={false} />
          <Footer locale={locale} />
          {/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-full h-screen flex justify-center items-center"><RegionSelector  /></div> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}






///////////////////////////////////////////Uper code is working fine but the below code is not working fine///////////////////////////////////////////


// import "../globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import Footer from "@/components/Footer";
// import Mainnav from "@/components/Mainnav";
// import { Toaster } from "react-hot-toast";
// import { Suspense } from "react";
// import Loading from "./loading";
// import { detectRegionFromAPI } from "@/util/detectRegion"; // Server-side region detection

// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["200", "400", "700", "800", "600", "500"],
//   display: "swap",
// });

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
//   const messages = await getMessages();

//   // Detect and persist the region server-side
//   const detectedRegion = await detectRegionFromAPI();

//   return (
//     <html lang={locale} className={`region-${detectedRegion.toLowerCase()}`}>
//       <body className={plusJakartaSans.className}>
//         <NextIntlClientProvider messages={messages}>
//           <Mainnav locale={locale} />
//           <Suspense fallback={<Loading />}>{children}</Suspense>
//           <Toaster position="top-right" reverseOrder={false} />
//           <Footer locale={locale} />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// import "../globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import Footer from "@/components/Footer";
// import Mainnav from "@/components/Mainnav";
// import { Toaster } from "react-hot-toast";
// import { Suspense } from "react";
// import Loading from "./loading";
// import GetRegion from "@/components/getRegion";



// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["200", "400", "700", "800", "600", "500"],
//   display: "swap",
//   })

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
  
//   const messages = await getMessages();
//   return (
//     <html lang={locale} >
//       <body className={plusJakartaSans.className}>
//         <NextIntlClientProvider messages={messages}>
//          <GetRegion /> {/* Include the GetRegion component here */}
//           <Mainnav locale={locale} />
//           <Suspense fallback={<Loading />}> {children}</Suspense>
//           <Toaster position="top-right" reverseOrder={false} />
//           <Footer locale={locale} />
          
//         </NextIntlClientProvider>
       
//       </body>
//     </html>
//   );
// }
