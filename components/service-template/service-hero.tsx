"use client";

import React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { ServiceHeroData } from "@/constants/services";
import { ServiceHeroMedia } from "./service-hero-media";

interface ServiceHeroProps {
  hero: ServiceHeroData;
}

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[#d95c27]/10 blur-[130px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] font-primary">
              <span className="block">{hero.titleLine1}</span>
              <span className="block text-white/95">{hero.titleLine2}</span>
            </h1>
          </motion.div>

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

        <ServiceHeroMedia
          media={hero.media}
          title={`${hero.titleLine1} ${hero.titleLine2}`}
        />
      </Container>
    </section>
  );
}

export { ServiceHeroMedia } from "./service-hero-media";
