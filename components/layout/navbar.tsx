"use client";

import React from "react";
import { Container } from "../ui/container";
import Logo from "../ui/logo";
import Button from "../ui/button";
import { NAV_ACTIONS, NAV_THEME_BUTTON_STYLES } from "@/constants/navigation";
import { useNavTheme } from "@/hooks/useNavTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme } = useNavTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <Container size="lg">
        <div className="flex items-center justify-between py-4 sm:py-7">
          <Logo theme={theme} />

          <div className="flex items-center gap-3">
            {NAV_ACTIONS.map(
              ({
                id,
                href,
                variant = "primary",
                icon: Icon,
                iconPosition,
                onClick,
                label,
                hideOnMobile,
                className,
              }) => {
                const dynamicThemeClasses =
                  variant === "primary" || variant === "outline"
                    ? NAV_THEME_BUTTON_STYLES[variant][theme]
                    : "";

                return (
                  <Button
                    key={id}
                    href={href}
                    variant={variant}
                    iconBefore={
                      iconPosition === "before" && Icon ? (
                        <Icon className="h-4 w-4 transition-colors duration-300 ease-in-out" />
                      ) : undefined
                    }
                    iconAfter={
                      iconPosition === "after" && Icon ? (
                        <Icon className="h-4 w-4 transition-colors duration-300 ease-in-out" />
                      ) : undefined
                    }
                    onClick={onClick}
                    className={cn(
                      "uppercase tracking-wider font-semibold text-xs transition-all duration-300 ease-in-out",
                      dynamicThemeClasses,
                      hideOnMobile && "hidden sm:inline-flex",
                      className
                    )}
                  >
                    {label}
                  </Button>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
