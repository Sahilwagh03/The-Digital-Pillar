import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavTheme } from "@/types";

export interface LogoProps {
  className?: string;
  imageClassName?: string;
  iconClassName?: string;
  textClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
  href?: string | null;
  showText?: boolean;
  theme?: NavTheme;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  imageClassName,
  iconClassName,
  textClassName,
  priority = true,
  alt = "The Digital Pillar",
  href = "/",
  showText = true,
  theme = "dark",
}) => {
  const logoContent = (
    <div className="flex items-center gap-2">
      {/* Icon Mark */}
      <Image
        src="/logo-main.svg"
        alt="The Digital Pillar"
        width={40}
        height={40}
        priority={priority}
        className={cn(
          "h-8 sm:h-9 w-auto object-contain shrink-0 transition-all duration-300 ease-in-out",
          imageClassName,
          iconClassName
        )}
      />

      {/* Brand Text */}
      {showText && (
        <Image
          src="/logo-text.svg"
          alt={alt}
          width={150}
          height={38}
          priority={priority}
          className={cn(
            "h-5 sm:h-8 w-auto object-contain shrink-0 transition-all duration-300 ease-in-out",
            theme === "light"
              ? "brightness-0 [filter:brightness(0)]"
              : "brightness-100 [filter:brightness(1)]",
            imageClassName,
            textClassName
          )}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center transition-opacity hover:opacity-90 select-none",
          className
        )}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      {logoContent}
    </div>
  );
};

export default Logo;