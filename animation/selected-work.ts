'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSelectedWorkAnimation() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedContainerRef = useRef<HTMLDivElement | null>(null);
  const selectedWorkLayerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const servicesTrackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const subsequentCardsRef = useRef<(HTMLElement | null)[]>([]);
  const cardCallbacksRef = useRef<((element: HTMLElement | null) => void)[]>([]);

  const registerSubsequentCard = (index: number) => {
    if (!cardCallbacksRef.current[index]) {
      cardCallbacksRef.current[index] = (element: HTMLElement | null) => {
        subsequentCardsRef.current[index] = element;
      };
    }
    return cardCallbacksRef.current[index];
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: Full pinned horizontal showcase & services reveal
      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current;
        const pinnedContainer = pinnedContainerRef.current;
        const selectedWorkLayer = selectedWorkLayerRef.current;
        const servicesTrack = servicesTrackRef.current;
        const servicesContainer = servicesContainerRef.current;
        if (!track || !pinnedContainer || !selectedWorkLayer) return;

        const getScrollAmount = () => track.scrollWidth - window.innerWidth;
        const getSlideDistance = () => window.innerWidth;
        const getServicesScrollDistance = () => {
          if (!servicesTrack || !servicesContainer) return 0;
          return Math.max(0, servicesTrack.scrollHeight - servicesContainer.clientHeight);
        };

        if (firstCardRef.current) {
          gsap.fromTo(
            firstCardRef.current,
            { y: 100 },
            {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: pinnedContainer,
                start: 'top 65%',
                end: 'top top',
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        const scrollAmount = Math.max(1, getScrollAmount());
        const slideDistance = Math.max(1, getSlideDistance());
        const servicesDistance = Math.max(1, getServicesScrollDistance());

        // Pinned sequence: horizontal project showcase -> lateral section reveal -> vertical services scrub
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedContainer,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${getScrollAmount() + getSlideDistance() + getServicesScrollDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        const horizontalTween = masterTl.to(track, {
          x: () => -getScrollAmount(),
          ease: 'none',
          duration: scrollAmount,
        });

        masterTl.to(selectedWorkLayer, {
          xPercent: -100,
          ease: 'none',
          duration: slideDistance,
        });

        if (servicesTrack) {
          masterTl.to(servicesTrack, {
            y: () => -getServicesScrollDistance(),
            ease: 'none',
            duration: servicesDistance,
          });
        }

        subsequentCardsRef.current.forEach((element) => {
          if (!element) return;

          gsap.fromTo(
            element,
            { y: '100%' },
            {
              y: '0%',
              ease: 'none',
              scrollTrigger: {
                trigger: element,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'left 60%',
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      });

      // Mobile & Tablet: Clean scroll with fade & subtle slide-up animation
      mm.add('(max-width: 1023px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.mobile-work-card');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      });
    },
    { scope: sectionRef }
  );

  return {
    sectionRef,
    pinnedContainerRef,
    selectedWorkLayerRef,
    trackRef,
    servicesContainerRef,
    servicesTrackRef,
    firstCardRef,
    registerSubsequentCard,
  };
}
