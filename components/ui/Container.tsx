"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Container = ({ className, as = "div", ...props }: ContainerProps) => {
  const Tag = as as any;
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
};

export { Container };
