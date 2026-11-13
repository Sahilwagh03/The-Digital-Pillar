"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { CLIENT_STORIES_CONTENT } from "@/constants/client-stories";
import { ClientVideoCarousel } from "./client-video-carousel";
import {
  clientStoriesHeaderVariants,
  clientStoriesTitleVariants,
  clientStoriesDescVariants,
  clientStoriesDividerVariants,
} from "@/animation/client-stories";

export function ClientStories() {
  const { tag, title, description, cta, videoStories } = CLIENT_STORIES_CONTENT;

  return (
    <section
      id="client-stories"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 border-t border-white/10 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Subtle Gold Ambient Glow Accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-[#fdbb11]/5 blur-[140px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        {/* Header Section with Orchestrated Reveal */}
        <motion.div
          variants={clientStoriesHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-12"
        >
          {/* Main Title & Eyebrow */}
          <div className="lg:col-span-6 overflow-hidden py-1">
            <span className="inline-block text-xs sm:text-[0.8125rem] font-semibold tracking-[0.25em] text-[#fdbb11] uppercase font-primary mb-3">
              {tag}
            </span>
            <motion.h2
              variants={clientStoriesTitleVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold tracking-tight text-white leading-[1.05] font-primary origin-bottom-left"
            >
              {title}
            </motion.h2>
          </div>

          {/* Description */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-end">
            <motion.p
              variants={clientStoriesDescVariants}
              className="text-sm sm:text-base text-neutral-400 font-primary leading-relaxed max-w-md text-left lg:text-right"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        {/* Animated Divider Line */}
        <motion.div
          variants={clientStoriesDividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-40px" }}
          style={{ originX: 0 }}
          className="w-full h-px bg-white/10 mb-8 sm:mb-12"
        />

        {/* Client Video Carousel Component (Matches Reference Image) */}
        <ClientVideoCarousel stories={videoStories} />

        {/* Bottom CTA Row */}
        <div className="flex justify-center pt-8 sm:pt-12">
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-2 border-b-2 border-[#fdbb11] pb-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#fdbb11] uppercase font-primary hover:text-white hover:border-white transition-colors"
          >
            <span>{cta.label}</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 text-[#fdbb11] group-hover:text-white">
              &rarr;
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ClientStories;
