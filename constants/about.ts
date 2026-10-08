export interface AboutContent {
  tag: string;
  headline: string;
  leftStatements: string[];
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export const ABOUT_CONTENT: AboutContent = {
  tag: "ABOUT",
  headline:
    "The digital pillar is a growth-driven digital agency helping ambitious brands stand out through strategy, creativity, and performance.",
  leftStatements: [
    "BUILT FOR IMPACT.",
    "GUIDED BY STRATEGY.",
    "DESIGNED TO GROW.",
  ],
  description:
    "By combining research, creativity, and data-driven marketing, we help brands become more discoverable, memorable, and profitable.",
  cta: {
    label: "MORE ABOUT US",
    href: "/about",
  },
};
