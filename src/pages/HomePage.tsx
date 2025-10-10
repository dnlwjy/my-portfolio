import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList";
import ItemCard2 from "@/components/ui/ItemCard2";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CMSList collection="stack" CardComponent={ItemCard2} heading="My Stack" cols={3} maxItems={6} ViewAll={false}/>
  <CMSList collection="projects" maxItems={4} featuredOnly />
  <CMSList collection="shop" maxItems={4} showPrice={true} featuredOnly />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;