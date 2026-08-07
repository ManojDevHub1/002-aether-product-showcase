import React from "react";
import { cn } from "@/lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "hero"
    | "h1"
    | "h2"
    | "h3"
    | "subhead"
    | "body-lead"
    | "body"
    | "caption"
    | "code";
  as?: React.ElementType;
  glow?: "teal" | "amber" | "none";
  gradient?: boolean;
}

const variantClasses = {
  hero: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]",
  h1: "text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]",
  h2: "text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]",
  h3: "text-xl sm:text-2xl md:text-3xl font-medium tracking-snug leading-[1.25]",
  subhead: "text-lg sm:text-xl font-normal text-[var(--text-muted)] leading-[1.4]",
  "body-lead": "text-base sm:text-lg md:text-xl font-normal text-[var(--text-titanium)] leading-[1.6]",
  body: "text-sm sm:text-base font-normal text-[var(--text-muted)] leading-[1.65]",
  caption: "text-xs font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)]",
  code: "font-mono text-xs sm:text-sm tracking-normal text-[var(--accent-teal)]",
};

const defaultElementMap: Record<string, React.ElementType> = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subhead: "p",
  "body-lead": "p",
  body: "p",
  caption: "span",
  code: "code",
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant = "body",
      as,
      glow = "none",
      gradient = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultElementMap[variant] || "p";

    return (
      <Component
        ref={ref}
        className={cn(
          variantClasses[variant],
          gradient &&
            "bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-white)] via-[var(--text-titanium)] to-[var(--text-muted)]",
          glow === "teal" && "text-glow-teal",
          glow === "amber" && "text-glow-amber",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
