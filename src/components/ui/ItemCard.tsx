import PriceTag from "../PriceTag";
import placeholder from "@/assets/placeholder.png";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  price?: number;
}

const ItemCard =({
  title = "This is title",
  description = "Description here...",
  image = placeholder,
  url = "#",
  price,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col text-center gap-6">

      <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-50"
        />
      </div>

      <div className="flex items-start">
          <div className="flex flex-col p-0 gap-2 text-start">
            <h3>{title}</h3>
            <p className="text-[16px]">{description}</p>
          </div>

          {price !== undefined && <PriceTag price={price} />}
      </div>

    </div>

  );
};

export default ItemCard;