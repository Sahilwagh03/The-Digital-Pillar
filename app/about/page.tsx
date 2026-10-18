import type { Metadata } from "next";
import { AboutHero, AboutStats, OurValues } from "@/components/about";
import { ServiceFramework } from "@/components/service-template/service-framework";
import { ABOUT_FRAMEWORK_DATA } from "@/constants/about";

export const metadata: Metadata = {
  title: "About Us | The Digital Pillar - Growth Agency",
  description:
    "We build brands that people can't ignore. From branding and design to digital marketing and technology, we bring strategy, creativity, and execution together.",
  openGraph: {
    title: "About Us | The Digital Pillar - Growth Agency",
    description:
      "We build brands that people can't ignore. Learn how we engineer scalable online growth through collaboration, pleasure, and measurable results.",
    images: [
      {
        url: "/images/about/hero-team.jpg",
        width: 1200,
        height: 630,
        alt: "The Digital Pillar Team",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AboutHero />
      <ServiceFramework
        id="what-you-can-expect"
        framework={ABOUT_FRAMEWORK_DATA}
        ctaText="EXPLORE OUR SERVICES"
        ctaHref="/services"
      />
      <OurValues />
      <AboutStats />
    </main>
  );
}
