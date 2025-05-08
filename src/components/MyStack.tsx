
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  FileCode, 
  Terminal, 
  Database, 
  Layout, 
  Layers, 
  PenTool,
  Server
} from "lucide-react";

const MyStack = () => {
  const categories = [
    {
      name: "Frontend",
      icon: <FileCode className="text-[#9b87f5] mb-2" size={28} />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      name: "Backend",
      icon: <Server className="text-[#F97316] mb-2" size={28} />,
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"]
    },
    {
      name: "Development Tools",
      icon: <Terminal className="text-[#0EA5E9] mb-2" size={28} />,
      skills: ["Git", "Docker", "VS Code", "Jest", "CI/CD"]
    },
    {
      name: "Design",
      icon: <PenTool className="text-[#D946EF] mb-2" size={28} />,
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Typography"]
    }
  ];

  return (
    <section id="my-stack" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Stack</h2>
          <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The technologies, tools, and frameworks I specialize in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="glass-card p-6 rounded-lg hover:transform hover:translate-y-[-5px] transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStack;
