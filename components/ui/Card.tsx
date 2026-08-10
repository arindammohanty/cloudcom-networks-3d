"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

export interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, boxShadow: "var(--shadow-hover)" } : {}}
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-white rounded-xl border border-gray-100 p-6 shadow-sm overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
