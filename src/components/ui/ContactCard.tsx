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
            className={`flex flex-col w-full p-8 items-start gap-2 bg-darkgray rounded-2xl h-fit`}
        >
            <p className="text-[16px]">{title}</p>

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
                                    fontSize: "18px",
                                    color: "white",
                                    textDecoration: "underline",
                                    display: "inline-block",
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