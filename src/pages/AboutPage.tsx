import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ItemCard3 from "@/components/ui/ItemCard3";
import { client } from "@/sanityClient";
import image from "@/assets/me.jpg";
import AnimationText from "@/components/ui/AnimationText";
import AnimationGroup from "@/components/ui/AnimationGroup";
import CMSList from "@/components/CMSList";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { SiteMetaData } from "@/components/SiteMetaData";

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
  const [items, setItems] = useState<AboutPageItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setItems([]);

    client.fetch(
      `*[_type == "my-stack" || _type == "desk-setup"]{
        _id, _type, name, description, image
      }`
    )
      .then(data => {
        setItems(data);
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setLoaded(true);
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 300);
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

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SiteMetaData
        title="About | Daniel Wijaya"
        url="https://danielwijaya.com/about"
        type="profile"
      />

      <Header />
      <main className="py-10">
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
            aria-label="Portrait of Daniel Wijaya"
            delay={500}>
            <img src={image} alt="Daniel Wijaya" className="w-full h-full object-cover rounded-2xl" />
          </AnimationGroup>

          <AnimationGroup
            delay={500}
            aria-label="Short bio about Daniel Wijaya"
            className="flex flex-col gap-6 text-start">
            <p className="font-inter md:text-[32px] text-[24px] tracking-[-1px] leading-[1.5] font-normal text-white">
              I'm Daniel, a designer and developer focused on creating user-friendly experiences and building robust, efficient systems...
            </p>
            <p>
              Believe it or not, I was once <a href="https://drive.google.com/file/d/1QBd2ZOOCJA7Ck96l9AyS52M8pzmMW329/view" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray transition-colors duration-300">a classical pianist</a> student and wanted to be a composer but instead graduated with a degree in graphic design. Today, I’m a designer and developer skilled in Figma, Framer, and modern web technologies like Tailwind, React.js, and TypeScript. Over the years, I’ve worked remotely as a designer and frontend developer with clients from Australia, New Zealand, US, UK, and Netherlands — helping them to achieve their business goals and reach their full potential.
            </p>
            <p>
              I’m also eager to work on-site as a full-time team member — not only to grow professionally but to build meaningful connections with creative and passionate people in the industry. You’re welcome to view <a href="https://drive.google.com/file/d/1g2-1tF6l2J3GOTJN6D0DE1R_SZnUv4wU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray transition-colors duration-300">my CV</a>, and if you’re interested in my music I’ve produced feel free to check out <a href="https://open.spotify.com/artist/0VyiZOjAOfYc0gV7EbT4v0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray transition-colors duration-300">my Spotify</a>.
            </p>
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