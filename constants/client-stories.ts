export interface ClientVideoStory {
  id: string;
  name: string;
  role: string;
  company?: string;
  thumbnail: string;
  videoUrl?: string;
  quote: string;
}

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
  tag: string;
  title: string;
  description: string;
  descriptionLines: string[];
  cta: {
    label: string;
    href: string;
  };
  videoStories: ClientVideoStory[];
  stories: ClientStory[];
}

export const CLIENT_STORIES_CONTENT: ClientStoriesContent = {
  tag: "CLIENT STORIES",
  title: "Client Stories",
  description:
    "Great work is built through partnership. Watch what founders, creators, and brands say about working with us.",
  descriptionLines: [
    "Great work is built through",
    "partnership. Here's what",
    "our clients say.",
  ],
  cta: {
    label: "BECOME A CLIENT",
    href: "/contact",
  },
  videoStories: [
    {
      id: "story-1",
      name: "Nilanjan",
      role: "Founder & Creative Director",
      company: "Studio Craft",
      thumbnail: "/images/client-stories/nilanjan.jpg",
      videoUrl: "/videos/client-testimonial.mp4",
      quote:
        "The Digital Pillar transformed our content strategy end to end. The results spoke for themselves within weeks.",
    },
    {
      id: "story-2",
      name: "Aaun",
      role: "Co-Founder & CEO",
      company: "SaaSify Global",
      thumbnail: "/images/client-stories/aaun.jpg",
      videoUrl: "/videos/client-testimonial.mp4",
      quote:
        "Flawless communication, rapid turnaround, and reels that actually converted into high-ticket inbound clients.",
    },
    {
      id: "story-3",
      name: "Dev",
      role: "Growth Lead & Creator",
      company: "Nexus Media",
      thumbnail: "/images/client-stories/dev.jpg",
      videoUrl: "/videos/client-testimonial.mp4",
      quote:
        "They don't just edit videos—they engineer high-retention content that consistently beats the algorithm.",
    },
    {
      id: "story-4",
      name: "Shreya",
      role: "Head of Marketing",
      company: "Aura Lifestyle",
      thumbnail: "/images/client-stories/shreya.jpg",
      videoUrl: "/videos/client-testimonial.mp4",
      quote:
        "Our engagement skyrocketed by 300% after our first month of collaborating. Truly unmatched production value.",
    },
    {
      id: "story-5",
      name: "Marcus",
      role: "E-Commerce Founder",
      company: "Velocity Brands",
      thumbnail: "/images/client-stories/marcus.jpg",
      videoUrl: "/videos/client-testimonial.mp4",
      quote:
        "The highest ROI partner investment we made this year. High performance, premium aesthetics, and true strategic depth.",
    },
  ],
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
