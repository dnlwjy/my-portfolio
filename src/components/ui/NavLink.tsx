import { Link } from "react-router-dom";

type NavLinkProps = {
  name: string;
  to: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const NavLink = ({ name, to, className = "", style, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={style}
      className={`text-gray hover:text-white font-inter text-md font-medium ${className}`}
    >
      {name}
    </Link>
  );
};

export default NavLink;