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
    type: "image",
    src: "https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg",
    alt: "Services Hero Editorial Portrait",
  },
  {
    id: "hero-media-middle",
    type: "video",
    src: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
    poster: "https://i.pinimg.com/736x/2e/16/f6/2e16f648bce37594a027137d4aaa2ea2.jpg",
    alt: "Services Hero Motion Reel",
  },
  {
    id: "hero-media-right",
    type: "image",
    src: "https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg",
    alt: "Services Hero Brand Sculpture",
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
      media: DEFAULT_SERVICE_HERO_MEDIA,
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
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait of Elena Vance",
          videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: "/stichora-dark.jpg",
          href: "/work/stichora",
          description: "Engineered a commanding personal narrative that positioned the founder as the premier voice in luxury heritage fashion.",
          deliverables: ["Keynote Narrative", "LinkedIn Engine", "Op-Ed Columns"],
        },
        {
          id: "exec-venture",
          title: "Venture Partner Thought Leadership & Deal Flow",
          client: "Marcus Thorne • General Partner",
          category: "Venture Capital",
          metric: "$45M Deal Flow",
          metricLabel: "Pipeline Impact",
          imageSrc: "https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg",
          imageAlt: "Portrait of venture capital founder",
          href: "/work/stichora",
          description: "Built a magnetic editorial engine delivering proprietary investment theses to over 100K high-net-worth investors.",
          deliverables: ["Substack Architecture", "Keynote Positioning", "Deal Flow Strategy"],
        },
        {
          id: "exec-tech",
          title: "Category Kingmaker: AI Founder Spotlight",
          client: "Dr. Sarah Chen • AI Research Lead",
          category: "DeepTech & AI",
          metric: "Forbes 30U30",
          metricLabel: "Global Recognition",
          imageSrc: "https://i.pinimg.com/736x/2e/16/f6/2e16f648bce37594a027137d4aaa2ea2.jpg",
          imageAlt: "Portrait of tech visionary",
          videoSrc: "https://videos.pexels.com/video-files/4434246/4434246-sd_360_640_30fps.mp4",
          poster: "https://i.pinimg.com/736x/2e/16/f6/2e16f648bce37594a027137d4aaa2ea2.jpg",
          href: "/work/stichora",
          description: "Crafted an untouchable technical narrative establishing category leadership ahead of a successful $30M Series B.",
          deliverables: ["PR Placement", "Podcast Tour", "Institutional Media"],
        },
        {
          id: "exec-lifestyle",
          title: "Monetizing High-End Influence & Brand Ecosystem",
          client: "Julian Moreau • Creative Director",
          category: "Creative Leadership",
          metric: "+320% Revenue",
          metricLabel: "Direct Commercial Lift",
          imageSrc: "https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg",
          imageAlt: "Portrait of creative director",
          href: "/work/stichora",
          description: "Transitioned an industry creative into an omnichannel media property with direct-to-consumer advisory partnerships.",
          deliverables: ["Brand Identity", "Creator Monetization", "Digital Platform"],
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
          id: "stichora-stone",
          title: "Stichora Stone Heritage Mark",
          category: "Heritage Brand Craft",
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "Modern Monogram Architecture",
          category: "Identity Systems",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Atmospheric Brand World",
          category: "Creative Direction",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Multi-Platform Digital Touchpoints",
          category: "UI Design & Assets",
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
      headline: "Our featured work",
      subtitle:
        "Viral moments and community growth campaigns produced for modern brands.",
      items: [
        {
          id: "stichora-stone",
          title: "Luxury Brand Social Storytelling",
          category: "Content Production / Social",
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "Viral Micro-Content System",
          category: "Reels & Short Form",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Community Spotlight Stories",
          category: "Social Campaign",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Interactive Stories & Product Demos",
          category: "Visual Social UI",
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
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
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
          videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: "/images/service-template/reels/reel-1.jpg",
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
          videoSrc: "https://videos.pexels.com/video-files/4434246/4434246-sd_360_640_30fps.mp4",
          poster: "/images/service-template/reels/reel-2.jpg",
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
          imageSrc: "/images/service-template/reels/reel-3.jpg",
          imageAlt: "Verve Apparel lifestyle reel",
          videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: "/images/service-template/reels/reel-3.jpg",
          href: "/work/stichora",
          description: "Seamlessly integrated product into organic 'get ready with me' (GRWM) pacing, transforming authentic creator routines into high-performing commercial assets.",
          deliverables: ["Micro-Influencer Casting", "Audio Trend Matching", "Native Reels Typography", "Conversion Retargeting"],
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
      headline: "Our featured work",
      subtitle:
        "Flagship influencer collaborations that defined categories and drove cultural conversation.",
      items: [
        {
          id: "stichora-stone",
          title: "Luxury Sartorial Ambassador Seeding",
          category: "Influencer PR / Seeding",
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "VIP Capsule Launch Campaign",
          category: "Creator Partnership",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Editorial Ambassador Spotlight",
          category: "Co-Branded Content",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Influencer Exclusive Access Program",
          category: "VIP Experience",
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
      layout: "bento",
      tag: "EDITORIAL ARCHITECTURE",
      headline: "Our featured work",
      subtitle:
        "Narratives and editorial frameworks built for high-growth modern organizations.",
      items: [
        {
          id: "stichora-stone",
          title: "Heritage Craft Editorial Manifesto",
          category: "Brand Publication",
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "Multi-Channel Narrative Blueprint",
          category: "Strategy Document",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Founder Keynote & Essay Suite",
          category: "Executive Thought Leadership",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Client Communications Playbook",
          category: "Content System",
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
          videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: "/images/service-template/reels/reel-4.jpg",
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
          videoSrc: "https://videos.pexels.com/video-files/4434246/4434246-sd_360_640_30fps.mp4",
          poster: "/images/service-template/reels/reel-5.jpg",
          href: "/work/stichora",
          description: "Utilized chiaroscuro film lighting and anamorphic lens emulation to capture a luxury aesthetic that commands visceral respect.",
          deliverables: ["Cinema Camera Package", "Custom Soundscape", "Hook Engineering", "Multi-Format Cuts"],
        },
        {
          id: "creator-3d",
          title: "3D Product Animation Teaser",
          client: "Lumina Labs",
          category: "CGI & Motion",
          metric: "+410% Shares",
          metricLabel: "Viral Coefficient",
          imageSrc: "/images/service-template/reels/reel-6.jpg",
          imageAlt: "3D app interface tiles for bespoke client portal",
          videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
          poster: "/images/service-template/reels/reel-6.jpg",
          href: "/work/stichora",
          description: "Photorealistic 3D product rendering integrated into live-action footage, creating an impossible visual spectacle that catalyzed organic sharing.",
          deliverables: ["Octane/Blender 3D", "Live-Action Composite", "Viral Audio Track", "Social Optimization"],
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
      headline: "Our featured work",
      subtitle:
        "Case studies in scaling customer acquisition while lowering cost per lead.",
      items: [
        {
          id: "stichora-stone",
          title: "High-Ticket Client Acquisition Funnel",
          category: "Performance Ads / Meta",
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "Direct Response Retargeting Creative",
          category: "Conversion Creative",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Google Search & Performance Max Campaign",
          category: "Search & Intent",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Landing Page CRO & Frictionless Checkout",
          category: "Conversion Rate Optimization",
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

  // Dynamic fallback for any other slug passed in URL
  const formattedTitle = normalized
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

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
      media: DEFAULT_SERVICE_HERO_MEDIA,
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
      layout: "bento",
      tag: "PORTFOLIO HIGHLIGHTS",
      headline: "Our featured work",
      subtitle:
        "Explore how we've helped our clients transform their digital presence.",
      items: [
        {
          id: "stichora-stone",
          title: "Stichora Heritage & Architectural Presence",
          category: "Flagship Production",
          imageSrc: "/stichora-stone.jpg",
          imageAlt: "Engraved stone brandmark for Stichora",
          href: "/work/stichora",
          span: "full",
        },
        {
          id: "stichora-mark",
          title: "Bespoke Monogram & Visual Language",
          category: "Design System",
          imageSrc: "/stichora.jpg",
          imageAlt: "Stichora orange logo identity on dark background",
          href: "/work/stichora",
          span: "half",
        },
        {
          id: "stichora-dark",
          title: "Atmospheric Brand World & Narrative",
          category: "Creative Direction",
          imageSrc: "/stichora-dark.jpg",
          imageAlt: "Atmospheric silhouette portrait with warm glow",
          href: "/work/stichora",
          span: "portrait",
        },
        {
          id: "stichora-app",
          title: "Interactive Client Experience",
          category: "Digital Platform",
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
