import Link from "next/link";
import { PiEnvelope, PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiPhoneCall, PiTwitterLogo } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="px-12 md:px-32 lg:px-48 py-12 text-center text-white bg-left bg-hero-pattern-bottom bg-no-repeat">
            <h2 className="text-gray-200 text-xl">Get in touch - Lets work together</h2>
            <div className="flex items-center justify-center text-gray-400 mt-2">
                <PiEnvelope />
                <p className="ms-2">yusriljiii@gmail.com</p>
                <div className="mx-2"></div>
                <PiPhoneCall />
                <p className="ms-2">62 852 4221 9608</p>
            </div>
            <p className="mt-2 text-gray-500 text-sm">*Note: I regularly get back to all inquiries I receive in 24 hours.</p>
            <div className="flex items-center justify-center gap-8 mt-12">
                <a
                    target="_blank"
                    href="https://github.com/yysrll">
                    <PiGithubLogo size={24} />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/yusril09/">
                    <PiLinkedinLogo size={24} />
                </a>
                <a
                    target="_blank"
                    href="https://instagram.com/yysrll">
                    <PiInstagramLogo size={24} />
                </a>
                <a
                    target="_blank"
                    href="https://twitter.com/yysrll">
                    <PiTwitterLogo size={24} />
                </a>
            </div>
            <p className="mt-6 text-gray-500 text-sm">Yusril 2024</p>
        </footer>
    )
}