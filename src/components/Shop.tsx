import { useState } from "react";
import ItemCard from "@/components/ui/ItemCard";
import figma from "@/assets/image24.png";
import LinkButton from "./ui/LinkButton";

const Projects = () => {
  const [hover, setHover] = useState(false);

  return (
    <section id="projects" className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full">

      <div className="flex items-center gap-6">
        <h2>Shop</h2>
        <hr className="flex-grow h-0.5 bg-darkgray" />
        <a href="/shop" className="text-[16px] text-blue transition-colors duration-300 hover:text-white">View all</a>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        <ItemCard
          title="Figma"
          description="Collaborative design and prototyping tool."
          image={figma}
          url="#"
        />
        <ItemCard
          title="Figma"
          description="Collaborative design and prototyping tool."
          image={figma}
          url="#"
        />
        <ItemCard
          title="Figma"
          description="Collaborative design and prototyping tool."
          image={figma}
          url="#"
        />
        <ItemCard
          title="Figma"
          description="Collaborative design and prototyping tool."
          image={figma}
          url="#"
        />
      </div>
    </section>
  );
};

export default Projects;