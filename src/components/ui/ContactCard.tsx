import LinkButton from "./LinkButton";

interface ContactCardProps {
    title: string;
    contactlinks?: { title: string; link: string; external?: boolean }[];
    contact?: string;
    address?: string;
    style?: React.CSSProperties;
}

const ContactCard = ({
    title,
    contactlinks,
    contact,
    address,
    style,
}: ContactCardProps) => {
    return (
        <div
            className={`flex flex-col w-full p-7 items-start gap-2 bg-darkgray bg-opacity-50 rounded-2xl h-fit`}
        >
            <p>{title}</p>

            {address ? (
                <p className="text-white break-words whitespace-pre-line">{address}</p>
            ) : (
                contactlinks && (
                    <div className="flex flex-col gap-1 w-full">
                        {contactlinks.map((linkItem, idx) => (
                            <LinkButton
                                title={linkItem.title}
                                link={linkItem.link}
                                external={linkItem.external}
                                style={{
                                    color: "white",
                                    width: "fit-content",
                                }}
                            />
                        ))}
                    </div>
                )
            )}

            {contact && !address && (
                <p>{contact}</p>
            )}
        </div>
    );
};

export default ContactCard;