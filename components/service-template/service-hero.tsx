"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { ServiceHeroData } from "@/constants/services";

interface ServiceHeroProps {
  hero: ServiceHeroData;
}

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Subtle ambient warm backlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[#d95c27]/10 blur-[130px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        {/* Top Header Row: Split Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 lg:pb-14">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            {hero.tag && (
              <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase font-primary mb-3 sm:mb-4">
                {hero.tag}
              </span>
            )}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] font-primary">
              <span className="block">{hero.titleLine1}</span>
              <span className="block text-white/95">{hero.titleLine2}</span>
            </h1>
          </motion.div>

          {/* Right Subtitle / Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:max-w-md xl:max-w-lg lg:text-left pt-2 lg:pt-0"
          >
            <p className="text-xs sm:text-sm md:text-[0.9375rem] text-neutral-400 font-normal leading-relaxed font-primary">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Hero Visual Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[320px] sm:h-[460px] md:h-[540px] lg:h-[620px] rounded-2xl sm:rounded-3xl md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group bg-neutral-950"
        >
          {/* Main Visual Image */}
          <Image
            src={hero.bannerImage}
            alt={hero.bannerAlt}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1340px"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />

          {/* Subtle inner dark vignette & warm rim overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Corner highlight shine */}
          <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.08] blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>
      </Container>
    </section>
  );
}
