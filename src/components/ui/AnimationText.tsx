import { cn } from "@/lib/utils";

interface AnimationTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
  delay?: number;
}

const AnimationText = ({ 
  text,
  className,
  gradient = false,
  delay = 0,
}: AnimationTextProps) => {
  return (
    <span className={cn("inline-block", className)}>
      {[...text].map((char, index) => (
        <span
          key={index}
          className={cn(
            "inline-block animate-slide-in-left blur-animation",
            gradient && "text-gradient"
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

export default AnimationText;