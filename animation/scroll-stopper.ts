import type { Variants } from "motion/react";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Top Headline Orchestration
 */
export const scrollStopperHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const scrollStopperTitleVariants: Variants = {
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
 * 3D Ring Stage Entrance
 */
export const scrollStopperStageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Bottom Row Orchestration (Description & CTA Headline)
 */
export const scrollStopperBottomRowVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scrollStopperDescVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: LUXURY_EASE,
    },
  },
};

export const scrollStopperCtaTitleVariants: Variants = {
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
