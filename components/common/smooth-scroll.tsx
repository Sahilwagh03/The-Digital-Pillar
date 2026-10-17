"use client";

import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Syncs Lenis scroll events directly with GSAP ScrollTrigger
 */
function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Global Smooth Scrolling Provider using Lenis:
 * Runs autoRaf with high-performance smooth scrolling out of the box.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
export { useLenis } from "lenis/react";
