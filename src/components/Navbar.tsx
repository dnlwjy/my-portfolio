
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "Projects", href: "/#projects" },
    { name: "Shop", href: "/#shop" },
    { name: "Contact", href: "/contact" },
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
        <div className="flex flex-col items-center py-6">
          <Link to="/" className="text-xl font-playfair font-bold tracking-tighter text-highlight mb-12">
            DW
          </Link>

          <div className="flex flex-col space-y-12 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-highlight transition-colors duration-300 group flex flex-col items-center"
              >
                <span className={cn(
                  "inline-block whitespace-nowrap text-sm font-inter tracking-wider transform group-hover:text-highlight transition-colors duration-300",
                  link.name !== "Home" && "origin-left -rotate-90"
                )}>
                  {link.name}
                </span>
              </Link>
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
            <span className="text-2xl font-playfair font-bold tracking-tighter text-highlight mb-8">
              Portfolio
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-highlight transition-colors duration-300 text-xl font-inter py-2 flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
