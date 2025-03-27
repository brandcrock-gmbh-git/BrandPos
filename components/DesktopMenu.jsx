"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu({ menu, locale }) {
  const [isHover, toggleHover] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.3 },
      display: isLoaded ? "block" : "none",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  const pathname = usePathname();

  // Normalize paths: Remove trailing slashes
  const sanitizedMenuLink =
    menu.link === "/" ? "" : menu.link?.replace(/^\/+|\/+$/g, "");

  const menuLink = `/${locale}${sanitizedMenuLink ? `/${sanitizedMenuLink}` : ""}`;

  const normalizedPathname = pathname.replace(/^\/+|\/+$/g, ""); // Removing trailing slashes

  let isActive = false;

  // Active state logic for different locales
  if (locale === "de") {
    if (sanitizedMenuLink === "plans") {
      isActive =
        normalizedPathname === "de/plant" ||
        normalizedPathname.startsWith("de/plant");
    }
    if (sanitizedMenuLink === "features") {
      isActive =
        normalizedPathname === "de/merkmale" ||
        normalizedPathname.startsWith("de/merkmale");
    }
    if (sanitizedMenuLink === "integrations") {
      // Match exact or sub-page path for integrations (including sub-pages)
      isActive =
        normalizedPathname.startsWith("de/integrationen") ||
        normalizedPathname === "de/integrationen";
    }
    if (sanitizedMenuLink === "resources") {
      isActive =
        normalizedPathname === "de/ressourcen" ||
        normalizedPathname.startsWith("de/ressourcen");
    }
    if (sanitizedMenuLink === "") {
      isActive = normalizedPathname === "de";
    }
  }

  if (locale === "en") {
    if (sanitizedMenuLink === "features") {
      isActive =
        normalizedPathname === "en/features" ||
        normalizedPathname.startsWith("en/features");
    }
    if (sanitizedMenuLink === "plans") {
      isActive =
        normalizedPathname === "en/plans" ||
        normalizedPathname.startsWith("en/plans");
    }
    if (sanitizedMenuLink === "integrations") {
      // Match exact or sub-page path for integrations (including sub-pages)
      isActive =
        normalizedPathname.startsWith("en/integrations") ||
        normalizedPathname === "en/integrations";
    }
    if (sanitizedMenuLink === "resources") {
      isActive =
        normalizedPathname === "en/resources" ||
        normalizedPathname.startsWith("en/resources");
    }
    if (sanitizedMenuLink === "") {
      isActive = normalizedPathname === "en";
    }
  }

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span
        className={`group flex-center cursor-pointer transition-all rounded-full px-4 py-[7px] 
        ${isActive
          ? "bg-blue-40 text-blue-default font-bold"
          : "hover:bg-blue-40 hover:text-blue-default text-white"}`}
      >
        {menu.link ? (
          <Link
            href={menuLink}
            className="font-semibold text-16 transition-all relative"
          >
            {menu.name}
          </Link>
        ) : (
          <span className="font-semibold text-16">{menu.name}</span>
        )}

        {menu?.subMenu?.length && (
          <ChevronDown
            className={`mt-[0.6px] group-hover:rotate-180 duration-200 group-hover:text-blue-default  ${
              isActive
                ? "bg-blue-40 text-blue-default font-bold"
                : "hover:bg-blue-40 hover:text-blue-default text-white"
            }`}
          />
        )}
      </span>
      {menu?.subMenu?.length && (
        <motion.div
          className="sub-menu z-50"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-blue-default">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <div className="flex-center gap-x-4 group/menubox">
                  <div className="bg-white w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-100 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <Link href={`/${locale}/${submenu.link}`}>
                      <div className="font-semibold">{submenu.name}</div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
