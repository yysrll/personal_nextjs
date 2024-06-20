import Image from "next/image";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import Button from "../../../components/Button";
import ButtonTransparent from "../../../components/ButtonTransparent";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center pt-32 text-center md:flex-row">
        <div className="relative h-32 w-32 md:h-40 md:w-40 md:flex-none lg:h-64 lg:w-64">
          <Image src="/me.png" alt="Github" fill />
        </div>
        <div className="md:mx-8 md:flex-grow lg:mx-20">
          <h1 className="mt-6 text-2xl font-bold text-black dark:text-white md:text-left">
            Hi, I&apos;m Yusril 👋
          </h1>
          <p className="mt-4 font-light leading-6 text-gray-600 dark:text-gray-300 md:text-left">
            I breathe life into mobile apps with Kotlin & Flutter. Build
            beautiful, user-friendly experiences for iOS & Android.{" "}
            <span className="font-bold">Contact me</span> to discuss your
            project!
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
            <Button href="https://www.linkedin.com/in/yusril09/">
              Contact Me
            </Button>
            <ButtonTransparent href="https://github.com/yysrll">
              <PiGithubLogoDuotone size={24} />
            </ButtonTransparent>
            <ButtonTransparent href="https://www.linkedin.com/in/yusril09/">
              <PiLinkedinLogoDuotone size={24} />
            </ButtonTransparent>
          </div>
        </div>
      </div>
    </div>
  );
}
