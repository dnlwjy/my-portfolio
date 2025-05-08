
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
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  gradient = false,
  delay = 0,
  blurAnimation = false
}) => {
  return (
    <span 
      className={cn(
        "inline-block opacity-0 animate-fade-in", 
        gradient && "text-gradient",
        blurAnimation && "blur-animation",
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
