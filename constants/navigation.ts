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
    dark: "bg-white text-neutral-950 hover:bg-neutral-100",
    light: "bg-neutral-950 text-white hover:bg-neutral-800 shadow-sm",
  },
  outline: {
    dark: "border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-none",
    light: "border-neutral-900/25 bg-transparent text-neutral-950 hover:bg-neutral-900/10 hover:border-neutral-900/40 backdrop-blur-none",
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
    href: "#about",
  },
  {
    index: "02",
    label: "CONTACT",
    href: "#contact",
  },
  {
    index: "03",
    label: "SERVICES",
    href: "#selected-services",
  },
] as const;

