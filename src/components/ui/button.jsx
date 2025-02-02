import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center shrink-0 justify-center text-lg min-w-60 gap-4 rounded-xl h-14 font-medium transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-white hover:border-black border hover:text-black active:bg-black active:text-white",
        primary: "bg-amber-100 hover:bg-black border border-amber-100 hover:text-white active:text-white active:bg-black",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border hover:bg-amber-200 hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "p-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
