import videos from "@/config/media/videos";

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
      name: "Studio Craft",
      role: "Creative Direction & Reels",
      company: "Studio Craft",
      thumbnail: videos.marbella01?.thumbnailUrl || "/images/client-stories/nilanjan.jpg",
      videoUrl: videos.marbella01?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "The Digital Pillar transformed our content strategy end to end. The results spoke for themselves within weeks.",
    },
    {
      id: "story-2",
      name: "Founder Journey",
      role: "Executive & Personal Branding",
      company: "SaaSify Global",
      thumbnail: videos.reel7LaunchPlanningFab14?.thumbnailUrl || "/images/client-stories/aaun.jpg",
      videoUrl: videos.reel7LaunchPlanningFab14?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "Flawless communication, rapid turnaround, and reels that actually converted into high-ticket inbound clients.",
    },
    {
      id: "story-3",
      name: "Armani Exchange",
      role: "Commercial Fashion Campaign",
      company: "Armani Exchange",
      thumbnail: videos.armaniExchange?.thumbnailUrl || "/images/client-stories/dev.jpg",
      videoUrl: videos.armaniExchange?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "They don't just edit videos—they engineer high-retention content that consistently beats the algorithm.",
    },
    {
      id: "story-4",
      name: "Product Motion",
      role: "Energy & DTC Campaign",
      company: "Nexus Media",
      thumbnail: videos.productEnergy?.thumbnailUrl || "/images/client-stories/shreya.jpg",
      videoUrl: videos.productEnergy?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "Our engagement skyrocketed by 300% after our first month of collaborating. Truly unmatched production value.",
    },
    {
      id: "story-5",
      name: "Food & Hospitality",
      role: "QSR & Cloud Kitchen Launch",
      company: "Benne Bae Foodstudio",
      thumbnail: videos.benneBaeFoodstudio?.thumbnailUrl || "/images/client-stories/marcus.jpg",
      videoUrl: videos.benneBaeFoodstudio?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "The highest ROI partner investment we made this year. High performance, premium aesthetics, and true strategic depth.",
    },
    {
      id: "story-6",
      name: "Luxury Living",
      role: "Architectural Showcase",
      company: "Paradise Punawale",
      thumbnail: videos.paradisePunawale?.thumbnailUrl || videos.marbella02?.thumbnailUrl || "/images/client-stories/nilanjan.jpg",
      videoUrl: videos.paradisePunawale?.videoUrl || videos.marbella02?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "Cinematic drone sweeps and precision framing that brought serious buyers through the door before launch.",
    },
    {
      id: "story-7",
      name: "NextGen AI UGC",
      role: "Algorithmic Ad Suite",
      company: "QOVA AI Media",
      thumbnail: videos.aQovaAiEditsBatch4?.thumbnailUrl || "/images/client-stories/shreya.jpg",
      videoUrl: videos.aQovaAiEditsBatch4?.videoUrl || "/videos/client-testimonial.mp4",
      quote:
        "Unbelievable turnaround and testing speed. Our paid social ROAS jumped immediately after integrating these edits.",
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
