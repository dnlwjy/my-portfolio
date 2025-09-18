import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;