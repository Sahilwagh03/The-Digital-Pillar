import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
    secondary:
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
    outline:
      "border border-neutral-200 text-neutral-800 dark:border-neutral-700 dark:text-neutral-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase font-secondary transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
