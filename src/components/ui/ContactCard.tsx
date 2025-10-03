import LinkButton from "./LinkButton";
import AnimationGroup from "./AnimationGroup";

interface ContactCardProps {
  title: string;
  contactlinks?: { title: string; link: string }[];
  contact?: string;
  address?: string;
  aria?: string;
}

const ContactCard = ({ title, contactlinks, contact, address, aria }: ContactCardProps) => {
  return (
    <AnimationGroup
    delay={800}
    className="flex flex-col w-full p-6 items-start gap-2 bg-darkgray bg-opacity-50 rounded-xl h-fit"
    aria-label={aria}>
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
    </AnimationGroup>
  );
};

export default ContactCard;