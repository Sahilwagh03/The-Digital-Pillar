"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import "lenis/dist/lenis.css";

if (typeof window !== "undefined") {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory("manual");
}

/**
 * Controller child inside Lenis context:
 * 1. Synchronizes Lenis requestAnimationFrame loop with GSAP's unified ticker.
 * 2. Notifies ScrollTrigger on every scroll event.
 * 3. Applies useScrollRestoration to guarantee starting at top of page on reload.
 */
function ScrollController() {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  // Bind Lenis animation frame directly to GSAP's central clock
  useEffect(() => {
    if (!lenis) return;

    function updateTicker(time: number) {
      lenis?.raf(time * 1000);
    }

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
    };
  }, [lenis]);

  useScrollRestoration(lenis);

  return null;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Global Smooth Scrolling Provider using Lenis:
 * Disables Lenis internal autoRaf in favor of GSAP's unified ticker.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false, // Driven by GSAP ticker in ScrollController to prevent frame desync
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollController />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
export { useLenis } from "lenis/react";
