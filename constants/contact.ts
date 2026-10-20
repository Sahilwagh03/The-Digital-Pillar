export interface ContactHeroData {
  tag: string;
  headline: string;
  description: string;
  backgroundImage: string;
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
