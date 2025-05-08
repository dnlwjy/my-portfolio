
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#121212] text-white">
        <Navbar />
        <div className="ml-16 md:ml-16"> {/* Add margin to accommodate sidebar */}
          <div className="max-w-[840px] mx-auto px-4">
            <Hero />
            <MyStack />
            <Projects />
            <Shop />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
