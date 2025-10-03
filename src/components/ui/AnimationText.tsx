import { motion } from "framer-motion";
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
        <motion.span
          key={index}
          className={cn("inline-block blur-animation", gradient && "text-gradient")}
          initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: (delay + index * 30) / 1000,
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimationText;