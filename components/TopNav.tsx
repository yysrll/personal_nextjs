"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 flex h-16 w-full items-center justify-between bg-white/10 px-12 backdrop-blur-lg md:px-32 lg:h-20 lg:px-48">
      <div className="relative h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10">
        <Image src="/icon-white.svg" alt="Icon" fill />
      </div>
      <div className="flex text-white">
        {navigations.map((nav, index) => (
          <Link
            className={`md:text-md rounded-lg px-4 py-2 text-sm transition duration-300 ease-in-out hover:bg-white/20 ${
              path === nav.link
                ? "font-bold text-blue-500 underline underline-offset-8"
                : ""
            }`}
            key={index}
            href={nav.link}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const navigations = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Project",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];
