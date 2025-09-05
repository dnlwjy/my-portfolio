import { Code, Palette, Settings } from "lucide-react";

const About = () => {
  const skills = [
    "UI/UX Design", 
    "Visual Design", 
    "Frontend Development", 
    "React", 
    "TypeScript", 
    "Tailwind CSS", 
    "Figma", 
    "Adobe Creative Suite"
  ];

  return (
    <section id="about" className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72 h-72 bg-highlight/5 rounded-full filter blur-3xl -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-highlight mb-6"></div>
            
            <p className="text-gray-300 mb-4">
              I'm a passionate designer and developer with a keen eye for detail and a love for creating 
              intuitive, aesthetically pleasing digital experiences. With a background in both design and 
              development, I bring a unique perspective to every project.
            </p>
            
            <p className="text-gray-300 mb-6">
              My approach combines creative problem-solving with technical expertise, 
              allowing me to not only envision beautiful interfaces but also implement them 
              with clean, efficient code.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-[#121212]/80 border border-white/10 rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-6 hover:border-highlight/30 transition-all duration-300">
              <div className="bg-highlight/20 p-3 rounded-lg w-fit mb-4">
                <Palette className="text-highlight" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-400">
                Creating visually stunning interfaces that engage users and communicate brand values
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:border-highlight/30 transition-all duration-300">
              <div className="bg-highlight/20 p-3 rounded-lg w-fit mb-4">
                <Code className="text-highlight" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-400">
                Building robust, scalable applications with modern frameworks and clean code
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:border-highlight/30 transition-all duration-300 md:col-span-2">
              <div className="bg-highlight/20 p-3 rounded-lg w-fit mb-4">
                <Settings className="text-highlight" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-400">
                Approaching complex challenges with analytical thinking and creative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
