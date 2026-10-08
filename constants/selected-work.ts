export interface FeaturedProject {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  ctaLabel: string;
}

export interface SelectedWorkContent {
  headlineLine1: string;
  headlineLine2: string;
  viewAllCta: {
    label: string;
    href: string;
  };
  featuredProject: FeaturedProject;
}

export const SELECTED_WORK_CONTENT: SelectedWorkContent = {
  headlineLine1: "Work that speaks",
  headlineLine2: "through results.",
  viewAllCta: {
    label: "VIEW ALL PROJECTS",
    href: "/work",
  },
  featuredProject: {
    title: "Stichora",
    description:
      "A tailoring house that needed to look as premium as its garments. We handled the brand film end to end — direction, motion, sound — then built a reel engine to keep it showing up in the feed.",
    imageSrc: "/stichora.jpg",
    href: "/work/stichora",
    ctaLabel: "EXPLORE PROJECT",
  },
};
