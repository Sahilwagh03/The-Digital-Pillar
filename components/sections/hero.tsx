"use client";

import React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/constants/hero";
import TiltedGridHero from "../common/tilted-grid";
import {
  heroContainerVariants,
  heroHeadlineLineVariants,
  heroSubtitleVariants,
  heroCtaVariants,
  heroGridVariants,
  heroGlowVariants,
} from "@/animation/hero";

export function Hero() {
  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#070707] pt-20 sm:pt-24 pb-4 sm:pb-8"
    >
      {/* Ambient Cinematic Golden Glow */}
      <motion.div
        variants={heroGlowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-400/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col w-full flex-1 justify-center">
        <Container size="lg" className="w-full flex flex-col items-center gap-3 sm:gap-4 text-center relative z-20">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 sm:gap-4 text-center items-center max-w-4xl px-2"
          >
            {/* Masked Headline Lines Reveal with High-Impact Mobile Sizing */}
            <h1 className="text-[2.75rem] xs:text-[3.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.03] sm:leading-[1.06] font-primary text-balance">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={heroHeadlineLineVariants}
                  className="block origin-bottom-left"
                >
                  {HERO_CONTENT.titleLine1}
                  <span className="text-amber-400 font-extrabold">
                    {HERO_CONTENT.titleLine2}
                  </span>
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={heroHeadlineLineVariants}
                  className="block origin-bottom-left"
                >
                  {HERO_CONTENT.titleLine3.trim()}
                </motion.span>
              </span>
            </h1>

            {/* Subtitle / Description with Refined Mobile Hierarchy */}
            <motion.p
              variants={heroSubtitleVariants}
              className="text-[0.8125rem] xs:text-sm sm:text-base text-zinc-400 sm:text-zinc-300/80 w-full max-w-xl leading-relaxed font-primary font-normal text-pretty"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* Polished CTA Button Entrance with Explicit Pointer Cursor */}
            <motion.div variants={heroCtaVariants} className="pt-1 relative z-20">
              <Button
                href={HERO_CONTENT.cta.href}
                variant="primary"
                size="md"
                className="cursor-pointer font-semibold px-6 tracking-wide shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {HERO_CONTENT.cta.label}
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* 3D Tilted Grid Entrance */}
        <motion.div
          variants={heroGridVariants}
          initial="hidden"
          animate="visible"
          className="w-full -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 relative"
        >
          <TiltedGridHero
            images={HERO_CONTENT.images}
            tileHeight={50}
            aspectRatio={2 / 3}
            axis={52}
            curve={75}
            className="h-[340px] xs:h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
