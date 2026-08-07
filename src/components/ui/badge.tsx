import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "teal" | "amber" | "neutral";
  dot?: boolean;
}

const variantClasses = {
  teal: "bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border-[var(--accent-teal)]/20",
  amber: "bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/20",
  neutral: "bg-white/5 text-[var(--text-titanium)] border-white/10",
};

const dotClasses = {
  teal: "bg-[var(--accent-teal)] glow-dot-teal",
  amber: "bg-[var(--accent-amber)] shadow-[0_0_10px_#ff6b35]",
  neutral: "bg-white/60",
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "teal", dot = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-full border backdrop-blur-md select-none",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotClasses[variant])}
            aria-hidden="true"
          />
        )}
        <span>{children}</span>
      </div>
    );
  }
);

Badge.displayName = "Badge";
