import MyStackCard from "@/components/ui/MyStackCard";
import { client, urlFor } from "@/sanityClient";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

interface MyStackItem {
  _id: string;
  name: string;
  description: string;
  image: any;
}

interface MyStackProps {
  maxItems?: number;
}

const MyStackList = ({
  maxItems,
}: MyStackProps) => {
  const [items, setItems] = useState<MyStackItem[]>([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "my-stack"]{ _id, name, description, image }`,
    )
      .then(data => setItems(data))
      .catch(console.error);
  }, []);

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <section
      id="my-stack"
      className="py-20 flex flex-col gap-10 mx-auto w-full">

      <div className="flex items-center gap-6">
        <h2>My Stack</h2>
        <hr className="flex-grow h-0.5 bg-darkgray" />
        <HashLink
          smooth
          to="/about#my-stacks"
          className="text-[16px] text-blue transition-colors duration-300 hover:text-white"
        >
          View all
        </HashLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {displayedItems.map(item => (
          <MyStackCard
            key={item._id}
            image={urlFor(item.image).url()}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>


    </section>
  );
};

export default MyStackList;