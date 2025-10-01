import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Resources from "@/components/ui/Resources";
import { client, urlFor } from "@/sanityClient";
import image from "@/assets/about.jpg";

interface AboutPageItem {
  _id: string;
  _type: string;
  name: string;
  description: string;
  image?: any;
}

interface AboutPageProps {
  maxItems?: number;
}

const AboutPage = ({ maxItems }: AboutPageProps) => {
  const location = useLocation();
  const [items, setItems] = useState<AboutPageItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    client.fetch(
      `*[_type == "my-stack" || _type == "desk-setup"]{
        _id, _type, name, description, image
      }`
    )
      .then(data => {
        setItems(data);
        setLoaded(true);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (loaded && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [loaded, location]);

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <>
      <Header />
      <main className="p-6 pt-20">
        <section id="about" className="flex flex-col py-20 gap-20 mx-auto w-full text-center">
          <h1><span className="text-gray">A bit more</span><br />about me.</h1>
          <img src={image} className="w-full h-full object-cover rounded-2xl" />
          <div className="flex flex-col gap-6 text-start">
            <p className="md:text-[32px] text-[24px] tracking-[-1px] leading-[1.5] font-normal text-white">
              Hello! I'm Daniel, a passionate designer & developer with a focus for creating engaging and user-friendly web experiences...
            </p>
          </div>
        </section>

        <section id="my-stacks" className="flex flex-col py-20 gap-10 mx-auto w-full">
          <div className="flex items-center gap-6">
            <h2>My Stacks</h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {displayedItems
              .filter(item => item._type === "my-stack")
              .map(item => (
                <Resources
                  key={item._id}
                  image={item.image ? urlFor(item.image).url() : '/uploads/placeholder.svg'}
                  title={item.name}
                  description={item.description}
                />
              ))}
          </div>
        </section>

        <section id="desk-setup" className="flex flex-col py-20 gap-10 mx-auto w-full">
          <div className="flex items-center gap-6">
            <h2>Desk Setup</h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {displayedItems
              .filter(item => item._type === "desk-setup")
              .map(item => (
                <Resources
                  key={item._id}
                  image={item.image ? urlFor(item.image).url() : '/uploads/placeholder.svg'}
                  title={item.name}
                  description={item.description}
                />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;