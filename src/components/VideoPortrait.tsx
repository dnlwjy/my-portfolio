
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoPortrait = () => {
  return (
    <div className="mb-8 relative mx-auto max-w-md">
      <div className="absolute inset-0 bg-highlight/10 rounded-full filter blur-3xl opacity-20 -z-10 animate-pulse" />
      <AspectRatio ratio={1} className="rounded-full overflow-hidden border-2 border-highlight/20 shadow-lg shadow-highlight/20 spring-hover">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-design-of-a-user-interface-prototype-9071-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
    </div>
  );
};

export default VideoPortrait;
