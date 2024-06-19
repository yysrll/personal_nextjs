import React from "react";

interface ButtonTransparentProps {
  target?: string;
  href: string;
  children: React.ReactNode;
}

const ButtonTransparent: React.FC<ButtonTransparentProps> = ({
  target,
  href,
  children,
}) => {
  return (
    <a
      target={target}
      className="flex h-12 items-center justify-center rounded-xl bg-gray-700/50 px-4 text-white backdrop-blur-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:bg-white/20 dark:hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
};

export default ButtonTransparent;
