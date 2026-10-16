export interface WhyChooseUsContent {
  tag: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  stats: {
    revenue: {
      value: string;
      number: number;
      suffix: string;
      label: string;
      years: string[];
    };
    speed: {
      value: string;
      number: number;
      suffix: string;
      label: string;
    };
    projects: {
      value: string;
      number: number;
      suffix: string;
      label: string;
    };
    ratingCard: {
      rating: string;
      ratingNumber: number;
      ratingSuffix: string;
      value: string;
      number: number;
      suffix: string;
      label: string;
    };
  };
}

export const WHY_CHOOSE_US_CONTENT: WhyChooseUsContent = {
  tag: "WHY CHOOSE US",
  headlineLine1: "We don't chase trends.",
  headlineLine2: "We build momentum.",
  description:
    "Great marketing is more than visibility—it's about creating lasting business impact. We combine strategy, creativity, and performance to help brands attract the right audience, increase conversions, and scale with confidence.",
  stats: {
    revenue: {
      value: "98%",
      number: 98,
      suffix: "%",
      label: "Client retention rate across all services",
      years: ["2016", "2018", "2022", "2024", "2026"],
    },
    speed: {
      value: "12x",
      number: 12,
      suffix: "x",
      label: "Average revenue growth for our clients",
    },
    projects: {
      value: "250+",
      number: 250,
      suffix: "+",
      label: "Projects shipped worldwide, helping our clients achieve their goals",
    },
    ratingCard: {
      rating: "4.8/5",
      ratingNumber: 4.8,
      ratingSuffix: "/5",
      value: "250+",
      number: 250,
      suffix: "+",
      label: "Projects delivered with impact",
    },
  },
};
