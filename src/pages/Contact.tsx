import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;