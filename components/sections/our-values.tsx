"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ABOUT_VALUES_DATA, ValueItem } from "@/constants/about";
import { useOurValuesAnimation } from "@/animation/our-values";
import { cn } from "@/lib/utils";

export interface OurValuesProps {
  id?: string;
  tag?: string;
  heading?: string;
  items?: ValueItem[];
  className?: string;
}

export function OurValues({
  id = "values",
  tag,
  heading,
  items = ABOUT_VALUES_DATA.items,
  className,
}: OurValuesProps) {
  const activeTag = tag !== undefined ? tag : ABOUT_VALUES_DATA.tag;
  const activeHeading = heading || ABOUT_VALUES_DATA.heading;
  const total = items.length;

  const {
    sectionRef,
    pinnedRef,
    trackRef,
    digitReelRef,
    registerCard,
    registerText,
    registerNumber,
    scrollToIndex,
  } = useOurValuesAnimation(total);

  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const handleMobilePrev = () => {
    setMobileActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleMobileNext = () => {
    setMobileActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      data-nav-theme="dark"
      className={cn(
        "relative w-full bg-black text-white select-none",
        className
      )}
    >
      {/* ==================================================================== */}
      {/* DESKTOP PINNED STAGE (min-width: 1024px)                              */}
      {/* ==================================================================== */}
      <div
        ref={pinnedRef}
        className="hidden lg:block w-full h-screen relative overflow-hidden bg-black"
      >
        {/* TOP-LEFT: Tag & Heading (Pinned in place, aligned with top of center card) */}
        <div className="absolute top-[calc(50vh-160px)] lg:top-[calc(50vh-180px)] xl:top-[calc(50vh-196px)] left-8 sm:left-12 lg:left-16 xl:left-24 z-20 pointer-events-none">
          {activeTag ? (
            <span className="block text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-400 uppercase font-primary mb-3 sm:mb-4">
              {activeTag}
            </span>
          ) : null}
          <h2 className="text-3xl sm:text-4xl xl:text-[2.75rem] font-bold text-white tracking-tight leading-[1.05] font-primary whitespace-nowrap">
            {activeHeading}
          </h2>
        </div>

        {/* BOTTOM-LEFT: Giant Dynamic Number (0 remains static, digit rolls up) */}
        <div className="absolute bottom-10 xl:bottom-14 left-8 sm:left-12 lg:left-16 xl:left-24 z-20 pointer-events-none select-none">
          <div className="flex items-center text-white font-bold font-primary leading-none tracking-tighter tabular-nums text-8xl sm:text-9xl xl:text-[10.5rem] 2xl:text-[12rem]">
            {/* The static 0 that remains as it is */}
            <span className="inline-flex items-center justify-center leading-none">
              0
            </span>

            {/* The rolling slot: ample width and height to prevent glyph clipping */}
            <div className="relative h-[1.25em] w-[0.8em] overflow-hidden inline-block align-middle">
              <div
                ref={digitReelRef}
                className="flex flex-col will-change-transform"
              >
                {items.map((item) => {
                  const digit =
                    item.number.length > 1 ? item.number.slice(1) : item.number;
                  return (
                    <span
                      key={item.id}
                      className="h-[1.25em] flex items-center justify-center leading-none select-none"
                    >
                      {digit}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* TOP-RIGHT: Dynamic Value Title & Description (Right-aligned, aligned with top of center card) */}
        <div className="absolute top-[calc(50vh-160px)] lg:top-[calc(50vh-180px)] xl:top-[calc(50vh-196px)] right-8 sm:right-12 lg:right-16 xl:right-24 z-20 w-[280px] sm:w-[320px] lg:w-[360px] xl:w-[380px] flex flex-col items-end">
          <div className="relative w-full min-h-[220px]">
            {items.map((item, idx) => (
              <div
                key={item.id}
                ref={registerText(idx)}
                className="absolute top-0 right-0 w-full flex flex-col items-end text-right"
              >
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white tracking-tight font-primary mb-3 xl:mb-4">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[0.875rem] xl:text-[0.9375rem] text-neutral-400 font-normal leading-relaxed font-primary max-w-[340px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER STAGE: Perfectly centered anchor container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div
            ref={trackRef}
            className="relative w-[294px] h-[320px] lg:w-[330px] lg:h-[359px] xl:w-[360px] xl:h-[392px] pointer-events-auto"
            style={{ willChange: "transform" }}
          >
            {items.map((item, idx) => (
              <div
                key={item.id}
                ref={registerCard(idx)}
                onClick={() => scrollToIndex(idx)}
                className="absolute inset-0 rounded-none overflow-hidden bg-neutral-900 select-none cursor-pointer"
                style={{ willChange: "transform, opacity" }}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt || item.title}
                  fill
                  priority={idx <= 1}
                  sizes="(max-width: 1024px) 300px, (max-width: 1440px) 360px, 400px"
                  className="object-cover pointer-events-none select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MOBILE & TABLET FALLBACK (< 1024px)                                  */}
      {/* ==================================================================== */}
      <div className="block lg:hidden w-full py-16 sm:py-24 bg-black">
        <Container size="lg">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              {activeTag ? (
                <span className="inline-block text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase font-primary mb-2">
                  {activeTag}
                </span>
              ) : null}
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-primary">
                {activeHeading}
              </h2>
            </div>

            {/* Mobile Carousel View */}
            <div className="relative w-full flex flex-col items-center">
              {/* Card Image */}
              <div className="relative w-full max-w-[360px] aspect-[294/320] rounded-none overflow-hidden bg-neutral-900">
                <Image
                  src={items[mobileActiveIndex].imageSrc}
                  alt={items[mobileActiveIndex].imageAlt || items[mobileActiveIndex].title}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              {/* Number and Text Details */}
              <div className="w-full mt-6 flex flex-col items-start">
                <span className="text-6xl sm:text-7xl font-bold text-white font-primary leading-none tracking-tighter">
                  {items[mobileActiveIndex].number}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-primary mt-4">
                  {items[mobileActiveIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mt-2 max-w-lg">
                  {items[mobileActiveIndex].description}
                </p>
              </div>

              {/* Mobile Navigation Controls */}
              <div className="w-full flex items-center justify-between mt-8 pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-neutral-400">
                  <span>{items[mobileActiveIndex].number}</span>
                  <span>/</span>
                  <span>{String(total).padStart(2, "0")}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleMobilePrev}
                    aria-label="Previous"
                    className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-200 active:scale-95 hover:bg-neutral-800 transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleMobileNext}
                    aria-label="Next"
                    className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-200 active:scale-95 hover:bg-neutral-800 transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default OurValues;

