import videos from "@/config/media/videos";

export interface ContactHeroCardItem {
  id: string;
  src: string;
  alt: string;
  rotation: number;
  yOffset: number;
  badge?: {
    text: string;
    variant?: "brand" | "blue" | "green";
  };
}

export interface ContactHeroData {
  tag: string;
  headline: string;
  description: string;
  backgroundImage: string;
  cards: ContactHeroCardItem[];
}

export interface ContactFormCopy {
  headline: string;
  description: string;
  teamImage: string;
}

export interface ContactCardItem {
  id: string;
  icon: "headphones" | "mail" | "map-pin";
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export const CONTACT_HERO_DATA: ContactHeroData = {
  tag: "Contact Us",
  headline: "Let's start something.",
  description:
    "We collaborate with teams who value clarity, craft, and long-term thinking.",
  backgroundImage: "/images/contact/hero-eyes.jpg",
  cards: [
    {
      id: "card-1",
      src:
        videos.realEstate1?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/1-thumb_Iz0B3aGS4.jpg",
      alt: "Modern Architectural Luxury Villa Tour",
      rotation: -11,
      yOffset: 20,
    },
    {
      id: "card-2",
      src:
        videos.reel5WhatDoYouMeanByBeingSeniorFab14?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/reel-5-what-do-you-mean-by-being-senior-fab-14-thumb_6mCcET4sc.jpg",
      alt: "Executive Founder Thought Leadership on Camera",
      rotation: -7,
      yOffset: 10,
      badge: {
        text: "Let's Talk",
        variant: "brand",
      },
    },
    {
      id: "card-3",
      src:
        videos.realEstate2?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/2-thumb_Hoo3XcAQc.jpg",
      alt: "Sky Penthouse & High-Ceiling Architectural Living",
      rotation: -3,
      yOffset: 4,
    },
    {
      id: "card-4",
      src:
        videos.saareeReel0220May?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/saaree-reel-02--20-may-thumb_dIPOROmA7.jpg",
      alt: "Heritage Silk Couture Editorial Portrait",
      rotation: 0,
      yOffset: 0,
    },
    {
      id: "card-5",
      src:
        videos.realEstate3?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/3-thumb_DB46Sw4qp.jpg",
      alt: "Prestige Architectural Living & Cantilevered Infinity Terrace",
      rotation: 3.5,
      yOffset: 4,
    },
    {
      id: "card-6",
      src:
        videos.bQovaAiEditsBatch4?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/b---qova-ai-edits-batch-4-thumb_k6fGkT0zn.jpg",
      alt: "UGC Performance Creator Camera Presence",
      rotation: 7.5,
      yOffset: 10,
      badge: {
        text: "Start a Project",
        variant: "brand",
      },
    },
    {
      id: "card-7",
      src:
        videos.leobog2?.thumbnailUrl ||
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/leobog_2-thumb_fLxYshkZ-.jpg",
      alt: "Leobog Tech Review & Creator Studio Setup",
      rotation: 11.5,
      yOffset: 20,
    },
  ],
};

export const CONTACT_FORM_DATA: ContactFormCopy = {
  headline: "Let's build something great",
  description:
    "We'd love to learn about your business, understand your objectives, and explore how The Digital Pillar can help you accelerate growth online.",
  teamImage: "/images/contact/team-collab.jpg",
};

export const BUSINESS_TYPES = [
  "Hospitality",
  "Real Estate",
  "E-Commerce & D2C",
  "Startup & Tech",
  "Local Business",
  "Personal Branding",
  "Content Creation",
  "Other Industry",
];

export const PROJECT_TIMELINES = [
  "Immediately (Within 2 weeks)",
  "Within 1 month",
  "1 - 3 months",
  "3+ months",
  "Flexible / Exploring options",
];

export const CONTACT_CARDS_DATA: ContactCardItem[] = [
  {
    id: "call",
    icon: "headphones",
    title: "Call us",
    description:
      "Call us at +91 93250 63728 for direct support. Available Mon – Sat, 10:00 AM – 7:00 PM.",
    ctaText: "CALL US",
    ctaHref: "tel:+919325063728",
  },
  {
    id: "email",
    icon: "headphones",
    title: "Email us",
    description:
      "Reach us at info@thedigitalpillar.com for detailed consultations or service requests.",
    ctaText: "EMAIL US",
    ctaHref: "mailto:info@thedigitalpillar.com",
  },
  {
    id: "office",
    icon: "map-pin",
    title: "Office address",
    description:
      "320/9B FC Road, Deccan, Pune, Maharashtra 411005, India.",
    ctaText: "VISIT US",
    ctaHref: "https://maps.google.com/?q=320/9B+FC+Road,+Deccan,+Pune,+Maharashtra+411005",
  },
];

export const LEAD_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbyTYrkxE6VcvM3yJLwdHDH3k9QgQa3-uchW-riMMv4Ui0iJnr6EdTazqpo1A-4vFk1x/exec";
