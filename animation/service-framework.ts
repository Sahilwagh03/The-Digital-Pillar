"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory("manual");
}

export function useServiceFrameworkAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const junction1FillRef = useRef<HTMLDivElement | null>(null);
  const junction2FillRef = useRef<HTMLDivElement | null>(null);
  const junction3FillRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardBadgeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mobileLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerCard = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  const registerBadge = (index: number) => (el: HTMLSpanElement | null) => {
    cardBadgeRefs.current[index] = el;
  };

  const registerMobileLine = (index: number) => (el: HTMLDivElement | null) => {
    mobileLineRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mm = gsap.matchMedia();

      // =======================================================================
      // DESKTOP & TABLET ANIMATION (>= 640px)
      // =======================================================================
      mm.add("(min-width: 640px)", () => {
        const j1 = junction1FillRef.current;
        const j2 = junction2FillRef.current;
        const j3 = junction3FillRef.current;

        // Ensure clean starting states
        if (j1) gsap.set(j1, { yPercent: -100 });
        if (j2) gsap.set(j2, { yPercent: -100 });
        if (j3) gsap.set(j3, { yPercent: -100 });

        // Initial card badge styling: Card 0 is active, Cards 1-3 start muted
        cardBadgeRefs.current.forEach((badge, idx) => {
          if (!badge) return;
          if (idx === 0) {
            gsap.set(badge, { color: "#ffffff" }); // Active white
          } else {
            gsap.set(badge, { color: "#737373" }); // Muted neutral
          }
        });

        // Cards start with subtle dimness for inactive ones
        cardRefs.current.forEach((card, idx) => {
          if (!card) return;
          if (idx !== 0) {
            gsap.set(card, { opacity: 0.8 });
          }
        });

        // Master scrubbed timeline tied to the container scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // ---------------------------------------------------------------------
        // PHASE 1: Step 01 -> Step 02 via Junction 1
        // ---------------------------------------------------------------------
        if (j1) {
          tl.to(j1, {
            yPercent: 0,
            ease: "none",
            duration: 1.2,
          });
        }

        // Activate Card 02 as Junction 1 completes
        const card2 = cardRefs.current[1];
        const badge2 = cardBadgeRefs.current[1];
        if (card2 && badge2) {
          tl.to(
            card2,
            {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            ">-0.2"
          );
          tl.to(
            badge2,
            {
              color: "#ffffff",
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
        }

        // Slight dwell / settle between phases
        tl.to({}, { duration: 0.2 });

        // ---------------------------------------------------------------------
        // PHASE 2: Step 02 -> Step 03 via Junction 2
        // ---------------------------------------------------------------------
        if (j2) {
          tl.to(j2, {
            yPercent: 0,
            ease: "none",
            duration: 1.2,
          });
        }

        // Activate Card 03 as Junction 2 completes
        const card3 = cardRefs.current[2];
        const badge3 = cardBadgeRefs.current[2];
        if (card3 && badge3) {
          tl.to(
            card3,
            {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            ">-0.2"
          );
          tl.to(
            badge3,
            {
              color: "#ffffff",
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
        }

        // Slight dwell / settle between phases
        tl.to({}, { duration: 0.2 });

        // ---------------------------------------------------------------------
        // PHASE 3: Step 03 -> Step 04 via Junction 3
        // ---------------------------------------------------------------------
        if (j3) {
          tl.to(j3, {
            yPercent: 0,
            ease: "none",
            duration: 1.2,
          });
        }

        // Activate Card 04 as Junction 3 completes
        const card4 = cardRefs.current[3];
        const badge4 = cardBadgeRefs.current[3];
        if (card4 && badge4) {
          tl.to(
            card4,
            {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            ">-0.2"
          );
          tl.to(
            badge4,
            {
              color: "#ffffff",
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
        }
      });

      // =======================================================================
      // MOBILE ANIMATION (< 640px): Progressive line fill between cards
      // =======================================================================
      mm.add("(max-width: 639px)", () => {
        mobileLineRefs.current.forEach((line) => {
          if (!line) return;
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "top center",
              ease: "none",
              scrollTrigger: {
                trigger: line,
                start: "top 80%",
                end: "bottom 60%",
                scrub: 0.8,
              },
            }
          );
        });
      });
    },
    { scope: containerRef }
  );

  return {
    containerRef,
    junction1FillRef,
    junction2FillRef,
    junction3FillRef,
    registerCard,
    registerBadge,
    registerMobileLine,
  };
}
