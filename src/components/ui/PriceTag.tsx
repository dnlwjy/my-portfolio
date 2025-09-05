interface PriceTagProps {
    price: number;
}

const PriceTag = ({ price }: PriceTagProps) => {
    return (
        <span className="inline-flex items-center w-fit px-4 rounded-full font-medium border border-darkgray h-8">
            <p className="text-[14px] text-white">${price}</p>
        </span>
    );
}

export default PriceTag;