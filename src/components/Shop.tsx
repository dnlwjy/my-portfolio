import { useEffect, useState } from "react";
import ItemCard from "@/components/ui/ItemCard";
import { client, urlFor } from "@/sanityClient";

interface Shop {
  _id: string;
  title: string;
  description: string;
  coverImage: any;
  slug?: { current: string };
  price?: number;
}

interface ShopProps {
  h1: boolean;
  maxItems?: number;
}

const Shop = ({ h1 = true, maxItems }: ShopProps) => {
  const [shop, setShop] = useState<Shop[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "shop"]{
        _id,
        title,
        description,
        coverImage,
        slug,
        price
      }`)
      .then((data) => setShop(data))
      .catch(console.error);
  }, []);

  const displayedShop = maxItems ? shop.slice(0, maxItems) : shop;

  return (
    <main>
      <section id="shop" className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full">
        {h1 ? (
          <div className="flex text-center justify-center items-center gap-6 mb-10">
            <h1>
              <span className="text-gray">Welcome to</span>
              <br />
              My Store
            </h1>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <h2>Shop</h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
            <a href="/shop" className="text-[16px] text-blue transition-colors duration-300 hover:text-white">View all</a>
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {displayedShop.map((shop) => (
            <ItemCard
              key={shop._id}
              title={shop.title}
              description={shop.description}
              coverImage={urlFor(shop.coverImage).url()}
              url={`/shop/${shop.slug?.current || "#"}`}
              price={shop.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Shop;