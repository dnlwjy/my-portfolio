import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import CMSList from "@/components/CMSList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MyStack />
        <CMSList collection="projects" h1={false} maxItems={6}/>
        <CMSList collection="shop" h1={false} maxItems={6}/>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;