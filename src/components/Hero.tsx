
{/*
  Proudly built by Daniel Wijaya
*/}

import AnimatedText from "./AnimatedText";
import VideoPortrait from "./VideoPortrait";
import Button from "@/components/ui/button";


const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex p-6 items-center justify-center">
      
      <div className="w-full text-center max-w-[840px]">
          
          <div className="h-[320px] -z-20">
            <VideoPortrait />
          </div>

        <div className="flex flex-col gap-8">
          
          <h1 className="mb-6 tracking-tight">
            <AnimatedText text="I'm Daniel." className="text-gray" delay={200} blurAnimation={true} />
            <span className="block">
              <AnimatedText text="Designer and developer." delay={400} blurAnimation={true} />
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in z-10" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <Button
            variant="primary"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth'});
            }}>
              Contact me
            </Button>
            <Button
            variant="secondary">
              Contact me
            </Button>
          </div>

        </div>

        </div>
    </section>
  );
};

export default Hero;
