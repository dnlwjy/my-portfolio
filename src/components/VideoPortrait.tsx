import React from "react";
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

// Helper untuk cek apakah user di mobile
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return /Mobi|Android/i.test(navigator.userAgent);
};

const VideoPortrait = isMobile() ? VideoPortraitBase : withCursorFollow(VideoPortraitBase);

export default VideoPortrait;
