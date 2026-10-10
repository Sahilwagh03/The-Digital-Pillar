export interface ServiceFocusItem {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  descriptionLines: string[];
}

export interface OurFocusContent {
  tag: string;
  title: string;
  description: string;
  services: ServiceFocusItem[];
}

export const OUR_FOCUS_CONTENT: OurFocusContent = {
  tag: "SERVICES",
  title: "Our Focus",
  description:
    "Our mission is to make technology feel human by designing digital products that are intuitive, purposeful, and meaningful to people.",
  services: [
    {
      id: "branding",
      number: "01",
      title: "Branding",
      imageSrc: "/images/services/branding.jpg",
      imageAlt: "Branding and design systems",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "social-media",
      number: "02",
      title: "Social Media",
      imageSrc: "/images/services/social-media.jpg",
      imageAlt: "Social media and presence strategy",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "ugc",
      number: "03",
      title: "UGC",
      imageSrc: "/images/services/ugc.jpg",
      imageAlt: "User-generated content creation",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "web-design",
      number: "04",
      title: "Web Design",
      imageSrc: "/images/services/web-design.jpg",
      imageAlt: "Digital web design and experience",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "influencer-marketing",
      number: "05",
      title: "Influencer Mktg",
      imageSrc: "/images/services/influencer-marketing.jpg",
      imageAlt: "Influencer marketing and brand partnerships",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "content-strategy",
      number: "06",
      title: "Content Strategy",
      imageSrc: "/images/services/content-strategy.jpg",
      imageAlt: "Content strategy and creative direction",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "creator-content",
      number: "07",
      title: "Creator Content",
      imageSrc: "/images/services/creator-content.jpg",
      imageAlt: "Creator content and video production",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
    {
      id: "paid-ads",
      number: "08",
      title: "Paid Ads",
      imageSrc: "/images/services/paid-ads.jpg",
      imageAlt: "High-performance paid advertising campaigns",
      descriptionLines: [
        "WE DESIGN FOR LONGEVITY",
        "CLARITY FIRST, CRAFT ALWAYS,",
        "BUILT TO SCALE.",
      ],
    },
  ],
};
