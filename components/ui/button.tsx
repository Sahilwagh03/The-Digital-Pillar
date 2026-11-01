import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  underline?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      href,
      target,
      rel,
      underline = false,
      iconBefore,
      iconAfter,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative overflow-hidden group isolate inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary:
        "rounded-full bg-[#fdbb11] text-black font-bold shadow-[0_0_20px_rgba(253,187,17,0.35)] font-primary active:scale-95",
      secondary:
        "rounded-full bg-neutral-800 text-white hover:bg-neutral-700 font-primary active:scale-95",
      outline:
        "rounded-full border border-white/20 bg-black/25 backdrop-blur-sm text-current hover:bg-white/10 hover:border-white/40 font-primary active:scale-95",
      ghost:
        "rounded-md hover:bg-white/10 text-neutral-300 hover:text-white font-primary",
      link: "text-white underline-offset-4 hover:underline p-0 h-auto font-secondary",
      navbar:
        "relative group text-neutral-300 hover:text-white font-secondary p-0 h-auto",
    };

    const sizeStyles = {
      none: "",
      sm: "h-8 px-3 text-xs",
      md: "h-9 sm:h-10 px-4 sm:px-5 text-xs sm:text-[13px]",
      lg: "h-12 px-7 text-sm sm:text-base font-semibold",
      icon: "h-10 w-10 p-0",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "navbar" && variant !== "link" ? sizeStyles[size] : "",
      className
    );

    const startIcon = iconBefore || leftIcon;
    const endIcon = iconAfter || rightIcon;

    const content = (
      <>
        {/* Diagonal White Wipe Layer (Yellow to White to Yellow on hover) */}
        {variant === "primary" && (
          <span
            aria-hidden="true"
            className="absolute inset-0 -left-[30%] w-[160%] h-full bg-white -skew-x-12 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 pointer-events-none -z-10"
          />
        )}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {startIcon && (
            <span className="inline-flex shrink-0 items-center justify-center">
              {startIcon}
            </span>
          )}
          {children && <span>{children}</span>}
          {endIcon && (
            <span className="inline-flex shrink-0 items-center justify-center">
              {endIcon}
            </span>
          )}
        </span>
        {(underline || variant === "navbar") && (
          <span className="absolute -bottom-1 left-0 h-[0.1rem] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          ref={ref as Ref<HTMLAnchorElement>}
          className={combinedClasses}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
