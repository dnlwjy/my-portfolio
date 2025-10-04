import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList";
import MyStackCard from "@/components/ui/MyStackCard";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CMSList collection="stack" maxItems={6} CardComponent={MyStackCard} cols={3}/>
        <CMSList collection="projects" maxItems={4}/>
        <CMSList collection="shop" maxItems={4} showPrice={true} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;