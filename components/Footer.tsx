import {
  PiEnvelope,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiPhoneCall,
  PiTwitterLogo,
} from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="mt-24 bg-hero-pattern-bottom bg-left-bottom bg-no-repeat px-12 pb-12 text-center text-white md:px-32 lg:px-48">
      <h2 className="text-xl text-gray-200">
        Get in touch - Lets work together
      </h2>
      <div className="mt-2 flex flex-col items-center justify-center gap-2 text-gray-400 md:flex-row">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <PiEnvelope />
          <p className="ms-2">yusriljiii@gmail.com</p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <PiPhoneCall />
          <p className="ms-2">62 852 4221 9608</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        *Note: I regularly get back to all inquiries I receive in 24 hours.
      </p>
      <div className="mt-12 flex items-center justify-center gap-8">
        <a target="_blank" href="https://github.com/yysrll">
          <PiGithubLogo size={24} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/yusril09/">
          <PiLinkedinLogo size={24} />
        </a>
        <a target="_blank" href="https://instagram.com/yysrll">
          <PiInstagramLogo size={24} />
        </a>
        <a target="_blank" href="https://twitter.com/yysrll">
          <PiTwitterLogo size={24} />
        </a>
      </div>
      <p className="mb-8 mt-6 text-sm text-gray-500">Yusril 2024</p>
    </footer>
  );
}
