import { useEffect, useState } from "react";
import ItemCard from "@/components/ui/ItemCard";
import { client, urlFor } from "@/sanityClient";

interface CMSItem {
  _id: string;
  title: string;
  description: string;
  coverImage: any;
  slug: { current: string };
  price?: number;
}

interface CMSListProps {
  h1: boolean;
  maxItems?: number;
  collection: string;
  showPrice?: boolean;
}

const CMSList = ({
  h1 = true,
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
        {collection}
      )
      .then((data) => setItems(data))
      .catch(console.error);
  }, [collection]);

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
      <section
        id={collection}
        className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full"
      >
        {h1 ? (
          <div className="flex text-center justify-center items-center gap-6 mb-10">
            <h1>
              <span className="text-gray">Selected</span>
              <br />
              {collection.charAt(0).toUpperCase() + collection.slice(1)}
            </h1>
          </div>
        ) : (
          <div className="flex items-center gap-6">
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
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {displayedItems.map((item) => (
            <ItemCard
              key={item._id}
              title={item.title}
              description={item.description}
              coverImage={urlFor(item.coverImage).url()}
              url={`/${collection}/${item.slug?.current || "#"}`}
              price={showPrice ? item.price : undefined}
            />
          ))}
        </div>
      </section>
  );
};

export default CMSList;