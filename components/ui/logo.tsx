import type { FC } from "react";
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
  onClick?: () => void;
}

export const Logo: FC<LogoProps> = ({
  className,
  imageClassName,
  iconClassName,
  textClassName,
  priority = true,
  alt = "The Digital Pillar",
  href = "/",
  showText = true,
  theme = "dark",
  onClick,
}) => {
  const logoContent = (
    <div className="flex items-center gap-2">
      {/* Icon Mark */}
      <Image
        src="/logo-main.svg"
        alt="The Digital Pillar"
        width={56}
        height={56}
        priority={priority}
        className={cn(
          "h-11 sm:h-10 md:h-11 w-auto object-contain shrink-0 transition-all duration-300 ease-in-out",
          imageClassName,
          iconClassName
        )}
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
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
    <div
      onClick={onClick}
      className={cn("inline-flex items-center select-none", className)}
    >
      {logoContent}
    </div>
  );
};

export default Logo;