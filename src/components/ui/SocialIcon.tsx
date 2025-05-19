import React from "react";
import { motion } from "framer-motion";

type SocialIconProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-highlight transition-colors duration-300"
      aria-label={label}
    >
        <motion.div
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ display: "inline-block" }}
      >
      <Icon
      className="w-6 h-6"
      style={{ fill: "currentColor" }} />
      </motion.div>
    </a>
  );
};

export default SocialIcon;