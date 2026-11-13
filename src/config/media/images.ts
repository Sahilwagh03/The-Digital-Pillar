/**
 * Centralized Images Registry
 *
 * This registry holds all key website image assets with ImageKit paths,
 * local fallbacks, alt text, and dimension hints.
 */

export interface MediaImageItem {
  id?: string;
  title: string;
  pathOrUrl: string;
  fallbackUrl?: string;
  alt: string;
  width?: number;
  height?: number;
  category?: string;
}

export const images: Record<string, MediaImageItem> = {
  logo: {
    id: "site-logo",
    title: "The Digital Pillar Brand Logo",
    pathOrUrl: "/the-digital-pillar/images/logo.png",
    fallbackUrl: "/logo.png",
    alt: "The Digital Pillar Logo",
    width: 240,
    height: 60,
    category: "brand",
  },

  heroBackground: {
    id: "hero-bg",
    title: "Dark Minimalist Hero Graphic",
    pathOrUrl: "/the-digital-pillar/images/hero-bg.jpg",
    fallbackUrl: "/hero-bg.jpg",
    alt: "The Digital Pillar Hero Visual",
    width: 1920,
    height: 1080,
    category: "hero",
  },

  whyChooseUs: {
    id: "why-choose-us-banner",
    title: "Why Choose Us Visual",
    pathOrUrl: "/the-digital-pillar/images/why-choose-us.jpg",
    fallbackUrl: "/why-choose-us.jpg",
    alt: "Why Choose The Digital Pillar",
    width: 1200,
    height: 800,
    category: "content",
  },

  stichoraCaseStudy: {
    id: "stichora-preview",
    title: "Stichora Project Preview",
    pathOrUrl: "/the-digital-pillar/images/stichora.jpg",
    fallbackUrl: "/stichora.jpg",
    alt: "Stichora App UI Design Showcase",
    width: 1200,
    height: 900,
    category: "work",
  },
};

export default images;

