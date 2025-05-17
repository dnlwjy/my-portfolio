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
    <span className={cn("inline-block", className)}>
      {[...text].map((char, index) => (
        <span
          key={index}
          className={cn(
            "inline-block animate-slide-in-left",
            gradient && "text-gradient",
            blurAnimation && "blur-animation"
          )}
          style={{
            animationDelay: `${delay + index * 30}ms`,
            animationFillMode: "forwards",
            display: "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;