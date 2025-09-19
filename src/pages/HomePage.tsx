import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MyStack />
        <Projects h1={false} maxItems={6}/>
        <Shop h1={false} maxItems={6}/>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;