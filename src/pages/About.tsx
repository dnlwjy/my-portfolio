import Navbar from "@/components/Navbar";
import image from "@/assets/about.jpg";
import Footer from "@/components/Footer";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="about" className="flex flex-col sm:py-60 py-40 gap-20 mx-auto w-full text-center">

          <h1><span className="text-gray">A bit more</span><br />about me.
          </h1>

          <img
            src={image}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="flex flex-col gap-6 text-start">
            <p className="md:text-[32px] text-[24px] tracking-[-1px] leading-[1.5] font-normal text-white">
              Hello! I'm Daniel, a passionate designer & developer with a focus for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and TypeScript, I specialize in building responsive and visually appealing websites that captivate users across all devices.
            </p>

            <p>
              Believe it or not, before design I was a classical pianist student and wanted to be a composer but instead graduated with a degree in graphic design.
            </p>

            <p>
              As both a designer and developer, I specialize in user and product quality. I excel in balancing good design and good performance. Besides, I also have a solid background in graphic design, bringing traditional design into a digitized world. I am passionate about staying updated with the latest technology and design trends.
            </p>

            <p>
              If you’re interested in the software and hardware I use, you may check out my{" "}
              <RouterLink to="/resources" className="text-white text-[20px] transition-colors duration-300 hover:text-gray">resources page</RouterLink >. Meanwhile, you can also explore my other passion in music composing{" "}
              <a href="https://open.spotify.com/artist/0VyiZOjAOfYc0gV7EbT4v0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[20px] transition-colors duration-300 hover:text-gray">piano music</a>.
            </p>

          </div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;