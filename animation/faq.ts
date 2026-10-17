import type { Variants } from "motion/react";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * FAQ Header Orchestration
 */
export const faqHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const faqTagVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
};

export const faqHeadlineVariants: Variants = {
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

export const faqDescVariants: Variants = {
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

/**
 * Accordion List Orchestration
 */
export const faqListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Smooth Animated Height & Blur Expansion for Answers
 */
export const faqAnswerVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2 },
      filter: { duration: 0.2 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      height: { duration: 0.45, ease: LUXURY_EASE },
      opacity: { duration: 0.4, delay: 0.08 },
      filter: { duration: 0.35 },
    },
  },
};
