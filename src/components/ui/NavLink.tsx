import { Link } from "react-router-dom";

type NavLinkProps = {
  name: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const NavLink = ({ name, href, className = "", style, onClick }: NavLinkProps) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      style={style}
      className={`text-gray hover:text-white font-inter font-medium ${className}`}
    >
      {name}
    </Link>
  );
};

export default NavLink;