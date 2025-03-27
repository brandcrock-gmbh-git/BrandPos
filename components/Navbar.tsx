// "use client";

// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/public/Logo.svg";
// import { usePathname, useRouter } from "next/navigation";
// import React, { ChangeEvent, useState, useEffect } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { RiMenu3Line } from "react-icons/ri";
// import { AiOutlineClose } from "react-icons/ai";
// import { useAutoAnimate } from "@formkit/auto-animate/react";

// const Navbar = ({ locale }: { locale: string }) => {
//   const [mounted, setMounted] = useState(false); // To track client-side mounting
//   const [isSideMenuOpen, setSideMenu] = useState(false);

//   // Mark the component as mounted on client
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const t = useTranslations("NavbarLinks");
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value as string;
//     const path = pathname.split("/").slice(2).join("/");
//     router.push(`/${newLocale}/${path}`);
//   };

//   type NavItem = {
//     label: string;
//     link?: string;
//     children?: NavItem[];
//     iconImage?: string;
//   };

//   const navItem: NavItem[] = [
//     {
//       label: t("home"),
//       link: "/",
//     },
//     {
//       label: t("Price & Features"),
//       link: "/Price&Features",
//     },
//     {
//       label: t("IntegrationsZero"),
//       link: "/Integrations",
//       children: [
//         {
//           label: t("IntegrationsOne"),
//           link: "Integrations/IntegrationsPosSystem",
//           iconImage: "",
//         },
//         {
//           label: t("Integrationstwo"),
//           link: "Integrations/IntegrationsAccounting",
//           iconImage: "",
//         },
//         {
//           label: t("Integrationsthree"),
//           link: "/Integrations",
//           iconImage: "",
//         },
//         {
//           label: t("Integrationsfour"),
//           link: "contact",
//           iconImage: "",
//         },
//       ],
//     },
//     {
//       label: t("Resources"),
//       link: "/Resources",
//     },
//     {
//       label: t("about"),
//       link: "/about",
//     },
//     {
//       label: t("contact"),
//       link: "/contact",
//     },
//   ];
  

//   function openSideMenu() {
//     setSideMenu(true);
//   }

//   function closeSideMenu() {
//     setSideMenu(false);
//   }
//   const [animationParent] = useAutoAnimate();

//   return (
//     <div className="container mx-auto w-full -translate-x-2/4 translate-y-3 absolute left-2/4 px-4 z-50">
//       <div
//         ref={animationParent}
//         className="flex justify-between py-4 px-4 items-center bg-nav-transparent text-blue-default rounded-full"
//       >
//         <div className="main-logo">
//           <Link href={`/${locale}/`}>
//             <Image src={logo} alt="Logo" width={145} height={44} />
//           </Link>
//         </div>

//         {/* Conditionally render MobileNav only after the component is mounted */}
//         {mounted && isSideMenuOpen && (
//           <MobileNav closeSideMenu={closeSideMenu} />
//         )}

//         <div className="navigation-right flex font-semibold items-center">
//           <div className="hidden xl:flex items-center text-lg mr-2">
//             {navItem.map((data, i) => (
//               <Link
//                 key={i}
//                 href={`/${locale}/${data.link}`}
//                 className="transition-all group px-3 py-3 relative"
//               >
//                 <p className="flex cursor-pointer items-center">
//                   <span className="flex items-center">
//                     {data.label}
//                     {data.children && (
//                       <IoIosArrowDown className="rotate-180 group-hover:rotate-0 transition-all ml-3" />
//                     )}
//                   </span>
//                 </p>

//                 {data.children && (
//                   <div className="absolute right-0 top-12 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
//                     {data.children.map((child, index) => (
//                       <Link
//                         key={index}
//                         href={`/${locale}/${child.link}`}
//                         className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
//                       >
//                         <IoIosArrowDown className="ml-3" />
//                         <span className="whitespace-nowrap pl-3">
//                           {child.label}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Suppress hydration warning for the language selector */}
//           <label id="language-select" suppressHydrationWarning></label>
//           {/* <select
//             value={locale}
//             onChange={handleLanguageChange}
//             className="px-4 py-2  hover:outline-none focus:outline-none bg-gray-100 text-white rounded-full mx-4"
//             aria-labelledby="language-select"
//             suppressHydrationWarning
//           >
//             <option value="en" label="en">
//               EN
//             </option>
//             <option value="de" label="de">
//               DE
//             </option>
//           </select> */}

//           <div className="gap-4 items-center text-white bg-blue-default rounded-full py-2 px-4 hidden lg:flex">
//             <Link
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {t("signUp")}
//             </Link>
//           </div>

//           <RiMenu3Line
//             onClick={openSideMenu}
//             className="cursor-pointer text-4xl xl:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );

//   function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
//     return (
//       <div
//         className="fixed left-0 -top-3 flex h-full min-h-screen w-full justify-end bg-black/60 xl:hidden"
//         suppressHydrationWarning
//       >
//         <div className="h-full max-w-96  w-full bg-white px-4 py-4">
//           <section className="flex justify-end">
//             <AiOutlineClose
//               onClick={closeSideMenu}
//               className="cursor-pointer text-4xl"
//             />
//           </section>

//           <div className="flex flex-col items-start text-lg mb-10">
//             {navItem.map((data, i) => (
//               <SingalNavItems key={i} {...data} />
//             ))}
//           </div>

//           <label id="language-select" suppressHydrationWarning></label>
//           <select
//             value={locale}
//             onChange={handleLanguageChange}
//             className="px-4 py-2 hover:outline-none focus:outline-none bg-gray-100 text-white rounded-full mb-3 w-full"
//             aria-labelledby="language-select"
//             suppressHydrationWarning
//           >
//             <option value="en" label="en">
//               EN
//             </option>
//             <option value="de" label="de">
//               DE{" "}
//             </option>
//           </select>

//           <div className="gap-4 items-center text-white bg-blue-default rounded-full py-2 px-4">
//             <Link
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {t("signUp")}
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   function SingalNavItems(data: NavItem) {
//     const [isItemOpen, setItem] = useState(false);
//     const [animationParent] = useAutoAnimate();

//     function toggleItem() {
//       setItem(!isItemOpen);
//     }

//     return (
//       <div className="leading-none w-full border-b" ref={animationParent}>
//         <Link
//           onClick={toggleItem}
//           href={`/${locale}/${data.link}`}
//           className="px-1 py-5 leading-3"
//         >
//           <p className="flex cursor-pointer items-center gap-2">
//             <span className="flex items-center">
//               {data.label}
//               {data.children && (
//                 <IoIosArrowDown
//                   className={`text-sm transition ${
//                     isItemOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </span>
//           </p>
//         </Link>

//         {isItemOpen && data.children && (
//           <div className="w-auto flex-col gap-1 rounded-lg bg-white pb-3 justify-start transition-all">
//             {data.children.map((child, index) => (
//               <Link
//                 key={index}
//                 href={`/${locale}/${child.link}`}
//                 className="flex cursor-pointer items-center py-2 pr-8 text-neutral-400 hover:text-black"
//               >
//                 <IoIosArrowDown className="" />
//                 <span className="whitespace-nowrap pl-3">{child.label}</span>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// };

// export default Navbar;
