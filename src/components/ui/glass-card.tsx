"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  variant?: "standard" | "elevated" | "pill";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  standard: "glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-white/10",
  elevated: "glass-panel-elevated p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-white/15 shadow-2xl",
  pill: "glass-panel-pill px-6 py-3 rounded-full border-white/15 shadow-xl",
};

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, variant = "standard", hoverEffect = true, children, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4 } : undefined}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          variantClasses[variant],
          hoverEffect && "hover:border-white/25",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
