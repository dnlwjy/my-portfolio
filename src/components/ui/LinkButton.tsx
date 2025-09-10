import { Link as RouterLink } from "react-router-dom";

interface LinkButtonProps {
  title: string;
  link: string;
  external?: boolean;
  style?: React.CSSProperties;
}

const LinkButton = (props: LinkButtonProps) => {
  const { title, link, style} = props;
  const isExternal = link.startsWith("http://") || link.startsWith("https://");

  if (isExternal) {
    return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
        >
          {title}
        </a>
    );
  }

  return (
      <RouterLink
        to={link}
        style={style}
      >
        {title}
      </RouterLink>
  );
};

export default LinkButton;