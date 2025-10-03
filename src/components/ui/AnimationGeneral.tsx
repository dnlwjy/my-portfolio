import React from "react";

interface AnimatedGeneralProps {
  delay?: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedGeneral = ({
  delay = "0s",
  children,
  className = "",
}: AnimatedGeneralProps) => {
  return (
    <div
      className={className}
      style={{
        animationDelay: delay,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedGeneral;