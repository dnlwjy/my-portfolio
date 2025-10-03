import React from "react";

interface AnimationGroupProps {
  delay?: string;
  children: React.ReactNode;
  className?: string;
}

const AnimationGroup = ({
  delay = "0s",
  children,
  className = "",
}: AnimationGroupProps) => {
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

export default AnimationGroup;