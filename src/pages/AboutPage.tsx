import Navbar from "@/components/Navbar";
import image from "@/assets/about.jpg";
import Footer from "@/components/Footer";
import figma from "@/assets/figma.svg";
import framer from "@/assets/framer.svg";
import tailwind from "@/assets/tailwind.svg";
import js from "@/assets/js.svg";
import ts from "@/assets/ts.svg";
import react from "@/assets/react.svg";
import benq from "@/assets/benq-27-inch.png"
import keychron from "@/assets/keychron.png"
import mouse from "@/assets/mouse.png"
import minisforum from "@/assets/minisforum.png"
import zenbook from "@/assets/zenbook.png"
import kanata from "@/assets/kanata.png"
import nitori from "@/assets/nitori.png"

import Resources from "@/components/ui/Resources";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 pt-20">
        <section id="about" className="flex flex-col py-20 gap-20 mx-auto w-full text-center">

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
              If you’re interested in the software and hardware I use, you may check out my stack and setup below. Meanwhile, you can also explore my other passion in music composing{" "}
              <a href="https://open.spotify.com/artist/0VyiZOjAOfYc0gV7EbT4v0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[20px] transition-colors duration-300 hover:text-gray">piano music</a>.
            </p>

          </div>

        </section>

        <section id="resources" className="flex flex-col py-20 gap-10 mx-auto w-full">

          <div className="flex items-center gap-6">
            <h2>My Stacks</h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            <Resources
              title="Figma"
              description="Collaborative design and prototyping tool."
              image={figma}
            />
            <Resources
              title="Framer"
              description="Interactive prototyping and rapid no-code web builder."
              image={framer}
            />
            <Resources
              title="HTML/Tailwind CSS"
              description="Semantic markup and utility-first styling."
              image={tailwind}
            />
            <Resources
              title="JavaScript"
              description="Core language for dynamic web interactions."
              image={js}
            />
            <Resources
              title="TypeScript"
              description="Strongly typed superset of JavaScript for safer code."
              image={ts}
            />
            <Resources
              title="React"
              description="Component-based library for building UIs."
              image={react}
            />
          </div>
        </section>

        <section id="resources" className="flex flex-col py-20 gap-10 mx-auto w-full">

          <div className="flex items-center gap-6">
            <h2>Desk setup</h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            <Resources
              title="Minisforum UM series"
              description="Collaborative design and prototyping tool."
              image={minisforum}
            />
            <Resources
              title="BenQ 27 inch"
              description="Collaborative design and prototyping tool."
              image={benq}
            />
            <Resources
              title="Logitech G series"
              description="Collaborative design and prototyping tool."
              image={mouse}
            />
            <Resources
              title="Keychron B6 Pro"
              description="Collaborative design and prototyping tool."
              image={keychron}
            />
            <Resources
              title="Zenbook 14 OLED"
              description="Collaborative design and prototyping tool."
              image={zenbook}
            />
            <Resources
              title="Kanata's Adjustable Desk"
              description="Collaborative design and prototyping tool."
              image={kanata}
            />
            <Resources
              title="Nitori Gaming Chair"
              description="Collaborative design and prototyping tool."
              image={nitori}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;