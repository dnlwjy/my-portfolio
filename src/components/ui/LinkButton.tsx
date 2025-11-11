import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface LinkButtonProps {
  title: string;
  link: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const LinkButton = ({ title, link, style, className, onClick }: LinkButtonProps) => {
  const isExternal = link.startsWith("http://") || link.startsWith("https://");
  const isHashLink = link.includes("#");

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
        className={className}
        onClick={onClick}
      >
        {title}
      </a>
    );
  }

  if (isHashLink) {
    return (
      <HashLink smooth to={link} style={style} className={className} onClick={onClick}>
        {title}
      </HashLink>
    );
  }

  return (
    <RouterLink to={link} style={style} className={className} onClick={onClick}>
      {title}
    </RouterLink>
  );
};

export default LinkButton;