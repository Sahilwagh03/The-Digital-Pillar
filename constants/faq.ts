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
  description: "Everything you should know before we start growing your brand",
  ctaText: "STILL HAVE QUESTIONS?",
  ctaHref: "/contact",
  items: [
    {
      id: "faq-1",
      number: "01",
      question: "What services does we offer?",
      answer:
        "We offer a full suit of digital marketing including SEO, Performance Marketing, Branding, Website Design and Growth Strategy.",
    },
    {
      id: "faq-2",
      number: "02",
      question: "How do you decide which strategy is right for our brand?",
      answer:
        "We conduct an in-depth audit of your market positioning, customer journey, and historical data to tailor a data-backed roadmap specifically engineered for scalable, sustainable growth.",
    },
    {
      id: "faq-3",
      number: "03",
      question: "How long does it take to see results?",
      answer:
        "While performance marketing campaigns often yield initial traction within 2 to 4 weeks, comprehensive organic strategies like SEO and full brand repositioning typically compound meaningfully over 3 to 6 months.",
    },
    {
      id: "faq-4",
      number: "04",
      question: "Do you work with startups and established brands",
      answer:
        "Yes, we partner with both high-velocity venture-backed startups looking to find product-market scale and established enterprises seeking to revitalize their digital footprint.",
    },
    {
      id: "faq-5",
      number: "05",
      question: "How do we get started?",
      answer:
        "Reach out via our contact form or book an introductory discovery call. We'll explore your current challenges, objectives, and map out the next strategic steps together.",
    },
  ],
};
