interface CardProps {
  image: string;
  title: string;
  description: string;
}

const MyStackCard =({
  image = "/uploads/placeholder.svg",
  title = "Title",
  description = "Description",
}: CardProps) => {
  return (
    <div
      className="flex flex-col text-center p-2 rounded-2xl border border-darkgray"
    >
      <div className="bg-darkgray bg-opacity-50 flex justify-center items-center p-8 w-full rounded-lg">
        <img src={image} alt={title} className="w-[44px]"/>
      </div>
      <div className="flex flex-col py-5 px-2 gap-2">
        <h3>{title}</h3>
        <p className="text-[16px]">{description}</p>
      </div>
    
    </div>

  );
};

export default MyStackCard;