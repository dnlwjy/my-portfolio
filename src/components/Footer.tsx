
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tighter text-gradient">
              Portfolio
            </a>
            <p className="text-gray-500 mt-2">
              Designer & Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-6 w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center text-highlight hover:bg-highlight/20 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={20} />
            </button>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
