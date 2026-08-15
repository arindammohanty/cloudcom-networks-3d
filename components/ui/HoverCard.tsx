"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function HoverCard({ children, className = "", glowColor = "rgba(59, 130, 246, 0.5)" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 ${className}`}
    >
      <div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"
        style={{ background: `linear-gradient(45deg, transparent, ${glowColor}, transparent)` }}
      />
      <div className="relative h-full z-10 bg-inherit rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}
