import Image from "next/image";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import Button from "../../../components/Button";
import ButtonTransparent from "../../../components/ButtonTransparent";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center px-12 pt-32 text-center md:flex-row md:px-32 lg:px-48">
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
              Hire Me
            </Button>
            <ButtonTransparent href="https://github.com/yysrll">
              <PiGithubLogoDuotone size={24} />
            </ButtonTransparent>
            <ButtonTransparent href="https://www.linkedin.com/in/yusril09/">
              <PiLinkedinLogoDuotone size={24} />
            </ButtonTransparent>
          </div>
        </div>
        {/* <h1 className="text-2xl md:text-4xl font-bold">Hello</h1>
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 inline-block mt-4">
                I&apos;am Developer
                </h1>
                <p className="text-base md:text-2xl text-gray-300 mt-2">Turning ideas into reality with code.</p>
                <div className="flex space-x-2 mt-8">
                    <button className="px-4 py-2 flex items-center justify-center hover:shadow-lg hover:shadow-indigo-500 border border-gray-500 hover:border-indigo-500 rounded-md">
                        <Image
                        src="/github.svg"
                        alt="Github"
                        width={24}
                        height={24}
                        />
                        <p className="ml-2">Github</p>
                    </button>
                    <button className="px-4 py-2 flex items-center justify-center hover:shadow-lg hover:shadow-indigo-500 border border-gray-500 hover:border-indigo-500 rounded-md">
                        <Image
                        src="/linkedin.svg"
                        alt="Linkedin"
                        width={24}
                        height={24}
                        />
                        <p className="ml-2">Linkedin</p>
                    </button>
                </div>
                <div className="mt-36"></div>
                <div className="p-8 bg-white/10 rounded-full animate-bounce">
                <FaArrowDown className="h-4 md:h-8 w-4 md:w-8"/>
                </div>
                <div className="mb-12"></div> */}
      </div>
    </div>
  );
}
