import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import VideoPortrait from "./VideoPortrait";
import Button from "@/components/ui/button";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 810); // breakpoint md kamu
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="home" className="h-screen w-full flex p-6 items-center justify-center">
      <div className="w-full text-center max-w-[840px]">
        <div className="h-[320px] -z-20">
          <VideoPortrait delay={300} blurAnimation={true} />
        </div>

        <div className="flex flex-col gap-12">
          <h1>
            {isMobile ? (
              <>
                <AnimatedText text="I'm Daniel." className="text-gray" delay={300} blurAnimation={true} />
                <span className="block">
                  <AnimatedText text="Designer and" delay={700} blurAnimation={true} />
                </span>
                <span className="block">
                  <AnimatedText text="developer" delay={1100} blurAnimation={true} />
                </span>
              </>
            ) : (
              <>
                <AnimatedText text="I'm Daniel." className="text-gray" delay={300} blurAnimation={true} />
                <span className="block">
                  <AnimatedText text="Designer and developer." delay={700} blurAnimation={true} />
                </span>
              </>
            )}
          </h1>

          <div
            className="flex justify-center gap-4 opacity-0 animate-fade-in z-10"
            style={{ animationDelay: "1350ms", animationFillMode: "forwards" }}
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