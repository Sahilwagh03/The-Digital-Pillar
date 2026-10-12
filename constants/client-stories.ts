export interface ClientStory {
  id: string;
  brandName: string;
  quote: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

export interface ClientStoriesContent {
  title: string;
  descriptionLines: string[];
  cta: {
    label: string;
    href: string;
  };
  stories: ClientStory[];
}

export const CLIENT_STORIES_CONTENT: ClientStoriesContent = {
  title: "Client Stories",
  descriptionLines: [
    "Great work is build through",
    "partnership, Here's what",
    "our clients say",
  ],
  cta: {
    label: "BECOME A CLIENT",
    href: "/contact",
  },
  stories: [
    {
      id: "stichora",
      brandName: "STICHORA",
      quote:
        "Marvelous Media delivered exceptional video ads. The attention to detail and professionalism exceeded my expectations — exactly what I wanted.",
      author: {
        name: "Praful Joshi",
        role: "D2C brand · Video ads",
      },
    },
    {
      id: "brand-2",
      brandName: "BRAND 2",
      quote:
        "The creative direction and high-speed iteration completely revitalized our product launches. Outstanding impact and performance across all metrics.",
      author: {
        name: "Sarah Lin",
        role: "E-Commerce · Growth Marketing",
      },
    },
    {
      id: "brand-3",
      brandName: "BRAND 3",
      quote:
        "Working together felt like an extension of our in-house team. The speed, high fidelity, and consistency across all deliverables was unmatched.",
      author: {
        name: "Marcus Vance",
        role: "Tech Startup · Brand Identity",
      },
    },
    {
      id: "brand-4",
      brandName: "BRAND 4",
      quote:
        "From concept to final cut, every detail was crafted with surgical precision. Our conversions skyrocketed following the campaign rollout.",
      author: {
        name: "Elena Rostova",
        role: "Fashion & Retail · Creative Production",
      },
    },
    {
      id: "brand-5",
      brandName: "BRAND 5",
      quote:
        "A masterclass in modern digital storytelling. They understood our audience intuitively and created assets that truly stood out in a crowded market.",
      author: {
        name: "David Kim",
        role: "Consumer Tech · Product Launch",
      },
    },
  ],
};
