import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  asChild?: boolean
}

export function Button({
  variant = "primary",
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  const baseClasses=
  "px-8 rounded-full transition-all duration-300 h-12 flex items-center"

  const variantClasses = {
    primary: "bg-blue hover:bg-white hover:text-black text-white",
    secondary: "bg-darkgray hover:bg-white hover:text-black text-white"
  }

  return (
    <Comp
    className={cn(baseClasses, variantClasses[variant], className)}
    {...props}
    >
    {children}  

    </Comp>
  )

}

export const buttonVariants = {
};
export default Button;