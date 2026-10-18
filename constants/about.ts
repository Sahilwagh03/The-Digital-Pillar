import type { ServiceFrameworkData } from "@/constants/services";

export interface AboutContent {
  tag: string;
  headline: string;
  leftStatements: string[];
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export const ABOUT_CONTENT: AboutContent = {
  tag: "ABOUT",
  headline:
    "The digital pillar is a growth-driven digital agency helping ambitious brands stand out through strategy, creativity, and performance.",
  leftStatements: [
    "BUILT FOR IMPACT.",
    "GUIDED BY STRATEGY.",
    "DESIGNED TO GROW.",
  ],
  description:
    "By combining research, creativity, and data-driven marketing, we help brands become more discoverable, memorable, and profitable.",
  cta: {
    label: "MORE ABOUT US",
    href: "/about",
  },
};

// ============================================================================
// ABOUT PAGE SPECIFIC CONSTANTS (MATCHING UI DESIGNS)
// ============================================================================

export interface AboutHeroData {
  tag: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  scrollLabel: string;
  backgroundImage: string;
}

export const ABOUT_HERO_CONTENT: AboutHeroData = {
  tag: "ABOUT US",
  headlineLine1: "We build brands that",
  headlineLine2: "people can't ignore.",
  description:
    "From branding and design to digital marketing and technology, we bring strategy, creativity, and execution together to help ambitious businesses move forward.",
  scrollLabel: "Scroll to explore",
  backgroundImage: "/images/about/hero-team.jpg",
};

export interface ValueCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutExpectationsData {
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  cards: ValueCard[];
}

export const ABOUT_EXPECTATIONS_CONTENT: AboutExpectationsData = {
  headlineLine1: "What do you think of us?",
  headlineLine2: "you can expect",
  description:
    "A growth agency with a mission. Everything revolves around us collaboration, result and naturally a healthy dose fun. Together with our customers we achieve milestones and we achieve real online growth.",
  cta: {
    label: "EXPLORE OUR SERVICES",
    href: "/services",
  },
  cards: [
    {
      id: "collaborate",
      number: "01",
      title: "To collaborate",
      subtitle: "Partnership & Transparency",
      description:
        "We operate as an agile extension of your team, fostering open dialogue and deep alignment at every stage of growth.",
    },
    {
      id: "pleasure",
      number: "02",
      title: "Pleasure",
      subtitle: "Energy & Enthusiasm",
      description:
        "Great work thrives in great spirits. We bring genuine curiosity, creative spark, and a healthy dose of fun to every sprint.",
    },
    {
      id: "result",
      number: "03",
      title: "Result",
      subtitle: "Performance & Impact",
      description:
        "Every campaign and digital experience is engineered to produce measurable commercial impact and sustainable market leadership.",
    },
  ],
};

export const ABOUT_FRAMEWORK_DATA: ServiceFrameworkData = {
  tag: "",
  headline: "What do you think of us?\nyou can expect",
  description:
    "A growth agency with a mission. Everything revolves around us collaboration, result and naturally a healthy dose fun. Together with our customers we achieve milestones and we achieve real online growth.",
  imageSrc: "",
  imageAlt: "What you can expect from The Digital Pillar",
  steps: [
    {
      number: "01",
      title: "To collaborate",
      description: "",
    },
    {
      number: "02",
      title: "Pleasure",
      description: "",
    },
    {
      number: "03",
      title: "Result",
      description: "",
    },
  ],
};

export interface ValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ValuesSectionData {
  tag: string;
  heading: string;
  items: ValueItem[];
}

export const ABOUT_VALUES_DATA: ValuesSectionData = {
  tag: "Values",
  heading: "Our Values",
  items: [
    {
      id: "excellence",
      number: "01",
      title: "Excellence",
      description:
        "We strive for excellence in everything we do. Whether it's providing top-quality products and services or delivering exceptional customer experiences, we always aim to exceed expectations.",
      imageSrc: "/images/about/value-01-excellence.png",
      imageAlt: "Excellence",
    },
    {
      id: "creativity",
      number: "02",
      title: "Creativity",
      description:
        "We believe that creativity is the key to innovation and success. That's why we encourage our team to think outside the box, experiment with new ideas, and explore new possibilities.",
      imageSrc: "/images/about/value-02-creativity.png",
      imageAlt: "Creativity",
    },
    {
      id: "partnership",
      number: "03",
      title: "Partnership",
      description:
        "Collaboration is at the heart of what we do. We value partnerships and seek to build strong, lasting relationships with our clients, vendors, and other agencies.",
      imageSrc: "/images/about/value-03-partnership.png",
      imageAlt: "Partnership",
    },
    {
      id: "integrity",
      number: "04",
      title: "Integrity",
      description:
        "We hold ourselves to the highest ethical standards and are committed to doing the right thing, even when no one is watching. Trust and transparency are fundamental to the way we operate.",
      imageSrc: "/images/about/value-04-integrity.png",
      imageAlt: "Integrity",
    },
    {
      id: "teamwork",
      number: "05",
      title: "Teamwork",
      description:
        "We believe that great things are achieved through teamwork. We foster a culture of collaboration, communication, and mutual support, where every team member has a voice and is valued.",
      imageSrc: "/images/about/value-05-teamwork.png",
      imageAlt: "Teamwork",
    },
    {
      id: "tech-driven",
      number: "06",
      title: "Tech-Driven",
      description:
        "We are passionate about technology and how it can transform businesses and industries. We leverage the latest tools and platforms to drive innovation, efficiency, and growth.",
      imageSrc: "/images/about/value-06-tech-driven.png",
      imageAlt: "Tech-Driven",
    },
  ],
};

export interface AboutPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export const ABOUT_PILLARS_CONTENT: {
  tag: string;
  title: string;
  description: string;
  pillars: AboutPillar[];
} = {
  tag: "OUR FOUNDATION",
  title: "The Pillars That Drive Our Work",
  description:
    "We blend timeless brand architecture with high-velocity digital execution. Here is how we build equity that lasts.",
  pillars: [
    {
      number: "01",
      title: "Strategic Clarity",
      tagline: "Insight before execution",
      description:
        "We uncover your unfair advantage, analyze real audience behavior, and position your brand to dominate instead of competing.",
    },
    {
      number: "02",
      title: "High-Velocity Creative",
      tagline: "Visuals that demand attention",
      description:
        "In a world of infinite scrolls, mediocrity is invisible. We produce bold identities and scroll-stopping media that convert.",
    },
    {
      number: "03",
      title: "Full-Funnel Engineering",
      tagline: "End-to-end performance",
      description:
        "From high-converting web architectures to paid acquisition pipelines, we eliminate friction across the entire user journey.",
    },
    {
      number: "04",
      title: "Relentless Iteration",
      tagline: "Obsessed with data & growth",
      description:
        "We do not launch and leave. We continuously test, refine, and optimize based on concrete KPIs to scale your enterprise value.",
    },
  ],
};

export const ABOUT_STATS_CONTENT = {
  tag: "PROVEN IMPACT",
  title: "Numbers That Speak For Themselves",
  stats: [
    {
      value: 250,
      suffix: "+",
      label: "Digital Projects Delivered",
      detail: "Across tech, D2C, real estate & luxury brands",
    },
    {
      value: 12,
      suffix: "x",
      label: "Average Reach Multiplier",
      detail: "Through high-retention content & paid amplification",
    },
    {
      value: 48,
      prefix: "$",
      suffix: "M+",
      label: "Client Revenue Generated",
      detail: "Measurable direct attribution and pipeline growth",
    },
    {
      value: 98,
      suffix: "%",
      label: "Long-Term Retention Rate",
      detail: "Partners who scale with us quarter over quarter",
    },
  ],
};

export const ABOUT_CTA_CONTENT = {
  tag: "GET IN TOUCH",
  title: "Ready to build something people can't ignore?",
  description:
    "Whether you're starting from scratch or ready to scale to the next tier, let's explore how we can accelerate your trajectory.",
  primaryCta: {
    label: "Let's Talk",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Selected Work",
    href: "/#selected-work",
  },
};

