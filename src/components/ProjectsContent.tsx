
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./ui/pagination";

const ProjectsContent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      id: "1",
      title: "E-commerce Website Redesign",
      description: "A complete overhaul of an online store with a focus on improving user experience and conversion rates.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["UI/UX", "Web Design", "Shopify"],
      category: "Design"
    },
    {
      id: "2",
      title: "Task Management Application",
      description: "A React-based task management application with a clean UI and powerful organization features.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "TypeScript", "UI Design"],
      category: "Development"
    },
    {
      id: "3",
      title: "Brand Identity System",
      description: "A comprehensive brand identity system for a tech startup, including logo, color palette, and guidelines.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Branding", "Logo Design", "Guidelines"],
      category: "Design"
    },
    {
      id: "4",
      title: "Interactive Data Dashboard",
      description: "A responsive dashboard that visualizes complex data in an intuitive and engaging way.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "D3.js", "Dashboard Design"],
      category: "Development"
    },
    {
      id: "5",
      title: "Mobile App Design",
      description: "A sleek and intuitive mobile app design for a fitness tracking application.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
      tags: ["Mobile Design", "UI/UX", "Figma"],
      category: "Design"
    },
    {
      id: "6",
      title: "Community Forum",
      description: "A dynamic forum platform built with React and Firebase for real-time discussions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Firebase", "Community"],
      category: "Development"
    }
  ];
  
  const filters = ["All", "Design", "Development"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20">
      <Separator className="mb-20 bg-gray-800" />
      <div className="text-center mb-16 opacity-0 animate-spring-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my portfolio of work spanning web design, application development, and branding projects.
        </p>
        
        <div className="flex justify-center mt-8 space-x-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "secondary"}
              className={cn(
                "spring-hover",
                activeFilter === filter 
                  ? "bg-highlight hover:bg-highlight/90" 
                  : "bg-dark-secondary text-gray-300 hover:bg-dark-accent"
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`} 
            className="block opacity-0 animate-spring-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="bg-dark-secondary rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg spring-hover">
              <div 
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-dark-accent rounded-full text-sm text-gray-300 spring-hover"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <span 
                  className="inline-flex items-center text-highlight hover:text-highlight-secondary transition-colors spring-hover"
                >
                  View Case Study →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 opacity-0 animate-spring-in" style={{ animationDelay: '600ms' }}>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive className="spring-hover">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="spring-hover">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="spring-hover">3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default ProjectsContent;
