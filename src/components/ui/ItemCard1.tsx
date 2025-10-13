import { Link } from "react-router-dom";
import Tag from "./Tag";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  price?: number;
}

const ItemCard1 = ({
  title,
  description,
  image,
  url = "#",
  price,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col text-center gap-4">
      <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl">
        <Link to={url}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-50"
          />
        </Link>
      </div>
      <div className="flex flex-col text-start gap-2">
        <div className="flex justify-between items-center gap-6">
          <h3>{title}</h3>
          {price !== undefined && <Tag price={price === 0 ? 'FREE' : price} />}
        </div>
        <p
          className="text-[16px]"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>

      </div>
    </div>
  );
};

export default ItemCard1;