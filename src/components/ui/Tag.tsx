interface TagProps {
  title?: string;
  price?: number | string;
}

const Tag = ({ title, price }: TagProps) => {
  const renderPrice = () => {
    if (price === undefined) return null;
    if (price === 0 || price === '0') return <p className="text-[14px] font-medium text-white">FREE</p>;
    if (typeof price === 'number') return <p className="text-[14px] font-medium text-white">${price}</p>;
    return <p className="text-[14px] font-medium text-white">{price}</p>;
  };

  return (
    <span className="inline-flex items-center w-fit px-4 rounded-full font-medium border border-darkgray h-8">
      {renderPrice()}
      {title && (
        <p className="text-[14px] font-medium text-white">{title}</p>
      )}
    </span>
  );
};

export default Tag;