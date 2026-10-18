"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory("manual");
}

export function useAboutTeamAnimation(membersCount: number) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerCard = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinned = pinnedRef.current;
      const track = trackRef.current;

      if (!section || !pinned || !track || membersCount <= 1) return;

      const mm = gsap.matchMedia();

      // =======================================================================
      // DESKTOP & LAPTOP ANIMATION (min-width: 1024px)
      // =======================================================================
      mm.add("(min-width: 1024px)", () => {
        const calculateTravel = () => {
          const lastCard = cardRefs.current[membersCount - 1];
          if (!lastCard) {
            return track ? Math.max(0, track.scrollWidth - window.innerWidth) : 1000;
          }

          // Exact right edge of the last card relative to the track's coordinate system
          const lastCardRight = lastCard.offsetLeft + lastCard.offsetWidth;

          // Comfortable right edge offset when animation finishes (e.g., 48px to 64px from viewport right edge)
          const rightMargin = Math.min(window.innerWidth * 0.04, 56);
          const targetViewportRight = window.innerWidth - rightMargin;

          // The horizontal travel stops precisely when the last image reaches the right side
          const travel = lastCardRight - targetViewportRight;

          return Math.max(0, travel);
        };

        const getScrollDistance = () => {
          const travel = calculateTravel();
          // Proportional scroll duration gives natural 1:1 tactile pace with smooth scroll
          return Math.max(window.innerHeight * 1.5, Math.round(travel * 1.05));
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            id: "about-team-st",
            trigger: section,
            pin: pinned,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            scrub: 1, // Lenis synchronized scrub
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Horizontal glide of the entire track: ends when reaching the last image with zero black space
        tl.to(track, {
          x: () => -calculateTravel(),
          ease: "none",
        });
      });

      // =======================================================================
      // MOBILE & TABLET (< 1024px): Clean props reset
      // =======================================================================
      mm.add("(max-width: 1023px)", () => {
        if (track) gsap.set(track, { clearProps: "all" });
        cardRefs.current.forEach((card) => {
          if (card) gsap.set(card, { clearProps: "all" });
        });
      });
    },
    { scope: sectionRef, dependencies: [membersCount] }
  );

  const scrollToIndex = (index: number) => {
    const section = sectionRef.current;
    const card = cardRefs.current[index];
    if (!section || !card || membersCount <= 1) return;

    const st =
      ScrollTrigger.getById("about-team-st") ||
      ScrollTrigger.getAll().find((s) => s.trigger === section);

    if (st) {
      const lastCard = cardRefs.current[membersCount - 1];
      if (!lastCard) return;

      const lastCardRight = lastCard.offsetLeft + lastCard.offsetWidth;
      const rightMargin = Math.min(window.innerWidth * 0.04, 56);
      const targetViewportRight = window.innerWidth - rightMargin;
      const maxTravel = Math.max(0, lastCardRight - targetViewportRight);

      if (maxTravel <= 0) return;

      let progress = 0;
      if (index === 0) {
        progress = 0;
      } else if (index === membersCount - 1) {
        progress = 1;
      } else {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const targetCenter = window.innerWidth / 2;
        const neededTravel = cardCenter - targetCenter;
        progress = Math.min(1, Math.max(0, neededTravel / maxTravel));
      }

      const targetY = st.start + progress * (st.end - st.start);
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return {
    sectionRef,
    pinnedRef,
    trackRef,
    registerCard,
    scrollToIndex,
  };
}

export default useAboutTeamAnimation;
