import { useState, useEffect } from "react";
import { flushSync } from 'react-dom';
import DWLogo from "@/assets/dw-logo.svg?react";
import LinkButton from "./ui/LinkButton";
import SocialIcon from "@/components/ui/SocialIcon";
import Framer from "../assets/framer.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import Github from "../assets/github.svg?react";
import { HamburgerX } from "@/components/ui/Hamburger";
import { HashLink } from "react-router-hash-link";
import AnimationGroup from "./ui/AnimationGroup";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Prevent scrolling when overlay is open
  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [overlayOpen]);

  const SocialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/dnlwjy/", label: "Linkedin" },
    { icon: Framer, href: "https://www.framer.com/@danielwijaya/", label: "Framer" },
    { icon: Github, href: "https://github.com/dnlwjy/", label: "Github" },
  ];

  const navLinks = [
    { title: "About", link: "/about" },
    { title: "Projects", link: "/projects" },
    { title: "Shop", link: "/shop" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed z-50 left-0 top-0 lg:h-screen h-24 w-full lg:w-40 flex flex-row lg:flex-col lg:py-12 px-6 justify-between items-center">
      {/* Main Navigation */}
      <nav className="flex lg:flex-col lg:space-y-10 items-center justify-between w-full" aria-label="Main navigation">
        <HashLink
          to="/#home"
          aria-label="Homepage"
          className="relative z-[70]"
          onClick={() => {
            try {
              flushSync(() => setHamburgerOpen(false));
            } catch (e) {
              setHamburgerOpen(false);
            }
            setOverlayOpen(false);
          }}
        >
          <DWLogo
            aria-label="Go to Homepage"
            className="w-13 h-13 hover:scale-95 duration-300 ease-out"
          />
        </HashLink>

        <div className="lg:hidden">
          <HamburgerX
            isOpen={hamburgerOpen}
            toggle={() => {
              if (!overlayOpen) {
                try {
                  flushSync(() => setHamburgerOpen(true));
                } catch (e) {
                  setHamburgerOpen(true);
                }
                setOverlayOpen(true);
              } else {
                try {
                  flushSync(() => setHamburgerOpen(false));
                } catch (e) {
                  setHamburgerOpen(false);
                }
                setOverlayOpen(false);
              }
            }}
          />
        </div>

        <ul className="flex-col space-y-8 hidden lg:flex">
          {navLinks.map(({ title, link }) => (
            <li key={link}>
              <LinkButton
                title={title}
                link={link}
                style={{ writingMode: "sideways-lr", fontSize: "18px" }}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Social */}
      <nav className="hidden lg:flex" aria-label="Social media">
        <ul className="flex flex-col space-y-6">
          {SocialLinks.map((link) => (
            <li key={link.label}>
              <SocialIcon icon={link.icon} label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence onExitComplete={() => setHamburgerOpen(false)}>
        {overlayOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 50 }}
          >
            {/* Content with movement */}
            <motion.div
              className="flex flex-col items-center justify-center gap-20"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <ul className="flex flex-col items-center gap-10">
                {navLinks.map(({ title, link }, i) => (
                  <AnimationGroup key={link} delay={100 + i * 100}>
                    <li>
                      <LinkButton
                        title={title}
                        link={link}
                        onClick={() => setOverlayOpen(false)}
                        style={{ fontSize: "24px" }}
                      />
                    </li>
                  </AnimationGroup>
                ))}
              </ul>

              {/* Mobile Social */}
              <AnimationGroup delay={600}>
                <ul className="flex space-x-10">
                  {SocialLinks.map((link) => (
                    <li key={link.label}>
                      <SocialIcon
                        icon={link.icon}
                        label={link.label}
                        href={link.href}
                        className="w-8 h-8"
                      />
                    </li>
                  ))}
                </ul>
              </AnimationGroup>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;