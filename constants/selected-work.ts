export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  ctaLabel?: string;
}

export interface SelectedWorkContent {
  headlineLine1: string;
  headlineLine2: string;
  viewAllCta: {
    label: string;
    href: string;
  };
  featuredProject: FeaturedProject;
  projects: FeaturedProject[];
  endCta: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    ctaLabel?: string;
    href: string;
  };
}

export const SELECTED_WORK_CONTENT: SelectedWorkContent = {
  headlineLine1: "Work that speaks",
  headlineLine2: "through results.",
  viewAllCta: {
    label: "EXPLORE ALL SERVICES",
    href: "/services",
  },
  featuredProject: {
    id: "manish-pinjani-personal-branding",
    title: "Manish Pinjani — Personal Branding",
    description:
      "0 to 100K followers in 6 months for Times Restaurateur of the Year 2026. Built an organic personal brand and content engine that established industry authority across Pune.",
    imageSrc:
      "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/work_show_case_1",
    href: "https://www.instagram.com/p/Dft1ZC_xX6D/",
    ctaLabel: "VIEW CASE STUDY",
  },
  projects: [
    {
      id: "manish-pinjani-personal-branding",
      title: "Manish Pinjani — Personal Branding",
      description:
        "0 to 100K followers in 6 months for Times Restaurateur of the Year 2026. Built an organic personal brand and content engine that established industry authority across Pune.",
      imageSrc:
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/work_show_case_1",
      href: "https://www.instagram.com/p/Dft1ZC_xX6D/",
      ctaLabel: "VIEW CASE STUDY",
    },
    {
      id: "rmh-foods-growth",
      title: "RMH Foods — Hospitality Scale",
      description:
        "Scaled 5+ dining destinations including Chulbul Kebabs, Chulbul Dhaba, and Lehza Veg Divine to 3X revenue with viral culinary storytelling and high-impact local performance marketing.",
      imageSrc:
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/work_show_case_2",
      href: "https://www.instagram.com/p/Dft1XRVRMht/",
      ctaLabel: "VIEW CASE STUDY",
    },
    {
      id: "pune-real-estate-performance",
      title: "Pune Real Estate — Performance Acquisition",
      description:
        "Generated 100 qualified leads and closed 35 high-ticket property deals in just 3 months across 4 premium projects covering 75K+ sq.ft in Pune.",
      imageSrc:
        "https://ik.imagekit.io/bnpgvsevn/the-digital-pillar/thumbnails/work_show_case_3",
      href: "https://www.instagram.com/p/Dft1VfjxqpQ/",
      ctaLabel: "VIEW CASE STUDY",
    },
    {
      id: "paradise-real-estate",
      title: "Paradise Punawale",
      description:
        "Architectural visual systems and high-tempo walkthroughs designed to engage high-net-worth property buyers and drive qualified inquiries.",
      imageSrc: "/images/selected-work/paradise-real-estate.jpg",
      href: "/services/real-estate",
      ctaLabel: "VIEW CASE STUDY",
    },
  ],
  endCta: {
    headlineLine1: "Discover our complete collection of",
    headlineLine2: "digital experiences, brands,",
    headlineLine3: "and platforms.",
    ctaLabel: "EXPLORE ALL SERVICES",
    href: "/services",
  },
};

