import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
      <>
        <Navbar />
        <main className="py-28">
          <Contact variant="2nd" />
        </main>
        <Footer />
      </>
  );
};

export default ContactPage;