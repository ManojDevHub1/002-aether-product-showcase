import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText: string;
  badgeVariant?: "teal" | "amber" | "neutral";
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "teal",
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      <div>
        <Badge variant={badgeVariant} dot={true}>
          {badgeText}
        </Badge>
      </div>
      <Typography variant="h1" gradient={true} className="text-balance font-extrabold tracking-tight">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
