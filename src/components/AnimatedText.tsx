
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
  delay?: number;
  blurAnimation?: boolean;
  springAnimation?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  gradient = false,
  delay = 0,
  blurAnimation = false,
  springAnimation = true
}) => {
  return (
    <span 
      className={cn(
        "inline-block opacity-0", 
        gradient && "text-gradient",
        blurAnimation && "blur-animation",
        springAnimation && !blurAnimation && "spring-animation",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: "forwards",
      }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
