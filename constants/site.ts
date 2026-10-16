import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "The Digital Pillar",
  description: "Pune's leading agency for digital marketing, branding, performance marketing, SEO, and web development.",
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
        { label: "Branding & Design", href: "#services" },
        { label: "Influencer Marketing", href: "#services" },
        { label: "Strategy & Growth", href: "#services" },
        { label: "Web Development", href: "#services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
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
    { platform: "Instagram", href: "https://www.instagram.com/thedigitalpillar/" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/company/thedigitalpillar/" },
    { platform: "Facebook", href: "https://www.facebook.com/thedigitalpillar" },
  ],
};
