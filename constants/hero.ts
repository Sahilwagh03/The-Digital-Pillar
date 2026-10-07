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
  titleLine1: "Create the growth",
  titleLine2: "your company is",
  titleLine3: "capable of.",
  description:
    "We are The Digital Pillar, a full-service marketing agency based in Pune. We work with believers & big dreamers to help them achieve their vision.",
  cta: {
    label: "START A PROJECT",
    href: "/contact",
  },
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
