"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import navigations from "../data/MenuData";

export default function TopNav() {
  const path = usePathname();
  const [open, isOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 flex h-16 w-full items-center justify-between bg-gray-500/10 px-12 backdrop-blur-lg dark:bg-white/10 md:px-32 lg:h-20 lg:px-48">
        <div className="relative h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10">
          <Image src="/icon-white.svg" alt="Icon" fill />
        </div>
        <div className="hidden md:flex md:gap-4">
          <NavList path={path} />
        </div>
        <div className="flex gap-4">
          <ThemeSwitcher />
          <div
            className="rounded-xl border border-gray-500 p-4 md:hidden"
            onClick={() => {
              isOpen(!open);
            }}
          >
            {open ? (
              <GoChevronDown className="text-gray-500" />
            ) : (
              <CiMenuBurger className="text-gray-500" />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${open ? "" : "hidden"} fixed right-4 top-20 rounded-2xl bg-gray-500/10 backdrop-blur-lg transition-all duration-700 ease-out dark:bg-white/10 md:hidden`}
      >
        <div className="flex flex-col gap-4 p-4">
          <NavList path={path} />
        </div>
      </div>
    </>
  );
}

interface NavListProps {
  path: string;
}

function NavList({ path }: NavListProps) {
  return (
    <>
      {navigations.map((nav, index) => (
        <Link
          className={`md:text-md rounded-lg px-4 py-2 text-sm text-black transition duration-300 ease-in-out hover:bg-white/20 dark:text-white ${
            path === nav.link ? "bg-white/40 font-bold dark:bg-white/20" : ""
          }`}
          key={index}
          href={nav.link}
        >
          {nav.name}
        </Link>
      ))}
    </>
  );
}
