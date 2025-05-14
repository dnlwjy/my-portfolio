
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import VideoPortrait from "./VideoPortrait";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex mx-auto items-center justify-center relative max-w-[840px]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/10 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight/15 rounded-full filter blur-3xl opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-highlight font-medium inline-flex items-center">
            <span className="animate-glow mr-2 h-2 w-2 rounded-full bg-highlight inline-block"></span>
            Designer & Developer
          </p>
          
          <VideoPortrait />
          
          <h1 className="sm:text-[72px] text-[48px] font-bold mb-6 tracking-tight">
            <AnimatedText text="I'm Daniel." delay={200} blurAnimation={true} />
            <span className="block">
              <AnimatedText text="Experiences that" delay={400} blurAnimation={true} />
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <a 
              href="#projects"
              className="bg-highlight hover:bg-highlight-secondary text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
            >
              View My Work
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="border border-white/20 hover:border-highlight/50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
