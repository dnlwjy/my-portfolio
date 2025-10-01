import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyStackList from "@/components/MyStackList";
import CMSList from "@/components/CMSList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MyStackList maxItems={6} />
        <CMSList collection="projects" h1={false} maxItems={6}/>
        <CMSList collection="shop" h1={false} maxItems={6} showPrice={true}/>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;