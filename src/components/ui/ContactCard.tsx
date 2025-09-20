import LinkButton from "./LinkButton";

interface ContactCardProps {
  title: string;
  contactlinks?: { title: string; link: string }[];
  contact?: string;
  address?: string;
  style?: React.CSSProperties;
}

const ContactCard = ({ title, contactlinks, contact, address, style }: ContactCardProps) => {
  return (
    <div className="flex flex-col w-full p-7 items-start gap-2 bg-darkgray bg-opacity-50 rounded-2xl h-fit" style={style}>
      <p className="text-[18px]">{title}</p>

      {address && <p className="text-white">{address}</p>}

      {!address && contactlinks && (
        <div className="flex flex-col gap-1 w-full">
          {contactlinks.map((linkItem) => (
            <LinkButton
              key={linkItem.link}
              title={linkItem.title}
              link={linkItem.link}
              style={{ color: "white", width: "fit-content" }}
            />
          ))}
        </div>
      )}

      {!address && contact && <p>{contact}</p>}
    </div>
  );
};

export default ContactCard;