
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  url,
  reversed = false,
}) => {
  return (
    <div className={cn(
      "grid md:grid-cols-2 gap-8 mb-20 opacity-0 animate-spring-in",
      reversed && "md:grid-flow-dense"
    )}>
      <div className={cn(
        "order-2",
        reversed ? "md:order-1" : "md:order-2"
      )}>
        <div 
          className="w-full h-64 md:h-80 bg-dark-accent rounded-lg overflow-hidden relative group spring-hover"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className={cn(
        "order-1 flex flex-col justify-center",
        reversed ? "md:order-2" : "md:order-1"
      )}>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-dark-secondary rounded-full text-sm text-gray-300 spring-hover"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={url} 
          className="inline-flex items-center text-highlight hover:text-highlight-secondary transition-colors w-fit spring-hover"
        >
          View Project
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
