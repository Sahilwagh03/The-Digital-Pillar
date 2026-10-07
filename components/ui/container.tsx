import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "full";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-[87.5rem]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
