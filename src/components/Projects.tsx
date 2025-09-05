import ItemCard from "@/components/ui/ItemCard";
import figma from "@/assets/placeholder.png";

const Projects = () => {

  return (
    <section id="projects" className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full">

        <div className="flex items-center gap-6">
          <h2>Projects</h2>
          <hr className="flex-grow h-0.5 bg-darkgray" />
        </div>

        <div className="grid grid-cols-2 gap-4">
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