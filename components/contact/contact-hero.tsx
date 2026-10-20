"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { CONTACT_HERO_DATA } from "@/constants/contact";
import {
  contactHeroContainerVariants,
  contactHeroTagVariants,
  contactHeroHeadlineVariants,
  contactHeroSubtitleVariants,
} from "@/animation/contact";

export function ContactHero() {
  const { tag, headline, description, backgroundImage } = CONTACT_HERO_DATA;

  return (
    <section
      id="contact-hero"
      data-nav-theme="dark"
      className="relative w-full min-h-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white pt-24 pb-16"
    >
      {/* Background Cinematic Photo with Atmospheric Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Contact The Digital Pillar"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_32%] select-none pointer-events-none"
        />

        {/* Cinematic Vignettes & Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Container size="lg" className="w-full flex flex-col items-center text-center">
          <motion.div
            variants={contactHeroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-3xl mx-auto"
          >
            {/* Tag */}
            <motion.span
              variants={contactHeroTagVariants}
              className="inline-block text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-300 font-primary mb-3 sm:mb-4"
            >
              {tag}
            </motion.span>

            {/* Headline with Masked Reveal */}
            <div className="overflow-hidden py-1">
              <motion.h1
                variants={contactHeroHeadlineVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.08] font-primary"
              >
                {headline}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={contactHeroSubtitleVariants}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-neutral-300/90 font-normal leading-relaxed max-w-xl mx-auto font-primary text-pretty"
            >
              {description}
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

export default ContactHero;
