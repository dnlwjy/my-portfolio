interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const HamburgerX = ({ isOpen, toggle }: HamburgerProps) => {
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

export const HamburgerY = ({ isOpen, toggle }: HamburgerProps) => {
  return (
    <button
      type="button"
      aria-label="FAQ toggle"
      onClick={toggle}
      className="relative w-6 h-6 flex items-center justify-center"
    >
      <span
  className={`absolute left-1/2 top-1/2 h-[2px] w-4 bg-white transform transition duration-150 ease-in-out origin-center
    ${isOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2'}`}
/>
<span
  className={`absolute left-1/2 top-1/2 h-[2px] w-4 bg-white transform transition duration-150 ease-in-out origin-center
    ${isOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2 rotate-90'}`}
/>

    </button>
  );
};