"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

const variantClasses = {
  primary:
    "titanium-button border border-white/20 text-[#07080b] focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b]",
  glass:
    "glass-panel text-[var(--text-white)] hover:bg-white/10 hover:border-white/25 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b]",
  outline:
    "bg-transparent border border-white/15 text-[var(--text-titanium)] hover:border-white/40 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b]",
  ghost:
    "bg-transparent text-[var(--text-muted)] hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b]",
};

const sizeClasses = {
  sm: "h-9 px-4 text-xs gap-1.5 rounded-full",
  md: "h-11 px-6 text-sm gap-2 rounded-full",
  lg: "h-14 px-8 text-base gap-2.5 rounded-full",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      glow = false,
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-colors cursor-pointer select-none outline-none disabled:opacity-50 disabled:pointer-events-none touch-manipulation transform-gpu",
          variantClasses[variant],
          sizeClasses[size],
          glow && "bg-glow-teal",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
