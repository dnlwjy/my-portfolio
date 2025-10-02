interface TagProps {
  title?: string;
  price?: number;
}

const Tag = ({ title, price }: TagProps) => {
  return (
    <span className="inline-flex items-center w-fit px-4 rounded-full font-medium border border-darkgray h-8">
      {price !== undefined && (
        <p className="text-[14px] text-white">${price}</p>
      )}
      {title && (
        <p className="text-[14px] text-white">{title}</p>
      )}
    </span>
  );
};

export default Tag;