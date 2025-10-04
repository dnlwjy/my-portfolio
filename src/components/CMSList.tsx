import { Component, useEffect, useState, ComponentType } from "react";
import ItemCard from "@/components/ui/ItemCard";
import { client, urlFor } from "@/sanityClient";
import AnimationGroup from "./ui/AnimationGroup";
import AnimationText from "./ui/AnimationText";

interface CMSListProps {
  title1?: string;
  title2?: string;
  subtitle?: string;
  maxItems?: number;
  collection: string;
  showPrice?: boolean;
  excludeSlug?: string;
  ViewAll?: boolean;
  cols?: 2 | 3;
  CardComponent?: ComponentType<any>;
}

interface SanityDoc {
  [key: string]: any;
}

const CMSList = ({
  title1,
  title2,
  maxItems,
  collection,
  showPrice = false,
  excludeSlug,
  ViewAll = true,
  cols = 2,
  CardComponent = ItemCard,
}: CMSListProps) => {
  const [items, setItems] = useState<SanityDoc[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == $collection]`, { collection })
      .then((data) => setItems(data))
      .catch(console.error);
  }, [collection]);

  const displayedItems = items
    .filter(item => item.slug?.current !== excludeSlug)
    .slice(0, maxItems);


  // Auto mapper: cari field yang cocok > bisa scalable
  const mapFields = (item: SanityDoc) => {
    const title = item.title || item.name;
    const description = item.description;
    const imageField = item.coverImage || item.image || item.thumbnail;

    // if no image then skip this very item
    if (!imageField) return null;
    const image = urlFor(imageField).url();
    const url = item.slug?.current
      ? `/${collection}/${item.slug.current}`
      : "#";

    return { title, description, image, url, price: item.price };
  };

  return (
    <section
      id={collection}
      className="md:py-20 py-10 flex flex-col gap-10 mx-auto w-full"
    >
      {title1 && (
        <div className="flex text-center justify-center items-center gap-6 mb-10">
          <h1>
            <AnimationText text={title1} className="text-gray" delay={0} />
            <br />
            <AnimationText text={title2} className="text-white" delay={100} />
          </h1>
        </div>
      ) || (
          <AnimationGroup delay={100} className="flex items-center gap-6 overflow-visible">
            <h2>
              {collection.charAt(0).toUpperCase() + collection.slice(1)}
            </h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
            {ViewAll && (
              <a
                href={`/${collection}`}
                className="text-[16px] text-blue transition-colors duration-300 hover:text-white"
              >
                View all
              </a>
            )}
          </AnimationGroup>
        )}

      <div className={`grid grid-cols-1 ${
    cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
  } gap-x-4 gap-y-8`}>
        {displayedItems.map((item, index) => {
          const props = mapFields(item);
          return (
            <AnimationGroup
              key={item._id}
              delay={index * 150 + 100}
              direction="up"
            >
              <CardComponent {...props} />
            </AnimationGroup>
          );
        })}
      </div>
    </section>
  );
};

export default CMSList;