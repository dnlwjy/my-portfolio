
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, Info, Briefcase, Contact } from "lucide-react";

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
    { name: "Home", href: "#home", icon: <span className="text-xl font-bold tracking-tighter text-gradient">P</span> },
    { name: "About", href: "#about", icon: <Info size={20} className="text-highlight" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={20} className="text-highlight" /> },
    { name: "Shop", href: "#shop", icon: <ShoppingCart size={20} className="text-highlight" /> },
    { name: "Contact", href: "#contact", icon: <Contact size={20} className="text-highlight" /> },
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
          <a href="#" className="text-xl font-bold tracking-tighter text-gradient mb-12">
            P
          </a>

          <div className="flex flex-col space-y-12 h-full">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-highlight transition-colors duration-300 group flex flex-col items-center"
              >
                {index === 0 ? (
                  link.icon
                ) : (
                  <div className="mb-1">{link.icon}</div>
                )}
                <span className={cn(
                  "inline-block whitespace-nowrap text-sm tracking-wider transform group-hover:text-highlight transition-colors duration-300",
                  index !== 0 && "origin-left -rotate-90"
                )}>
                  {link.name}
                </span>
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
            <a href="#" className="text-2xl font-bold tracking-tighter text-gradient mb-8">
              Portfolio
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-highlight transition-colors duration-300 text-xl py-2 flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name !== "Home" && link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
