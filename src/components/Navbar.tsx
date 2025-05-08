
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Shop", href: "/#shop" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={cn(
          "fixed left-0 top-0 h-full w-16 z-50 flex flex-col bg-dark-secondary transition-all duration-300",
          isScrolled ? "shadow-md" : ""
        )}
      >
        <div className="flex flex-col items-center py-6 h-full justify-between">
          <div className="flex flex-col items-center">
            <Link to="/" className="mb-12">
              <img src={logoSvg} alt="DW Logo" className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
            </Link>

            <div className="flex flex-col space-y-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-highlight transition-colors duration-300 group flex flex-col items-center"
                >
                  <span className={cn(
                    "inline-block whitespace-nowrap text-sm font-inter tracking-wider transform group-hover:text-highlight relative",
                    link.name !== "Home" && "origin-left -rotate-90",
                    "after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-highlight after:bottom-1/2 after:left-0 after:transform after:translate-y-1/2 group-hover:after:w-full after:transition-all after:duration-300"
                  )}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col space-y-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          className="text-gray-300 hover:text-highlight bg-dark-secondary/70 p-2 rounded-md backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-highlight transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
