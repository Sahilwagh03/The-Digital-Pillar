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
      data-nav-theme="dark"
      className="relative w-full bg-[#07070a] text-white py-20 sm:py-28 lg:py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient Brand Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#fdbb11]/5 blur-[150px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.25em] text-[#fdbb11] uppercase font-primary mb-3 drop-shadow-[0_0_10px_rgba(253,187,17,0.3)]">
            {tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] font-primary">
            {title}
          </h2>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0e0e15] rounded-2xl p-7 sm:p-8 border border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:-translate-y-1 hover:border-[#fdbb11]/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(253,187,17,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#fdbb11] font-primary flex items-baseline drop-shadow-[0_0_12px_rgba(253,187,17,0.35)]">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <NumberTicker
                    value={stat.value}
                    delay={idx * 0.1}
                    className="text-[#fdbb11] tracking-tight font-primary"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-200 mt-3 font-primary">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-neutral-400 mt-4 pt-4 border-t border-white/10 font-normal leading-relaxed">
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
