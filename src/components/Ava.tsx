import React, { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { withCursorFollow } from "@/utils/withCursorFollow";
import AnimationGroup from "./ui/AnimationGroup";

const AvaBase = () => {
  return (
    <AnimationGroup delay={300} direction="up" className="relative mx-auto w-[333px] h-[443px] object-cover -z-10 pointer-events-none">
      <AspectRatio ratio={1}>
        <video autoPlay loop muted playsInline>
          <source src="/uploads/ava.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>

      <div className="absolute right-0 bottom-0 bg-black w-[208px] h-[64px]"></div>
      <div
        className="absolute inset-0"
        style={{
          background:
      "radial-gradient(farthest-side at center, #12121200 80%, #121212 99%, #121212 100%)",
        }}
      ></div>
    </AnimationGroup>
  );
};

const AvaWithCursorFollow = () => {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 810px)");

    const handler = (e: MediaQueryListEvent) => {
      setEnabled(!e.matches);
    };

    setEnabled(!mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const Component = enabled ? withCursorFollow(AvaBase) : AvaBase;
  return <Component />;
};

export default AvaWithCursorFollow;