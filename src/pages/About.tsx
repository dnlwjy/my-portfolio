import Navbar from "@/components/Navbar";
import moment from "@/assets/image24.png";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="py-28">
        <section id="about" className="py-20 p-6 flex flex-col gap-10 mx-auto w-full bg-red-500">
          <div className="flex text-center justify-center items-center gap-6 mb-10">
            <h1><span className="text-gray">A bit more</span><br />about me.
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;