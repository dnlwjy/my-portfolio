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
  "px-8 rounded-full transition-all font-inter font-medium duration-300 h-12 flex items-center justify-center border-t border-white/5 text-white hover:text-black hover:bg-white"

  const variantClasses = {
    primary: "bg-blue",
    secondary: "bg-darkgray"
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