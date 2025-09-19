import { useState } from "react";
import LinkButton from "./ui/LinkButton";
import SocialIcon from "@/components/ui/SocialIcon";
import Instagram from "../assets/instagram.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import Github from "../assets/github.svg?react";
import Hamburger from '@/components/ui/Hamburger';
import { HashLink } from "react-router-hash-link";

const SocialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/dnlwjy/", label: "Linkedin" },
  { icon: Instagram, href: "https://www.instagram.com/dnlwjy_/", label: "Instagram" },
  { icon: Github, href: "https://github.com/dnlwjy/", label: "Github" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="
    fixed z-50 left-0 top-0 lg:h-screen h-24 w-full lg:w-40 flex flex-row lg:flex-col lg:py-12 px-6 justify-between items-center
    ">

      <nav className="flex lg:flex-col lg:space-y-10 items-center justify-between w-full" aria-label="Main navigation">

        <HashLink to="/#home" aria-label="Homepage">
          <img
            src="/uploads/dw-logo.svg"
            alt="Daniel's Logo"
            aria-label="Back to home"
            className="w-13 h-13 hover:scale-95 duration-300 ease-out" />
        </HashLink >

        <div className="lg:hidden">
          <Hamburger
            isOpen={mobileMenuOpen}
            toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        <ul className="flex-col space-y-8 hidden lg:flex">
          <li>
            <LinkButton title="About" link="/about" style={{ writingMode: "sideways-lr", fontSize: "18px" }} />
          </li>
          <li>
            <LinkButton title="Projects" link="/projects" style={{ writingMode: "sideways-lr", fontSize: "18px" }} />
          </li>
          <li>
            <LinkButton title="Shop" link="/shop" style={{ writingMode: "sideways-lr", fontSize: "18px" }} />
          </li>
          <li>
            <LinkButton title="Contact" link="/#contact" style={{ writingMode: "sideways-lr", fontSize: "18px" }} />
          </li>
        </ul>

      </nav>

      <nav className="hidden lg:flex" aria-label="Social media">
        <ul className="flex flex-col space-y-6">
          {SocialLinks.map((link) => (
            <li key={link.label}>
              <SocialIcon
                icon={link.icon}
                label={link.label}
                href={link.href}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;