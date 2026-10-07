export interface WhyChooseUsContent {
  tag: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  stats: {
    revenue: {
      value: string;
      label: string;
      years: string[];
    };
    speed: {
      value: string;
      label: string;
    };
    projects: {
      value: string;
      label: string;
    };
    ratingCard: {
      rating: string;
      value: string;
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
      value: "50M+",
      label: "Revenue generated for our clients",
      years: ["2016", "2018", "2022", "2024", "2026"],
    },
    speed: {
      value: "3x",
      label: "Faster than other agencies",
    },
    projects: {
      value: "200+",
      label: "Projects shipped worldwide, helping our clients achieve their goals",
    },
    ratingCard: {
      rating: "4.8/5",
      value: "100+",
      label: "Projects delivered with impact",
    },
  },
};
