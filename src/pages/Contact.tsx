
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
      <div>
        <Navbar />
        <main>
          <Contact />
          <Footer />
        </main>
      </div>
  );
};

export default ContactPage;
