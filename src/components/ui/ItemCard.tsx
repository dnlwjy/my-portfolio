import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  price?: number;
}

const ItemCard = ({
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
        <h3>{title}</h3>
        <p className="text-[16px]">{description}</p>
        {price && <span className="text-sm text-gray-400">${price}</span>}
      </div>
    </div>
  );
};

export default ItemCard;
