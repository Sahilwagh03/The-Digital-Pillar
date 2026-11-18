"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { Magnetic } from "@/components/ui/magnetic";
import { HERO_CONTENT, HERO_SOCIAL_PROOF } from "@/constants/hero";
import TiltedGridHero from "../common/tilted-grid";
import {
  heroContainerVariants,
  heroHeadlineLineVariants,
  heroSubtitleVariants,
  heroCtaVariants,
  heroGridVariants,
} from "@/animation/hero";

// Curated grid cell boxes placed with exact mathematical alignment to the 56px SVG grid
const HERO_GRID_BOXES = [
  // Mobile & Small Screen Accents (Kept within safe margins)
  { k: -3, m: 2, opacity: 0.35, delay: 0.8, duration: 6.2, className: "sm:hidden" },
  { k: -3, m: 4, opacity: 0.45, delay: 0.0, duration: 6.0, className: "sm:hidden" },
  { k: 2, m: 3, opacity: 0.45, delay: 1.5, duration: 6.5, className: "sm:hidden" },
  { k: 2, m: 5, opacity: 0.35, delay: 2.2, duration: 7.0, className: "sm:hidden" },

  // Left Flank (Tablet, Laptop & Desktop)
  { k: -6, m: 3, opacity: 0.38, delay: 0.5, duration: 7.2, className: "hidden sm:block" },
  { k: -7, m: 4, opacity: 0.52, delay: 1.2, duration: 6.8, className: "hidden sm:block" },
  { k: -8, m: 5, opacity: 0.42, delay: 2.0, duration: 7.5, className: "hidden sm:block" },
  { k: -5, m: 6, opacity: 0.35, delay: 1.0, duration: 8.0, className: "hidden sm:block" },
  { k: -9, m: 2, opacity: 0.32, delay: 2.4, duration: 8.2, className: "hidden lg:block" },
  { k: -11, m: 2, opacity: 0.28, delay: 3.1, duration: 8.8, className: "hidden xl:block" },
  { k: -12, m: 4, opacity: 0.44, delay: 0.4, duration: 6.5, className: "hidden xl:block" },
  { k: -14, m: 3, opacity: 0.28, delay: 1.8, duration: 8.5, className: "hidden 2xl:block" },

  // Right Flank (Tablet, Laptop & Desktop)
  { k: 5, m: 3, opacity: 0.38, delay: 1.4, duration: 7.4, className: "hidden sm:block" },
  { k: 6, m: 4, opacity: 0.52, delay: 0.6, duration: 7.0, className: "hidden sm:block" },
  { k: 7, m: 5, opacity: 0.42, delay: 2.6, duration: 7.6, className: "hidden sm:block" },
  { k: 4, m: 6, opacity: 0.35, delay: 1.7, duration: 8.2, className: "hidden sm:block" },
  { k: 8, m: 2, opacity: 0.32, delay: 3.0, duration: 8.5, className: "hidden lg:block" },
  { k: 10, m: 3, opacity: 0.44, delay: 1.8, duration: 6.6, className: "hidden lg:block" },
  { k: 11, m: 2, opacity: 0.28, delay: 2.3, duration: 8.6, className: "hidden xl:block" },
  { k: 13, m: 4, opacity: 0.28, delay: 0.9, duration: 8.4, className: "hidden 2xl:block" },

  // Top Ambient Accents (Subtle above headline)
  { k: -2, m: 1, opacity: 0.25, delay: 3.4, duration: 9.0, className: "hidden md:block" },
  { k: 1, m: 1, opacity: 0.25, delay: 2.8, duration: 9.2, className: "hidden md:block" },
];

export function Hero() {
  const handleScrollDown = () => {
    const target =
      document.getElementById("values") ||
      document.getElementById("services") ||
      document.getElementById("selected-work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-transparent pt-16 sm:pt-20 pb-2 sm:pb-4"
    >
      {/* Box Design: Unified Blueprint Grid & Perfectly Nested Floating Glass Cells */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none [mask-image:radial-gradient(ellipse_95%_80%_at_50%_35%,black_45%,transparent_95%)]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="0"
            >
              <path
                d="M 56 0 H 0 V 56"
                fill="none"
                stroke="rgba(255, 255, 255, 0.13)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* 1. Base Blueprint Grid Fill */}
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />

          {/* 2. Highlighted Boxes Locked Into The Exact Same SVG Coordinate System */}
          <svg x="50%" y="0" className="overflow-visible">
            {HERO_GRID_BOXES.map((box, idx) => (
              <motion.rect
                key={idx}
                x={box.k * 56 + 3}
                y={box.m * 56 + 3}
                width={50}
                height={50}
                rx={12}
                fill={`rgba(255, 255, 255, ${(box.opacity * 0.18).toFixed(3)})`}
                stroke={`rgba(255, 255, 255, ${(box.opacity * 0.4).toFixed(3)})`}
                strokeWidth="1"
                initial={{ opacity: box.opacity * 0.8 }}
                animate={{
                  opacity: [
                    box.opacity * 0.7,
                    box.opacity * 1.25,
                    box.opacity * 0.7,
                  ],
                }}
                transition={{
                  duration: box.duration,
                  delay: box.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={box.className}
              />
            ))}
          </svg>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col w-full flex-1 justify-center">
        <Container size="lg" className="w-full flex flex-col items-center gap-2.5 sm:gap-3.5 text-center relative z-20">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2.5 sm:gap-3.5 text-center items-center max-w-4xl px-2"
          >

            {/* 2. Masked Headline Lines Reveal with Rotating Text (Hover Pause & Click Cycle) */}
            <h1 className="text-[2.25rem] xs:text-[2.65rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.65rem] font-bold tracking-tight text-white leading-[1.14] sm:leading-[1.14] font-primary text-balance">
              <span className="block overflow-hidden pt-0.5 pb-2 sm:pb-3 -mb-2 sm:-mb-3">
                <motion.span
                  variants={heroHeadlineLineVariants}
                  className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3.5 origin-bottom-left"
                >
                  <span>{HERO_CONTENT.titleLine1}</span>
                  <RotatingText
                    words={HERO_CONTENT.rotatingWords}
                    intervalMs={HERO_CONTENT.rotationIntervalMs}
                    fallbackWord={HERO_CONTENT.titleLine2}
                    className="text-[#fdbb11] font-extrabold drop-shadow-[0_0_24px_rgba(253,187,17,0.35)]"
                  />
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-0.5 pb-2 sm:pb-3 -mb-2 sm:-mb-3">
                <motion.span
                  variants={heroHeadlineLineVariants}
                  className="block origin-bottom-left"
                >
                  {HERO_CONTENT.titleLine3.trim()}
                </motion.span>
              </span>
            </h1>

            {/* 3. Subtitle / Description */}
            <motion.p
              variants={heroSubtitleVariants}
              className="text-xs xs:text-[13px] sm:text-[0.9375rem] text-zinc-400 sm:text-zinc-300/80 w-full max-w-xs xs:max-w-sm sm:max-w-lg leading-relaxed font-primary font-normal text-pretty"
            >
              <span className="hidden sm:inline">{HERO_CONTENT.description}</span>
              <span className="sm:hidden">{HERO_CONTENT.mobileDescription || HERO_CONTENT.description}</span>
            </motion.p>

            {/* 4. Action Stack: Magnetic CTA Button + Stacked Social Proof Pill */}
            <motion.div
              variants={heroCtaVariants}
              className="pt-0.5 flex flex-col items-center gap-2 sm:gap-3 relative z-20"
            >
              {/* Magnetic CTA Button with Shimmer Sweep */}
              <Magnetic strength={0.25}>
                <Button
                  href={HERO_CONTENT.cta.href}
                  variant="primary"
                  size="none"
                  className="relative overflow-hidden cursor-pointer font-bold h-9 sm:h-11 px-4 sm:px-7 text-xs sm:text-sm tracking-wide bg-[#fdbb11] text-black rounded-full shadow-[0_0_20px_rgba(253,187,17,0.25)] hover:shadow-[0_0_40px_rgba(253,187,17,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group/btn font-primary"
                >
                  {/* Micro-interaction: Light sweep shimmer on hover */}
                  <span
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-[200%] group-hover/btn:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span>{HERO_CONTENT.cta.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </Button>
              </Magnetic>

              {/* Social Proof Trust Indicator Centered Below Button */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm select-none max-w-full group/trust transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
                <div className="flex items-center -space-x-1 sm:-space-x-1.5 group-hover/trust:-space-x-0.5 transition-all duration-300 shrink-0">
                  {HERO_SOCIAL_PROOF.avatars.slice(0, 4).map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden ring-1 sm:ring-1.5 ring-black shrink-0"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-left text-[10px] sm:text-[11px] leading-tight sm:leading-none whitespace-nowrap">
                  <div className="flex items-center text-[#fdbb11] text-[8px] sm:text-[9px] tracking-tight shrink-0">
                    {"★★★★★"}
                  </div>
                  <span className="font-semibold text-white tracking-tight shrink-0">
                    {HERO_SOCIAL_PROOF.rating}
                  </span>
                  <span className="text-neutral-500 font-normal shrink-0">·</span>
                  <span className="text-neutral-300 sm:text-neutral-400 font-normal">
                    <span className="sm:hidden">120+ brands</span>
                    <span className="hidden sm:inline">{HERO_SOCIAL_PROOF.label}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* 5. 3D Tilted Grid Entrance */}
        <motion.div
          variants={heroGridVariants}
          initial="hidden"
          animate="visible"
          className="w-full -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-22 relative"
        >
          <TiltedGridHero
            images={HERO_CONTENT.images}
            tileHeight={50}
            aspectRatio={2 / 3}
            axis={48}
            curve={55}
            gap={10}
            className="h-[340px] xs:h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] w-full"
          />
        </motion.div>
      </div>

      {/* 6. Interactive Bottom Scroll Indicator (Pinned at Bottom Center) */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={handleScrollDown}
          className="group/scroll flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer select-none"
          aria-label="Scroll down to explore"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 group-hover/scroll:text-neutral-200 uppercase">
            Scroll to explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#fdbb11] animate-bounce transition-transform duration-300 group-hover/scroll:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
