import { useEffect, useState } from "react";
import ItemCard from "@/components/ui/ItemCard";
import { client, urlFor } from "@/sanityClient";
import AnimationGroup from "./ui/AnimationGroup";

interface CMSItem {
  _id: string;
  title: string;
  description: string;
  coverImage: any;
  slug: { current: string };
  price?: number;
}

interface CMSListProps {
  title1?: string;
  title2?: string;
  subtitle?: string;
  maxItems?: number;
  collection: string;
  showPrice?: boolean;
}

const CMSList = ({
  title1,
  title2,
  maxItems,
  collection,
  showPrice = false
}: CMSListProps) => {
  const [items, setItems] = useState<CMSItem[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == $collection]{
          _id,
          title,
          description,
          coverImage,
          slug,
          price
        }`,
        { collection }
      )
      .then((data) => setItems(data))
      .catch(console.error);
  }, [collection]);

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <section
      id={collection}
      className="md:py-20 flex flex-col gap-10 mx-auto w-full"
    >
      {title1 && (
        <div className="flex text-center justify-center items-center gap-6 mb-10">
          <h1>
            <span className="text-gray">{title1}</span>
            <br />
            <span className="text-white">{title2}</span>
          </h1>
        </div>
      ) || (
      <AnimationGroup delay={300} className="flex items-center gap-6 overflow-visible">
        <h2>
          {collection.charAt(0).toUpperCase() + collection.slice(1)}
        </h2>
        <hr className="flex-grow h-0.5 bg-darkgray" />
        <a
          href={`/${collection}`}
          className="text-[16px] text-blue transition-colors duration-300 hover:text-white"
        >
          View all
        </a>
      </AnimationGroup>
        )}

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {displayedItems.map((item, index) => (
          <AnimationGroup
          key={item._id}
          delay={index * 300 + 500}
          direction="up">
          <ItemCard
            title={item.title}
            description={item.description}
            coverImage={urlFor(item.coverImage).url()}
            url={`/${collection}/${item.slug?.current || "#"}`}
            price={showPrice ? item.price : undefined}
          />
          </AnimationGroup>
        ))}
      </div>
    </section>
  );
};

export default CMSList;