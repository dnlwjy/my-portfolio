
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      description: "A complete overhaul of an online store with a focus on improving user experience and conversion rates.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["UI/UX", "Web Design", "Shopify"],
      url: "#",
      category: "Design"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A React-based task management application with a clean UI and powerful organization features.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "TypeScript", "UI Design"],
      url: "#",
      category: "Development"
    },
    {
      id: 3,
      title: "Brand Identity System",
      description: "A comprehensive brand identity system for a tech startup, including logo, color palette, and guidelines.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Branding", "Logo Design", "Guidelines"],
      url: "#",
      category: "Design"
    },
    {
      id: 4,
      title: "Interactive Data Dashboard",
      description: "A responsive dashboard that visualizes complex data in an intuitive and engaging way.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "D3.js", "Dashboard Design"],
      url: "#",
      category: "Development"
    }
  ];
  
  const filters = ["All", "Design", "Development"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <Separator className="mb-20 bg-gray-800" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work spanning web design, application development, and branding projects.
          </p>
          
          <div className="flex justify-center mt-8 space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === filter 
                    ? "bg-highlight text-white" 
                    : "bg-dark-secondary text-gray-300 hover:bg-dark-accent"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              url={project.url}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
