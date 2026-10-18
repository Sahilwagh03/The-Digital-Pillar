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
      <ServiceHero hero={data.hero} />
      <ServiceMarquee marquee={data.marquee} />
      <ServiceFeaturedWork featuredWork={data.featuredWork} />
      <ServiceValueProposition valueProposition={data.valueProposition} />
      <ServiceFramework framework={data.framework} />
      <ServiceFaq faq={data.faq} />
    </main>
  );
}
