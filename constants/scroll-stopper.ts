export interface ScrollStopperCard {
  id: string;
  image: string;
  alt: string;
  badge?: string;
  caption?: string;
  captionStyle?: "white" | "red" | "accent";
}

export interface ScrollStopperContent {
  topHeadline: {
    line1: string;
    line2: string;
  };
  description: string;
  bottomHeadline: {
    line1: string;
    line2: string;
  };
  ctaHref?: string;
  cards: ScrollStopperCard[];
}

export const SCROLL_STOPPER_CONTENT: ScrollStopperContent = {
  topHeadline: {
    line1: "Ready to be impossible",
    line2: "to scroll past?",
  },
  description:
    "A tailoring house that needed to look as premium as its garments. We handled the brand film end to end — direction, motion, sound — then built a reel engine to keep it showing up in the feed.",
  bottomHeadline: {
    line1: "Lets create",
    line2: "something big !",
  },
  ctaHref: "/contact",
  cards: [
    {
      id: "card-1",
      image: "/images/services/creator-content.jpg",
      alt: "Creator Content Reel",
      caption: "YOU KNOW",
      captionStyle: "white",
    },
    {
      id: "card-2",
      image: "/stichora-app.jpg",
      alt: "Fast Casual & Lifestyle",
      badge: "M",
    },
    {
      id: "card-3",
      image: "/images/services/ugc.jpg",
      alt: "Fitness & Wellness",
      caption: "Struggling with belly fat",
      captionStyle: "red",
    },
    {
      id: "card-4",
      image: "/images/services/influencer-marketing.jpg",
      alt: "Direct to Camera",
      caption: "Honestly...",
      captionStyle: "white",
    },
    {
      id: "card-5",
      image: "/images/services/social-media.jpg",
      alt: "Agency & Studio Team",
    },
    {
      id: "card-6",
      image: "/stichora-dark.jpg",
      alt: "Cinematic Dark Flares",
    },
    {
      id: "card-7",
      image: "/stichora-stone.jpg",
      alt: "Editorial Garment Detail",
    },
    {
      id: "card-8",
      image: "/images/services/branding.jpg",
      alt: "Brand Identity Direction",
      badge: "M",
    },
    {
      id: "card-9",
      image: "/images/services/paid-ads.jpg",
      alt: "Perforated Pattern Mesh",
    },
    {
      id: "card-10",
      image: "/why-choose-us.jpg",
      alt: "Behind the Lens Production",
    },
    {
      id: "card-11",
      image: "/stichora.jpg",
      alt: "Luxury Tailoring Brand Film",
      caption: "NEW DROP",
      captionStyle: "accent",
    },
    {
      id: "card-12",
      image: "/hero-bg.jpg",
      alt: "Atmospheric Motion Visual",
    },
  ],
};
