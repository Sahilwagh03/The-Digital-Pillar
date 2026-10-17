"use client";

import React, { useEffect, useLayoutEffect } from "react";
import { useLenis } from "lenis/react";
import { ServiceData } from "@/constants/services";
import { ServiceHero } from "./service-hero";
import { ServiceMarquee } from "./service-marquee";
import { ServiceValueProposition } from "./service-value-proposition";
import { ServiceFramework } from "./service-framework";
import { ServiceFeaturedWork } from "./service-featured-work";
import { ServiceFaq } from "./service-faq";

interface ServicePageViewProps {
  data: ServiceData;
}

export function ServicePageView({ data }: ServicePageViewProps) {
  const lenis = useLenis();

  // Guarantee that whenever a service page mounts or slug changes, scroll starts at top (0, 0)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis, data.slug]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    scrollToTop();

    const rafId = requestAnimationFrame(scrollToTop);
    const timerId = setTimeout(scrollToTop, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [lenis, data.slug]);

  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      {/* 1. Hero Section */}
      <ServiceHero hero={data.hero} />

      {/* 2. Marquee Ticker */}
      <ServiceMarquee marquee={data.marquee} />

      {/* 3. Value Proposition / Partner Highlights */}
      <ServiceValueProposition valueProposition={data.valueProposition} />

      {/* 4. Process / Framework */}
      <ServiceFramework framework={data.framework} />

      {/* 5. Featured Work Bento Grid */}
      <ServiceFeaturedWork featuredWork={data.featuredWork} />

      {/* 6. FAQ Section (Light theme) */}
      <ServiceFaq faq={data.faq} />
    </main>
  );
}
