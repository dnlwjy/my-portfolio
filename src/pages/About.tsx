import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const AboutPage = () => {
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

  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "Design Studio X",
      period: "2021 - Present",
      description: "Lead designer for enterprise SaaS applications, managing a team of 3 designers and collaborating with product and engineering teams to deliver cohesive user experiences."
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2018 - 2021",
      description: "Developed responsive web applications using React, TypeScript and modern frontend frameworks. Implemented design systems and improved performance across multiple projects."
    },
    {
      title: "Web Designer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description: "Created visual designs for websites and digital products. Collaborated with clients to understand requirements and deliver engaging user interfaces."
    }
  ];

  return (
      <div className="min-h-screen bg-[#121212] text-white">
        <Navbar />
        <div className="ml-16 md:ml-16">
          <div className="max-w-[840px] mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <Avatar className="w-40 h-40 border-2 border-highlight">
                  <AvatarImage src="/public/lovable-uploads/886ee643-db76-46d1-9bb9-92e955651d7c.png" alt="Daniel Wijaya" />
                  <AvatarFallback className="text-4xl">DW</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <AnimatedText text="About Me" gradient={true} />
                </h1>
                <div className="h-1 w-20 bg-highlight mb-6"></div>
                
                <p className="text-gray-300 mb-6">
                  I'm Daniel Wijaya, a multidisciplinary designer and developer with over 6 years of experience creating intuitive and visually compelling digital experiences. With a passion for clean design and efficient code, I specialize in bridging the gap between creative vision and technical implementation.
                </p>
                
                <p className="text-gray-300 mb-8">
                  Based in San Francisco, I've worked with startups and established companies to craft user-centered interfaces that balance aesthetics with functionality. I believe in the power of thoughtful design to solve complex problems and elevate user experiences.
                </p>
                
                <div className="flex gap-4">
                  <Button variant="primary" className="rounded-full" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button variant="primary" className="rounded-full" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </Button>
                  <Button variant="primary" className="rounded-full" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="my-16 bg-gray-800" />
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-dark-secondary border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-highlight">{exp.title}</h3>
                        <span className="text-gray-400 text-sm mt-1 md:mt-0">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            <Separator className="my-16 bg-gray-800" />
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <Card className="bg-dark-secondary border-gray-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-highlight">Bachelor of Design</h3>
                    <span className="text-gray-400 text-sm mt-1 md:mt-0">2012 - 2016</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">California Institute of the Arts</p>
                  <p className="text-gray-400">Specialized in Digital Media and User Experience Design</p>
                </CardContent>
              </Card>
            </section>
            
            <Separator className="my-16 bg-gray-800" />
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-dark-secondary border border-gray-800 rounded-md text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
  );
};

export default AboutPage;
