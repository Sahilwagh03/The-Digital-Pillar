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
    "We architect compounding market advantage for ambitious brands through creative storytelling, algorithmic acquisition, and autonomous AI systems.",
  services: [
    {
      id: "performance-marketing",
      number: "01",
      title: "Performance Marketing",
      imageSrc: "/images/services/paid-ads.jpg",
      imageAlt: "Data-driven performance marketing and conversion scaling",
      descriptionLines: [
        "DATA-FIRST ATTRIBUTION",
        "CAC REDUCTION & CONVERSION,",
        "PREDICTABLE REVENUE.",
      ],
    },
    {
      id: "content-creation",
      number: "02",
      title: "Content Creation",
      imageSrc: "/images/services/creator-content.jpg",
      imageAlt: "Cinema-grade content creation and commercial production",
      descriptionLines: [
        "CINEMA-GRADE PRODUCTION",
        "MAGNETIC STORYTELLING,",
        "CRAFTED FOR SCALE.",
      ],
    },
    {
      id: "social-media",
      number: "03",
      title: "Social Media Marketing",
      imageSrc: "/images/services/social-media.jpg",
      imageAlt: "Organic social media growth and community architecture",
      descriptionLines: [
        "ALGORITHMIC MOMENTUM",
        "CATEGORY AUTHORITY,",
        "COMMUNITY ENGAGEMENT.",
      ],
    },
    {
      id: "ugc",
      number: "04",
      title: "UGC Videos / AI UGC",
      imageSrc: "/images/services/ugc.jpg",
      imageAlt: "User-generated content and generative AI video ads",
      descriptionLines: [
        "HUMAN-FIRST AUTHENTICITY",
        "GENERATIVE AI ITERATIONS,",
        "HIGH-CTR HOOKS.",
      ],
    },
    {
      id: "web-design",
      number: "05",
      title: "Web Design",
      imageSrc: "/images/services/web-design.jpg",
      imageAlt: "Digital web design and interactive product experiences",
      descriptionLines: [
        "BESPOKE ARCHITECTURE",
        "IMMERSIVE INTERACTION,",
        "HIGH-CONVERSION DESIGN.",
      ],
    },
    {
      id: "content-strategy",
      number: "06",
      title: "Content Strategy",
      imageSrc: "/images/services/content-strategy.jpg",
      imageAlt: "Content strategy and narrative brand architecture",
      descriptionLines: [
        "CATEGORY POSITIONING",
        "DISTRIBUTION BLUEPRINTS,",
        "COMPOUNDING REACH.",
      ],
    },
    {
      id: "creator-management",
      number: "07",
      title: "Creator Management",
      imageSrc: "/images/services/influencer-marketing.jpg",
      imageAlt: "Creator management and influencer PR partnerships",
      descriptionLines: [
        "VETTED TALENT ROSTER",
        "CAMPAIGN NEGOTIATION,",
        "MAXIMUM CULTURAL IMPACT.",
      ],
    },
    {
      id: "meta-google-ads",
      number: "08",
      title: "Meta & Google Ads",
      imageSrc: "/images/services/paid-ads.jpg",
      imageAlt: "Meta and Google Ads media buying dominance",
      descriptionLines: [
        "PRECISION MEDIA BUYING",
        "HIGH-INTENT RETARGETING,",
        "MAXIMIZING ROAS.",
      ],
    },
    {
      id: "ai-automations",
      number: "09",
      title: "AI Automations",
      imageSrc: "/why-choose-us.jpg",
      imageAlt: "AI automations and autonomous operational workflows",
      descriptionLines: [
        "AUTONOMOUS PIPELINES",
        "INTELLIGENT CRM INTEGRATION,",
        "10X VELOCITY LIFT.",
      ],
    },
  ],
};
