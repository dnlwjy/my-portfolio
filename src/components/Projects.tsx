import ItemCard from "@/components/ui/ItemCard";
import moment from "@/assets/image24.png";

const Projects = () => {

  return (
    <section id="projects" className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full">
 
        <div className="flex items-center gap-6">
          <h2>Projects</h2>
          <hr className="flex-grow h-0.5 bg-darkgray" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          <ItemCard
            title="moment"
            description="Collaborative design and prototyping tool."
            image={moment}
            url="project1"
            price={19.99}
          />
          <ItemCard
            title="moment"
            description="Collaborative design and prototyping tool."
            image={moment}
            url="project2"
          />
          <ItemCard
            title="moment"
            description="Collaborative design and prototyping tool."
            image={moment}
            url="project3"
          />
          <ItemCard
            title="moment"
            description="Collaborative design and prototyping tool."
            image={moment}
            url="project4"
          />
        </div>
    </section>
  );
};

export default Projects;