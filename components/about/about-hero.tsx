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
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-transparent text-white"
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
          className="object-cover object-[center_35%] select-none pointer-events-none scale-100 transition-transform duration-1000 ease-out opacity-45"
        />
      </div>

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
            <h1 className="text-[2.75rem] xs:text-[3.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.15] font-primary text-balance">
              <span className="block overflow-hidden pt-1 pb-3 sm:pb-4 -mb-3 sm:-mb-4">
                <motion.span
                  variants={aboutHeroHeadlineVariants}
                  className="block origin-bottom-center"
                >
                  {headlineLine1}
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1 pb-3 sm:pb-4 -mb-3 sm:-mb-4">
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
