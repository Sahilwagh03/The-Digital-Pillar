import videos, { getVideosByCategory, VideoCategory } from "@/config/media/videos";

export type ServiceHeroMediaType = "image" | "video";

export interface ServiceHeroMediaItem {
  id?: string;
  type?: ServiceHeroMediaType;
  src: string;
  alt?: string;
  poster?: string;
  width?: number;
  height?: number;
}

export interface ServiceHeroData {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  bannerImage: string;
  bannerAlt: string;
  tag?: string;
  media?: ServiceHeroMediaItem[];
}

export const DEFAULT_SERVICE_HERO_MEDIA: ServiceHeroMediaItem[] = [
  {
    id: "hero-media-left",
    type: "video",
    src: videos.saareeReel0120May?.videoUrl || "",
    poster: videos.saareeReel0120May?.thumbnailUrl || "https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg",
    alt: "Services Hero Motion Showcase Left",
  },
  {
    id: "hero-media-middle",
    type: "video",
    src: videos.armaniExchange?.videoUrl || "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
    poster: videos.armaniExchange?.thumbnailUrl || "https://i.pinimg.com/736x/2e/16/f6/2e16f648bce37594a027137d4aaa2ea2.jpg",
    alt: "Services Hero Motion Reel",
  },
  {
    id: "hero-media-right",
    type: "video",
    src: videos.ela01?.videoUrl || "",
    poster: videos.ela01?.thumbnailUrl || "https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg",
    alt: "Services Hero Motion Showcase Right",
  },
];

export interface ServiceMarqueeData {
  text: string;
  repeat?: number;
}

export interface ServiceValuePropositionData {
  headline: string;
  card1: {
    title: string;
    description?: string;
    badge?: string;
  };
  card2: {
    title: string;
    description?: string;
    imageSrc: string;
    imageAlt: string;
  };
  card3: {
    metric: string;
    metricLabel: string;
    title: string;
    avatars: string[];
  };
}

export interface ServiceFrameworkStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFrameworkData {
  tag: string;
  headline: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  steps: ServiceFrameworkStep[];
}

export type ServiceFeaturedWorkLayout = "bento" | "phone-scroll" | "cards-inline";

export interface ServiceFeaturedWorkItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  poster?: string;
  href?: string;
  description?: string;
  metric?: string;
  metricLabel?: string;
  client?: string;
  deliverables?: string[];
  span?: "full" | "half" | "portrait";
}

export interface ServiceFeaturedWorkData {
  layout?: ServiceFeaturedWorkLayout;
  tag?: string;
  headline: string;
  subtitle: string;
  items: ServiceFeaturedWorkItem[];
}

export interface ServiceFaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface ServiceFaqData {
  tag: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  items: ServiceFaqItem[];
}

export interface ServiceData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: ServiceHeroData;
  marquee: ServiceMarqueeData;
  valueProposition: ServiceValuePropositionData;
  framework: ServiceFrameworkData;
  featuredWork: ServiceFeaturedWorkData;
  faq: ServiceFaqData;
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "personal-branding": {
    slug: "personal-branding",
    name: "Personal Branding & Strategy",
    metaTitle: "Personal Branding & Strategy | The Digital Pillar",
    metaDescription:
      "We partner with ambitious founders, executives, and creators to build magnetic personal authority and accelerate long-term industry influence.",
    hero: {
      tag: "SERVICE // BRANDING",
      titleLine1: "Personal branding",
      titleLine2: "& Strategy",
      subtitle:
        "We craft magnetic personal brands that elevate industry leaders, founders, and executives into trusted category authorities.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Floating 3D glass discs and optics representing personal brand clarity",
      media: [
        {
          id: "pb-hero-left",
          type: "video",
          src: videos.reel2HinjewadiChulbulSurpriseVisitFab14?.videoUrl || "",
          poster: videos.reel2HinjewadiChulbulSurpriseVisitFab14?.thumbnailUrl || "https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg",
          alt: "Founder Operations & Strategy Video",
        },
        {
          id: "pb-hero-middle",
          type: "video",
          src: videos.reel7LaunchPlanningFab14?.videoUrl || "",
          poster: videos.reel7LaunchPlanningFab14?.thumbnailUrl || "",
          alt: "Personal Branding Launch Planning Film",
        },
        {
          id: "pb-hero-right",
          type: "video",
          src: videos.connectScript1?.videoUrl || "",
          poster: videos.connectScript1?.thumbnailUrl || "https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg",
          alt: "Executive Thought Leadership Insight Video",
        },
      ],
    },
    marquee: {
      text: "PERSONAL BRANDING",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We partner with ambitious brands to build visibility, increase demand, and accelerate long-term growth.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Crafting narratives that position your executive voice with undeniable distinction.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Architecting a defensible point of view that sets your personal brand apart.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+65%",
        metricLabel: "Growth Rate",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "Our systematic four-phase methodology engineers category authority from initial insight to omnipresent market execution.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Uncovering insights and getting deep into your business, market, & customers.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Crafting a unique brand identity that resonates with your audience and sets you apart.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Bringing your vision to life through thoughtful visual design and brand touchpoints.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Executing the brand strategy across all touchpoints with precision and impact.",
        },
      ],
    },
    featuredWork: {
      layout: "cards-inline",
      tag: "FEATURED PROFILES",
      headline: "Our featured work",
      subtitle:
        "Explore how we've helped founders, executives, and leaders transform their personal presence and command authority.",
      items: [
        {
          id: "exec-stichora",
          title: "Architecting an Executive Media Presence",
          client: "Elena Vance • Founder, Stichora",
          category: "Executive Authority",
          metric: "+480K Audience",
          metricLabel: "Executive Reach",
          imageSrc: videos.reel7LaunchPlanningFab14?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Founder launch planning and authority strategy",
          videoSrc: videos.reel7LaunchPlanningFab14?.videoUrl,
          poster: videos.reel7LaunchPlanningFab14?.thumbnailUrl,
          href: "/work/stichora",
          description: "Engineered a commanding personal narrative that positioned the founder as the premier voice in luxury heritage fashion.",
          deliverables: ["Keynote Narrative", "LinkedIn Engine", "Op-Ed Columns"],
        },
        {
          id: "exec-venture",
          title: "Operational Excellence & Brand Standards Inspection",
          client: "Chulbul QSR • Founder Inspection",
          category: "Operations & Standards",
          metric: "$45M Deal Flow",
          metricLabel: "Pipeline Impact",
          imageSrc: videos.reel2HinjewadiChulbulSurpriseVisitFab14?.thumbnailUrl || "https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg",
          imageAlt: "Unannounced inspection and operational framework",
          videoSrc: videos.reel2HinjewadiChulbulSurpriseVisitFab14?.videoUrl,
          poster: videos.reel2HinjewadiChulbulSurpriseVisitFab14?.thumbnailUrl,
          href: "/work/stichora",
          description: "Built high-transparency operational frameworks documenting SOP compliance, hygiene protocols, and franchise excellence.",
          deliverables: ["SOP Series", "Process Transparency", "Franchise Playbook"],
        },
        {
          id: "exec-tech",
          title: "Category Kingmaker: AI Founder Thought Leadership",
          client: "Dr. Sarah Chen • AI Research Lead",
          category: "DeepTech & AI",
          metric: "Forbes 30U30",
          metricLabel: "Global Recognition",
          imageSrc: videos.connectScript1?.thumbnailUrl || "https://i.pinimg.com/736x/2e/16/f6/2e16f648bce37594a027137d4aaa2ea2.jpg",
          imageAlt: "Thought leadership conversation on camera",
          videoSrc: videos.connectScript1?.videoUrl,
          poster: videos.connectScript1?.thumbnailUrl,
          href: "/work/stichora",
          description: "Crafted an untouchable technical narrative establishing category leadership ahead of a successful $30M Series B.",
          deliverables: ["PR Placement", "Podcast Tour", "Institutional Media"],
        },
        {
          id: "exec-lifestyle",
          title: "FMCG Unit Economics & Founder Reality Check",
          client: "Julian Moreau • Consumer Founder",
          category: "Business Reality",
          metric: "+320% Revenue",
          metricLabel: "Direct Commercial Lift",
          imageSrc: videos.reel10FmcgProfitRealityFab14?.thumbnailUrl || "https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg",
          imageAlt: "FMCG profit reality breakdown",
          videoSrc: videos.reel10FmcgProfitRealityFab14?.videoUrl,
          poster: videos.reel10FmcgProfitRealityFab14?.thumbnailUrl,
          href: "/work/stichora",
          description: "Deconstructed commercial unit economics and profit reality, transforming genuine industry expertise into viral executive content.",
          deliverables: ["Brand Authority", "Financial Breakdowns", "Founder Advisory"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "Need more clarity? Find answers to frequently asked questions about our personal branding process.",
      ctaText: "HAVE A QUESTION? CONTACT US",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-pb-1",
          number: "01",
          question: "What services does DP offer for Personal Branding?",
          answer:
            "The Digital Pillar provides end-to-end executive positioning, narrative development, signature content architecture, multi-channel distribution, high-end visual identity, and strategic PR support designed to make founders and executives trusted category authorities.",
        },
        {
          id: "faq-pb-2",
          number: "02",
          question: "Who do you typically partner with?",
          answer:
            "We collaborate with ambitious founders, venture-backed leaders, C-suite executives, keynote speakers, and creative visionaries who need an elevated public profile that drives enterprise valuation and commercial pipeline.",
        },
        {
          id: "faq-pb-3",
          number: "03",
          question: "How long does the branding process take?",
          answer:
            "Our foundational discovery, narrative architecture, and asset design phase takes 4 to 6 weeks. Following launch, we partner on ongoing monthly content production and editorial execution to compound your market presence.",
        },
        {
          id: "faq-pb-4",
          number: "04",
          question: "Do you guarantee measurable authority and reach?",
          answer:
            "Yes. We track key performance metrics including profile engagement rate, impressions, inbound high-value partnership inquiries, investor outreach, speaking invites, and category share of voice.",
        },
        {
          id: "faq-pb-5",
          number: "05",
          question: "How do we get started?",
          answer:
            "Reach out through our inquiry portal. We conduct an initial narrative audit of your existing presence, map immediate positioning opportunities, and present a custom roadmap tailored to your timeline.",
        },
      ],
    },
  },

  "branding": {
    slug: "branding",
    name: "Branding & Identity",
    metaTitle: "Branding & Identity Systems | The Digital Pillar",
    metaDescription:
      "We design distinctive brand identities, design systems, and visual narratives built for enduring cultural relevance and scalability.",
    hero: {
      tag: "SERVICE // BRANDING",
      titleLine1: "Branding &",
      titleLine2: "Visual Identity",
      subtitle:
        "We build timeless brand identities that command attention, build visceral connection, and scale seamlessly across physical and digital worlds.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Glass discs representing brand purity and clarity",
      media: [
        {
          id: "branding-hero-left",
          type: "video",
          src: videos.armaniExchange?.videoUrl || "",
          poster: videos.armaniExchange?.thumbnailUrl || "/stichora-stone.jpg",
          alt: "Luxury Brand Identity Craft Video",
        },
        {
          id: "branding-hero-middle",
          type: "video",
          src: videos.reel13BrandingImplementationFab14?.videoUrl || videos.armaniExchange?.videoUrl || "",
          poster: videos.reel13BrandingImplementationFab14?.thumbnailUrl || videos.armaniExchange?.thumbnailUrl || "",
          alt: "Brand Implementation & Design System Motion",
        },
        {
          id: "branding-hero-right",
          type: "video",
          src: videos.saareeReel0120May?.videoUrl || "",
          poster: videos.saareeReel0120May?.thumbnailUrl || "/stichora.jpg",
          alt: "Visual Identity & Craft Architecture Video",
        },
      ],
    },
    marquee: {
      text: "BRAND IDENTITY & SYSTEMS",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We build iconic brand systems that elevate category perception and command long-term pricing power.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Holistic visual systems built on genuine craft and strategic clarity.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Distilling complex propositions into simple, memorable brand foundations.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+82%",
        metricLabel: "Brand Recall",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "From foundational brand truth to multi-sensory brand guidelines, we build systems that endure.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Uncovering brand archetypes, competitive white space, and emotional customer drivers.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Locking brand positioning, value architecture, and distinct verbal voice.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Crafting logos, typography, color harmony, 3D assets, and interactive design systems.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Deploying comprehensive brand books, motion kits, and turnkey asset suites.",
        },
      ],
    },
    featuredWork: {
      layout: "bento",
      tag: "BRAND IDENTITY",
      headline: "Our featured work",
      subtitle:
        "A selection of brand transformations engineered for market longevity.",
      items: [
        {
          id: "branding-implementation",
          title: "Physical & Digital Brand Implementation",
          category: "Brand Systems",
          imageSrc: videos.reel13BrandingImplementationFab14?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Turnkey brand implementation across physical spaces and digital interfaces",
          videoSrc: videos.reel13BrandingImplementationFab14?.videoUrl,
          poster: videos.reel13BrandingImplementationFab14?.thumbnailUrl,
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "branding-armani",
          title: "Armani Exchange Global Brand Identity",
          category: "Global Campaign",
          imageSrc: videos.armaniExchange?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Armani Exchange luxury fashion editorial identity",
          videoSrc: videos.armaniExchange?.videoUrl,
          poster: videos.armaniExchange?.thumbnailUrl,
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "branding-heritage",
          title: "Heritage Atelier Identity & Textile Craft",
          category: "Textile Craft",
          imageSrc: videos.saareeReel0120May?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Handloom heritage silk architecture and craft",
          videoSrc: videos.saareeReel0120May?.videoUrl,
          poster: videos.saareeReel0120May?.thumbnailUrl,
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "branding-couture",
          title: "Contemporary Couture Visual Universe",
          category: "Creative Direction",
          imageSrc: videos.ela01?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Ela contemporary couture visual identity",
          videoSrc: videos.ela01?.videoUrl,
          poster: videos.ela01?.thumbnailUrl,
          href: "/work/stichora",
          span: "full",
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "Answers to common questions regarding our branding scopes and deliverable timelines.",
      ctaText: "START YOUR BRAND JOURNEY",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-b-1",
          number: "01",
          question: "What deliverables are included in a branding engagement?",
          answer:
            "Our branding package includes brand strategy, verbal identity & taglines, primary & secondary logos, typography selection, color systems, collateral mockups, digital social kits, and an exhaustive digital brand guideline portal.",
        },
        {
          id: "faq-b-2",
          number: "02",
          question: "How long does a brand identity project take?",
          answer:
            "A comprehensive branding engagement typically takes 4 to 8 weeks depending on organizational complexity and stakeholder feedback cycles.",
        },
        {
          id: "faq-b-3",
          number: "03",
          question: "Do you also handle digital execution and websites?",
          answer:
            "Yes. We seamlessly bridge brand identity into digital products, websites, application interfaces, packaging, and marketing collateral.",
        },
        {
          id: "faq-b-4",
          number: "04",
          question: "Can we refresh an existing logo without starting from scratch?",
          answer:
            "Absolutely. We offer evolutionary brand refreshes that respect existing equity while modernizing visual performance across digital channels.",
        },
        {
          id: "faq-b-5",
          number: "05",
          question: "What is the investment required?",
          answer:
            "Each brand is unique. We provide clear, fixed-price proposals scoped according to your brand's growth phase and strategic objectives.",
        },
      ],
    },
  },

  "social-media": {
    slug: "social-media",
    name: "Social Media & Growth",
    metaTitle: "Social Media Marketing & Strategy | The Digital Pillar",
    metaDescription:
      "Scale organic reach, build loyal communities, and convert attention into recurring revenue with our social media engine.",
    hero: {
      tag: "SERVICE // SOCIAL MEDIA",
      titleLine1: "Social media",
      titleLine2: "& Growth Engine",
      subtitle:
        "We architect high-velocity organic content and social campaigns that capture market attention and turn casual scrollers into loyal customers.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Dynamic optical lenses representing focused social reach",
      media: [
        {
          id: "social-hero-left",
          type: "video",
          src: videos.benneBaeFoodstudio?.videoUrl || "",
          poster: videos.benneBaeFoodstudio?.thumbnailUrl || "/images/services/social-media.jpg",
          alt: "Social Foodstudio Viral Narrative Video",
        },
        {
          id: "social-hero-middle",
          type: "video",
          src: videos.reelNo3?.videoUrl || "",
          poster: videos.reelNo3?.thumbnailUrl || "",
          alt: "Viral Restaurant Dining Motion Reel",
        },
        {
          id: "social-hero-right",
          type: "video",
          src: videos.itSStreetCafeOpening?.videoUrl || "",
          poster: videos.itSStreetCafeOpening?.thumbnailUrl || "/images/services/creator-content.jpg",
          alt: "High-Street Cafe Launch Event Video",
        },
      ],
    },
    marquee: {
      text: "SOCIAL MEDIA & VIRAL GROWTH",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We build organic momentum that commands attention, sparks conversations, and scales recurring revenue.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Thumb-stopping creative engineered specifically for short-form algorithm velocity.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Editorial calendars driven by viral hooks, audience psychology, and daily trends.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+120%",
        metricLabel: "Engagement Rate",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "A repeatable, data-backed social framework engineered to compound attention week over week.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Auditing competitor content, viral patterns, algorithm shifts, and audience affinities.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Formulating core content pillars, tone guidelines, posting cadences, and KPI benchmarks.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Producing high-fidelity motion graphics, reels, carousels, and narrative scripts.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Managing community engagement, publishing workflows, and weekly analytical optimization.",
        },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "VIRAL REELS",
      headline: "Our featured work",
      subtitle:
        "Viral moments and community growth campaigns produced for modern brands.",
      items: [
        {
          id: "sm-dining",
          title: "Viral Restaurant Dining Experience",
          client: "The Bombay Canteen",
          category: "Viral Reels",
          metric: "2.8M Views",
          metricLabel: "Instagram Reach",
          imageSrc: videos.reelNo3?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Viral restaurant dining ambiance and cocktails reel",
          videoSrc: videos.reelNo3?.videoUrl,
          poster: videos.reelNo3?.thumbnailUrl,
          href: "/work/stichora",
          description: "Engineered a cinematic food reel that captured atmospheric dining and chef preparation, generating 2.8M organic views.",
          deliverables: ["Pacing Optimization", "Sound Design", "Viral Food Hooks"],
        },
        {
          id: "sm-foodstudio",
          title: "Artisanal Food Studio Gastro Storytelling",
          client: "Benne Bae Foodstudio",
          category: "Hospitality Motion",
          metric: "1.9M Views",
          metricLabel: "Algorithmic Views",
          imageSrc: videos.benneBaeFoodstudio?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Benne Bae artisanal food studio culinary story",
          videoSrc: videos.benneBaeFoodstudio?.videoUrl,
          poster: videos.benneBaeFoodstudio?.thumbnailUrl,
          href: "/work/stichora",
          description: "Produced high-fidelity culinary macro films that elevated cafe culture and converted local curiosity into line-out-the-door footfall.",
          deliverables: ["Culinary Macro", "Color Grading", "Social Distribution"],
        },
        {
          id: "sm-cafe-launch",
          title: "High-Street Cafe Launch Event",
          client: "It's Street Cafe",
          category: "Event Launch",
          metric: "450K Reach",
          metricLabel: "Launch Impressions",
          imageSrc: videos.itSStreetCafeOpening?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "High-street cafe opening party aftermovie reel",
          videoSrc: videos.itSStreetCafeOpening?.videoUrl,
          poster: videos.itSStreetCafeOpening?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured opening night energy and influencer attendees with rapid-cut editing, propelling opening weekend to 100% capacity.",
          deliverables: ["Event Aftermovie", "Influencer Micro-Cuts", "Community Buzz"],
        },
        {
          id: "sm-chef-cinema",
          title: "Signature Culinary Cinema",
          client: "Osteria Gourmet",
          category: "Food Cinema",
          metric: "+210% Growth",
          metricLabel: "Follower Acceleration",
          imageSrc: videos.reelNo1Mov?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Chef signature dish plating reel",
          videoSrc: videos.reelNo1Mov?.videoUrl,
          poster: videos.reelNo1Mov?.thumbnailUrl,
          href: "/work/stichora",
          description: "Spotlighted chef plating technique with ASMR sound design and macro slow motion, compounding weekly organic profile visits.",
          deliverables: ["ASMR Audio", "4K Slow Motion", "Algorithmic Hashtag Strategy"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "Learn how our full-service social management accelerates your brand presence.",
      ctaText: "BOOST YOUR SOCIAL PRESENCE",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-sm-1",
          number: "01",
          question: "Which platforms do you specialize in?",
          answer:
            "We manage and scale Instagram, TikTok, LinkedIn, YouTube Shorts, and X (Twitter), adapting creative hooks to platform-specific algorithm behavior.",
        },
        {
          id: "faq-sm-2",
          number: "02",
          question: "Do you handle shooting and production or just posting?",
          answer:
            "We handle the entire pipeline: scriptwriting, talent direction, video production, editing, graphic design, caption copywriting, and community management.",
        },
        {
          id: "faq-sm-3",
          number: "03",
          question: "How quickly do we see organic traction?",
          answer:
            "While viral spikes can happen within weeks, sustained algorithmic momentum and compounding community engagement typically manifest within 60 to 90 days.",
        },
        {
          id: "faq-sm-4",
          number: "04",
          question: "How do you measure success on social?",
          answer:
            "We track reach, engagement rate, follower retention, save & share velocity, website click-throughs, and downstream customer acquisition.",
        },
        {
          id: "faq-sm-5",
          number: "05",
          question: "Can we review content before it goes live?",
          answer:
            "Yes. We maintain a streamlined content calendar where your team can review, comment, and approve all creative assets in advance.",
        },
      ],
    },
  },

  "web-design": {
    slug: "web-design",
    name: "Web Design & Development",
    metaTitle: "Web Design & Digital Experiences | The Digital Pillar",
    metaDescription:
      "Award-winning web design and bespoke development that fuses high-end visual aesthetics with blazing performance.",
    hero: {
      tag: "SERVICE // WEB DESIGN",
      titleLine1: "Web design",
      titleLine2: "& Experiences",
      subtitle:
        "We design and build bespoke digital flagships that captivate visitors, elevate brand perception, and convert high-value traffic.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic optics representing fluid digital design",
      media: [
        {
          id: "web-hero-left",
          type: "video",
          src: videos.productEnergy?.videoUrl || "",
          poster: videos.productEnergy?.thumbnailUrl || "/stichora-app.jpg",
          alt: "Kinetic Interactive Showcase Video",
        },
        {
          id: "web-hero-middle",
          type: "video",
          src: videos.projectDemo?.videoUrl || "",
          poster: videos.projectDemo?.thumbnailUrl || "",
          alt: "The Digital Pillar Flagship Experience",
        },
        {
          id: "web-hero-right",
          type: "video",
          src: videos.marbella01?.videoUrl || "",
          poster: videos.marbella01?.thumbnailUrl || "/stichora-dark.jpg",
          alt: "Digital Experience Motion Video",
        },
      ],
    },
    marquee: {
      text: "BESPOKE WEB EXPERIENCES",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We build digital flagship websites that turn curiosity into conviction and visitors into lifelong advocates.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Seamless user experiences and silky-smooth micro-interactions that elevate brand trust.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Information architecture and UX flows optimized for conversion and storytelling.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+94%",
        metricLabel: "Session Duration",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "An agile engineering and design protocol built on modern frameworks, micro-interactions, and flawless responsiveness.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Mapping user journeys, technical constraints, conversion goals, and architectural requirements.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Designing wireframes, interactive user flows, and responsive site architecture.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "High-fidelity UI components, 3D interactions, motion choreography, and custom typography.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Next.js full-stack development, headless CMS integration, SEO optimization, and global deployment.",
        },
      ],
    },
    featuredWork: {
      layout: "bento",
      tag: "DIGITAL FLAGSHIPS",
      headline: "Our featured work",
      subtitle:
        "Digital flagship platforms built for visionary businesses across the globe.",
      items: [
        {
          id: "stichora-stone",
          title: "Stichora Atelier Digital Experience",
          category: "Digital Platform / Next.js",
          imageSrc: videos.projectDemo?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "The Digital Pillar interactive digital flagship experience",
          videoSrc: videos.projectDemo?.videoUrl,
          poster: videos.projectDemo?.thumbnailUrl,
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "Interactive Design System",
          category: "Component Library",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Dark Mode Immersive Storytelling",
          category: "UI/UX & Motion",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Client Portal & Responsive App",
          category: "Web Application",
          imageSrc: "/stichora-app.jpg",
          imageAlt: "3D app interface tiles for bespoke client portal",
          href: "/work/stichora",
          span: "full",
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "Everything you need to know about our web design, tech stack, and development timelines.",
      ctaText: "BUILD YOUR NEXT WEBSITE",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-wd-1",
          number: "01",
          question: "What technology stack do you build with?",
          answer:
            "We specialize in modern frontend engineering utilizing Next.js, React, TypeScript, Tailwind CSS, Lenis smooth scrolling, and Framer Motion/GSAP animations with headless CMS backends like Sanity or Strapi.",
        },
        {
          id: "faq-wd-2",
          number: "02",
          question: "Are your websites mobile-responsive and SEO-optimized?",
          answer:
            "Every single website we build is rigorously tested across all screen resolutions and devices, engineered with semantic markup, dynamic Open Graph tags, and sub-second loading speeds.",
        },
        {
          id: "faq-wd-3",
          number: "03",
          question: "How long does a full website build take?",
          answer:
            "A custom high-performance website build typically ranges between 4 to 8 weeks depending on scope, page count, and custom animation complexity.",
        },
        {
          id: "faq-wd-4",
          number: "04",
          question: "Can our internal team easily update content after launch?",
          answer:
            "Yes. We integrate user-friendly headless CMS solutions that empower your marketing team to edit text, publish blogs, and launch landing pages without touching code.",
        },
        {
          id: "faq-wd-5",
          number: "05",
          question: "Do you offer post-launch maintenance and support?",
          answer:
            "Yes, we provide ongoing retainer packages for performance monitoring, feature additions, security updates, and continuous conversion optimization.",
        },
      ],
    },
  },

  "ugc": {
    slug: "ugc",
    name: "User-Generated Content (UGC)",
    metaTitle: "UGC & Authentic Creator Campaigns | The Digital Pillar",
    metaDescription:
      "Human-centric, high-converting UGC videos and organic creator assets that supercharge customer trust and lower acquisition costs.",
    hero: {
      tag: "SERVICE // UGC",
      titleLine1: "User-generated",
      titleLine2: "Content Engine",
      subtitle:
        "We produce authentic, creator-led content that feels native to social feeds and delivers exponential conversion rates for modern brands.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic discs representing authentic perspective and peer influence",
      media: [
        {
          id: "ugc-hero-left",
          type: "video",
          src: videos.bQovaAiEditsBatch4?.videoUrl || "",
          poster: videos.bQovaAiEditsBatch4?.thumbnailUrl || "/images/service-template/reels/reel-2.jpg",
          alt: "Problem-Solution Creator Reel Video",
        },
        {
          id: "ugc-hero-middle",
          type: "video",
          src: videos.aQovaAiEditsBatch4?.videoUrl || "",
          poster: videos.aQovaAiEditsBatch4?.thumbnailUrl || "",
          alt: "Viral Direct-Response UGC Ad Hook Video",
        },
        {
          id: "ugc-hero-right",
          type: "video",
          src: videos.cQovaAiEditsBatch4?.videoUrl || "",
          poster: videos.cQovaAiEditsBatch4?.thumbnailUrl || "/images/service-template/reels/reel-3.jpg",
          alt: "Lifestyle Social Proof POV Video",
        },
      ],
    },
    marquee: {
      text: "AUTHENTIC UGC CREATIVE",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We harness peer-to-peer authenticity to overcome banner blindness and unlock record return on ad spend.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Unfiltered, relatable creator videos that address real customer objections.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Scripted direct-response hooks paired with genuine creator storytelling.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+78%",
        metricLabel: "ROAS Lift",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "Our end-to-end UGC pipeline handles creator sourcing, script direction, post-production, and performance iteration.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Analyzing target customer triggers, reviews, pain points, and highest-converting angles.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Matching vetted creators from our curated network who match your core demographic.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Writing high-converting hooks, directing shoots, and editing dynamic native captions.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Delivering multi-variant video hooks, b-roll packages, and whitelisted ad campaigns.",
        },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "PERFORMANCE REELS",
      headline: "Our featured work",
      subtitle:
        "High-performance UGC assets engineered for TikTok, Reels, and Meta Ads that stop the scroll and drive conversions.",
      items: [
        {
          id: "ugc-unboxing",
          title: "Viral Unboxing & First-Impression Hook",
          client: "Aura Skincare",
          category: "Direct-Response UGC",
          metric: "4.8M Views",
          metricLabel: "TikTok Organic",
          imageSrc: "/images/service-template/reels/reel-1.jpg",
          imageAlt: "Aura Skincare unboxing reel",
          videoSrc: videos.aQovaAiEditsBatch4?.videoUrl || "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: videos.aQovaAiEditsBatch4?.thumbnailUrl || "/images/service-template/reels/reel-1.jpg",
          href: "/work/stichora",
          description: "Scripted a 3-second pattern interrupt hook that reversed standard unboxing drop-off, increasing average watch time by 280% across Meta Spark Ads.",
          deliverables: ["Script Direction", "Creator Sourcing", "Fast-Paced Sound Design", "Paid Spark Ad Whitelisting"],
        },
        {
          id: "ugc-transformation",
          title: "Problem-Agitation Transformation Story",
          client: "Solace Wellness",
          category: "Problem-Solution Reel",
          metric: "+340% ROAS",
          metricLabel: "Meta Conversion Lift",
          imageSrc: "/images/service-template/reels/reel-2.jpg",
          imageAlt: "Solace Wellness transformation reel",
          videoSrc: videos.bQovaAiEditsBatch4?.videoUrl || "https://videos.pexels.com/video-files/4434246/4434246-sd_360_640_30fps.mp4",
          poster: videos.bQovaAiEditsBatch4?.thumbnailUrl || "/images/service-template/reels/reel-2.jpg",
          href: "/work/stichora",
          description: "Developed an unfiltered before-and-after storytelling format with dynamic captions and emotional creator testimonial, cutting customer acquisition cost in half.",
          deliverables: ["Creator Angle Testing", "Hook Iterations (5x)", "Native Motion Graphics", "CPA Optimization"],
        },
        {
          id: "ugc-lifestyle",
          title: "Aesthetic POV & Daily Routine Integration",
          client: "Verve Apparel",
          category: "Lifestyle Social Proof",
          metric: "18.2% CTR",
          metricLabel: "Click-Through Rate",
          imageSrc: videos.cQovaAiEditsBatch4?.thumbnailUrl || "/images/service-template/reels/reel-3.jpg",
          imageAlt: "Verve Apparel lifestyle reel",
          videoSrc: videos.cQovaAiEditsBatch4?.videoUrl,
          poster: videos.cQovaAiEditsBatch4?.thumbnailUrl,
          href: "/work/stichora",
          description: "Seamlessly integrated product into organic 'get ready with me' (GRWM) pacing, transforming authentic creator routines into high-performing commercial assets.",
          deliverables: ["Micro-Influencer Casting", "Audio Trend Matching", "Native Reels Typography", "Conversion Retargeting"],
        },
        {
          id: "ugc-objection-killer",
          title: "Direct-Response Objection Crusher",
          client: "Qova Health",
          category: "Direct-Response UGC",
          metric: "+220% Conv",
          metricLabel: "Conversion Lift",
          imageSrc: videos.dQovaAiEditsBatch4?.thumbnailUrl || "/images/service-template/reels/reel-1.jpg",
          imageAlt: "Direct-response UGC objection crusher reel",
          videoSrc: videos.dQovaAiEditsBatch4?.videoUrl,
          poster: videos.dQovaAiEditsBatch4?.thumbnailUrl,
          href: "/work/stichora",
          description: "Tackled primary consumer hesitation points directly within the first 4 seconds, elevating checkout completion across high-churn audience segments.",
          deliverables: ["Objection Breakdown", "Native Captions", "Split-Screen Formats", "ROAS Scaling"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "How our UGC creator workflows drive measurable conversion for DTC and B2B brands.",
      ctaText: "LAUNCH UGC CAMPAIGN",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-ugc-1",
          number: "01",
          question: "Do you supply the creators or do we have to find them?",
          answer:
            "We handle the entire creator casting process. We curate from our proprietary roster of vetted, authentic creators across diverse niches and demographics.",
        },
        {
          id: "faq-ugc-2",
          number: "02",
          question: "Do we own full commercial licensing for all UGC videos?",
          answer:
            "Yes. All delivered content comes with perpetual digital commercial usage rights for paid ads, organic channels, websites, and email marketing.",
        },
        {
          id: "faq-ugc-3",
          number: "03",
          question: "How many video variations do we receive per concept?",
          answer:
            "Each concept includes multiple hook variations, different call-to-actions, and dynamic aspect ratios (9:16, 1:1, 4:5) to optimize creative testing.",
        },
        {
          id: "faq-ugc-4",
          number: "04",
          question: "What is the turnaround time for a batch of UGC?",
          answer:
            "Once products are delivered to creators, finished edits are typically delivered within 10 to 14 business days.",
        },
        {
          id: "faq-ugc-5",
          number: "05",
          question: "Can UGC work for service or SaaS businesses?",
          answer:
            "Yes! We specialize in B2B & SaaS creator storytelling, testimonial walkthroughs, and screen-recording explainers that make complex software feel delightfully human.",
        },
      ],
    },
  },

  "influencer-marketing": {
    slug: "influencer-marketing",
    name: "Influencer Marketing & PR",
    metaTitle: "Influencer Marketing & Strategic PR | The Digital Pillar",
    metaDescription:
      "Strategic influencer partnerships and cultural amplification campaigns that build lasting brand prestige and scalable sales.",
    hero: {
      tag: "SERVICE // INFLUENCER MARKETING",
      titleLine1: "Influencer marketing",
      titleLine2: "& PR Strategy",
      subtitle:
        "We connect premium brands with influential cultural figures and niche creators to spark organic conversations and build undisputed credibility.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Optical glass discs representing brand amplification",
      media: [
        {
          id: "inf-hero-left",
          type: "video",
          src: videos.tunics03?.videoUrl || "",
          poster: videos.tunics03?.thumbnailUrl || "/images/services/influencer-marketing.jpg",
          alt: "Creator Fashion Seeding Video",
        },
        {
          id: "inf-hero-middle",
          type: "video",
          src: videos.other3VirtikaHairCrFinal3?.videoUrl || "",
          poster: videos.other3VirtikaHairCrFinal3?.thumbnailUrl || "",
          alt: "Virtika Hair Care Brand Ambassador Campaign Video",
        },
        {
          id: "inf-hero-right",
          type: "video",
          src: videos.saareeReel0220May?.videoUrl || "",
          poster: videos.saareeReel0220May?.thumbnailUrl || "/images/services/creator-content.jpg",
          alt: "Ambassador Heritage Spotlight Video",
        },
      ],
    },
    marquee: {
      text: "INFLUENCER MARKETING & PR",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We orchestrate high-impact creator partnerships that earn authentic cultural respect and measurable consumer demand.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Bespoke seeding and co-created narratives that elevate brand prestige.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Data-driven creator vetting, contractual negotiations, and ROI modeling.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+85%",
        metricLabel: "Earned Media",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "A rigorous, end-to-end partnership framework ensuring brand safety, high engagement, and seamless legal execution.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Deep audience audience-overlap analysis, fake follower vetting, and aesthetic alignment.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Structuring compensation, exclusivity clauses, usage rights, and campaign deliverables.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Crafting inspirational creative briefs that grant creators creative freedom within brand guardrails.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Coordinating synchronized launch days, whitelisted ad boosting, and detailed ROI attribution.",
        },
      ],
    },
    featuredWork: {
      layout: "cards-inline",
      tag: "CREATOR PARTNERSHIPS",
      headline: "Our featured work",
      subtitle:
        "Flagship influencer collaborations that defined categories and drove cultural conversation.",
      items: [
        {
          id: "inf-virtika",
          title: "Virtika Luxury Hair Care Brand Ambassador Campaign",
          client: "Virtika Botanicals",
          category: "Beauty & Wellness",
          metric: "+620K Reach",
          metricLabel: "Organic Views",
          imageSrc: videos.other3VirtikaHairCrFinal3?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Virtika luxury hair care brand ambassador campaign",
          videoSrc: videos.other3VirtikaHairCrFinal3?.videoUrl,
          poster: videos.other3VirtikaHairCrFinal3?.thumbnailUrl,
          href: "/work/stichora",
          description: "Partnered with aesthetic wellness creators to deliver authentic hair ritual routines, generating a 38% uplift in direct web conversions.",
          deliverables: ["Creator Selection", "Gifting Seeding", "Authentic Routine Integration"],
        },
        {
          id: "inf-tunics",
          title: "Contemporary Fashion Creator Capsule",
          client: "Tunics Modern",
          category: "Creator Capsule",
          metric: "14.8% Engagement",
          metricLabel: "Direct Engagement",
          imageSrc: videos.tunics03?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Contemporary fashion creator capsule showcase",
          videoSrc: videos.tunics03?.videoUrl,
          poster: videos.tunics03?.thumbnailUrl,
          href: "/work/stichora",
          description: "Structured exclusive capsule collection previews with top styling creators, selling out the premiere run in under 48 hours.",
          deliverables: ["VIP Capsule Gifting", "Lookbook Curation", "Story Swipe-Ups"],
        },
        {
          id: "inf-connect",
          title: "Executive Keynote & Creator Thought Leadership",
          client: "Connect Platform",
          category: "Co-Branded Media",
          metric: "+280% Demand",
          metricLabel: "Inbound Velocity",
          imageSrc: videos.connectScript1?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Co-branded executive thought leadership series",
          videoSrc: videos.connectScript1?.videoUrl,
          poster: videos.connectScript1?.thumbnailUrl,
          href: "/work/stichora",
          description: "Orchestrated high-impact founder-creator roundtables and keynote discussions, anchoring category leadership across B2B audiences.",
          deliverables: ["Executive Interviews", "Keynote Production", "LinkedIn Distribution"],
        },
        {
          id: "inf-heritage",
          title: "Cultural Heritage Influencer Spotlight",
          client: "Heritage Weaves",
          category: "Ambassador Spotlight",
          metric: "+1.2M Impressions",
          metricLabel: "Earned Media Value",
          imageSrc: videos.saareeReel0220May?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Handloom saree cultural heritage creator campaign",
          videoSrc: videos.saareeReel0220May?.videoUrl,
          poster: videos.saareeReel0220May?.thumbnailUrl,
          href: "/work/stichora",
          description: "Celebrated master artisan textile weaving through high-prestige cultural storytellers, generating massive earned media value.",
          deliverables: ["Heritage Storytelling", "Cultural Ambassadors", "Cinematic Reels"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "Everything you need to know about our influencer curation, contracts, and attribution.",
      ctaText: "SCALE WITH INFLUENCERS",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-inf-1",
          number: "01",
          question: "Do you focus on micro or macro influencers?",
          answer:
            "We employ a hybrid tiering strategy: micro and nano creators for authentic grassroots advocacy and high engagement, paired with select macro ambassadors for brand stature and mainstream awareness.",
        },
        {
          id: "faq-inf-2",
          number: "02",
          question: "How do you ensure influencers don't have fake followers?",
          answer:
            "We run rigorous algorithmic verification on audience demographics, engagement authenticity, comment sentiment, and historical brand sponsorship performance.",
        },
        {
          id: "faq-inf-3",
          number: "03",
          question: "Can we amplify influencer posts with paid ad spend?",
          answer:
            "Yes! We secure Meta Partnership Ads and TikTok Spark Ads permissions, allowing us to put paid budget behind winning influencer content directly from their handles.",
        },
        {
          id: "faq-inf-4",
          number: "04",
          question: "How do you track sales from influencer campaigns?",
          answer:
            "We deploy UTM tracking parameters, unique affiliate promo codes, and post-purchase attribution surveys to isolate exact revenue generated.",
        },
        {
          id: "faq-inf-5",
          number: "05",
          question: "Who handles contracts and payments to talent?",
          answer:
            "The Digital Pillar manages all talent outreach, negotiations, legal contracts, usage agreements, and international creator payouts.",
        },
      ],
    },
  },

  "content-strategy": {
    slug: "content-strategy",
    name: "Content Strategy & Direction",
    metaTitle: "Content Strategy & Creative Direction | The Digital Pillar",
    metaDescription:
      "Strategic content roadmaps, editorial systems, and creative direction that position your brand as an undisputed industry voice.",
    hero: {
      tag: "SERVICE // CONTENT STRATEGY",
      titleLine1: "Content strategy",
      titleLine2: "& Direction",
      subtitle:
        "We build content engines that bridge business objectives with human desire, ensuring every piece of media moves your brand forward.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Layered glass lenses symbolizing multifaceted strategic content",
      media: [
        {
          id: "cs-hero-left",
          type: "video",
          src: videos.numayanNo8?.videoUrl || "",
          poster: videos.numayanNo8?.thumbnailUrl || "/images/services/content-strategy.jpg",
          alt: "Conversational Thought Leadership Series Video",
        },
        {
          id: "cs-hero-middle",
          type: "video",
          src: videos.connectScript1?.videoUrl || "",
          poster: videos.connectScript1?.thumbnailUrl || "",
          alt: "High-Retention Narrative Architecture Video",
        },
        {
          id: "cs-hero-right",
          type: "video",
          src: videos.reel89LocationBenefit1?.videoUrl || "",
          poster: videos.reel89LocationBenefit1?.thumbnailUrl || "/images/services/social-media.jpg",
          alt: "Strategic Expansion Framework Video",
        },
      ],
    },
    marquee: {
      text: "STRATEGIC CONTENT DIRECTION",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We transform fragmented marketing into a cohesive narrative engine that compounds brand equity.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Editorial roadmaps that align thought leadership with bottom-line revenue goals.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Precision voice guidelines, pillar narratives, and recurring media formats.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+110%",
        metricLabel: "Audience Retention",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "A disciplined framework turning raw company knowledge into multi-channel thought leadership.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Extracting internal founder expertise, customer pain points, and category blind spots.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Establishing the overarching brand thesis, key opinion leadership angles, and content pillars.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Architecting modular templates, publication cadence, and cross-channel distribution flows.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Operationalizing monthly content production calendars, ghostwriting, and editorial reviews.",
        },
      ],
    },
    featuredWork: {
      layout: "cards-inline",
      tag: "EDITORIAL ARCHITECTURE",
      headline: "Our featured work",
      subtitle:
        "Narratives and editorial frameworks built for high-growth modern organizations.",
      items: [
        {
          id: "cs-retention-script",
          title: "High-Retention Narrative Architecture",
          client: "Connect Media",
          category: "Retention Scripts",
          metric: "+110% Retention",
          metricLabel: "Watch Time Benchmark",
          imageSrc: videos.connectScript1?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "High-retention conversational scriptwriting and editorial pacing",
          videoSrc: videos.connectScript1?.videoUrl,
          poster: videos.connectScript1?.thumbnailUrl,
          href: "/work/stichora",
          description: "Engineered high-retention conversational video scripts with hook theory and behavioral psychology, doubling organic video watch-time.",
          deliverables: ["Hook Architecture", "Scriptwriting", "Audience Retention Audits"],
        },
        {
          id: "cs-location-benefit",
          title: "Strategic Market Expansion Framework",
          client: "Retail Growth Partners",
          category: "Strategic Expansion",
          metric: "4.2x Watch Time",
          metricLabel: "Executive Engagement",
          imageSrc: videos.reel89LocationBenefit1?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Retail and commercial expansion location benefit strategy",
          videoSrc: videos.reel89LocationBenefit1?.videoUrl,
          poster: videos.reel89LocationBenefit1?.thumbnailUrl,
          href: "/work/stichora",
          description: "Structured high-leverage business expansion breakdowns explaining strategic location selection and demographic capture.",
          deliverables: ["Location Strategy", "Video Case Studies", "Market Analysis"],
        },
        {
          id: "cs-commentary-tech",
          title: "Conversational Thought Leadership Series",
          client: "Numayan Tech",
          category: "Commentary & Tech",
          metric: "+350K Followers",
          metricLabel: "Audience Growth",
          imageSrc: videos.numayanNo8?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Conversational thought leadership video series",
          videoSrc: videos.numayanNo8?.videoUrl,
          poster: videos.numayanNo8?.thumbnailUrl,
          href: "/work/stichora",
          description: "Distilled dense technology concepts into engaging commentary reels, establishing the brand's executive voice as an industry standard.",
          deliverables: ["Tech Commentary", "Key Takeaways", "Editorial Pillar Design"],
        },
        {
          id: "cs-senior-leadership",
          title: "Executive Philosophy & Culture Blueprint",
          client: "Leadership Forum",
          category: "Executive Culture",
          metric: "+85% Inbound",
          metricLabel: "Deal Flow Pipeline",
          imageSrc: videos.reel5WhatDoYouMeanByBeingSeniorFab14?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Executive philosophy and senior leadership framework reel",
          videoSrc: videos.reel5WhatDoYouMeanByBeingSeniorFab14?.videoUrl,
          poster: videos.reel5WhatDoYouMeanByBeingSeniorFab14?.thumbnailUrl,
          href: "/work/stichora",
          description: "Articulated leadership philosophy on what defines true executive seniority, sparking massive viral discourse across professional networks.",
          deliverables: ["Leadership Essays", "Viral Reel Formats", "Culture Playbook"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "How our content strategy unlocks organic resonance and predictable editorial output.",
      ctaText: "BUILD YOUR CONTENT ENGINE",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-cs-1",
          number: "01",
          question: "How is content strategy different from social media management?",
          answer:
            "Content strategy is the foundational 'why' and 'what': defining your intellectual property, point of view, and overarching narrative. Social media is one of several distribution channels that executes on this strategy.",
        },
        {
          id: "faq-cs-2",
          number: "02",
          question: "Do you write the content or just provide the strategy?",
          answer:
            "We do both! We deliver comprehensive strategic blueprints and also offer dedicated executive ghostwriting, article production, newsletters, and video scripts.",
        },
        {
          id: "faq-cs-3",
          number: "03",
          question: "How do you capture our brand's unique voice?",
          answer:
            "We conduct recorded executive interviews, analyze your past speeches and writings, and develop a comprehensive Voice Guide complete with vocabulary do's and don'ts.",
        },
        {
          id: "faq-cs-4",
          number: "04",
          question: "What channels does the strategy encompass?",
          answer:
            "Our strategies cover LinkedIn, Substack/Email newsletters, YouTube, brand podcasts, white papers, keynote decks, and company blogs.",
        },
        {
          id: "faq-cs-5",
          number: "05",
          question: "How long until we have an actionable content calendar?",
          answer:
            "Our initial sprint delivers your strategic framework, content pillars, and first 60 days of fully scripted content within 3 to 4 weeks.",
        },
      ],
    },
  },

  "creator-content": {
    slug: "creator-content",
    name: "Creator Content & Studio",
    metaTitle: "Creator Content Studio & Video Production | The Digital Pillar",
    metaDescription:
      "Studio-grade video production, cinematic reels, and visual storytelling tailored for modern social ecosystems.",
    hero: {
      tag: "SERVICE // CREATOR CONTENT",
      titleLine1: "Creator content",
      titleLine2: "& Studio Production",
      subtitle:
        "We produce cinema-quality digital video assets, motion systems, and narrative reels that stop the scroll and captivate attention.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Cinematic camera optics representing high-end video production",
      media: [
        {
          id: "cc-hero-left",
          type: "video",
          src: videos.marbella01?.videoUrl || "",
          poster: videos.marbella01?.thumbnailUrl || "/images/service-template/reels/reel-5.jpg",
          alt: "Marbella Resort Cinema Teaser Video",
        },
        {
          id: "cc-hero-middle",
          type: "video",
          src: videos.productEnergy?.videoUrl || "",
          poster: videos.productEnergy?.thumbnailUrl || "",
          alt: "High-Energy Kinetic Commercial Motion Video",
        },
        {
          id: "cc-hero-right",
          type: "video",
          src: videos.product5BikesreelFinal?.videoUrl || "",
          poster: videos.product5BikesreelFinal?.thumbnailUrl || "/images/service-template/reels/reel-6.jpg",
          alt: "Dynamic Superbike Motion Film Video",
        },
      ],
    },
    marquee: {
      text: "CREATOR CONTENT STUDIO",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We combine cinematic production values with modern social pacing to create unforgettable visual experiences.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Studio lighting, spatial audio design, and precision color grading built for mobile feeds.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Storyboarding and pacing designed to maximize algorithmic watch-time.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+150%",
        metricLabel: "Video Retention",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "From conceptual storyboarding to final sound mix, our production studio crafts excellence at speed.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Analyzing aesthetic benchmarks, creative moodboards, and narrative story beats.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Writing scripts, storyboards, shot lists, set design plans, and casting requirements.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Principal photography with RED/ARRI cinema cameras, bespoke lighting, and professional sound.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Post-production editing, motion tracking, sound mastering, and multi-format exports.",
        },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "STUDIO REELS",
      headline: "Our featured work",
      subtitle:
        "Cinematic brand films and high-tempo creator videos from our production studio built for maximum engagement.",
      items: [
        {
          id: "creator-brand-film",
          title: "High-Energy Product Reel Suite",
          client: "Stichora Atelier",
          category: "Motion & Reels",
          metric: "2.4M Views",
          metricLabel: "Reels Reach",
          imageSrc: "/images/service-template/reels/reel-4.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          videoSrc: videos.productEnergy?.videoUrl || "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: videos.productEnergy?.thumbnailUrl || "/images/service-template/reels/reel-4.jpg",
          href: "/work/stichora",
          description: "Engineered high-tempo macro cuts with kinetic typography and customized spatial sound design that dominated feed attention.",
          deliverables: ["Kinetic Motion", "4K Color Grade", "Spatial Audio Mastering", "Reels Pacing"],
        },
        {
          id: "creator-masterclass",
          title: "Moody Cinematic Masterclass Teaser",
          client: "Apex Executive",
          category: "Lighting & Sound",
          metric: "94% Retention",
          metricLabel: "Watch Time Benchmark",
          imageSrc: "/images/service-template/reels/reel-5.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          videoSrc: videos.marbella01?.videoUrl || "https://videos.pexels.com/video-files/4434246/4434246-sd_360_640_30fps.mp4",
          poster: videos.marbella01?.thumbnailUrl || "/images/service-template/reels/reel-5.jpg",
          href: "/work/stichora",
          description: "Utilized chiaroscuro film lighting and anamorphic lens emulation to capture a luxury aesthetic that commands visceral respect.",
          deliverables: ["Cinema Camera Package", "Custom Soundscape", "Hook Engineering", "Multi-Format Cuts"],
        },
        {
          id: "creator-3d",
          title: "Superbike Dynamic Track & Motion Film",
          client: "Apex Supermoto",
          category: "Automotive Motion",
          metric: "+410% Shares",
          metricLabel: "Viral Coefficient",
          imageSrc: videos.product5BikesreelFinal?.thumbnailUrl || "/images/service-template/reels/reel-6.jpg",
          imageAlt: "Superbike dynamic velocity and exhaust motion film",
          videoSrc: videos.product5BikesreelFinal?.videoUrl,
          poster: videos.product5BikesreelFinal?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured high-octane automotive dynamics with tracked gimbal maneuvers and adrenaline sound mastering, driving explosive algorithmic sharing.",
          deliverables: ["Trackside Cinema", "Sound Design", "Kinetic Typography", "High-FPS Slow Motion"],
        },
        {
          id: "creator-couture-cinema",
          title: "Ela High Fashion Runway Lookbook",
          client: "Ela Couture",
          category: "Couture Cinema",
          metric: "+1.8M Reach",
          metricLabel: "Organic Impressions",
          imageSrc: videos.ela01?.thumbnailUrl || "/images/service-template/reels/reel-4.jpg",
          imageAlt: "Ela contemporary high fashion lookbook film",
          videoSrc: videos.ela01?.videoUrl,
          poster: videos.ela01?.thumbnailUrl,
          href: "/work/stichora",
          description: "Produced an avant-garde editorial lookbook with stylized contrast and seamless transitions that established the collection's international prestige.",
          deliverables: ["Runway Direction", "Color Grading", "Editorial Framing", "Soundscape Design"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "Learn about our filming gear, remote shoot capabilities, and post-production timelines.",
      ctaText: "BOOK STUDIO PRODUCTION",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-cc-1",
          number: "01",
          question: "Can you film on-location or do we have to come to your studio?",
          answer:
            "Both! We have fully equipped studio facilities and a mobile cinema production crew that travels internationally for founder shoots, factory tours, and brand films.",
        },
        {
          id: "faq-cc-2",
          number: "02",
          question: "What equipment do you use for filming?",
          answer:
            "We film with cinema-tier camera packages (RED, Sony FX series), prime anamorphic lenses, high-end Aputure lighting systems, and studio-grade wireless audio.",
        },
        {
          id: "faq-cc-3",
          number: "03",
          question: "How many videos can we produce in a single shoot day?",
          answer:
            "With efficient pre-production and multi-camera setups, a single shoot day typically yields 1 flagship brand asset and 15 to 30 high-converting short-form reels.",
        },
        {
          id: "faq-cc-4",
          number: "04",
          question: "Do you handle motion graphics and 3D animation?",
          answer:
            "Yes. Our in-house motion designers create custom 2D/3D title sequences, kinetic typography, and 3D product renders.",
        },
        {
          id: "faq-cc-5",
          number: "05",
          question: "How long does post-production take?",
          answer:
            "First rough cuts are delivered within 5 to 7 business days following the shoot, with full color grading and sound design finalized within 10 days.",
        },
      ],
    },
  },

  "paid-ads": {
    slug: "paid-ads",
    name: "Paid Ads & Performance Engine",
    metaTitle: "Paid Ads & Performance Marketing Engine | The Digital Pillar",
    metaDescription:
      "Data-backed paid advertising, relentless creative testing, and algorithmic scaling that accelerates customer acquisition.",
    hero: {
      tag: "SERVICE // PERFORMANCE MARKETING",
      titleLine1: "Paid ads &",
      titleLine2: "Performance",
      subtitle:
        "We engineer high-ROI paid media campaigns that combine scientific creative testing with aggressive media buying to scale revenue profitably.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic discs representing precision targeting and performance",
      media: [
        {
          id: "pa-hero-left",
          type: "video",
          src: videos.productEnergy?.videoUrl || "",
          poster: videos.productEnergy?.thumbnailUrl || "/images/services/paid-ads.jpg",
          alt: "Kinetic Commercial Motion Ad",
        },
        {
          id: "pa-hero-middle",
          type: "video",
          src: videos.gQovaAiEditsBatch4?.videoUrl || "",
          poster: videos.gQovaAiEditsBatch4?.thumbnailUrl || "",
          alt: "Direct-Response High-ROAS Performance Creative",
        },
        {
          id: "pa-hero-right",
          type: "video",
          src: videos.lQovaAiEditsBatch4?.videoUrl || "",
          poster: videos.lQovaAiEditsBatch4?.thumbnailUrl || "/images/services/ugc.jpg",
          alt: "Performance UGC Objection Crusher",
        },
      ],
    },
    marquee: {
      text: "PERFORMANCE MARKETING ENGINE",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We scale customer acquisition through scientific creative iteration, predictive budgeting, and full-funnel optimization.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Relentless creative testing with over 50+ fresh ad variations deployed every month.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Full-funnel attribution, custom pixel tracking, and predictive LTV modeling.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+240%",
        metricLabel: "Attributed ROI",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "Our proprietary scientific media buying framework minimizes wasted ad spend and scales top-performing creatives.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Auditing tracking pixels, historical CPA metrics, cohort retention, and customer lifetime value.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Setting target CAC/ROAS benchmarks, audience testing matrices, and budget allocation models.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Producing high-impact static and motion ad creatives engineered to beat benchmark click-through rates.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Executing daily bid optimizations, killing fatigue creatives, and scaling winning ad sets aggressively.",
        },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "PERFORMANCE CREATIVES",
      headline: "Our featured work",
      subtitle:
        "Case studies in scaling customer acquisition while lowering cost per lead.",
      items: [
        {
          id: "pa-roas-creative",
          title: "High-ROAS Meta Direct-Response Creative G",
          client: "Direct Brands Co.",
          category: "Performance Ads",
          metric: "+420% ROAS",
          metricLabel: "Meta Conversion Lift",
          imageSrc: videos.gQovaAiEditsBatch4?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Direct-response performance marketing ad creative",
          videoSrc: videos.gQovaAiEditsBatch4?.videoUrl,
          poster: videos.gQovaAiEditsBatch4?.thumbnailUrl,
          href: "/work/stichora",
          description: "Deployed rapid dynamic hooks with direct problem-solution framing, scaling profitable ad spend to $150K/month.",
          deliverables: ["Dynamic Hook Testing", "CPA Scaling", "Creative Iterations"],
        },
        {
          id: "pa-commercial-motion",
          title: "High-Velocity Kinetic Commercial Ad",
          client: "Energy Labs",
          category: "Conversion Video",
          metric: "12.4% CTR",
          metricLabel: "Click-Through Rate",
          imageSrc: videos.productEnergy?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Kinetic commercial product video ad",
          videoSrc: videos.productEnergy?.videoUrl,
          poster: videos.productEnergy?.thumbnailUrl,
          href: "/work/stichora",
          description: "Combined macro beverage footage with sound-activated cuts to crush benchmark click-through rates across Meta Feed and Stories.",
          deliverables: ["Motion Ad Variants", "Retargeting Cuts", "Audio Mastering"],
        },
        {
          id: "pa-ugc-crusher",
          title: "Performance UGC Variant L - Objection Crusher",
          client: "Qova Performance",
          category: "Creative Testing",
          metric: "5.2x MER",
          metricLabel: "Marketing Efficiency Ratio",
          imageSrc: videos.lQovaAiEditsBatch4?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Performance UGC objection handling creative",
          videoSrc: videos.lQovaAiEditsBatch4?.videoUrl,
          poster: videos.lQovaAiEditsBatch4?.thumbnailUrl,
          href: "/work/stichora",
          description: "Systematically addressed common buyer friction points in a native creator format, doubling return on ad spend within 30 days.",
          deliverables: ["Objection Scripting", "Split-Testing Matrix", "Whitelisted Handles"],
        },
        {
          id: "pa-spark-interrupt",
          title: "TikTok Spark Ad Pattern-Interrupt J",
          client: "Spark DTC",
          category: "Scroll Stopper Ad",
          metric: "-54% CPA",
          metricLabel: "Customer Acquisition Cost",
          imageSrc: videos.jQovaAiEditsBatch4?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "TikTok Spark Ad pattern interrupt creative",
          videoSrc: videos.jQovaAiEditsBatch4?.videoUrl,
          poster: videos.jQovaAiEditsBatch4?.thumbnailUrl,
          href: "/work/stichora",
          description: "Leveraged a viral curiosity gap in the first 2 seconds, slashing customer acquisition cost by more than half across paid channels.",
          deliverables: ["Curiosity Gap Hooks", "Spark Ad Deployment", "Conversion Landing Page"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description:
        "How our media buying and creative strategy generates predictable pipeline.",
      ctaText: "SCALE YOUR AD PERFORMANCE",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-pa-1",
          number: "01",
          question: "Which ad networks do you manage?",
          answer:
            "We manage Meta Ads (Instagram & Facebook), Google Ads (Search, YouTube, Performance Max), TikTok Ads, and LinkedIn Ads.",
        },
        {
          id: "faq-pa-2",
          number: "02",
          question: "Do you design the ad creative or do we supply it?",
          answer:
            "Creative is 80% of modern ad performance! We produce all your ad copy, motion graphics, video hooks, and landing pages in-house.",
        },
        {
          id: "faq-pa-3",
          number: "03",
          question: "What is your minimum recommended ad spend?",
          answer:
            "We recommend a minimum monthly media spend of $3,000 to $5,000 so the platform algorithms gather enough statistical data to exit the learning phase quickly.",
        },
        {
          id: "faq-pa-4",
          number: "04",
          question: "How do you handle iOS privacy and attribution tracking?",
          answer:
            "We implement Server-Side Tracking (Conversions API), Triple Whale / Hyros integration, and blended MER (Marketing Efficiency Ratio) tracking for bulletproof accuracy.",
        },
        {
          id: "faq-pa-5",
          number: "05",
          question: "How often do you report on results?",
          answer:
            "You receive access to a live 24/7 client dashboard, weekly Slack updates, and bi-weekly strategic roadmap calls with your media buyer.",
        },
      ],
    },
  },

  "fashion": {
    slug: "fashion",
    name: "Fashion & Couture Production",
    metaTitle: "Fashion & Couture Video Production | The Digital Pillar",
    metaDescription:
      "Cinematic lookbooks, luxury couture, and high-fashion runway films produced for visionary apparel and lifestyle brands.",
    hero: {
      tag: "SERVICE // FASHION & COUTURE",
      titleLine1: "Fashion &",
      titleLine2: "Couture Cinema",
      subtitle:
        "We produce runway-tier fashion films, editorial lookbooks, and high-fashion motion assets that captivate luxury audiences worldwide.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "High-fashion optical reflections representing couture craft",
      media: [
        {
          id: "fashion-hero-left",
          type: "video",
          src: videos.ela01?.videoUrl || "",
          poster: videos.ela01?.thumbnailUrl || "/stichora-dark.jpg",
          alt: "Ela High Fashion Lookbook",
        },
        {
          id: "fashion-hero-middle",
          type: "video",
          src: videos.armaniExchange?.videoUrl || "",
          poster: videos.armaniExchange?.thumbnailUrl || "",
          alt: "Armani Exchange Runway Film",
        },
        {
          id: "fashion-hero-right",
          type: "video",
          src: videos.tunics03?.videoUrl || "",
          poster: videos.tunics03?.thumbnailUrl || "/stichora.jpg",
          alt: "Tunics Modern Silhouette",
        },
      ],
    },
    marquee: {
      text: "FASHION & COUTURE PRODUCTION",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We translate runway grandeur into thumb-stopping social films that elevate luxury brand perception.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Anamorphic framing, high-fashion styling, and evocative movement choreography.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Haute couture aesthetic direction tailored for international editorial appeal.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+280%",
        metricLabel: "Editorial Reach",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "From runway moodboarding to haute-couture color mastering, our fashion studio sets the industry standard.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Mapping collection concepts, textile textures, and runway moodboards." },
        { number: "02", title: "Define", description: "Casting editorial models, scouting bespoke architectural locations, and lighting." },
        { number: "03", title: "Design", description: "Principal cinematography with cinema lenses, motion tracking, and high-FPS slow motion." },
        { number: "04", title: "Deliver", description: "High-fashion color grading, aspect-ratio multi-cuts, and global social packaging." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED LOOKBOOKS",
      headline: "Our featured work",
      subtitle:
        "A curated selection of luxury fashion campaigns, runway showcases, and heritage textile stories.",
      items: [
        {
          id: "fashion-armani",
          title: "Armani Exchange Global Campaign",
          client: "Armani Exchange",
          category: "Runway & Editorial",
          metric: "3.1M Views",
          metricLabel: "Campaign Impressions",
          imageSrc: videos.armaniExchange?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Armani Exchange runway editorial film",
          videoSrc: videos.armaniExchange?.videoUrl,
          poster: videos.armaniExchange?.thumbnailUrl,
          href: "/work/stichora",
          description: "Engineered high-contrast chiaroscuro fashion cinematography that positioned the seasonal line with international runway prestige.",
          deliverables: ["Runway Film", "Macro Cutdowns", "Social Ad Variants"],
        },
        {
          id: "fashion-ela",
          title: "Ela High Fashion Lookbook",
          client: "Ela Couture",
          category: "Editorial Lookbook",
          metric: "1.8M Reach",
          metricLabel: "Organic Views",
          imageSrc: videos.ela01?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Ela contemporary fashion lookbook",
          videoSrc: videos.ela01?.videoUrl,
          poster: videos.ela01?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured fluidity of contemporary silhouette cuts with tracked Steadicam movement and custom ambient fashion audio.",
          deliverables: ["Editorial Lookbook", "Model Direction", "Color Grading"],
        },
        {
          id: "fashion-tunics",
          title: "Tunics Modern Silhouette Reel",
          client: "Tunics Atelier",
          category: "Contemporary Wear",
          metric: "890K Views",
          metricLabel: "Engagement Reach",
          imageSrc: videos.tunics03?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Tunics modern silhouette fashion reel",
          videoSrc: videos.tunics03?.videoUrl,
          poster: videos.tunics03?.thumbnailUrl,
          href: "/work/stichora",
          description: "Spotlighted lightweight fabric movement and architectural draping for modern urban ready-to-wear styling.",
          deliverables: ["Reel Direction", "Audio Synchronization", "Macro Textile Detail"],
        },
        {
          id: "fashion-saaree",
          title: "Heritage Silk Drape & Couture Craft",
          client: "Heritage Weaves",
          category: "Heritage Couture",
          metric: "1.4M Impressions",
          metricLabel: "Earned Reach",
          imageSrc: videos.saareeReel0120May?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Heritage silk saree drape and artisan craft film",
          videoSrc: videos.saareeReel0120May?.videoUrl,
          poster: videos.saareeReel0120May?.thumbnailUrl,
          href: "/work/stichora",
          description: "Elevated ancient handloom silk weaving into modern luxury cinematography, celebrating artisanal textile heritage.",
          deliverables: ["Heritage Storytelling", "Artisan Close-Ups", "Kinetic Social Edits"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "Everything you need to know about our high-fashion and runway production services.",
      ctaText: "PLAN FASHION PRODUCTION",
      ctaHref: "/contact",
      items: [
        { id: "faq-f-1", number: "01", question: "Do you provide model casting and location scouting?", answer: "Yes! We coordinate full-service casting through premier agencies and scout exclusive architectural estates, studios, and outdoor settings." },
        { id: "faq-f-2", number: "02", question: "Can you produce both photo lookbooks and cinematic video?", answer: "Absolutely. Our production crews operate hybrid cinema setups delivering ultra-high-resolution stills alongside 4K video reels." },
        { id: "faq-f-3", number: "03", question: "How far in advance should we book fashion shoots?", answer: "We recommend booking 3 to 5 weeks prior to your seasonal collection launch to allow for location permits and precision color grading." },
      ],
    },
  },

  "restaurant": {
    slug: "restaurant",
    name: "Restaurant & Hospitality Media",
    metaTitle: "Restaurant & Gourmet Dining Video Media | The Digital Pillar",
    metaDescription:
      "Atmospheric dining ambiance, chef table craft, and gourmet launch reels that drive table reservations and viral footfall.",
    hero: {
      tag: "SERVICE // RESTAURANTS",
      titleLine1: "Restaurant &",
      titleLine2: "Dining Cinema",
      subtitle:
        "We produce mouthwatering culinary films, atmospheric ambiance reels, and grand opening aftermovies that turn restaurants into dining destinations.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Warm culinary lighting optics representing gourmet dining",
      media: [
        {
          id: "rest-hero-left",
          type: "video",
          src: videos.reelNo9?.videoUrl || "",
          poster: videos.reelNo9?.thumbnailUrl || "/stichora-stone.jpg",
          alt: "Chef Plating Artistry",
        },
        {
          id: "rest-hero-middle",
          type: "video",
          src: videos.reelNo3?.videoUrl || "",
          poster: videos.reelNo3?.thumbnailUrl || "",
          alt: "Gourmet Table Atmosphere Reel",
        },
        {
          id: "rest-hero-right",
          type: "video",
          src: videos.reelNo1Mov?.videoUrl || "",
          poster: videos.reelNo1Mov?.thumbnailUrl || "/stichora-dark.jpg",
          alt: "Evening Dining Ambiance",
        },
      ],
    },
    marquee: {
      text: "GOURMET DINING & HOSPITALITY MEDIA",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We capture the sensory thrill of fine dining and nightlife, turning culinary craft into irresistible booking momentum.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Macro sizzling textures, bespoke lighting, and ASMR sound design that ignite appetite.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Location-targeted launch strategies that fill dining rooms from opening night.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+340%",
        metricLabel: "Reservation Lift",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "Our systematic hospitality media framework captures culinary precision and atmospheric magic at speed.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Tasting menu curation, chef signature specialties, and venue lighting audits." },
        { number: "02", title: "Define", description: "Storyboarding service choreography, beverage pours, and table service highlights." },
        { number: "03", title: "Design", description: "Cinema filming with high-speed macro optics, steam capture, and spatial audio." },
        { number: "04", title: "Deliver", description: "Rapid delivery of reels, stories, website hero loops, and reservation ads." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED DINING",
      headline: "Our featured work",
      subtitle:
        "Sensory culinary films and atmospheric dining reels that filled tables across premier culinary destinations.",
      items: [
        {
          id: "rest-atmosphere",
          title: "Gourmet Table Atmosphere & Signature Cocktails",
          client: "Osteria Royale",
          category: "Gourmet Dining",
          metric: "2.8M Views",
          metricLabel: "Social Reach",
          imageSrc: videos.reelNo3?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Gourmet restaurant dining atmosphere and cocktails reel",
          videoSrc: videos.reelNo3?.videoUrl,
          poster: videos.reelNo3?.thumbnailUrl,
          href: "/work/stichora",
          description: "Highlighted evening dining ambiance and bespoke craft mixology, triggering 2.8M organic views and 100% weekend bookings.",
          deliverables: ["Ambiance Cinematography", "Mixology Slow Motion", "Viral Sound Design"],
        },
        {
          id: "rest-chef-pass",
          title: "Chef Pass Plating & Culinary Artistry",
          client: "Atelier Gourmet",
          category: "Chef Table",
          metric: "1.2M Impressions",
          metricLabel: "Foodie Reach",
          imageSrc: videos.reelNo9?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Chef pass plating artistry and kitchen choreography",
          videoSrc: videos.reelNo9?.videoUrl,
          poster: videos.reelNo9?.thumbnailUrl,
          href: "/work/stichora",
          description: "Documented the intensity and artistic precision of Michelin-caliber chef plating with macro lens clarity.",
          deliverables: ["Kitchen Macro", "Chef Interview Snippets", "Pacing Optimization"],
        },
        {
          id: "rest-evening-cinema",
          title: "Atmospheric Evening Dining Reel",
          client: "Lumina Bistro",
          category: "Fine Dining",
          metric: "940K Views",
          metricLabel: "Instagram Views",
          imageSrc: videos.reelNo1Mov?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Atmospheric evening dining experience",
          videoSrc: videos.reelNo1Mov?.videoUrl,
          poster: videos.reelNo1Mov?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured candlelight ambiance and signature dish arrivals, converting casual scrollers into loyal regulars.",
          deliverables: ["Low-Light Cinematography", "Color Grading", "Social Reels Cuts"],
        },
        {
          id: "rest-chef-table",
          title: "VIP Chef's Table Experience",
          client: "The Guild Dining",
          category: "VIP Experience",
          metric: "+380% Bookings",
          metricLabel: "Private Table Demand",
          imageSrc: videos.reelNo7Mov?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "VIP chef table private dining experience",
          videoSrc: videos.reelNo7Mov?.videoUrl,
          poster: videos.reelNo7Mov?.thumbnailUrl,
          href: "/work/stichora",
          description: "Spotlighted exclusive multi-course tasting sessions, generating multi-month waiting lists for private dining rooms.",
          deliverables: ["Tasting Menu Cinema", "Exclusive Access Reel", "Reservation Retargeting"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "How our culinary media production drives record footfall and reservations.",
      ctaText: "SCHEDULE RESTAURANT SHOOT",
      ctaHref: "/contact",
      items: [
        { id: "faq-r-1", number: "01", question: "Can you shoot during normal restaurant service without disrupting guests?", answer: "Yes! We frequently film during prep hours and seamlessly capture real service with discrete, compact cinema rigs." },
        { id: "faq-r-2", number: "02", question: "Do you provide sound design with authentic sizzles and pours?", answer: "Yes! High-fidelity spatial audio and ASMR sound engineering are core to why our culinary videos convert so powerfully." },
      ],
    },
  },

  "food-beverage": {
    slug: "food-beverage",
    name: "Food, Beverage & Cafe Culture",
    metaTitle: "Food, Beverage & Cafe Culture Media | The Digital Pillar",
    metaDescription:
      "Artisanal food studio films, cafe culture, and gastronomy storytelling that builds iconic beverage and culinary brands.",
    hero: {
      tag: "SERVICE // FOOD & BEVERAGE",
      titleLine1: "Food, Beverage",
      titleLine2: "& Cafe Culture",
      subtitle:
        "We craft mouthwatering gastronomy cinema, artisan cafe stories, and beverage launch films that build passionate food communities.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic optics representing culinary innovation",
      media: [
        {
          id: "fb-hero-left",
          type: "video",
          src: videos.itSStreetCafeOpening?.videoUrl || "",
          poster: videos.itSStreetCafeOpening?.thumbnailUrl || "/images/services/social-media.jpg",
          alt: "Cafe Grand Opening",
        },
        {
          id: "fb-hero-middle",
          type: "video",
          src: videos.benneBaeFoodstudio?.videoUrl || "",
          poster: videos.benneBaeFoodstudio?.thumbnailUrl || "",
          alt: "Benne Bae Artisanal Foodstudio Film",
        },
        {
          id: "fb-hero-right",
          type: "video",
          src: videos.thirdPlaceVideo?.videoUrl || "",
          poster: videos.thirdPlaceVideo?.thumbnailUrl || "/images/services/creator-content.jpg",
          alt: "Third Place Coffee Culture",
        },
      ],
    },
    marquee: {
      text: "ARTISANAL F&B & CAFE CULTURE",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We turn culinary ingredients and specialty beverage craft into magnetic consumer brands with cult followings.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Macro ingredient reveals, artisanal dough and barista mastery, and authentic food stories.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Brand identity and social momentum tailored for specialty food and beverage retail.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+210%",
        metricLabel: "Footfall Lift",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description: "Our bespoke gastronomy pipeline captures recipe origin stories and high-tempo cafe culture.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Ingredient sourcing origin, kitchen techniques, and customer brand affinity." },
        { number: "02", title: "Define", description: "Signature food and drink heroes, editorial style, and packaging spotlights." },
        { number: "03", title: "Design", description: "Studio lighting, micro-speed cinematography, and custom sound design." },
        { number: "04", title: "Deliver", description: "Social reels, brand documentaries, digital menu loops, and campaign rollouts." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED F&B",
      headline: "Our featured work",
      subtitle:
        "Artisanal food studio showcases and cafe culture campaigns produced for leading food entrepreneurs.",
      items: [
        {
          id: "fb-bennebae",
          title: "Benne Bae Foodstudio Culinary Narrative",
          client: "Benne Bae",
          category: "Artisanal F&B",
          metric: "2.1M Views",
          metricLabel: "Viral Reach",
          imageSrc: videos.benneBaeFoodstudio?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Benne Bae foodstudio cinematic story",
          videoSrc: videos.benneBaeFoodstudio?.videoUrl,
          poster: videos.benneBaeFoodstudio?.thumbnailUrl,
          href: "/work/stichora",
          description: "Engineered an intimate, mouthwatering culinary film showcasing authentic traditional craft with modern cinematography.",
          deliverables: ["Culinary Documentary", "Instagram Reels", "Macro Food Stills"],
        },
        {
          id: "fb-streetcafe",
          title: "It's Street Cafe Grand Launch Event",
          client: "It's Street Cafe",
          category: "Cafe Culture",
          metric: "850K Reach",
          metricLabel: "Launch Impressions",
          imageSrc: videos.itSStreetCafeOpening?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Street cafe launch event aftermovie",
          videoSrc: videos.itSStreetCafeOpening?.videoUrl,
          poster: videos.itSStreetCafeOpening?.thumbnailUrl,
          href: "/work/stichora",
          description: "Documented the electric grand opening with high-tempo editing and youth culture energy, filling tables every day since.",
          deliverables: ["Launch Film", "Event Highlights", "Social Teasers"],
        },
        {
          id: "fb-thirdplace",
          title: "Third Place Coffee & Community Story",
          client: "Third Place Cafe",
          category: "Specialty Coffee",
          metric: "+180% Footfall",
          metricLabel: "Customer Growth",
          imageSrc: videos.thirdPlaceVideo?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Third Place specialty coffee and community culture",
          videoSrc: videos.thirdPlaceVideo?.videoUrl,
          poster: videos.thirdPlaceVideo?.thumbnailUrl,
          href: "/work/stichora",
          description: "Celebrated third-place community culture and artisan coffee roasting, creating an unmistakable sanctuary feel.",
          deliverables: ["Community Story", "Barista Cinema", "Ambient Audio"],
        },
        {
          id: "fb-aftermovie",
          title: "Nightlife & Gastronomy Aftermovie",
          client: "Social House Events",
          category: "Event Aftermovie",
          metric: "620K Views",
          metricLabel: "Video Plays",
          imageSrc: videos.shLastEventAftermovie0807Reel?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Gastronomy event aftermovie with live DJ and cocktail service",
          videoSrc: videos.shLastEventAftermovie0807Reel?.videoUrl,
          poster: videos.shLastEventAftermovie0807Reel?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured the vibrant synergy between gourmet dining and live music, driving repeat ticket sales across all following events.",
          deliverables: ["Nightlife Aftermovie", "High-Energy Reels", "Sponsor Highlights"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "How we help food, beverage, and cafe brands dominate social attention.",
      ctaText: "SCALE YOUR F&B BRAND",
      ctaHref: "/contact",
      items: [
        { id: "faq-fb-1", number: "01", question: "Do you work with both independent cafes and national F&B brands?", answer: "Yes! We work with boutique coffee shops, craft food studios, FMCG food startups, and multi-location franchises." },
        { id: "faq-fb-2", number: "02", question: "Can you film food products for e-commerce and retail packaging?", answer: "Yes! We provide complete 4K macro video and studio product photography suitable for DTC packaging and digital storefronts." },
      ],
    },
  },

  "real-estate": {
    slug: "real-estate",
    name: "Luxury Real Estate & Living",
    metaTitle: "Luxury Real Estate Video & Walkthroughs | The Digital Pillar",
    metaDescription:
      "Township walkthroughs, sky penthouses, and premier architectural living films engineered to attract high-net-worth property buyers.",
    hero: {
      tag: "SERVICE // REAL ESTATE",
      titleLine1: "Real estate &",
      titleLine2: "Luxury Living",
      subtitle:
        "We produce breathtaking architectural cinema, sky penthouse walkthroughs, and immersive township films that sell luxury developments.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic architectural optics representing luxury living",
      media: [
        {
          id: "re-hero-left",
          type: "video",
          src: videos.realEstate1?.videoUrl || "",
          poster: videos.realEstate1?.thumbnailUrl || "/stichora-stone.jpg",
          alt: "Sky Penthouse Architectural Living",
        },
        {
          id: "re-hero-middle",
          type: "video",
          src: videos.paradisePunawale?.videoUrl || "",
          poster: videos.paradisePunawale?.thumbnailUrl || "",
          alt: "Paradise Punawale Luxury Township Walkthrough",
        },
        {
          id: "re-hero-right",
          type: "video",
          src: videos.realEstate2?.videoUrl || "",
          poster: videos.realEstate2?.thumbnailUrl || "/stichora-dark.jpg",
          alt: "Bespoke Villa Haven Walkthrough",
        },
      ],
    },
    marquee: {
      text: "LUXURY REAL ESTATE ARCHITECTURE",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We translate premium brick-and-mortar architecture into emotive digital cinema that accelerates high-ticket property sales.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "FPV drone fly-throughs, golden-hour interior lighting, and architectural framing.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Targeted digital distribution reaching verified high-net-worth investors and buyers.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "₹120Cr+",
        metricLabel: "Property Sold",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description: "Our architectural media protocol turns real estate projects into market-defining landmarks.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Architectural blueprints, site elevation, sunrise/sunset golden hours, and buyer personas." },
        { number: "02", title: "Define", description: "Choreographing camera movement, 3D floor plan integration, and lifestyle staging." },
        { number: "03", title: "Design", description: "Heavy-lift drone cinematography, gimbal interior gliding, and twilight captures." },
        { number: "04", title: "Deliver", description: "Bespoke investor presentations, YouTube walkthroughs, Meta lead gen reels, and VR tours." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED PROPERTIES",
      headline: "Our featured work",
      subtitle:
        "Iconic real estate developments and luxury villas brought to life through cinematic visual storytelling.",
      items: [
        {
          id: "re-paradise",
          title: "Paradise Punawale Luxury Township Walkthrough",
          client: "Paradise Group",
          category: "Luxury Township",
          metric: "₹120Cr Sold",
          metricLabel: "Inventory Cleared",
          imageSrc: videos.paradisePunawale?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Paradise Punawale luxury township walkthrough",
          videoSrc: videos.paradisePunawale?.videoUrl,
          poster: videos.paradisePunawale?.thumbnailUrl,
          href: "/work/stichora",
          description: "Produced a comprehensive township lifestyle film capturing resort-tier amenities and modern residential living, driving massive booking velocity.",
          deliverables: ["Township Film", "Drone Fly-Through", "Lead Generation Ads"],
        },
        {
          id: "re-penthouse",
          title: "Sky Penthouse Architectural Tour",
          client: "Skyline Penthouses",
          category: "Sky Residences",
          metric: "+450 Leads",
          metricLabel: "HNW Inquiries",
          imageSrc: videos.realEstate1?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Sky penthouse architectural interior film",
          videoSrc: videos.realEstate1?.videoUrl,
          poster: videos.realEstate1?.thumbnailUrl,
          href: "/work/stichora",
          description: "Glided through double-height living spaces and panoramic city skyline vistas, attracting verified ultra-high-net-worth buyers.",
          deliverables: ["Interior Cinema", "Twilight Skyline", "VIP Walkthrough"],
        },
        {
          id: "re-villa",
          title: "Bespoke Villa Haven Walkthrough",
          client: "Elysian Living",
          category: "Bespoke Villas",
          metric: "1.6M Views",
          metricLabel: "Architectural Reach",
          imageSrc: videos.realEstate2?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Bespoke villa private sanctuary tour",
          videoSrc: videos.realEstate2?.videoUrl,
          poster: videos.realEstate2?.thumbnailUrl,
          href: "/work/stichora",
          description: "Showcased private courtyards, landscaped gardens, and infinity pools with sweeping cinematic lighting and sound design.",
          deliverables: ["Villa Tour", "Landscape Cinema", "Editorial Framing"],
        },
        {
          id: "re-terrace",
          title: "Infinity Terrace & Panoramic Sunset View",
          client: "Aura Heights",
          category: "Architectural Living",
          metric: "+85% Site Visits",
          metricLabel: "Walk-in Conversion",
          imageSrc: videos.realEstate3?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Infinity terrace sunset architectural film",
          videoSrc: videos.realEstate3?.videoUrl,
          poster: videos.realEstate3?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured golden hour reflections across infinity pools and cantilevered terraces, maximizing emotional buyer desire.",
          deliverables: ["Sunset Drone", "Terrace Cinematography", "Social Showcase"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "How our real estate media accelerates luxury project sellouts.",
      ctaText: "COMMISSION PROPERTY FILM",
      ctaHref: "/contact",
      items: [
        { id: "faq-re-1", number: "01", question: "Do you handle licensed drone filming for large townships?", answer: "Yes! Our certified drone pilots provide fully compliant, high-resolution aerial cinematography." },
        { id: "faq-re-2", number: "02", question: "Can you shoot properties that are still under construction?", answer: "Yes! We blend live architectural footage with 3D CGI projections to showcase finished luxury before groundbreaking completes." },
      ],
    },
  },

  "resorts": {
    slug: "resorts",
    name: "Luxury Resorts & Destination Stays",
    metaTitle: "Luxury Resort & Destination Stays Cinema | The Digital Pillar",
    metaDescription:
      "Bespoke beachfront villas, infinity pool sunsets, and destination experiences that drive direct resort bookings worldwide.",
    hero: {
      tag: "SERVICE // LUXURY RESORTS",
      titleLine1: "Resorts &",
      titleLine2: "Bespoke Stays",
      subtitle:
        "We produce awe-inspiring hospitality films, beachfront sanctuary teasers, and luxury retreat experiences that captivate global travelers.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic optics representing tranquil luxury stays",
      media: [
        {
          id: "res-hero-left",
          type: "video",
          src: videos.marbella02?.videoUrl || "",
          poster: videos.marbella02?.thumbnailUrl || "/images/services/creator-content.jpg",
          alt: "Marbella Luxury Villa Sunset",
        },
        {
          id: "res-hero-middle",
          type: "video",
          src: videos.marbella01?.videoUrl || "",
          poster: videos.marbella01?.thumbnailUrl || "",
          alt: "Marbella Luxury Resort Cinema Experience",
        },
        {
          id: "res-hero-right",
          type: "video",
          src: videos.marbella03?.videoUrl || "",
          poster: videos.marbella03?.thumbnailUrl || "/images/services/branding.jpg",
          alt: "Horizon Pool & Ocean Sanctuary",
        },
      ],
    },
    marquee: {
      text: "LUXURY RESORTS & DESTINATION STAYS",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We capture the serenity, indulgence, and bespoke service of premier hospitality destinations, driving direct room bookings.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Horizon pool golden hours, private villa retreats, and immersive sensory soundscapes.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "High-yield hospitality marketing engineered to reduce OTA reliance and elevate direct bookings.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "100%",
        metricLabel: "Peak Occupancy",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description: "Our resort production methodology captures the timeless spirit of luxury hospitality.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Mapping property landscape, wellness amenities, and bespoke guest touchpoints." },
        { number: "02", title: "Define", description: "Storyboarding guest arrival journeys, culinary offerings, and private villa retreats." },
        { number: "03", title: "Design", description: "Sunrise and twilight aerial captures, Steadicam villa walkthroughs, and spatial sound." },
        { number: "04", title: "Deliver", description: "Hero website banners, Instagram travel reels, OTA video packages, and luxury ads." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED STAYS",
      headline: "Our featured work",
      subtitle:
        "Signature resort films and bespoke hospitality storytelling from breathtaking sanctuaries.",
      items: [
        {
          id: "res-marbella-1",
          title: "Marbella Beachfront Sanctuary Experience",
          client: "Marbella Grand",
          category: "Luxury Stays",
          metric: "100% Occupancy",
          metricLabel: "High-Season Booking",
          imageSrc: videos.marbella01?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Marbella luxury beachfront resort sanctuary experience",
          videoSrc: videos.marbella01?.videoUrl,
          poster: videos.marbella01?.thumbnailUrl,
          href: "/work/stichora",
          description: "Produced a captivating signature brand film that immersed prospective guests in effortless beachfront serenity, driving record direct bookings.",
          deliverables: ["Signature Brand Film", "Aerial Drone Suite", "Direct Booking Ads"],
        },
        {
          id: "res-marbella-2",
          title: "Private Villa Sunset & Horizon Pool",
          client: "Marbella Villas",
          category: "Private Villas",
          metric: "1.4M Reach",
          metricLabel: "Travel Inspiration",
          imageSrc: videos.marbella02?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Private villa sunset and infinity horizon pool",
          videoSrc: videos.marbella02?.videoUrl,
          poster: videos.marbella02?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured golden hour reflections across private plunge pools, turning wanderlust into immediate luxury reservations.",
          deliverables: ["Villa Tour", "Golden Hour Cinema", "Instagram Stories"],
        },
        {
          id: "res-marbella-3",
          title: "Bespoke Concierge & Destination Dining",
          client: "Marbella Hospitality",
          category: "Concierge & Spa",
          metric: "96% Lift",
          metricLabel: "Direct Booking Growth",
          imageSrc: videos.marbella03?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Bespoke concierge and destination dining experience",
          videoSrc: videos.marbella03?.videoUrl,
          poster: videos.marbella03?.thumbnailUrl,
          href: "/work/stichora",
          description: "Highlighted private beachfront dining and rejuvenating spa rituals, significantly increasing average length of stay.",
          deliverables: ["Wellness Cinema", "Spa Features", "Social Campaign"],
        },
        {
          id: "res-marbella-4",
          title: "Aerial Twilight Island Experience",
          client: "Marbella Retreats",
          category: "Aerial Cinema",
          metric: "+310% Inquiries",
          metricLabel: "International Interest",
          imageSrc: videos.marbella04?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Aerial twilight view of luxury resort island sanctuary",
          videoSrc: videos.marbella04?.videoUrl,
          poster: videos.marbella04?.thumbnailUrl,
          href: "/work/stichora",
          description: "Soared over illuminated twilight grounds and private ocean docks, establishing the property as the premier destination retreat.",
          deliverables: ["Twilight Drone", "Soundtrack Licensing", "International Distribution"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "How our luxury hospitality media drives high-value direct bookings.",
      ctaText: "BOOK RESORT PRODUCTION",
      ctaHref: "/contact",
      items: [
        { id: "faq-res-1", number: "01", question: "Do you travel internationally for resort productions?", answer: "Yes! Our production team travels globally with complete high-end cinema and drone kits." },
        { id: "faq-res-2", number: "02", question: "How long does on-site resort filming take?", answer: "A typical luxury resort shoot takes 2 to 4 production days to capture the complete cycle of morning, midday, and twilight light." },
      ],
    },
  },

  "products": {
    slug: "products",
    name: "Product Motion & Commercial Films",
    metaTitle: "Product Motion & Commercial Video Films | The Digital Pillar",
    metaDescription:
      "High-speed macro visuals, superbike velocity, and kinetic commercial films engineered to captivate consumer desire.",
    hero: {
      tag: "SERVICE // PRODUCT MOTION",
      titleLine1: "Product motion &",
      titleLine2: "Commercial Cinema",
      subtitle:
        "We produce hyper-kinetic product commercials, high-speed macro films, and dynamic hardware showcases that command attention.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic optics representing precision commercial motion",
      media: [
        {
          id: "prod-hero-left",
          type: "video",
          src: videos.product5BikesreelFinal?.videoUrl || "",
          poster: videos.product5BikesreelFinal?.thumbnailUrl || "/images/services/creator-content.jpg",
          alt: "Superbike Velocity Motion",
        },
        {
          id: "prod-hero-middle",
          type: "video",
          src: videos.productEnergy?.videoUrl || "",
          poster: videos.productEnergy?.thumbnailUrl || "",
          alt: "High-Energy Kinetic Beverage Commercial",
        },
        {
          id: "prod-hero-right",
          type: "video",
          src: videos.kj11?.videoUrl || "",
          poster: videos.kj11?.thumbnailUrl || "/images/services/web-design.jpg",
          alt: "Precision Tech Hardware Macro",
        },
      ],
    },
    marquee: {
      text: "KINETIC PRODUCT MOTION & COMMERCIALS",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We turn physical products into magnetic commercial spectacles that captivate consumers and multiply conversion rates.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Probe lens macro textures, studio turntable motion, and sound-synced kinetic pacing.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Direct-to-consumer commercial architecture built to dominate social feeds.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+260%",
        metricLabel: "Cart Conversion",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description: "Our commercial studio combines precision hardware rigs and high-speed cinema capture.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Product materials, mechanical features, brand voice, and conversion goals." },
        { number: "02", title: "Define", description: "Shot lists, kinetic motion choreography, lighting diagrams, and pacing animatics." },
        { number: "03", title: "Design", description: "High-speed robotic arm motion, macro probe lenses, and spatial sound design." },
        { number: "04", title: "Deliver", description: "Turnkey ad variants, website hero video loops, social cuts, and 4K masters." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED PRODUCTS",
      headline: "Our featured work",
      subtitle:
        "Hyper-kinetic commercial motion films engineered for maximum consumer impact.",
      items: [
        {
          id: "prod-energy",
          title: "High-Speed Macro Beverage Commercial",
          client: "Volt Energy Labs",
          category: "Commercial Motion",
          metric: "2.4M Views",
          metricLabel: "Reels Reach",
          imageSrc: videos.productEnergy?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "High-energy kinetic beverage commercial motion",
          videoSrc: videos.productEnergy?.videoUrl,
          poster: videos.productEnergy?.thumbnailUrl,
          href: "/work/stichora",
          description: "Engineered high-tempo condensation droplet reveals and explosive can cracking sound design that commanded feed attention.",
          deliverables: ["Kinetic Motion", "High-Speed Macro", "Sound Design"],
        },
        {
          id: "prod-bikes",
          title: "Superbike Dynamic Velocity & Motion Film",
          client: "Apex Racing Co.",
          category: "Automotive Motion",
          metric: "+520K Shares",
          metricLabel: "Viral Coefficient",
          imageSrc: videos.product5BikesreelFinal?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Superbike dynamic velocity and exhaust roar motion film",
          videoSrc: videos.product5BikesreelFinal?.videoUrl,
          poster: videos.product5BikesreelFinal?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured raw mechanical horsepower and aerodynamic curves with tracked high-speed gimbal passes, driving viral sharing.",
          deliverables: ["Trackside Cinematography", "Exhaust Audio Mastering", "Motion Tracking"],
        },
        {
          id: "prod-tech-hardware",
          title: "Kinetic Tech Hardware Macro Reveal",
          client: "Lumina Devices",
          category: "Hardware Tech",
          metric: "1.1M Impressions",
          metricLabel: "Tech Community Reach",
          imageSrc: videos.kj11?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Kinetic tech hardware macro reveal",
          videoSrc: videos.kj11?.videoUrl,
          poster: videos.kj11?.thumbnailUrl,
          href: "/work/stichora",
          description: "Highlighted precision aluminum chassis milling and illuminated micro-components with probe-lens depth.",
          deliverables: ["Probe Lens Macro", "Hardware Storytelling", "Lighting Choreography"],
        },
        {
          id: "prod-mechanical",
          title: "Precision Mechanical Watchmaking Film",
          client: "Chronos Timepieces",
          category: "Horology & Craft",
          metric: "18.6% CTR",
          metricLabel: "Ad Click Rate",
          imageSrc: videos.product02Re?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Precision mechanical watchmaking macro motion",
          videoSrc: videos.product02Re?.videoUrl,
          poster: videos.product02Re?.thumbnailUrl,
          href: "/work/stichora",
          description: "Documented gears, escapements, and sapphire crystal reflections with surgical optical clarity for a luxury watch debut.",
          deliverables: ["Horology Macro", "Chiaroscuro Studio Light", "E-Commerce Loops"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "How our commercial motion studio crafts scroll-stopping product films.",
      ctaText: "PRODUCE PRODUCT COMMERCIAL",
      ctaHref: "/contact",
      items: [
        { id: "faq-p-1", number: "01", question: "Can we ship products directly to your studio for filming?", answer: "Yes! Clients ship prototypes and products to our studio where our crew handles unboxing, staging, and cinematography." },
        { id: "faq-p-2", number: "02", question: "Do you combine 3D animation with live-action product footage?", answer: "Yes! We blend live probe-lens cinematography with photorealistic 3D CGI explosions and renders." },
      ],
    },
  },

  "lifestyle": {
    slug: "lifestyle",
    name: "Lifestyle & Wellness Storytelling",
    metaTitle: "Lifestyle & Wellness Video Storytelling | The Digital Pillar",
    metaDescription:
      "Aesthetic hair care films, wellness brand storytelling, and visual lifestyle reels that build deep emotional customer connection.",
    hero: {
      tag: "SERVICE // LIFESTYLE",
      titleLine1: "Lifestyle &",
      titleLine2: "Wellness Cinema",
      subtitle:
        "We produce intimate wellness films, aesthetic lifestyle narratives, and organic beauty stories that elevate brand trust.",
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: "Prismatic optics representing organic wellness and purity",
      media: [
        {
          id: "life-hero-left",
          type: "video",
          src: videos.other10291?.videoUrl || "",
          poster: videos.other10291?.thumbnailUrl || "/images/services/influencer-marketing.jpg",
          alt: "Modern Lifestyle Aesthetic",
        },
        {
          id: "life-hero-middle",
          type: "video",
          src: videos.other3VirtikaHairCrFinal3?.videoUrl || "",
          poster: videos.other3VirtikaHairCrFinal3?.thumbnailUrl || "",
          alt: "Virtika Luxury Hair Care Brand Film",
        },
        {
          id: "life-hero-right",
          type: "video",
          src: videos.tunics03?.videoUrl || "",
          poster: videos.tunics03?.thumbnailUrl || "/images/services/creator-content.jpg",
          alt: "Organic Fashion Lifestyle",
        },
      ],
    },
    marquee: {
      text: "LIFESTYLE & WELLNESS STORYTELLING",
      repeat: 6,
    },
    valueProposition: {
      headline:
        "We capture the authentic intimacy and mindful self-care rituals that turn everyday products into cherished lifestyle routines.",
      card1: {
        title: "designing meaningful experiences & content",
        description: "Soft natural lighting, slow-paced aesthetic framing, and sensory audio design.",
      },
      card2: {
        title: "Direction and Strategy",
        description: "Community-driven brand positioning that resonates with conscious modern consumers.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+230%",
        metricLabel: "Community Growth",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description: "Our lifestyle framework crafts enduring connection between consumers and mindful brands.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        { number: "01", title: "Discover", description: "Consumer wellness rituals, organic ingredients, and emotional benefit mapping." },
        { number: "02", title: "Define", description: "Visual aesthetics, natural daylight palettes, and relatable creator casting." },
        { number: "03", title: "Design", description: "Cinematography emphasizing texture, touch, and tranquil spatial audio." },
        { number: "04", title: "Deliver", description: "Multi-variant social reels, web store loops, influencer packs, and ad suites." },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "FEATURED WELLNESS",
      headline: "Our featured work",
      subtitle:
        "Sensory lifestyle narratives and beauty brand stories crafted for conscious consumer brands.",
      items: [
        {
          id: "life-virtika",
          title: "Virtika Luxury Hair Care Brand Universe",
          client: "Virtika Botanicals",
          category: "Wellness & Beauty",
          metric: "+850K Views",
          metricLabel: "Organic Views",
          imageSrc: videos.other3VirtikaHairCrFinal3?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: "Virtika luxury hair care brand film",
          videoSrc: videos.other3VirtikaHairCrFinal3?.videoUrl,
          poster: videos.other3VirtikaHairCrFinal3?.thumbnailUrl,
          href: "/work/stichora",
          description: "Captured mindful hair care rituals with botanical clarity and ASMR texture, establishing the brand's luxury natural positioning.",
          deliverables: ["Brand Film", "ASMR Soundscape", "Instagram Reels"],
        },
        {
          id: "life-aesthetic",
          title: "Modern Lifestyle & Wellness Aesthetic Reel",
          client: "Aura Life",
          category: "Aesthetic Lifestyle",
          metric: "420K Reach",
          metricLabel: "Community Engagement",
          imageSrc: videos.other10291?.thumbnailUrl || "/stichora.jpg",
          imageAlt: "Modern lifestyle aesthetic reel",
          videoSrc: videos.other10291?.videoUrl,
          poster: videos.other10291?.thumbnailUrl,
          href: "/work/stichora",
          description: "Celebrated slow morning routines and intentional living, attracting high-affinity organic followers.",
          deliverables: ["Reel Curation", "Morning Aesthetic", "Social Sound Design"],
        },
        {
          id: "life-tunics",
          title: "Organic Cotton Capsule Collection",
          client: "Tunics Modern",
          category: "Mindful Apparel",
          metric: "+14.2% Conv",
          metricLabel: "Store Conversion",
          imageSrc: videos.tunics03?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: "Organic cotton capsule collection lifestyle film",
          videoSrc: videos.tunics03?.videoUrl,
          poster: videos.tunics03?.thumbnailUrl,
          href: "/work/stichora",
          description: "Showcased breathable organic fabric and everyday comfort with sunlit outdoor cinematography.",
          deliverables: ["Lookbook Video", "Lifestyle Reels", "E-Commerce Stills"],
        },
        {
          id: "life-heritage-weaves",
          title: "Handloom Silk Heritage Storytelling",
          client: "Heritage Weaves",
          category: "Artisanal Living",
          metric: "1.2M Views",
          metricLabel: "Cultural Reach",
          imageSrc: videos.saareeReel0120May?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: "Handloom silk artisanal living storytelling",
          videoSrc: videos.saareeReel0120May?.videoUrl,
          poster: videos.saareeReel0120May?.thumbnailUrl,
          href: "/work/stichora",
          description: "Framed heritage craftsmanship through the lens of modern mindful luxury, sparking widespread cultural admiration.",
          deliverables: ["Heritage Documentary", "Social Cutdowns", "Artisan Profiles"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: "How our lifestyle storytelling builds loyal, high-LTV customer communities.",
      ctaText: "DISCUSS LIFESTYLE PROJECT",
      ctaHref: "/contact",
      items: [
        { id: "faq-l-1", number: "01", question: "Do you specialize in beauty and wellness brands?", answer: "Yes! We specialize in skincare, hair care, nutrition, mindful apparel, and lifestyle consumer goods." },
        { id: "faq-l-2", number: "02", question: "Can you provide UGC-style lifestyle content alongside studio cinema?", answer: "Yes! We produce hybrid campaigns combining high-end brand cinema with authentic creator routines." },
      ],
    },
  },
};

/**
 * Normalizes slug and retrieves service data.
 * Fallbacks gracefully for any arbitrary slug so that template never breaks!
 */
export function getServiceBySlug(rawSlug: string): ServiceData {
  const normalized = rawSlug.toLowerCase().trim();

  // Alias checks
  if (SERVICES_DATA[normalized]) {
    return SERVICES_DATA[normalized];
  }

  // Handle common aliases
  if (normalized === "strategy" || normalized === "personal-branding-and-strategy") {
    return SERVICES_DATA["personal-branding"];
  }
  if (normalized === "identity" || normalized === "brand-identity") {
    return SERVICES_DATA["branding"];
  }
  if (normalized === "social" || normalized === "smm") {
    return SERVICES_DATA["social-media"];
  }
  if (normalized === "web" || normalized === "web-development" || normalized === "website") {
    return SERVICES_DATA["web-design"];
  }
  if (normalized === "influencer" || normalized === "pr") {
    return SERVICES_DATA["influencer-marketing"];
  }
  if (normalized === "content" || normalized === "editorial") {
    return SERVICES_DATA["content-strategy"];
  }
  if (normalized === "creator" || normalized === "video" || normalized === "studio") {
    return SERVICES_DATA["creator-content"];
  }
  if (normalized === "ads" || normalized === "performance" || normalized === "paid-media") {
    return SERVICES_DATA["paid-ads"];
  }
  if (normalized === "restaurants") {
    return SERVICES_DATA["restaurant"];
  }
  if (
    normalized === "food-and-beverage" ||
    normalized === "f-and-b" ||
    normalized === "fb" ||
    normalized === "cafe" ||
    normalized === "cafes" ||
    normalized === "gastronomy"
  ) {
    return SERVICES_DATA["food-beverage"];
  }
  if (
    normalized === "realestate" ||
    normalized === "property" ||
    normalized === "properties" ||
    normalized === "luxury-living" ||
    normalized === "architecture"
  ) {
    return SERVICES_DATA["real-estate"];
  }
  if (
    normalized === "resort" ||
    normalized === "luxury-resorts" ||
    normalized === "luxury-stays" ||
    normalized === "stays" ||
    normalized === "villas"
  ) {
    return SERVICES_DATA["resorts"];
  }
  if (
    normalized === "product" ||
    normalized === "commercial" ||
    normalized === "commercial-motion" ||
    normalized === "commercial-films"
  ) {
    return SERVICES_DATA["products"];
  }
  if (
    normalized === "wellness" ||
    normalized === "beauty" ||
    normalized === "haircare" ||
    normalized === "skincare"
  ) {
    return SERVICES_DATA["lifestyle"];
  }
  if (
    normalized === "couture" ||
    normalized === "apparel" ||
    normalized === "runway"
  ) {
    return SERVICES_DATA["fashion"];
  }
  if (
    normalized === "ai-ugc" ||
    normalized === "ugc-creator" ||
    normalized === "performance-creative"
  ) {
    return SERVICES_DATA["ugc"];
  }
  if (
    normalized === "thought-leadership" ||
    normalized === "speaking" ||
    normalized === "executive"
  ) {
    return SERVICES_DATA["personal-branding"];
  }

  // Dynamic fallback for any other slug passed in URL
  const formattedTitle = normalized
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Intelligent category mapping for arbitrary slugs
  const matchedCategory: VideoCategory =
    normalized.includes("fashion") || normalized.includes("couture") || normalized.includes("wear") || normalized.includes("apparel")
      ? "fashion"
      : normalized.includes("food") || normalized.includes("beverage") || normalized.includes("cafe") || normalized.includes("drink")
      ? "food-beverage"
      : normalized.includes("restaurant") || normalized.includes("dining") || normalized.includes("chef")
      ? "restaurant"
      : normalized.includes("resort") || normalized.includes("hotel") || normalized.includes("stay") || normalized.includes("vacation")
      ? "resorts"
      : normalized.includes("estate") || normalized.includes("property") || normalized.includes("villa") || normalized.includes("home")
      ? "real-estate"
      : normalized.includes("product") || normalized.includes("hardware") || normalized.includes("tech")
      ? "products"
      : normalized.includes("ugc") || normalized.includes("ad") || normalized.includes("creative")
      ? "ai-ugc"
      : normalized.includes("brand") || normalized.includes("identity")
      ? "restaurant"
      : normalized.includes("talk") || normalized.includes("lead") || normalized.includes("speak")
      ? "talking-head"
      : "showreels";

  const fallbackVideos = getVideosByCategory(matchedCategory);
  const v1 = fallbackVideos[0] || videos.armaniExchange;
  const v2 = fallbackVideos[1] || videos.benneBaeFoodstudio;
  const v3 = fallbackVideos[2] || videos.productEnergy;
  const v4 = fallbackVideos[3] || videos.paradisePunawale;

  return {
    slug: normalized,
    name: formattedTitle,
    metaTitle: `${formattedTitle} | The Digital Pillar`,
    metaDescription: `Discover our specialized ${formattedTitle} services at The Digital Pillar. Engineered for ambitious brands seeking long-term category growth.`,
    hero: {
      tag: `SERVICE // ${formattedTitle.toUpperCase()}`,
      titleLine1: formattedTitle,
      titleLine2: "& Strategy",
      subtitle: `We engineer bespoke ${formattedTitle} solutions that elevate industry leaders, founders, and ambitious brands into category authorities.`,
      bannerImage: "/images/service-template/hero-discs.jpg",
      bannerAlt: `Visual concept representing ${formattedTitle}`,
      media: [
        {
          id: "dyn-hero-left",
          type: "video",
          src: v2?.videoUrl || "",
          poster: v2?.thumbnailUrl || "https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg",
          alt: `${formattedTitle} Visual Showcase`,
        },
        {
          id: "dyn-hero-middle",
          type: "video",
          src: v1?.videoUrl || "",
          poster: v1?.thumbnailUrl || "",
          alt: `${formattedTitle} Motion Cinema`,
        },
        {
          id: "dyn-hero-right",
          type: "video",
          src: v3?.videoUrl || "",
          poster: v3?.thumbnailUrl || "https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg",
          alt: `${formattedTitle} Detail Showcase`,
        },
      ],
    },
    marquee: {
      text: formattedTitle.toUpperCase(),
      repeat: 6,
    },
    valueProposition: {
      headline: `We partner with ambitious brands to build visibility, increase demand, and accelerate long-term growth through ${formattedTitle}.`,
      card1: {
        title: "designing meaningful experiences & content",
        description: `Bespoke ${formattedTitle} architecture engineered for enduring impact.`,
      },
      card2: {
        title: "Direction and Strategy",
        description: "Defensible points of view and disciplined execution tailored to your market.",
        imageSrc: "/images/service-template/card-glass.jpg",
        imageAlt: "Organic sculpted glass artwork",
      },
      card3: {
        metric: "+75%",
        metricLabel: "Impact Velocity",
        title: "Growth Delivered",
        avatars: [
          "/avatars/avatar-1.jpg",
          "/avatars/avatar-2.jpg",
          "/avatars/avatar-3.jpg",
          "/avatars/avatar-4.jpg",
        ],
      },
    },
    framework: {
      tag: "OUR PROCESS",
      headline: "A framework that drives excellence",
      description:
        "Our systematic four-phase methodology engineers category authority from initial insight to omnipresent market execution.",
      imageSrc: "/images/service-template/framework-discs.jpg",
      imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: `Uncovering insights and getting deep into your business, market, & customers for ${formattedTitle}.`,
        },
        {
          number: "02",
          title: "Define",
          description:
            "Crafting a unique strategy that resonates with your audience and sets you apart.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Bringing your vision to life through thoughtful visual design and touchpoints.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Executing the strategy across all touchpoints with precision and impact.",
        },
      ],
    },
    featuredWork: {
      layout: "phone-scroll",
      tag: "PORTFOLIO HIGHLIGHTS",
      headline: "Our featured work",
      subtitle:
        "Explore how we've helped our clients transform their digital presence.",
      items: [
        {
          id: "dyn-work-1",
          title: v1?.title || `${formattedTitle} Flagship Production`,
          category: v1?.category ? v1.category.toUpperCase() : "Flagship Production",
          imageSrc: v1?.thumbnailUrl || "/stichora-stone.jpg",
          imageAlt: v1?.title || `${formattedTitle} production showcase`,
          videoSrc: v1?.videoUrl,
          poster: v1?.thumbnailUrl,
          href: "/work/stichora",
          description: `Bespoke ${formattedTitle} visual asset engineered for market differentiation and attention capture.`,
          deliverables: ["Creative Direction", "Cinema Production", "Multi-Platform Cuts"],
        },
        {
          id: "dyn-work-2",
          title: v2?.title || `${formattedTitle} Visual Language`,
          category: v2?.category ? v2.category.toUpperCase() : "Design System",
          imageSrc: v2?.thumbnailUrl || "/stichora.jpg",
          imageAlt: v2?.title || `${formattedTitle} design showcase`,
          videoSrc: v2?.videoUrl,
          poster: v2?.thumbnailUrl,
          href: "/work/stichora",
          description: `Compelling narrative and visual storytelling tailored to elevate brand stature in the ${formattedTitle} space.`,
          deliverables: ["Visual Identity", "Sound Design", "Motion Kits"],
        },
        {
          id: "dyn-work-3",
          title: v3?.title || `${formattedTitle} Strategic Narrative`,
          category: v3?.category ? v3.category.toUpperCase() : "Creative Direction",
          imageSrc: v3?.thumbnailUrl || "/stichora-dark.jpg",
          imageAlt: v3?.title || `${formattedTitle} creative showcase`,
          videoSrc: v3?.videoUrl,
          poster: v3?.thumbnailUrl,
          href: "/work/stichora",
          description: "High-retention social and digital cuts structured to drive measurable audience engagement.",
          deliverables: ["Audience Retention", "Short-Form Edits", "Digital Strategy"],
        },
        {
          id: "dyn-work-4",
          title: v4?.title || `${formattedTitle} Digital Touchpoints`,
          category: v4?.category ? v4.category.toUpperCase() : "Digital Platform",
          imageSrc: v4?.thumbnailUrl || "/stichora-app.jpg",
          imageAlt: v4?.title || `${formattedTitle} interactive showcase`,
          videoSrc: v4?.videoUrl,
          poster: v4?.thumbnailUrl,
          href: "/work/stichora",
          description: "Full-funnel digital assets engineered for cohesive brand deployment across all customer touchpoints.",
          deliverables: ["Omnichannel Delivery", "Ad Assets", "Conversion Systems"],
        },
      ],
    },
    faq: {
      tag: "FAQ",
      headlineLine1: "Questions,",
      headlineLine2: "Answered.",
      description: `Need more clarity? Find answers to frequently asked questions about our ${formattedTitle} solutions.`,
      ctaText: "HAVE A QUESTION? CONTACT US",
      ctaHref: "/contact",
      items: [
        {
          id: "faq-dyn-1",
          number: "01",
          question: `What is included in our ${formattedTitle} service?`,
          answer: `Our ${formattedTitle} service is fully comprehensive, covering initial strategic discovery, bespoke creative execution, cross-platform rollout, and ongoing performance optimization.`,
        },
        {
          id: "faq-dyn-2",
          number: "02",
          question: "Who is this service designed for?",
          answer:
            "We partner with ambitious founders, established industry leaders, high-growth startups, and premium lifestyle brands seeking to dominate their market niche.",
        },
        {
          id: "faq-dyn-3",
          number: "03",
          question: "How long does a typical engagement take?",
          answer:
            "Foundational sprints take between 4 to 8 weeks, with option for ongoing monthly retainer partnerships to compound your market authority.",
        },
        {
          id: "faq-dyn-4",
          number: "04",
          question: "Do you offer custom scopes based on our specific goals?",
          answer:
            "Yes. Every partnership begins with an in-depth alignment call to tailor our deliverables, milestones, and timeline strictly to your business objectives.",
        },
        {
          id: "faq-dyn-5",
          number: "05",
          question: "How do we get started?",
          answer:
            "Reach out via our inquiry form or schedule a discovery call with our partners. We review your goals and provide a comprehensive proposal within 48 hours.",
        },
      ],
    },
  };
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES_DATA);
}
