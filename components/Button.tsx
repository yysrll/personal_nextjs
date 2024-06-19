import React from "react";

interface ButtonProps {
  target?: string;
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ target, href, children }) => {
  return (
    <a
      target={target}
      className="flex h-12 items-center justify-center rounded-xl bg-blue-500 px-4 font-semibold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white dark:bg-white dark:text-black dark:hover:bg-blue-400 dark:hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
