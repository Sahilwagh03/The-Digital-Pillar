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
    address?: string;
  };
  social: {
    title: string;
    links: { label: string; href: string }[];
  };
  watermark: string;
}

export const FOOTER_CONTENT: FooterContent = {
  tagline: "Let's build work that inspires",
  headlineLine1: "Ready to build",
  headlineLine2: "something great?",
  ctaText: "START A COLLABORATION",
  ctaHref: "/contact",
  handle: "@thedigitalpillar",
  businessEnquiry: {
    title: "BUSINESS ENQUIRY",
    email: "info@thedigitalpillar.com",
    phone: "+91 93250 63728",
    address: "320/9B FC Road, Deccan, Pune 411005",
  },
  social: {
    title: "SOCIAL",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/thedigitalpillar/" },
      { label: "Instagram", href: "https://www.instagram.com/thedigitalpillar/" },
      { label: "Facebook", href: "https://www.facebook.com/thedigitalpillar" },
    ],
  },
  watermark: "THE DIGITAL PILLAR",
};
