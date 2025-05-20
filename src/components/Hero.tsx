import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import VideoPortrait from "./VideoPortrait";
import Button from "@/components/ui/button";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 810);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="home" className="h-screen w-full flex p-4 items-center justify-center">
      <div className="w-full text-center max-w-[840px]">
        <div className="md:h-[320px] h-[365px] -z-20">
          <VideoPortrait delay={300} blurAnimation={true} />
        </div>

        <div className="flex flex-col gap-12 items-center">
          <h1 className="flex flex-col max-w-[300px] md:max-w-none">
            <AnimatedText text="I'm Daniel." className="text-gray" delay={300} blurAnimation={true} />
              <span>
                  <AnimatedText text="Designer and developer." delay={600} blurAnimation={true} />
              </span>
          </h1>

          <div
            className="flex justify-center gap-3 blur-animation z-10"
            style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
          >
            <Button
              variant="primary"
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact me
            </Button>
            <Button variant="secondary">About me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;