import { useEffect } from "react";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const Checkout = ({ isOpen, onClose, url }: CheckoutProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-darkgray rounded-2xl w-[90%] max-w-2xl aspect-[4/5] overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={url}
          className="w-full h-full"
          title="Checkout"
          allow="payment"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl font-semibold bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Checkout;