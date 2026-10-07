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

      if (sections.length > 0) {
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          // Check if section encompasses the navbar offset line
          if (rect.top <= offset && rect.bottom > offset) {
            const sectionTheme = section.getAttribute("data-nav-theme");
            if (sectionTheme === "light" || sectionTheme === "dark") {
              setTheme(sectionTheme);
              return;
            }
          }
        }
      } else {
        // Fallback: switch to light after scrolling past the first screen height
        const fallbackTheme: NavTheme =
          window.scrollY > window.innerHeight - offset ? "light" : "dark";
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
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
