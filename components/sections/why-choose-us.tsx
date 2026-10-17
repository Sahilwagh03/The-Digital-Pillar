"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGrowthIcon } from "@/components/ui/animated-growth-icon";
import { AnimatedGlobeIcon } from "@/components/ui/animated-globe-icon";
import { WHY_CHOOSE_US_CONTENT } from "@/constants/why-choose-us";
import {
  headerContainerVariants,
  tagVariants,
  headlineLineVariants,
  descriptionVariants,
  bentoGridVariants,
  bentoCardVariants,
} from "@/animation/why-choose-us";
import { cn } from "@/lib/utils";

// ============================================================================
// SUBCOMPONENTS
// ============================================================================

const CHART_BAR_HEIGHTS = [
  8, 10, 9, 11, 13, 12, 16, 22, 28, 36, 44, 52, 60, 68, 74, 76, 73, 75, 78, 83, 87, 92, 96, 100,
];

function AnimatedBarChart({ years }: { years: string[] }) {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: false, margin: "-40px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div ref={chartRef} className="w-full pt-6 pb-2">
      {/* Metric Indicator / Micro Header */}
      <div className="h-6 flex items-center justify-between px-1 mb-3">
        <span className="text-[0.6875rem] uppercase tracking-wider text-neutral-400 font-medium">
          Quarterly Momentum
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredIdx !== null ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[0.6875rem] font-mono font-medium text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-full"
        >
          {hoveredIdx !== null ? `${CHART_BAR_HEIGHTS[hoveredIdx]}%` : "100%"}
        </motion.span>
      </div>

      {/* Bar Chart Columns */}
      <div
        className="h-36 sm:h-40 flex items-end justify-between gap-1 sm:gap-1.5 px-1 relative"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {CHART_BAR_HEIGHTS.map((heightPercent, idx) => {
          const isHovered = hoveredIdx === idx;
          const isMax = idx === CHART_BAR_HEIGHTS.length - 1;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              className="group/bar relative flex-1 h-full flex items-end cursor-pointer py-1"
            >
              <div
                className={cn(
                  "w-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom",
                  isHovered
                    ? "bg-neutral-950 scale-y-105"
                    : isMax
                    ? "bg-neutral-900"
                    : "bg-neutral-300/80 group-hover/bar:bg-neutral-700"
                )}
                style={{
                  height: isInView ? `${heightPercent}%` : "0%",
                  transitionDelay: `${idx * 16}ms`,
                }}
              />
              {isMax && (
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900 transition-opacity duration-700"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transitionDelay: `${idx * 16 + 250}ms`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Timeline Labels */}
      <div className="flex items-center justify-between mt-5 pt-3 border-t border-neutral-100 text-[0.7rem] sm:text-xs text-neutral-400 font-medium tracking-wider">
        {years.map((year, idx) => (
          <span key={idx}>{year}</span>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================

export function WhyChooseUs() {
  const { tag, headlineLine1, headlineLine2, description, stats } =
    WHY_CHOOSE_US_CONTENT;

  return (
    <section
      id="why-choose-us"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 pt-20 sm:pt-28 lg:pt-32"
    >
      <Container size="lg">
        {/* Header Section with Orchestrated Staggered Reveals */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 sm:mb-20 items-start"
        >
          {/* Eyebrow Tag */}
          <div className="lg:col-span-4">
            <motion.span
              variants={tagVariants}
              className="inline-block text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-500 uppercase"
            >
              {tag}
            </motion.span>
          </div>

          {/* Headline & Description */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-950 leading-[1.08] font-primary">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={headlineLineVariants}
                  className="block origin-bottom-left"
                >
                  {headlineLine1}
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={headlineLineVariants}
                  className="block origin-bottom-left"
                >
                  {headlineLine2}
                </motion.span>
              </span>
            </h2>

            <motion.p
              variants={descriptionVariants}
              className="mt-5 sm:mt-6 text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed font-normal"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        {/* 3-Column Bento Grid with Orchestrated Staggered Entrance */}
        <motion.div
          variants={bentoGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {/* Column 1: Revenue Generated & Bar Chart */}
          <motion.div
            variants={bentoCardVariants}
            className="border border-neutral-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between min-h-[26rem] sm:min-h-[29rem] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] group"
          >
            {/* Minimalist Bar Chart */}
            <AnimatedBarChart years={stats.revenue.years} />

            {/* Stat & Label */}
            <div className="pt-6">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary flex items-baseline">
                <NumberTicker
                  value={stats.revenue.number}
                  damping={45}
                  stiffness={120}
                  className="text-neutral-950 dark:text-neutral-950 tracking-tight"
                />
                <span>{stats.revenue.suffix}</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                {stats.revenue.label}
              </p>
            </div>
          </motion.div>

          {/* Column 2: Speed (12x) & Projects (250+) Stack */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Top Card: 12x Speed */}
            <motion.div
              variants={bentoCardVariants}
              className="border border-neutral-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden flex-1 min-h-[12.5rem] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] group"
            >
              {/* Subtle Ambient Hover Gradient */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-neutral-100/70 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-0 right-0 w-36 h-36 sm:w-40 sm:h-40 pointer-events-none translate-x-1 -translate-y-1">
                <AnimatedGrowthIcon className="w-full h-full" />
              </div>

              <div className="mt-auto z-10">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary flex items-baseline">
                  <NumberTicker
                    value={stats.speed.number}
                    delay={0.1}
                    damping={45}
                    stiffness={120}
                    className="text-neutral-950 dark:text-neutral-950 tracking-tight"
                  />
                  <span>{stats.speed.suffix}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-normal">
                  {stats.speed.label}
                </p>
              </div>
            </motion.div>

            {/* Bottom Card: 250+ Projects with Globe */}
            <motion.div
              variants={bentoCardVariants}
              className="border border-neutral-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden flex-1 min-h-[12.5rem] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] group"
            >
              {/* Subtle Ambient Hover Gradient */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-neutral-100/70 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-0 right-0 w-36 h-36 sm:w-40 sm:h-40 pointer-events-none translate-x-1 -translate-y-1">
                <AnimatedGlobeIcon className="w-full h-full" />
              </div>

              <div className="mt-auto z-10">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-primary flex items-baseline">
                  <NumberTicker
                    value={stats.projects.number}
                    delay={0.15}
                    damping={42}
                    stiffness={165}
                    className="text-neutral-950 dark:text-neutral-950 tracking-tight"
                  />
                  <span>{stats.projects.suffix}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-[260px] font-normal leading-relaxed">
                  {stats.projects.label}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Photographic Image Card */}
          <motion.div
            variants={bentoCardVariants}
            className="relative overflow-hidden min-h-[26rem] sm:min-h-[29rem] flex flex-col justify-between p-7 sm:p-9 border border-neutral-200/90 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] group"
          >
            {/* Background Image with Cinematic Hover Zoom */}
            <Image
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-[center_20%] select-none transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/70 pointer-events-none" />

            {/* Top Bar: Logo & 4.8/5 Rating */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <Logo className="brightness-110" />

              <div className="flex flex-col items-end">
                <span className="text-xl sm:text-2xl font-bold text-white font-primary flex items-baseline tracking-tight">
                  <NumberTicker
                    value={stats.ratingCard.ratingNumber}
                    decimalPlaces={1}
                    delay={0.1}
                    damping={45}
                    stiffness={120}
                    className="text-white dark:text-white tracking-tight"
                  />
                  <span>{stats.ratingCard.ratingSuffix}</span>
                </span>
                <div className="flex text-white gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar: 250+ Projects Completed */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-primary flex items-baseline">
                <NumberTicker
                  value={stats.ratingCard.number}
                  delay={0.15}
                  damping={42}
                  stiffness={165}
                  className="text-white dark:text-white tracking-tight"
                />
                <span>{stats.ratingCard.suffix}</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1 font-normal">
                {stats.ratingCard.label}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
