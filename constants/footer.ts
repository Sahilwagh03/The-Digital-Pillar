export interface FooterContent {
  tagline: string;
  headlineLine1: string;
  headlineLine2: string;
  ctaText: string;
  ctaHref: string;
  handle: string;
  businessEnquiry: {
    title: string;
    email: string;
    phone: string;
  };
  social: {
    title: string;
    links: { label: string; href: string }[];
  };
  watermark: string;
}

export const FOOTER_CONTENT: FooterContent = {
  tagline: "Lets build work that inspires",
  headlineLine1: "Ready to build",
  headlineLine2: "something great?",
  ctaText: "START A COLLABORATION",
  ctaHref: "/contact",
  handle: "@marvelousmedia.in",
  businessEnquiry: {
    title: "BUSINESS ENQUIRY",
    email: "marvelousmedia@gmail.com",
    phone: "+91 9876543210",
  },
  social: {
    title: "SOCIAL",
    links: [
      { label: "Linkedin", href: "https://linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Dribble", href: "https://dribbble.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
  watermark: "THE DIGITAL PILLAR",
};
