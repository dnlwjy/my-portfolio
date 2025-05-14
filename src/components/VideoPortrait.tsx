
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { withCursorFollow } from "@/utils/withCursorFollow";

const VideoPortraitBase = () => {
  return (
    <div className="mb-8 relative mx-auto max-w-md">
      <div className="absolute inset-0" />
      <AspectRatio ratio={1} className=" ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/public/lovable-uploads/ava.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
    </div>
  );
};

const VideoPortrait = withCursorFollow(VideoPortraitBase);

export default VideoPortrait;
