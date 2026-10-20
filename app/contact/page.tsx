import type { Metadata } from "next";
import {
  ContactHero,
  ContactFormSection,
  ContactCards,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | The Digital Pillar - Growth Agency",
  description:
    "Let's start something. We collaborate with teams who value clarity, craft, and long-term thinking. Reach out to explore how we can help you accelerate growth online.",
  openGraph: {
    title: "Contact Us | The Digital Pillar - Growth Agency",
    description:
      "Let's build something great. Reach out to The Digital Pillar team for consultations, brand growth, and digital strategy.",
    images: [
      {
        url: "/images/contact/hero-eyes.jpg",
        width: 1200,
        height: 630,
        alt: "The Digital Pillar Contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505] text-white">
      <ContactHero />
      <ContactFormSection />
      <ContactCards />
    </main>
  );
}
