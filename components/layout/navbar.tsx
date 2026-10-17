"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/container";
import Logo from "../ui/logo";
import Button from "../ui/button";
import { FullScreenMenu } from "./full-screen-menu";
import { NAV_THEME_BUTTON_STYLES } from "@/constants/navigation";
import { useNavTheme } from "@/hooks/useNavTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme } = useNavTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // When menu is open, force dark theme so logo & buttons are white on the dark curtain
  const effectiveTheme = isMenuOpen ? "dark" : theme;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent pointer-events-none">
        <Container size="lg">
          <div className="flex items-center justify-between py-4 sm:py-7">
            {/* Logo */}
            <div className="pointer-events-auto">
              <Logo
                theme={effectiveTheme}
                href="/"
                onClick={() => {
                  if (isMenuOpen) setIsMenuOpen(false);
                }}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pointer-events-auto">
              {/* Contact Button ("Let's Talk") */}
              <Button
                href="/contact"
                variant="primary"
                onClick={() => {
                  if (isMenuOpen) setIsMenuOpen(false);
                }}
                className={cn(
                  "uppercase tracking-wider font-semibold text-xs transition-all duration-300 ease-in-out",
                  NAV_THEME_BUTTON_STYLES.primary[effectiveTheme],
                  "hidden sm:inline-flex",
                  isMenuOpen && "opacity-0 pointer-events-none -translate-x-2"
                )}
              >
                Let&apos;s Talk
              </Button>

              {/* Rolling Menu / Close Button */}
              <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={cn(
                  "group relative inline-flex items-center justify-center rounded-full border px-4 sm:px-5 h-9 sm:h-10 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ease-in-out cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  NAV_THEME_BUTTON_STYLES.outline[effectiveTheme]
                )}
              >
                <div className="relative h-4 min-w-[3.75rem] overflow-hidden flex flex-col items-center justify-center">
                  {/* Menu text & icon */}
                  <div
                    className={cn(
                      "flex items-center justify-center gap-1.5 transition-transform duration-500 ease-[cubic-bezier(0.33,0,0.13,1)]",
                      isMenuOpen
                        ? "-translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                    )}
                  >
                    <Menu className="h-3.5 w-3.5 transition-colors duration-300" />
                    <span>Menu</span>
                  </div>

                  {/* Close text & icon */}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center gap-1.5 transition-transform duration-500 ease-[cubic-bezier(0.33,0,0.13,1)]",
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    )}
                  >
                    <X className="h-3.5 w-3.5 transition-colors duration-300" />
                    <span>Close</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Full-Screen Curtain Menu */}
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
