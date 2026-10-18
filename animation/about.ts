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

// ============================================================================
// ABOUT PAGE SPECIFIC ANIMATIONS
// ============================================================================

export const aboutHeroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const aboutHeroTagVariants: Variants = {
  hidden: { opacity: 0, y: 16, letterSpacing: "0.15em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.28em",
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

export const aboutHeroHeadlineVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: LUXURY_EASE,
    },
  },
};

export const aboutHeroSubtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
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

export const expectationsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const interlockingCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: (customIndex: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: customIndex * 0.1,
      ease: LUXURY_EASE,
    },
  }),
};

export const pillarCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customIndex: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: customIndex * 0.08,
      ease: LUXURY_EASE,
    },
  }),
};

