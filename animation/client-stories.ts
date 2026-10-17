import type { Variants } from "motion/react";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Top Header Container Orchestrator:
 * Staggers the title and description lines entrance.
 */
export const clientStoriesHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const clientStoriesTitleVariants: Variants = {
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

export const clientStoriesDescVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: LUXURY_EASE,
    },
  },
};

export const clientStoriesDividerVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Main Content Section Orchestrator:
 * Staggers entrance of brand items and the quote panel.
 */
export const clientStoriesContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const clientStoriesBrandItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Story Quote Transitions for AnimatePresence:
 * Direction-aware slide and velvety blur-to-clear transition on story change.
 */
export const quoteSlideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 25 : -25,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -20 : 20,
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  }),
};
