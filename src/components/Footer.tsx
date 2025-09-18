const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mx-auto pt-4 pb-12 flex justify-center items-center">

      <p className="text-[16px]">
        © {new Date().getFullYear()} All rights reserved. <button
        onClick={scrollToTop}
        className="text-white underline hover:text-gray hover:underline-none">Back to top
        </button>
      </p>

    </footer>
  );
};

export default Footer;