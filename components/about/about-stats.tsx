"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ABOUT_STATS_CONTENT } from "@/constants/about";

export function AboutStats() {
  const { tag, title, stats } = ABOUT_STATS_CONTENT;

  return (
    <section
      id="impact"
      data-nav-theme="light"
      className="relative w-full bg-[#f8f9fa] text-neutral-900 py-20 sm:py-28 lg:py-32 border-t border-neutral-200/80 overflow-hidden"
    >
      <Container size="lg">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.25em] text-neutral-500 uppercase font-primary mb-3">
            {tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.1] font-primary">
            {title}
          </h2>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary flex items-baseline">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <NumberTicker
                    value={stat.value}
                    delay={idx * 0.1}
                    className="text-neutral-950 dark:text-neutral-950 tracking-tight"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mt-3 font-primary">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-neutral-500 mt-4 pt-4 border-t border-neutral-100 font-normal leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutStats;
