interface ItemCard2Props {
  image: string;
  title: string;
  description: string;
}

const ItemCard2 =({
  image,
  title,
  description,
}: ItemCard2Props) => {
  return (
    <div
      className="flex flex-col text-center pt-2 px-2 rounded-2xl border border-darkgray"
    >
      <div className="bg-darkgray bg-opacity-50 flex justify-center items-center p-8 w-full rounded-lg">
        <img src={image} alt={title} className="w-[44px]" loading="lazy"/>
      </div>
      <div className="flex flex-col py-5 px-2 gap-2">
        <h3>{title}</h3>
        <p className="text-[16px]">{description}</p>
      </div>
    
    </div>

  );
};

export default ItemCard2;