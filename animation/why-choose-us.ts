import type { Variants } from "motion/react";

/**
 * Standard luxury easing curve used across Awwwards websites
 */
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Header Section Orchestration:
 * Staggers the eyebrow tag, headline masked lines, and paragraph fade in sequence.
 */
export const headerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/**
 * Eyebrow / Tag Reveal Variant
 */
export const tagVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Reusable Masked Text / Line Reveal Variant:
 * Slides up smoothly from an overflow-hidden wrapper with subtle perspective rotation.
 */
export const headlineLineVariants: Variants = {
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
 * Reusable Paragraph Soft Focus & Opacity Fade Variant:
 * Dissolves smoothly into view with subtle upward drift and blur-to-clear transition.
 */
export const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Bento Grid Orchestration:
 * Staggers entrance of the main bento cards.
 */
export const bentoGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/**
 * Bento Grid Card Item Variant:
 * Elevation, scale, and fade in for modern bento cards.
 */
export const bentoCardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: LUXURY_EASE,
    },
  },
};
