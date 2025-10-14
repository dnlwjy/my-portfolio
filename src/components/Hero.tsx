import AnimationText from "./ui/AnimationText";
import Ava from "./Ava";
import Button from "@/components/ui/Button";
import AnimationGroup from "./ui/AnimationGroup";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="h-screen w-full flex p-4 items-center justify-center">
      <div className="w-full text-center max-w-[840px] pb-6">
        <div className="md:h-[320px] h-[365px] -z-20">
          <Ava/>
        </div>

        <div className="flex flex-col gap-12 items-center">
          <h1 className="flex flex-col max-w-[300px] md:max-w-none">
            <AnimationText
              text="I'm Daniel."
              className="text-gray"
              delay={300} />
            <span>
              <AnimationText
              text="Designer and developer."
              delay={600} />
            </span>
          </h1>

          <AnimationGroup
            delay={1300}
            className="flex justify-center gap-3"
          >
            <Button onClick={() => navigate("/contact")}>
              Contact me
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                window.open("https://github.com/dnlwjy?tab=repositories", "_blank");
              }}>
              View Github
            </Button>
          </AnimationGroup>
        </div>
      </div>
    </section>
  );
};

export default Hero;