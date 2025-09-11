import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
      <>
      <header>
        <Navbar />
      </header>
        <main>
          <Hero />
          <MyStack />
          <Projects />
          <Shop />
          <Contact/>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
  );
};

export default Index;