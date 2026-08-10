"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-gradient-to-r from-cloud-blue to-success-green text-white hover:opacity-90 border border-transparent shadow-md shadow-success-green/20",
      secondary: "bg-sky-blue text-white hover:bg-[#0284c7] border border-transparent shadow-sm",
      outline: "bg-transparent text-cloud-blue border border-cloud-blue hover:bg-blue-50",
      ghost: "bg-transparent text-text-secondary hover:text-cloud-blue hover:bg-blue-50",
      dark: "bg-dark-navy text-white hover:bg-dark-navy-light border border-transparent shadow-sm",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm font-medium",
      md: "h-11 px-6 text-base font-semibold",
      lg: "h-14 px-8 text-lg font-semibold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cloud-blue focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
