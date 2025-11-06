import { useEffect, useState, ComponentType } from "react";
import ItemCard1 from "@/components/ui/ItemCard1";
import { client, urlFor } from "@/sanityClient";
import AnimationGroup from "./ui/AnimationGroup";
import AnimationText from "./ui/AnimationText";

interface CMSListProps {
  title1?: string;
  title2?: string;
  heading?: string;
  maxItems?: number;
  featuredOnly?: boolean;
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
  heading,
  maxItems,
  featuredOnly = false,
  collection,
  excludeSlug,
  ViewAll = true,
  cols = 2,
  CardComponent = ItemCard1,
}: CMSListProps) => {
  const [items, setItems] = useState<SanityDoc[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = featuredOnly
      ? `*[_type == $collection && featured == true] | order(order asc, _createdAt desc)`
      : `*[_type == $collection] | order(order asc, _createdAt desc)`;

    client
      .fetch(query, { collection })
      .then((data) => setItems(data))
      .catch(console.error);
  }, [collection, featuredOnly]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedItems = items
    .filter((item) => item.slug?.current !== excludeSlug)
    .slice(0, maxItems);

  const mapFields = (item: SanityDoc) => {
    const title = item.title || item.name;
    const description = item.description;
    const imageField = item.coverImage || item.image || item.thumbnail;
    if (!imageField) return null;
    const image = urlFor(imageField).url();
    const url = item.slug?.current ? `/${collection}/${item.slug.current}` : "#";
    return { title, description, image, url, price: item.price };
  };

  return (
    <section id={collection} className="py-20 flex flex-col gap-10 mx-auto w-full">
      {title1 ? (
        <div className="flex text-center justify-center items-center gap-6 mb-10">
          <h1>
            <AnimationText text={title1} className="text-gray" delay={0} />
            <br />
            <AnimationText text={title2} className="text-white" delay={200} />
          </h1>
        </div>
      ) : (
        <AnimationGroup delay={200} className="flex items-center gap-6 overflow-visible">
          <h2>{heading ?? (collection.charAt(0).toUpperCase() + collection.slice(1))}</h2>
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

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        } gap-x-4 gap-y-4`}
      >
        {displayedItems.map((item, index) => {
          const props = mapFields(item);
          if (!props) return null;

          const delay = isMobile ? 300 : 300 + ((index % cols) * 150);

          return (
            <AnimationGroup key={item._id} delay={delay}>
              <CardComponent {...props} />
            </AnimationGroup>
          );
        })}
      </div>
    </section>
  );
};

export default CMSList;