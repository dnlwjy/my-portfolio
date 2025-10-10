import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ItemCard3 from "@/components/ui/ItemCard3";
import { client, urlFor } from "@/sanityClient";
import image from "@/assets/me.jpg";
import AnimationText from "@/components/ui/AnimationText";
import AnimationGroup from "@/components/ui/AnimationGroup";
import CMSList from "@/components/CMSList";

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
      <main className="pt-20">
        <section id="about" className="flex flex-col py-20 gap-20 mx-auto w-full text-center">
          <h1>
            <AnimationText
              text="A bit more"
              className="text-gray"
              delay={0} />
            <br />

            <AnimationText
              text="about me."
              delay={200} />
          </h1>

          <AnimationGroup
            delay={500}>
            <img src={image} className="w-full h-full object-cover rounded-2xl" />
          </AnimationGroup>

          <AnimationGroup
            delay={500}
            className="flex flex-col gap-6 text-start">
            <h2 className="md:text-[32px] font-inter text-[24px] tracking-[-1px] leading-[1.5] font-normal text-white">
              Hello! I'm Daniel, a passionate designer & developer with a focus for creating engaging and user-friendly web experiences...
            </h2>
            <div className="flex flex-col gap-4">
              <p>
                Believe it or not, before design I was a classical pianist student and wanted to be a composer but instead graduated with a degree in graphic design.
              </p>
              <p>
                As both a designer and developer, I specialize in user and product quality. I excel in balancing good design and good performance. Besides, I also have a solid background in graphic design, bringing traditional design into a digitized world. I am passionate about staying updated with the latest technology and design trends.
              </p>
              <p>
                If you’re interested in the software and hardware I use, you may check out my resources page. Meanwhile, you can also explore my other passion in music <a href="https://open.spotify.com/album/03Plro1zFGUdv4JQfrSkfR" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray transition-colors duration-300">composing piano music</a>.
              </p>
            </div>
          </AnimationGroup>
        </section>
        <CMSList collection="stack" heading="My Stack" CardComponent={ItemCard3} cols={2} ViewAll={false} />
        <CMSList collection="setup" heading="Desk Setup" CardComponent={ItemCard3} cols={2} ViewAll={false} />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;