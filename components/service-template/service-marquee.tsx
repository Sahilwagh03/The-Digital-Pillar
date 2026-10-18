"use client";

import React from "react";
import { ServiceMarqueeData } from "@/constants/services";

interface ServiceMarqueeProps {
  marquee: ServiceMarqueeData;
}

export function ServiceMarquee({ marquee }: ServiceMarqueeProps) {
  const items = Array.from({ length: 8 });

  return (
    <section
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] py-8 sm:py-12 lg:py-14 overflow-hidden border-y border-white/[0.08] select-none"
    >
      <div className="flex w-max animate-marquee gap-8 sm:gap-14 lg:gap-16 items-center">
        {items.map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-8 sm:gap-14 lg:gap-16 shrink-0"
          >
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold uppercase tracking-tight text-white font-primary whitespace-nowrap">
              {marquee.text}
            </span>
            <span
              className="text-2xl sm:text-4xl lg:text-5xl text-neutral-500 font-light select-none"
              aria-hidden="true"
            >
              ×
            </span>
          </div>
        ))}

        {items.map((_, i) => (
          <div
            key={`dup-${i}`}
            className="flex items-center gap-8 sm:gap-14 lg:gap-16 shrink-0"
            aria-hidden="true"
          >
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold uppercase tracking-tight text-white font-primary whitespace-nowrap">
              {marquee.text}
            </span>
            <span className="text-2xl sm:text-4xl lg:text-5xl text-neutral-500 font-light select-none">
              ×
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
