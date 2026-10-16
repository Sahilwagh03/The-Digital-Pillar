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
      id: "review-1",
      brandName: "AFC ACADEMY",
      quote:
        "Efficient, knowledgeable, & smooth experience. Highly recommended.",
      author: {
        name: "AFC Academy",
        role: "Sports Academy · Growth & Digital Presence",
      },
    },
    {
      id: "review-2",
      brandName: "AISHWARYAM",
      quote:
        "Great communication and strong results. Would work with them again.",
      author: {
        name: "Aishwaryam",
        role: "Real Estate · Brand Campaign",
      },
    },
    {
      id: "review-3",
      brandName: "BOOKAVIBE",
      quote:
        "Professional team with creative execution. Everything was smooth end-to-end.",
      author: {
        name: "Bookavibe",
        role: "Hospitality & Leisure · Performance Marketing",
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
