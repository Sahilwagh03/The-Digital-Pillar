import type { Metadata } from "next";
import { ServiceHero } from "@/components/service-template/service-hero";
import { ServiceMarquee } from "@/components/service-template/service-marquee";
import { ServicesList } from "@/components/services/services-list";
import { ServiceFramework } from "@/components/service-template/service-framework";
import { ServiceValueProposition } from "@/components/service-template/service-value-proposition";
import { ServiceFaq } from "@/components/service-template/service-faq";
import {
  DEFAULT_SERVICE_HERO_MEDIA,
  ServiceHeroData,
  ServiceFrameworkData,
  ServiceValuePropositionData,
  ServiceFaqData,
} from "@/constants/services";

export const metadata: Metadata = {
  title: "Our Services & Capabilities | The Digital Pillar",
  description:
    "Explore our full suite of services: Performance Marketing, Content Creation, Social Media Marketing, UGC Videos / AI UGC, Web Design, Content Strategy, Creator Management, Meta & Google Ads, and AI Automations.",
  openGraph: {
    title: "Our Services & Capabilities | The Digital Pillar",
    description:
      "Explore our 9 core marketing and growth pillars engineered to scale ambitious brands.",
    images: [
      {
        url: "/images/service-template/hero-discs.jpg",
        width: 1200,
        height: 630,
        alt: "The Digital Pillar Services and Capabilities",
      },
    ],
  },
};

const SERVICES_HERO_DATA: ServiceHeroData = {
  tag: "SERVICES // CAPABILITIES",
  titleLine1: "Our Services",
  titleLine2: "& Capabilities",
  subtitle:
    "We architect compounding market advantage for ambitious brands through creative storytelling, algorithmic acquisition, and autonomous AI systems.",
  bannerImage: "/images/service-template/hero-discs.jpg",
  bannerAlt: "The Digital Pillar Services and Capabilities",
  media: DEFAULT_SERVICE_HERO_MEDIA,
};

const SERVICES_FRAMEWORK_DATA: ServiceFrameworkData = {
  tag: "OUR METHODOLOGY",
  headline: "A framework that drives excellence",
  description:
    "Our systematic four-phase methodology engineers category authority from initial insight to omnipresent market execution. Together with our clients, we build enduring competitive advantage and achieve compounding online growth.",
  imageSrc: "/images/service-template/framework-discs.jpg",
  imageAlt: "Four tiered floating discs representing Discover, Define, Design, and Deliver",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "Uncovering insights and getting deep into your business, market, unit economics & customers.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Crafting a unique brand strategy and conversion architecture that sets you apart from category competitors.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Bringing your vision to life through cinema-grade creative production, modern UI/UX, and high-CTR ad assets.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Executing the omni-channel acquisition and social strategy across all touchpoints with precision and scale.",
    },
  ],
};

const SERVICES_VALUE_PROP_DATA: ServiceValuePropositionData = {
  headline:
    "We partner with ambitious brands to build visibility, increase demand, and accelerate long-term growth.",
  card1: {
    title: "designing meaningful experiences & content",
    description:
      "Crafting high-retention narratives that position your executive voice and brand with undeniable distinction.",
  },
  card2: {
    title: "Direction and Strategy",
    description:
      "Architecting defensible points of view and algorithmic acquisition systems tailored to your market.",
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
};

const SERVICES_FAQ_DATA: ServiceFaqData = {
  tag: "FAQ",
  headlineLine1: "Questions,",
  headlineLine2: "Answered.",
  description:
    "Need more clarity? Find answers to frequently asked questions about our services and partnership structure.",
  ctaText: "HAVE A QUESTION? CONTACT US",
  ctaHref: "/contact",
  items: [
    {
      id: "faq-s-1",
      number: "01",
      question: "Which services can be engaged as standalone sprints versus full-service retainers?",
      answer:
        "Every service can be engaged either as an intensive standalone sprint (such as a Web Design build, Content Creation shoot, or AI Automation deployment) or integrated into a comprehensive monthly growth partnership.",
    },
    {
      id: "faq-s-2",
      number: "02",
      question: "Who is best suited to work with The Digital Pillar?",
      answer:
        "We partner with ambitious founders, established hospitality groups, premium lifestyle and fashion brands, luxury real estate developers, and high-growth ventures seeking to command category authority.",
    },
    {
      id: "faq-s-3",
      number: "03",
      question: "How do your performance marketing and creative production integrate?",
      answer:
        "Creative is the primary lever of modern ad performance. Our in-house production studio shoots directly for our media buyers, producing dozens of tested hook variants, UGC reels, and high-retention cuts that lower customer acquisition costs.",
    },
    {
      id: "faq-s-4",
      number: "04",
      question: "What is your onboarding timeline and how soon do we launch?",
      answer:
        "Following our strategic alignment and discovery call, initial creative assets, campaign structures, or digital blueprints are typically delivered for review within 7 to 10 business days.",
    },
    {
      id: "faq-s-5",
      number: "05",
      question: "How do we get started?",
      answer:
        "Reach out via our inquiry form or schedule a discovery call with our partners. We review your goals and provide a tailored growth proposal within 48 hours.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      {/* 1. Hero matching other pages with the 3 cinematic showcase video cards */}
      <ServiceHero hero={SERVICES_HERO_DATA} />

      {/* 2. Signature animated marquee */}
      <ServiceMarquee marquee={{ text: "OUR SERVICES & CAPABILITIES", repeat: 6 }} />

      {/* 3. The 9 Core Services Focus List (Interactive, Editorial) */}
      <ServicesList />

      {/* 4. Signature Architectural 4-Step Framework */}
      <ServiceFramework
        id="methodology"
        framework={SERVICES_FRAMEWORK_DATA}
        ctaText="EXPLORE OUR PROCESS"
        ctaHref="/contact"
      />

      {/* 5. Signature 3-Card Value Proposition */}
      <ServiceValueProposition valueProposition={SERVICES_VALUE_PROP_DATA} />

      {/* 6. Frequently Asked Questions */}
      <ServiceFaq faq={SERVICES_FAQ_DATA} />
    </main>
  );
}
