export interface FeaturedProject {
  id: string;
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
  projects: FeaturedProject[];
  endCta: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    ctaLabel: string;
    href: string;
  };
}

export const SELECTED_WORK_CONTENT: SelectedWorkContent = {
  headlineLine1: "Work that speaks",
  headlineLine2: "through results.",
  viewAllCta: {
    label: "VIEW ALL PROJECTS",
    href: "/work",
  },
  featuredProject: {
    id: "stichora-film",
    title: "Stichora",
    description:
      "A tailoring house that needed to look as premium as its garments. We handled the brand film end to end — direction, motion, sound — then built a reel engine to keep it showing up in the feed.",
    imageSrc: "/stichora.jpg",
    href: "/work/stichora",
    ctaLabel: "EXPLORE PROJECT",
  },
  projects: [
    {
      id: "stichora-film",
      title: "Stichora",
      description:
        "A tailoring house that needed to look as premium as its garments. We handled the brand film end to end — direction, motion, sound — then built a reel engine to keep it showing up in the feed.",
      imageSrc: "/stichora.jpg",
      href: "/work/stichora",
      ctaLabel: "EXPLORE PROJECT",
    },
    {
      id: "stichora-stone",
      title: "Stichora",
      description:
        "Carving an identity in stone and fabric. We crafted the bespoke monogram, architectural branding, and physical customer touchpoints to reflect heritage craftsmanship.",
      imageSrc: "/stichora-stone.jpg",
      href: "/work/stichora",
      ctaLabel: "EXPLORE PROJECT",
    },
    {
      id: "stichora-dark",
      title: "Stichora",
      description:
        "High-contrast aesthetics paired with sleek dark-mode accents. We designed an immersive design language and cinematic digital assets that elevate the brand's online presence.",
      imageSrc: "/stichora-dark.jpg",
      href: "/work/stichora",
      ctaLabel: "EXPLORE PROJECT",
    },
    {
      id: "stichora-app",
      title: "Stichora",
      description:
        "A bespoke digital wardrobe and private client portal. Seamlessly connecting high-profile clients to master tailors with real-time consultations and appointment management.",
      imageSrc: "/stichora-app.jpg",
      href: "/work/stichora",
      ctaLabel: "EXPLORE PROJECT",
    },
  ],
  endCta: {
    headlineLine1: "Discover our complete collection of",
    headlineLine2: "digital experiences, brands,",
    headlineLine3: "and platforms.",
    ctaLabel: "VIEW ALL WORK",
    href: "/work",
  },
};

