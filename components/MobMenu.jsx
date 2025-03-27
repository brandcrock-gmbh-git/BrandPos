"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MobMenu({ Menus, locale }) {
  const t = useTranslations("NavbarLinks");
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const menuRef = useRef(null); // Reference to the menu

  // Function to toggle the mobile menu
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  // Close the menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setClicked(null); // Reset clicked state
      }
    };

    // Add event listener on mount
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div className="flex">
<button
  className="xl:hidden z-[999] relative text-white"
  onClick={toggleDrawer}
  title="Navigation"
  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
>
  {isOpen ? <X /> : <Menu />}
</button>
      <div
  className={`container mx-auto w-full -translate-x-2/4 translate-y-3 top-20 absolute left-2/4 px-4 ${
    isOpen ? "z-[999]" : "-z-10 hidden"
  }`}
  ref={menuRef}
>
        <motion.div
          className="relative rounded-[32px] mx-auto left-0 right-0 top-0 overflow-y-auto bg-white backdrop-blur-[15px] text-blue-default p-6 pb-8"
          initial={{ x: "-125%" }}
          animate={{ x: isOpen ? "0%" : "-125%" }}
        >
          <ul>
            {Menus.map(({ link, name, subMenu }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;
              return (
                <li key={name}>
                  <span
                    className="flex-center-between p-3 font-semibold hover:bg-blue-40 rounded-md cursor-pointer relative"
                    onClick={() => {
                      setClicked(isClicked ? null : i);
                    }}
                  >
                    <Link href={`/${locale}/${link}`} className="">
                      {name}
                    </Link>
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"}`}
                      />
                    )}
                  </span>
                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-5"
                    >
                      {subMenu.map(({ name, link, icon: Icon }) => (
                        <li
                          key={name}
                          className="p-2 flex-center hover:bg-blue-40 rounded-md gap-x-2 cursor-pointer"
                        >
                          <Icon size={17} />
                          <Link href={`/${locale}/${link}`} className="">
                            {name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="gap-4 mt-4 items-center text-white text-center justify-center bg-blue-default rounded-full font-bold py-[9px] px-4 flex lg:hidden">
          <Link
                  href="https://brandpos.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  {t("signIn")}
                </Link>
                 <span> | </span>
                <Link
                  href="https://brandpos.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="w-full"
                >
                  {t("signUp")}
                </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
