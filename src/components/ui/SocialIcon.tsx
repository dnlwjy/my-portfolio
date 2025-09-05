type SocialIconProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

const SocialIcon = ({ icon: Icon, href, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-6 h-6"/>
    </a>
  );
};

export default SocialIcon;