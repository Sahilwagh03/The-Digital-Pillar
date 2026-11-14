import videos from "@/config/media/videos";

export interface HeroAvatar {
  src: string;
  alt: string;
}

export interface HeroContent {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  rotatingWords: string[];
  rotationIntervalMs?: number;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  images: { src: string; alt: string }[];
}

export interface HeroSocialProof {
  rating: string;
  label: string;
  avatars: HeroAvatar[];
}

export interface HeroScrollIndicator {
  label: string;
  targetId: string;
}

export const HERO_CONTENT: HeroContent = {
  titleLine1: "Create the",
  titleLine2: "growth",
  titleLine3: "your company is capable of.",
  rotatingWords: [
    "growth",
    "impact",
    "authority",
    "presence",
    "scale",
    "revenue",
  ],
  rotationIntervalMs: 2600,
  description:
    "We are The Digital Pillar, a full-service marketing agency based in Pune. We work with believers & big dreamers to help them achieve their vision.",
  cta: {
    label: "START A PROJECT",
    href: "/contact",
  },
  images: [
    { src: videos.armaniExchange?.thumbnailUrl || "/stichora-app.jpg", alt: "Armani Exchange Campaign" },
    { src: videos.marbella01?.thumbnailUrl || "/stichora-dark.jpg", alt: "Marbella Resort Showcase" },
    { src: videos.benneBaeFoodstudio?.thumbnailUrl || "/why-choose-us.jpg", alt: "Benne Bae Foodstudio" },
    { src: videos.productEnergy?.thumbnailUrl || "/stichora-stone.jpg", alt: "Energy Drink DTC Commercial" },
    { src: videos.paradisePunawale?.thumbnailUrl || "/images/services/branding.jpg", alt: "Paradise Punawale Luxury Living" },
    { src: videos.saareeReel0120May?.thumbnailUrl || "/images/services/web-design.jpg", alt: "Heritage Fashion Production" },
    { src: videos.aQovaAiEditsBatch4?.thumbnailUrl || "/images/services/content-strategy.jpg", alt: "NextGen AI UGC Suite" },
    { src: videos.reel7LaunchPlanningFab14?.thumbnailUrl || "/images/services/social-media.jpg", alt: "Executive Authority Engine" },
    { src: videos.kj11?.thumbnailUrl || "/images/about/hero-team.jpg", alt: "KJ Product Showcase" },
    { src: videos.ela01?.thumbnailUrl || "/hero-bg.jpg", alt: "Ela Editorial Fashion Reel" },
  ],
};

export const HERO_SOCIAL_PROOF: HeroSocialProof = {
  rating: "4.8 / 5",
  label: "Trusted by 120+ growing brands",
  avatars: [
    { src: "/avatars/avatar-1.jpg", alt: "Client 1" },
    { src: "/avatars/avatar-2.jpg", alt: "Client 2" },
    { src: "/avatars/avatar-3.jpg", alt: "Client 3" },
    { src: "/avatars/avatar-4.jpg", alt: "Client 4" },
  ],
};

export const HERO_SCROLL_INDICATOR: HeroScrollIndicator = {
  label: "Scroll Down to Know More",
  targetId: "explore",
};
