import type { Variants } from "motion/react";

/**
 * Standard luxury easing curve used across Awwwards websites
 */
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Hero Container Orchestrator:
 * Staggers the headline lines, subtitle, CTA button, and 3D grid entrance.
 */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/**
 * Masked Headline Line Reveal Variant (same as Why Choose Us section):
 * Slides up smoothly from an overflow-hidden wrapper with subtle perspective rotation.
 */
export const heroHeadlineLineVariants: Variants = {
  hidden: { y: "115%", rotate: 1.5 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: {
      duration: 0.85,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Subtitle / Description Soft Focus & Opacity Fade Variant:
 * Dissolves smoothly into view with subtle upward drift and blur-to-clear transition.
 */
export const heroSubtitleVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * CTA Button Entrance:
 * Elegant fade and gentle scale up into place.
 */
export const heroCtaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * 3D Tilted Grid Entrance:
 * Floats up smoothly into orbit with subtle depth scale.
 */
export const heroGridVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Ambient Glow Pulse:
 * Soft ambient light behind the hero headline.
 */
export const heroGlowVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};
