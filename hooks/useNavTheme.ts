"use client";

import { useEffect, useState } from "react";
import type { NavTheme } from "@/types";

interface UseNavThemeOptions {
  /** Vertical offset (in px) from viewport top to check intersecting section */
  offset?: number;
  /** Initial fallback theme if no sections are matched */
  defaultTheme?: NavTheme;
}

/**
 * Hook to dynamically detect the navigation theme based on the section currently
 * passing under the fixed navigation bar.
 *
 * Sections should declare their theme via `data-nav-theme="light"` or `data-nav-theme="dark"`.
 */
export function useNavTheme({
  offset = 72,
  defaultTheme = "dark",
}: UseNavThemeOptions = {}) {
  const [theme, setTheme] = useState<NavTheme>(defaultTheme);

  useEffect(() => {
    let ticking = false;

    const evaluateTheme = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
      const headerEl = document.querySelector<HTMLElement>("header");
      
      // Compute dynamic offset based on header midpoint or fallback to screen size
      const checkOffset = headerEl
        ? Math.max(20, headerEl.getBoundingClientRect().top + headerEl.offsetHeight / 2)
        : window.innerWidth < 640
        ? 36
        : offset;

      if (sections.length > 0) {
        // Evaluate sections in reverse order so topmost overlay in DOM takes precedence
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          // Check if section encompasses the active navbar vertically and is horizontally visible under the nav
          if (
            rect.top <= checkOffset &&
            rect.bottom > checkOffset &&
            rect.right > (window.innerWidth < 640 ? 0 : window.innerWidth / 2) &&
            rect.left < window.innerWidth
          ) {
            const sectionTheme = section.getAttribute("data-nav-theme");
            if (sectionTheme === "light" || sectionTheme === "dark") {
              setTheme(sectionTheme);
              return;
            }
          }
        }
      } else {
        const fallbackTheme: NavTheme =
          window.scrollY > window.innerHeight - checkOffset ? "light" : "dark";
        setTheme(fallbackTheme);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          evaluateTheme();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial evaluation on mount
    evaluateTheme();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [offset, defaultTheme]);

  return {
    theme,
    isLight: theme === "light",
    isDark: theme === "dark",
  };
}

export default useNavTheme;
