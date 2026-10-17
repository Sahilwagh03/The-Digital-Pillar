"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Ensures the page always starts cleanly from the top (scrollY: 0) on load, refresh,
 * or client-side route navigation (such as clicking service links),
 * preventing browser scroll restoration or previous page scroll from persisting.
 */
export function useScrollRestoration(lenis?: Lenis) {
  const pathname = usePathname();

  // Execute synchronously before paint on mount and on route changes
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If an anchor hash exists on reload/navigation, strip it to prevent unwanted anchor jumping
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // Force window and document to start at the top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Reset Lenis virtual scroll immediately
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // Reset GSAP ScrollTrigger cache
    ScrollTrigger.clearScrollMemory("manual");
  }, [pathname, lenis]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const resetToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }

      ScrollTrigger.refresh();
    };

    // Immediate execution
    resetToTop();

    // Secondary execution on next animation frame
    const rafId = requestAnimationFrame(resetToTop);

    // Tertiary execution after layout settle / font loading
    const timerId = setTimeout(resetToTop, 60);

    // Cache scroll position 0 on page unload so browser reload never restores old offset
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handleBeforeUnload);

    // Re-check triggers once web fonts finish
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        resetToTop();
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handleBeforeUnload);
    };
  }, [pathname, lenis]);
}

export default useScrollRestoration;
