"use client";

import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="ml-3 flex justify-center rounded-xl border border-black dark:border-white p-4"
      onClick={() => {
        if (theme === "dark") {
          return setTheme("light");
        }
        return setTheme("dark");
      }}
    >
      {theme === "dark" ? (
        <IoMoon className="text-white" />
      ) : (
        <FiSun className="text-yellow-500" />
      )}
    </div>
  );
}
