import videos from "@/config/media/videos";

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  ctaLabel?: string;
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
    ctaLabel?: string;
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
    title: "Stichora Atelier",
    description:
      "A tailoring house that needed to look as premium as its garments. We handled the brand film end to end — direction, motion, sound — then built a reel engine to keep it showing up in the feed.",
    imageSrc: videos.armaniExchange?.thumbnailUrl || "/stichora.jpg",
    href: "/work/stichora",
  },
  projects: [
    {
      id: "stichora-film",
      title: "Stichora Atelier",
      description:
        "A tailoring house that needed to look as premium as its garments. We handled the brand film end to end — direction, motion, sound — then built a reel engine to keep it showing up in the feed.",
      imageSrc: videos.saareeReel0120May?.thumbnailUrl || "/stichora.jpg",
      href: "/work/stichora",
    },
    {
      id: "marbella-resort",
      title: "Marbella Luxury Resorts",
      description:
        "Bespoke hospitality storytelling that captures Mediterranean architecture, sunrise palettes, and world-class guest experiences.",
      imageSrc: videos.marbella01?.thumbnailUrl || "/stichora-stone.jpg",
      href: "/work/stichora",
    },
    {
      id: "benne-bae",
      title: "Benne Bae Foodstudio",
      description:
        "Cinematic culinary reels and appetite-appeal direction that created overnight viral momentum for a boutique dining destination.",
      imageSrc: videos.benneBaeFoodstudio?.thumbnailUrl || "/stichora-dark.jpg",
      href: "/work/stichora",
    },
    {
      id: "paradise-real-estate",
      title: "Paradise Punawale",
      description:
        "Architectural visual systems and high-tempo walkthroughs designed to engage high-net-worth property buyers and drive qualified inquiries.",
      imageSrc: videos.paradisePunawale?.thumbnailUrl || "/stichora-app.jpg",
      href: "/work/stichora",
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

