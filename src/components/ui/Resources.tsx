import figma from "@/assets/figma.svg";

interface ResourcesProps {
    title: string;
    description: string;
    image: string;
    link?: string;
    url?: string;
}

const Resources = ({
    title = "This is title",
    description = 'Dsss',
    image = figma,
    link = 'Learn more',
    url = '#',
}: ResourcesProps) => {
    return (
        <a className="flex gap-4 h-fit items-center">
            <img
                src={image}
                alt={title}
                className="w-[56px] h-[56px] object-cover rounded-md"
            />

            <div className="flex flex-col gap-2">
                <h3>{title}</h3>
                <p className="text-[16px]">{description}</p>
            </div>

        </a>
    )
}

export default Resources;