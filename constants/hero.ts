export interface HeroAvatar {
  src: string;
  alt: string;
}

export interface HeroContent {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
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
  titleLine2: " growth",
  titleLine3: " your company is capable of.",
  description:
    "We are The Digital Pillar, a full-service marketing agency based in Pune. We work with believers & big dreamers to help them achieve their vision.",
  cta: {
    label: "START A PROJECT",
    href: "/contact",
  },
  images: [
    { src: "/stichora-app.jpg", alt: "Stichora App Showcase" },
    { src: "/stichora-dark.jpg", alt: "Stichora Dark UI Design" },
    { src: "/why-choose-us.jpg", alt: "Why Choose Us Campaign" },
    { src: "/stichora-stone.jpg", alt: "Stichora Brand Identity" },
    { src: "/images/services/branding.jpg", alt: "Brand Design Services" },
    { src: "/images/services/web-design.jpg", alt: "Web Design and Development" },
    { src: "/images/services/content-strategy.jpg", alt: "Content Strategy & Growth" },
    { src: "/images/services/social-media.jpg", alt: "Social Media Marketing" },
    { src: "/images/about/hero-team.jpg", alt: "Agency Creative Team" },
    { src: "/hero-bg.jpg", alt: "The Digital Pillar Hero Concept" },
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
