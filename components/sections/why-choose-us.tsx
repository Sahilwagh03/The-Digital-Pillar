import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { WHY_CHOOSE_US_CONTENT } from "@/constants/why-choose-us";

const CHART_BAR_HEIGHTS = [
  8, 10, 9, 11, 13, 12, 16, 22, 28, 36, 44, 52, 60, 68, 74, 76, 73, 75, 78, 83, 87, 92, 96, 100,
];

export function WhyChooseUs() {
  const { tag, headlineLine1, headlineLine2, description, stats } =
    WHY_CHOOSE_US_CONTENT;

  return (
    <section
      id="why-choose-us"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 py-20 sm:py-28 lg:py-32"
    >
      <Container size="lg">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 sm:mb-20 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              {tag}
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col items-start">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-950 leading-[1.08] font-primary">
              {headlineLine1}
              <br />
              {headlineLine2}
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed font-normal">
              {description}
            </p>
          </div>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Column 1: Revenue Generated & Bar Chart */}
          <div className="border border-neutral-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between min-h-[26rem] sm:min-h-[29rem]">
            {/* Minimalist Bar Chart */}
            <div className="w-full pt-8 pb-4">
              <div className="h-36 sm:h-40 flex items-end justify-between gap-1 sm:gap-1.5 px-1">
                {CHART_BAR_HEIGHTS.map((heightPercent, idx) => (
                  <div
                    key={idx}
                    className="w-[2px] bg-neutral-300 rounded-full transition-all duration-300 hover:bg-neutral-900"
                    style={{ height: `${heightPercent}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-neutral-100 text-[0.7rem] sm:text-xs text-neutral-500 font-medium">
                {stats.revenue.years.map((year, idx) => (
                  <span key={idx}>{year}</span>
                ))}
              </div>
            </div>

            {/* Stat & Label */}
            <div className="pt-6">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary">
                {stats.revenue.value}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                {stats.revenue.label}
              </p>
            </div>
          </div>

          {/* Column 2: Speed (3x) & Projects (200+) Stack */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Top Card: 3x Speed */}
            <div className="border border-neutral-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden flex-1 min-h-[12.5rem]">
              <div className="absolute top-0 right-0 w-36 h-36 sm:w-40 sm:h-40 pointer-events-none translate-x-1 -translate-y-1">
                <Image
                  src="/assets/growth-icon.svg"
                  alt="Growth icon"
                  width={213}
                  height={204}
                  className="w-full h-full object-contain object-top-right select-none"
                />
              </div>

              <div className="mt-auto z-10">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary">
                  {stats.speed.value}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                  {stats.speed.label}
                </p>
              </div>
            </div>

            {/* Bottom Card: 200+ Projects with Globe */}
            <div className="border border-neutral-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden flex-1 min-h-[12.5rem]">
              <div className="absolute top-0 right-0 w-36 h-36 sm:w-40 sm:h-40 pointer-events-none translate-x-1 -translate-y-1">
                <Image
                  src="/assets/globe.svg"
                  alt="Globe icon"
                  width={204}
                  height={199}
                  className="w-full h-full object-contain object-top-right select-none"
                />
              </div>

              <div className="mt-auto z-10">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary">
                  {stats.projects.value}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-[260px] font-normal leading-relaxed">
                  {stats.projects.label}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Photographic Image Card */}
          <div className="relative overflow-hidden min-h-[26rem] sm:min-h-[29rem] flex flex-col justify-between p-7 sm:p-9 border border-neutral-200/90">
            {/* Background Image */}
            <Image
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
              fill
              quality={95}
              className="object-cover object-[center_20%] select-none"
            />

            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/70 pointer-events-none" />

            {/* Top Bar: Logo & 4.8/5 Rating */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <Logo className="brightness-110" />

              <div className="flex flex-col items-end">
                <span className="text-lg sm:text-xl font-bold text-white font-primary">
                  {stats.ratingCard.rating}
                </span>
                <div className="flex text-white gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-white text-white" />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar: 100+ Projects Completed */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-primary">
                {stats.ratingCard.value}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 font-normal">
                {stats.ratingCard.label}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
