import React from "react";
import type { LucideIcon } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "navbar";

export type ButtonSize = "sm" | "md" | "lg" | "icon" | "none";

export type NavTheme = "light" | "dark";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavItem[];
}

export interface NavActionItem {
  id: string;
  label: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  hideOnMobile?: boolean;
  icon?: LucideIcon;
  iconPosition?: "before" | "after";
  onClick?: () => void;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  navItems: NavItem[];
  footerNavItems: {
    title: string;
    items: NavItem[];
  }[];
  socials: {
    platform: string;
    href: string;
    icon?: string;
  }[];
}

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}
