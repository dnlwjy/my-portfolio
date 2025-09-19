import { useEffect, useState } from "react";
import ItemCard from "@/components/ui/ItemCard";
import { client, urlFor } from "@/sanityClient";

interface Project {
  _id: string;
  title: string;
  description: string;
  coverImage: any;
  slug?: { current: string };
}

interface ProjectsProps {
  h1: boolean;
  maxItems?: number;
}

const Projects = ({ h1 = true, maxItems }: ProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "projects"]{
        _id,
        title,
        description,
        coverImage,
        slug
      }`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const displayedProjects = maxItems ? projects.slice(0, maxItems) : projects;

  return (
    <main>
      <section id="projects" className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full">
        {h1 ? (
          <div className="flex text-center justify-center items-center gap-6 mb-10">
            <h1>
              <span className="text-gray">Selected</span>
              <br />
              Projects
            </h1>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <h2>Projects</h2>
            <hr className="flex-grow h-0.5 bg-darkgray" />
            <a href="/projects" className="text-[16px] text-blue transition-colors duration-300 hover:text-white">View all</a>
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {displayedProjects.map((project) => (
            <ItemCard
              key={project._id}
              title={project.title}
              description={project.description}
              coverImage={urlFor(project.coverImage).url()}
              url={`/projects/${project.slug?.current || "#"}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;