import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "The Digital Pillar",
  description: "Crafting digital experiences with precision, high performance, and modern design.",
  url: "https://thedigitalpillar.com",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  footerNavItems: [
    {
      title: "Solutions",
      items: [
        { label: "Digital Strategy", href: "#" },
        { label: "Web Development", href: "#" },
        { label: "Product Design", href: "#" },
        { label: "Cloud & DevOps", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  socials: [
    { platform: "Twitter/X", href: "https://twitter.com" },
    { platform: "LinkedIn", href: "https://linkedin.com" },
    { platform: "GitHub", href: "https://github.com" },
  ],
};
