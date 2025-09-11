import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
      <div>
        <Navbar />
        <main>
          <Contact variant="2nd" />
          <Footer />
        </main>
      </div>
  );
};

export default ContactPage;