export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface FaqContent {
  tag: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  items: FaqItem[];
}

export const FAQ_CONTENT: FaqContent = {
  tag: "FAQ",
  headlineLine1: "Questions,",
  headlineLine2: "Answered.",
  description: "Find answers to common questions about our services and processes.",
  ctaText: "STILL HAVE QUESTIONS?",
  ctaHref: "/contact",
  items: [
    {
      id: "faq-1",
      number: "01",
      question: "What services does your agency offer?",
      answer:
        "The Digital Pillar offers complete branding, marketing, and digital growth solutions including brand consulting, social media marketing, performance marketing, SEO, SEM, public relations, graphic design, video editing, website design & development, and strategy-driven digital campaigns tailored to help businesses scale.",
    },
    {
      id: "faq-2",
      number: "02",
      question: "How long does a typical project take to complete?",
      answer:
        "The timeline depends on the scope of work. Branding and website development projects typically take a few weeks, while marketing campaigns and performance strategies run continuously with ongoing optimization and measurable improvements.",
    },
    {
      id: "faq-3",
      number: "03",
      question: "What is your marketing or project process like?",
      answer:
        "We begin by understanding your brand, business goals, and target audience. From there we create a strategic plan, design creative assets, develop digital platforms if required, launch campaigns, and continuously analyze performance to optimize results and maximize ROI.",
    },
    {
      id: "faq-4",
      number: "04",
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes. We provide ongoing marketing support, campaign management, content creation, website maintenance, performance tracking, and strategic consulting to ensure your brand continues to grow in the digital space.",
    },
    {
      id: "faq-5",
      number: "05",
      question: "How do you handle project pricing?",
      answer:
        "Pricing depends on the scope of services, campaign scale, and project complexity. After understanding your requirements, we provide a customized proposal with clear deliverables aligned with your business goals.",
    },
  ],
};
