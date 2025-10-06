interface ProjectSupportProps {
    title: string;
    description: string | number | React.ReactNode;
}

const ProjectSupport = ({ title, description }: ProjectSupportProps) => {
    const isWebsite = title.toLowerCase() === "website";
    const isValidUrl = typeof description === "string" && description.startsWith("http");

    return (
        <div className="flex flex-col gap-2 pb-4 border-b border-darkgray">
            <h3 className="text-[16px] font-inter font-medium text-gray">{title}</h3>
            
            {isWebsite && isValidUrl ? (
                <a 
                    href={description as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray transition-colors duration-300 break-all"
                >
                    {description}
                </a>
            ) : (
            <p className="text-white">{description}</p>
            )}
        </div>
    )
}

export default ProjectSupport;