interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger = ({ isOpen, toggle }: HamburgerProps) => {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={toggle}
      className="relative w-8 h-8 flex items-center justify-center z-[60]"
    >
      <span
        className={`absolute left-0 right-0 h-[2px] bg-white transform transition duration-150 ease-in-out origin-center
          ${isOpen ? 'top-1/2 translate-y-[-50%] rotate-45' : 'top-2'}`}
      />
      <span
        className={`absolute left-0 right-0 h-[2px] bg-white transform transition duration-150 ease-in-out origin-center
          ${isOpen ? 'top-1/2 translate-y-[-50%] -rotate-45' : 'bottom-2'}`}
      />
    </button>
  );
};

export default Hamburger;