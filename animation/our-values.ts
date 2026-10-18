"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory("manual");
}

export function useOurValuesAnimation(itemsCount: number) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const digitReelRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerCard = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  const registerText = (index: number) => (el: HTMLDivElement | null) => {
    textRefs.current[index] = el;
  };

  const registerNumber = (index: number) => (el: HTMLDivElement | null) => {
    numberRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinned = pinnedRef.current;
      const track = trackRef.current;

      if (!section || !pinned || !track || itemsCount <= 1) return;

      const mm = gsap.matchMedia();

      // =======================================================================
      // DESKTOP & TABLET ANIMATION (min-width: 1024px)
      // =======================================================================
      mm.add("(min-width: 1024px)", () => {
        // Compute exact card metrics and diagonal deltas based on reference image
        const getCardMetrics = () => {
          const card = cardRefs.current[0];
          let cardWidth = card && card.offsetWidth > 50 ? card.offsetWidth : 0;
          let cardHeight = card && card.offsetHeight > 50 ? card.offsetHeight : 0;

          if (!cardWidth || !cardHeight) {
            if (window.innerWidth >= 1280) {
              cardWidth = 360;
              cardHeight = 392;
            } else if (window.innerWidth >= 1024) {
              cardWidth = 340;
              cardHeight = 370;
            } else {
              cardWidth = 294;
              cardHeight = 320;
            }
          }

          // Exact ratio from reference screenshot: 40px gap on 294px width, 33px gap on 320px height
          const gapX = Math.round(cardWidth * (40 / 294));
          const gapY = Math.round(cardHeight * (33 / 320));

          return {
            deltaX: cardWidth + gapX,
            deltaY: cardHeight + gapY,
          };
        };

        let { deltaX, deltaY } = getCardMetrics();

        // Initial setup for cards along the diagonal track: all cards fully opaque
        cardRefs.current.forEach((card, idx) => {
          if (!card) return;
          gsap.set(card, {
            x: idx * deltaX,
            y: idx * deltaY,
            opacity: 1,
            scale: 1,
          });
        });

        // Initial setup for text blocks
        textRefs.current.forEach((text, idx) => {
          if (!text) return;
          gsap.set(text, {
            opacity: idx === 0 ? 1 : 0,
            y: idx === 0 ? 0 : 24,
            pointerEvents: idx === 0 ? "auto" : "none",
          });
        });

        // Initial setup for rolling digit reel
        if (digitReelRef.current) {
          gsap.set(digitReelRef.current, { yPercent: 0 });
        }

        // Initial setup for track
        gsap.set(track, { x: 0, y: 0 });

        const transitionsCount = itemsCount - 1;
        const dwellTime = 0.25;
        const moveTime = 0.85;

        // Total duration across all steps: dwells + moves
        const totalDuration = itemsCount * dwellTime + transitionsCount * moveTime;

        // Total scroll distance: 1 viewport height per transition gives natural pacing
        const totalScrollDistance = transitionsCount * window.innerHeight * 1.1;

        const tl = gsap.timeline({
          scrollTrigger: {
            id: "our-values-st",
            trigger: section,
            pin: pinned,
            start: "top top",
            end: () => `+=${totalScrollDistance}`,
            scrub: 0.8, // Smooth 0.8s catch-up creates silky continuous motion with Lenis
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              const updated = getCardMetrics();
              deltaX = updated.deltaX;
              deltaY = updated.deltaY;
              cardRefs.current.forEach((card, idx) => {
                if (!card) return;
                gsap.set(card, {
                  x: idx * deltaX,
                  y: idx * deltaY,
                });
              });
            },
          },
        });

        // Initial brief dwell so Card 0 rests centered when arriving at the section
        tl.to({}, { duration: dwellTime });

        for (let i = 0; i < transitionsCount; i++) {
          const fromIdx = i;
          const toIdx = i + 1;

          // 1. Move diagonal track to center the next card with organic sine easing
          tl.to(track, {
            x: -toIdx * deltaX,
            y: -toIdx * deltaY,
            ease: "sine.inOut",
            duration: moveTime,
          });

          // 2. Rolling digit transition: second digit rolls up while 0 remains static
          if (digitReelRef.current) {
            tl.to(
              digitReelRef.current,
              {
                yPercent: -(toIdx / itemsCount) * 100,
                duration: moveTime * 0.5,
                ease: "power2.inOut",
              },
              `<+=${moveTime * 0.25}`
            );
          }

          // 3. Right Column text transition: smoothly crossfades at midpoint
          const currentText = textRefs.current[fromIdx];
          const nextText = textRefs.current[toIdx];

          if (currentText) {
            tl.to(
              currentText,
              {
                opacity: 0,
                y: -18,
                duration: moveTime * 0.4,
                ease: "sine.in",
                onComplete: () => {
                  if (currentText) currentText.style.pointerEvents = "none";
                },
              },
              "<"
            );
          }

          if (nextText) {
            tl.to(
              nextText,
              {
                opacity: 1,
                y: 0,
                duration: moveTime * 0.45,
                ease: "sine.out",
                onStart: () => {
                  if (nextText) nextText.style.pointerEvents = "auto";
                },
              },
              `<+=${moveTime * 0.38}`
            );
          }

          // 4. Subtle dwell at the newly centered card
          tl.to({}, { duration: dwellTime });
        }
      });

      // =======================================================================
      // MOBILE & TABLET (max-width: 1023px)
      // =======================================================================
      mm.add("(max-width: 1023px)", () => {
        if (track) gsap.set(track, { clearProps: "all" });
        if (digitReelRef.current) gsap.set(digitReelRef.current, { clearProps: "all" });
        cardRefs.current.forEach((card) => {
          if (card) gsap.set(card, { clearProps: "all" });
        });
        textRefs.current.forEach((text) => {
          if (text) gsap.set(text, { clearProps: "all" });
        });
        numberRefs.current.forEach((num) => {
          if (num) gsap.set(num, { clearProps: "all" });
        });
      });
    },
    { scope: sectionRef, dependencies: [itemsCount] }
  );

  const scrollToIndex = (index: number) => {
    const section = sectionRef.current;
    if (!section || itemsCount <= 1) return;

    const st =
      ScrollTrigger.getById("our-values-st") ||
      ScrollTrigger.getAll().find((s) => s.trigger === section);

    if (st) {
      // Calculate target progress for card dwell center
      const dwellTime = 0.25;
      const moveTime = 0.85;
      const transitionsCount = itemsCount - 1;
      const totalDuration = itemsCount * dwellTime + transitionsCount * moveTime;
      let progress = 0;
      if (index === 0) {
        progress = 0;
      } else if (index === itemsCount - 1) {
        progress = 1;
      } else {
        const t = index * (dwellTime + moveTime) + dwellTime / 2;
        progress = t / totalDuration;
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
    digitReelRef,
    registerCard,
    registerText,
    registerNumber,
    scrollToIndex,
  };
}

