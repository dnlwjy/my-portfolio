
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  gradient = false,
  delay = 0
}) => {
  return (
    <span 
      className={cn(
        "inline-block opacity-0 animate-fade-in", 
        gradient && "text-gradient",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
