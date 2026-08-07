import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "hero";
  as?: React.ElementType;
}

const spacingClasses = {
  none: "py-0",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-40",
  hero: "pt-32 pb-20 md:pt-44 md:pb-32",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", as: Component = "section", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("relative w-full overflow-hidden", spacingClasses[spacing], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";
