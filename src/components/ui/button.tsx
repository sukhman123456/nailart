import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-rose",
        outline: "border border-foreground bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
        light: "bg-background text-foreground hover:bg-secondary",
        lightOutline: "border border-primary-foreground text-primary-foreground hover:bg-background hover:text-foreground",
        ghost: "text-foreground hover:text-rose",
      },
      size: {
        default: "min-h-12 px-7 text-[10px] font-bold uppercase tracking-[.16em]",
        sm: "min-h-10 px-5 text-[10px] font-bold uppercase tracking-[.13em]",
        lg: "min-h-14 px-9 text-[10px] font-bold uppercase tracking-[.16em]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };
