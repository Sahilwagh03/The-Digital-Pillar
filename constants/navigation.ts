import { Menu } from "lucide-react";
import { NavActionItem, NavTheme } from "@/types";

export const NAV_ACTIONS: readonly NavActionItem[] = [
  {
    id: "contact",
    label: "Let's Talk",
    href: "/contact",
    variant: "primary",
    hideOnMobile: true,
  },
  {
    id: "menu",
    label: "Menu",
    variant: "outline",
    icon: Menu,
    iconPosition: "before",
  },
] as const;

export const NAV_THEME_BUTTON_STYLES: Record<
  "primary" | "outline",
  Record<NavTheme, string>
> = {
  primary: {
    dark: "bg-[#fdbb11] text-black font-bold shadow-[0_0_20px_rgba(253,187,17,0.35)]",
    light: "bg-black text-[#fdbb11] font-bold hover:bg-neutral-900 shadow-md",
  },
  outline: {
    dark: "border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white/10 hover:border-[#fdbb11]/60 hover:text-[#fdbb11]",
    light: "border-black/20 bg-black/80 backdrop-blur-md text-white hover:bg-black hover:border-black/40",
  },
} as const;

export interface MenuItem {
  index: string;
  label: string;
  href: string;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  {
    index: "01",
    label: "ABOUT",
    href: "/about",
  },
  {
    index: "02",
    label: "CONTACT",
    href: "/contact",
  },
  {
    index: "03",
    label: "SERVICES",
    href: "/services/personal-branding",
  },
] as const;
