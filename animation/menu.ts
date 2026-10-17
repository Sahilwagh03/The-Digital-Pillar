"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Register CustomEase in client environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
  try {
    CustomEase.create("studioMenuEase", "0.33, 0, 0.13, 1");
  } catch {
    // CustomEase already registered
  }
}

export const MENU_EASE = "studioMenuEase";

export const MENU_TIMINGS = {
  open: {
    panelDuration: 0.65,
    overlayDuration: 0.8,
    listDuration: 0.75,
    dividersDuration: 0.9,
    indexesDuration: 0.65,
    linksDuration: 0.85,
    footerDuration: 0.7,
    stagger: 0.08,
  },
  close: {
    panelDuration: 0.65,
    overlayDuration: 0.45,
  },
} as const;

export interface UseMenuAnimationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function useMenuAnimation({ isOpen, onClose }: UseMenuAnimationProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const dividersRef = useRef<(HTMLDivElement | null)[]>([]);
  const indexesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const linksRef = useRef<(HTMLSpanElement | null)[]>([]);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isFirstRender = useRef(true);

  // Helper ref callbacks
  const setDividerRef = useCallback((index: number) => {
    return (el: HTMLDivElement | null) => {
      dividersRef.current[index] = el;
    };
  }, []);

  const setIndexRef = useCallback((index: number) => {
    return (el: HTMLSpanElement | null) => {
      indexesRef.current[index] = el;
    };
  }, []);

  const setLinkRef = useCallback((index: number) => {
    return (el: HTMLSpanElement | null) => {
      linksRef.current[index] = el;
    };
  }, []);

  // Open Animation: Menu panel comes up from below
  const openMenu = useCallback(() => {
    if (!wrapRef.current || !panelRef.current) return;

    tlRef.current?.kill();
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    tlRef.current = tl;

    const { open } = MENU_TIMINGS;

    tl.set(wrapRef.current, { display: "block" })
      .set(panelRef.current, { yPercent: 101 })
      .fromTo(
        overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: open.overlayDuration, ease: MENU_EASE }
      )
      // Main panel slides up from below into view (101% -> 0%)
      .fromTo(
        panelRef.current,
        { yPercent: 101 },
        { yPercent: 0, duration: open.panelDuration, ease: MENU_EASE },
        "<"
      )
      // Subtle upward movement of the items container
      .fromTo(
        listRef.current,
        { yPercent: 40 },
        { yPercent: 0, duration: open.listDuration, ease: MENU_EASE },
        "<"
      )
      // Divider lines reveal from left to right
      .fromTo(
        dividersRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          stagger: open.stagger,
          duration: open.dividersDuration,
          ease: MENU_EASE,
        },
        "<0.08"
      )
      // Index numbers slide and fade up
      .fromTo(
        indexesRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: open.indexesDuration,
          stagger: open.stagger,
          ease: MENU_EASE,
        },
        "<0.08"
      )
      // Large typography emerges upwards through overflow mask
      .fromTo(
        linksRef.current,
        { yPercent: 140, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: open.linksDuration,
          stagger: open.stagger,
          ease: MENU_EASE,
        },
        "<0.1"
      )
      // Footer reveals at bottom
      .fromTo(
        footerRef.current,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: open.footerDuration, ease: MENU_EASE },
        "<0.15"
      );
  }, []);

  // Close Animation: Menu panel sweeps UP off the top of the screen
  const closeMenu = useCallback(() => {
    if (!wrapRef.current || !panelRef.current) return;

    tlRef.current?.kill();

    const { close } = MENU_TIMINGS;

    const tl = gsap.timeline({
      onComplete: () => {
        if (wrapRef.current) {
          gsap.set(wrapRef.current, { display: "none" });
        }
        if (panelRef.current) {
          // Reset position to below viewport so next open always comes from below
          gsap.set(panelRef.current, { yPercent: 101 });
        }
        document.body.style.overflow = "";
      },
    });
    tlRef.current = tl;

    tl.to(overlayRef.current, {
      autoAlpha: 0,
      duration: close.overlayDuration,
      ease: MENU_EASE,
    }).to(
      panelRef.current,
      { yPercent: -105, duration: close.panelDuration, ease: MENU_EASE },
      "<"
    );
  }, []);

  // Trigger open/close animations based on state changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      tlRef.current?.kill();
    };
  }, []);

  // Escape key handler to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Smooth scroll handler for anchor links
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        onClose();

        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 350);
      } else {
        onClose();
      }
    },
    [onClose]
  );

  return {
    wrapRef,
    panelRef,
    overlayRef,
    listRef,
    footerRef,
    setDividerRef,
    setIndexRef,
    setLinkRef,
    handleLinkClick,
  };
}

export default useMenuAnimation;
