interface ItemCard3Props {
    title: string;
    description: string;
    image: string;
    link?: string;
    url?: string;
}

const ItemCard3 = ({
    title = "This is title",
    description = 'Dsss',
    image,
    link = 'Learn more',
    url = '#',
}: ItemCard3Props) => {
    return (
        <div className="flex gap-6 h-fit items-center pb-4">
            <img
                src={image}
                alt={title}
                className="w-[64px] h-[64px] object-cover rounded-md"
                loading="lazy"
            />

            <div className="flex flex-col gap-2">
                <h3>{title}</h3>
                <p className="text-[16px]">{description}</p>
            </div>

        </div>
    )
}

export default ItemCard3;