
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import VideoPortrait from "./VideoPortrait";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/10 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight/15 rounded-full filter blur-3xl opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-highlight font-medium inline-flex items-center">
            <span className="animate-glow mr-2 h-2 w-2 rounded-full bg-highlight inline-block"></span>
            Designer & Developer
          </p>
          
          <VideoPortrait />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <AnimatedText text="Crafting Digital" delay={200} blurAnimation={true} />
            <span className="block">
              <AnimatedText text="Experiences that" delay={400} blurAnimation={true} />
            </span>
            <span className="block">
              <AnimatedText text="Matter" gradient={true} delay={600} blurAnimation={true} className="relative" />
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            I blend design aesthetics with technical expertise to create 
            memorable digital solutions that solve real problems.
          </p>
          
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
