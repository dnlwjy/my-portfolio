import React, { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { withCursorFollow } from "@/utils/withCursorFollow";
import { cn } from "@/lib/utils";

interface VideoPortraitProps {
  delay?: number;
  blurAnimation?: boolean;
}

const VideoPortraitBase = ({ delay = 0, blurAnimation = false }: VideoPortraitProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-[333px] h-[443px] object-cover -z-10 pointer-events-none",
        blurAnimation && "blur-animation"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
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
          background: "radial-gradient(circle at center, rgba(18,18,18,0) 85%, #121212 100%)",
        }}
      ></div>
    </div>
  );
};

const VideoPortraitWrapper = ({ delay, blurAnimation }: VideoPortraitProps) => {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 810px)");

    const handler = (e: MediaQueryListEvent) => {
      setEnabled(!e.matches); // disable if <= 810px
    };

    setEnabled(!mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const Component = enabled ? withCursorFollow(VideoPortraitBase) : VideoPortraitBase;
  return <Component delay={delay} blurAnimation={blurAnimation} />;
};


export default VideoPortraitWrapper;