"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Ensures the page always starts cleanly from the top (scrollY: 0) on load or refresh,
 * preventing browser scroll restoration from breaking pinned GSAP sections.
 */
export function useScrollRestoration(lenis?: Lenis) {
  // Execute synchronously before paint to prevent visible flash or jump
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If an anchor hash exists on reload, strip it to prevent unwanted anchor jumping
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // Force window to start at the top
    window.scrollTo(0, 0);

    // Reset GSAP ScrollTrigger cache
    ScrollTrigger.clearScrollMemory("manual");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // When Lenis instance is ready, ensure virtual scroll aligns with top
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // Recompute trigger coordinates from clean scroll origin
    ScrollTrigger.refresh();

    // Cache scroll position 0 on page unload so browser reload never restores old offset
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handleBeforeUnload);

    // Re-check triggers once web fonts or late-loading images finish
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handleBeforeUnload);
    };
  }, [lenis]);
}

export default useScrollRestoration;
