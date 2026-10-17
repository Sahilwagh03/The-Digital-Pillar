import type { Variants } from "motion/react";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Footer Header Orchestrator
 */
export const footerHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const footerTaglineVariants: Variants = {
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

export const footerHeadlineVariants: Variants = {
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
 * Footer Right Column Orchestrator
 */
export const footerRightColVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const footerCtaVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

export const footerSubColVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Giant Bottom Ghost Watermark
 */
export const footerWatermarkVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: LUXURY_EASE,
    },
  },
};
