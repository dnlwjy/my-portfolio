
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#121212] text-white">
        <Navbar />
        <div className="ml-16 md:ml-16"> {/* Add margin to accommodate sidebar */}
          <div className="max-w-[840px] mx-auto px-4">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContactPage;
