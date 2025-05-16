
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { withCursorFollow } from "@/utils/withCursorFollow";

const VideoPortraitBase = () => {
  return (
    <div className="relative mx-auto w-[333px] h-[443px] object-cover -z-10 pointer-events-none">
      <AspectRatio ratio={1}>
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/uploads/ava.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>

      <div className="absolute right-0 bottom-0 bg-black w-[208px] h-[64px]"></div>
      <div
  className="absolute inset-0"
  style={{
    background: 'radial-gradient(circle at center, rgba(18,18,18,0) 85%, #121212 100%)'
  }}
></div>

    </div>
  );
};

const VideoPortrait = withCursorFollow(VideoPortraitBase);

export default VideoPortrait;
