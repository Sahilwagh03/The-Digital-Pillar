import type { Variants } from "motion/react";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Top Grid Orchestrator:
 * Triggers eyebrow tag and headline word-by-word reveal in sequence.
 */
export const aboutHeaderContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.05,
    },
  },
};

export const aboutTagVariants: Variants = {
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

export const aboutWordVariants: Variants = {
  hidden: { y: "115%", rotate: 1.5, opacity: 0 },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Bottom Grid Orchestrator:
 * Staggers the left uppercase statements and right description/CTA block.
 */
export const aboutContentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const aboutStatementVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

export const aboutDescriptionVariants: Variants = {
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

export const aboutCtaVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};
