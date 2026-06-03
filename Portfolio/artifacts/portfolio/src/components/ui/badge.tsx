import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "highlight";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
        {
          "border-transparent bg-primary text-primary-foreground": variant === "default",
          "border-transparent bg-secondary text-secondary-foreground": variant === "secondary",
          "text-foreground": variant === "outline",
          "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.1)]": variant === "highlight",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
