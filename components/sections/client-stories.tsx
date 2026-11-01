"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { CLIENT_STORIES_CONTENT } from "@/constants/client-stories";
import {
  clientStoriesHeaderVariants,
  clientStoriesTitleVariants,
  clientStoriesDescVariants,
  clientStoriesDividerVariants,
  clientStoriesContentVariants,
  clientStoriesBrandItemVariants,
  quoteSlideVariants,
} from "@/animation/client-stories";

export function ClientStories() {
  const { title, descriptionLines, cta, stories } = CLIENT_STORIES_CONTENT;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handleSelectStory = (idx: number) => {
    if (idx === activeIndex) return;
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const currentStory = stories[activeIndex];

  return (
    <section
      id="client-stories"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-16 border-t border-white/10 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Subtle Gold Ambient Accent */}
      <div
        className="absolute bottom-10 left-1/4 w-[350px] h-[200px] bg-[#fdbb11]/5 blur-[120px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        {/* Header Section with Orchestrated Reveal */}
        <motion.div
          variants={clientStoriesHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end"
        >
          {/* Main Title with Masked Reveal */}
          <div className="lg:col-span-5 overflow-hidden py-1">
            <motion.h2
              variants={clientStoriesTitleVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold tracking-tight text-white leading-[1.05] font-primary origin-bottom-left"
            >
              {title}
            </motion.h2>
          </div>

          {/* Description Lines with Velvety Fade */}
          <div className="lg:col-span-7">
            <motion.div
              variants={clientStoriesDescVariants}
              className="text-sm sm:text-base text-neutral-400 font-primary leading-snug max-w-sm"
            >
              {descriptionLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Divider Line */}
        <motion.div
          variants={clientStoriesDividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-40px" }}
          style={{ originX: 0 }}
          className="w-full h-px bg-white/10 mt-10 sm:mt-12 lg:mt-14 mb-12 sm:mb-16 lg:mb-20"
        />

        {/* Main Content Layout */}
        <motion.div
          variants={clientStoriesContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-stretch min-h-[380px] lg:min-h-[420px]"
        >
          {/* Left Column: Interactive Brand Navigation & Carousel Arrows */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between">
            {/* Brand Links */}
            <div className="flex flex-col items-start space-y-3.5 sm:space-y-4">
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <motion.button
                    key={story.id}
                    variants={clientStoriesBrandItemVariants}
                    type="button"
                    onClick={() => handleSelectStory(idx)}
                    className={`group relative flex items-center text-xs sm:text-[0.8125rem] tracking-[0.2em] uppercase font-semibold font-primary transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-[#fdbb11] font-bold translate-x-1 drop-shadow-[0_0_12px_rgba(253,187,17,0.35)]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <span>{story.brandName}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-story-arrow"
                        className="ml-2.5 text-xs sm:text-sm inline-block text-[#fdbb11]"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        &rarr;
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Navigation Controls with Counter */}
            <div className="flex items-center gap-5 pt-8">
              <div className="inline-flex border border-white/15 divide-x divide-white/10 bg-[#0e0e14] rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous client story"
                  className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white hover:bg-white/10 hover:text-[#fdbb11] active:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next client story"
                  className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white hover:bg-white/10 hover:text-[#fdbb11] active:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Index Indicator (e.g. 01 / 05) */}
              <div className="text-xs font-mono tracking-widest text-neutral-400 font-medium select-none">
                <span className="text-[#fdbb11] font-bold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5 opacity-50 text-neutral-500">/</span>
                <span className="text-neutral-400">{String(stories.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Directional Testimonial Quote with AnimatePresence */}
          <div className="w-full lg:col-span-7 flex flex-col justify-between relative">
            <div className="relative min-h-[220px] sm:min-h-[200px] flex items-start">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStory.id}
                  custom={direction}
                  variants={quoteSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  {/* Testimonial Quote */}
                  <blockquote className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.35rem] font-semibold tracking-tight text-white leading-[1.22] font-primary max-w-2xl lg:max-w-3xl">
                    <span className="text-[#fdbb11] font-serif mr-1">&ldquo;</span>
                    {currentStory.quote}
                    <span className="text-[#fdbb11] font-serif ml-1">&rdquo;</span>
                  </blockquote>

                  {/* Author Bio */}
                  <div className="flex items-center gap-4 sm:gap-5 mt-8 sm:mt-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-neutral-800 shrink-0 overflow-hidden relative shadow-md ring-1 ring-white/10">
                      {currentStory.author.avatarUrl ? (
                        <Image
                          src={currentStory.author.avatarUrl}
                          alt={currentStory.author.name}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-base sm:text-lg font-bold text-white font-primary leading-tight">
                        {currentStory.author.name}
                      </span>
                      <span className="text-xs sm:text-sm text-[#fdbb11]/90 font-medium font-primary mt-1">
                        {currentStory.author.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA & Mobile Controls */}
            <div className="pt-10 sm:pt-14 lg:pt-0 flex flex-col items-start gap-8 sm:gap-10">
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-2 border-b border-[#fdbb11] pb-1 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#fdbb11] uppercase font-primary hover:text-white hover:border-white transition-colors"
              >
                <span>{cta.label}</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 text-[#fdbb11] group-hover:text-white">
                  &rarr;
                </span>
              </Link>

              {/* Mobile Carousel Controls & Counter */}
              <div className="flex lg:hidden items-center gap-4">
                <div className="inline-flex border border-white/15 divide-x divide-white/10 bg-[#0e0e14] rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous client story"
                    className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 hover:text-[#fdbb11] active:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next client story"
                    className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 hover:text-[#fdbb11] active:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>

                <div className="text-xs font-mono tracking-widest text-neutral-400 font-medium select-none">
                  <span className="text-[#fdbb11] font-bold">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-1 opacity-50 text-neutral-500">/</span>
                  <span className="text-neutral-400">{String(stories.length).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ClientStories;
