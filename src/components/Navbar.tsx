import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import { motion } from "framer-motion";
import Navlink from "@/components/ui/NavLink";
import SocialIcon from "@/components/ui/SocialIcon";
import Framer from "../assets/framer.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import Github from "../assets/github.svg?react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Shop", href: "/#shop" },
  { name: "Contact", href: "/contact" },
];

const SocialLinks = [
  { icon: Framer, href: "https://facebook.com", label: "Framer" },
  { icon: Linkedin, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://instagram.com", label: "Github" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 h-screen w-32 z-50 flex flex-col py-16 justify-between items-center">

          <nav className="flex flex-col space-y-10 items-center" aria-label="Main navigation">
            
            <Link to="/" aria-label="Homepage">
              <motion.img
                src="/uploads/dw-logo.svg"
                alt="DW Logo"
                className="w-13 h-13"
                whileHover={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </Link>

            {navLinks.map((link) => (
              <Navlink
                key={link.name}
                name={link.name}
                href={link.href}
                style={{ writingMode: "sideways-lr"}}
                onClick={() => console.log(`${link.name} clicked`)}
              />
            ))}

          </nav>
          
          <nav className="flex flex-col space-y-6" aria-label="Social media">
            {SocialLinks.map((link) => {
              const Icon = link.icon;
                return (
                  <SocialIcon
                    icon={link.icon}
                    label={link.label}
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                  />
              );
            })}
          </nav>


      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          className="text-gray-300 hover:text-highlight bg-dark-secondary/70 p-2 rounded-md backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-dark-secondary animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <span className="flex items-center gap-3 text-2xl font-playfair font-bold tracking-tighter text-highlight mb-8">
              <img src={logoSvg} alt="DW Logo" className="w-8 h-8" />
              Portfolio
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-highlight transition-colors duration-300 text-xl font-inter py-2 flex items-center gap-3 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-highlight after:bottom-1/2 after:left-0 after:transform after:translate-y-1/2 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex space-x-6 mt-8">
              {SocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-highlight transition-colors duration-300"
                  aria-label={link.label}
                >
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
