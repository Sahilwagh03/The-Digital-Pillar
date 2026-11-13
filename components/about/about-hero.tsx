"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { ABOUT_HERO_CONTENT } from "@/constants/about";
import {
  aboutHeroContainerVariants,
  aboutHeroTagVariants,
  aboutHeroHeadlineVariants,
  aboutHeroSubtitleVariants,
} from "@/animation/about";

export function AboutHero() {
  const {
    tag,
    headlineLine1,
    headlineLine2,
    description,
    scrollLabel,
    backgroundImage,
  } = ABOUT_HERO_CONTENT;

  return (
    <section
      id="about-hero"
      data-nav-theme="dark"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#070707] text-white"
    >
      {/* Background Cinematic Photo with Atmospheric Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="The Digital Pillar creative team collaborating"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_35%] select-none pointer-events-none scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignettes & Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/75 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/90 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
      </div>

      {/* Atmospheric Brand Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#fdbb11]/8 blur-[150px] rounded-full pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Main Hero Content (Centered with Display Typography) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full pt-28 sm:pt-36 pb-16 sm:pb-20">
        <Container size="lg" className="w-full flex flex-col items-center text-center">
          <motion.div
            variants={aboutHeroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            {/* Eyebrow Tag */}
            <motion.span
              variants={aboutHeroTagVariants}
              className="inline-block text-xs sm:text-[0.8125rem] font-semibold tracking-[0.28em] text-[#fdbb11] uppercase font-primary mb-4 sm:mb-6 drop-shadow-[0_0_12px_rgba(253,187,17,0.3)]"
            >
              {tag}
            </motion.span>

            {/* Display Headline with Masked Reveal */}
            <h1 className="text-[2.75rem] xs:text-[3.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight text-white leading-[1.03] sm:leading-[1.08] font-primary text-balance">
              <span className="block overflow-hidden py-1">
                <motion.span
                  variants={aboutHeroHeadlineVariants}
                  className="block origin-bottom-center"
                >
                  {headlineLine1}
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  variants={aboutHeroHeadlineVariants}
                  className="block origin-bottom-center"
                >
                  {headlineLine2}
                </motion.span>
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <motion.p
              variants={aboutHeroSubtitleVariants}
              className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-[1.125rem] text-neutral-200/90 font-normal leading-relaxed max-w-2xl mx-auto font-primary text-pretty"
            >
              {description}
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

export default AboutHero;
