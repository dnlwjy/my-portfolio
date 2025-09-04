import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <button
      aria-label="Toggle menu"
      onClick={toggle}
      className="relative w-8 h-6 flex flex-col justify-between items-center"
    >
      <span
        className={`block h-0.5 w-full bg-white transition-transform duration-300 origin-center
          ${isOpen ? "rotate-45 translate-y-2" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-white transition-transform duration-300 origin-center
          ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </button>
  );
};

export default Hamburger;