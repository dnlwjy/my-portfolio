import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimationGroupProps {
  delay?: number;
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

const AnimationGroup = ({
  delay = 0,
  children,
  direction = "up",
  className = "",
}: AnimationGroupProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      x: direction === "left" ? 10 : direction === "right" ? -10 : 0,
      y: direction === "up" ? 10 : direction === "down" ? -10 : 0,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        delay: delay / 1000,
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // if only 30% seen
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimationGroup;