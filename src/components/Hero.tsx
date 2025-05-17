import AnimatedText from "./AnimatedText";
import VideoPortrait from "./VideoPortrait";
import Button from "@/components/ui/button";


const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center">
      
      <div className="w-full text-center max-w-[840px]">
          
          <div className="h-[320px] -z-20">
            <VideoPortrait delay={300} blurAnimation={true} />
          </div>

        <div className="flex flex-col gap-12">
          
          <h1>
            <AnimatedText text="I'm Daniel." className="text-gray" delay={300} blurAnimation={true} />
            <span className="block">
              <AnimatedText text="Designer and developer." delay={700} blurAnimation={true} />
            </span>
          </h1>
          
          <div className="flex justify-center gap-4 opacity-0 animate-fade-in z-10" style={{ animationDelay: '1350ms', animationFillMode: 'forwards' }}>
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
              About me
            </Button>
          </div>

        </div>

        </div>
    </section>
  );
};

export default Hero;
