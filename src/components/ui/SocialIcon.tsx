import React from "react";

type SocialIconProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
  className?: string;
};

const SocialIcon = ({
  icon: Icon,
  href,
  label,
  className
}: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      <Icon className={`w-6 h-6 ${className || ""}`} />
    </a>
  );
};

export default SocialIcon;