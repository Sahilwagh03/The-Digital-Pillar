"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SCROLL_STOPPER_CONTENT } from "@/constants/scroll-stopper";
import { useRingDimensions } from "@/hooks/useRingDimensions";
import { useRingAnimation } from "@/hooks/useRingAnimation";
import { StopperCardItem, CardSpec } from "./scroll-stopper-card";
import {
  scrollStopperHeaderVariants,
  scrollStopperTitleVariants,
  scrollStopperStageVariants,
  scrollStopperBottomRowVariants,
  scrollStopperDescVariants,
  scrollStopperCtaTitleVariants,
} from "@/animation/scroll-stopper";

/**
 * Toggle between the 3-Card Fanned Showcase (current reference UI)
 * and the 3D Rotating Wheel.
 * Set to true to switch back to the 3D rotating wheel at any time.
 */
const SHOW_ROTATING_WHEEL = false;

const CARDS: CardSpec[] = [
  {
    id: "c1",
    image: "/images/scroll-stopper/you-know.jpg",
    alt: "YOU KNOW Reel",
    type: "reel",
    caption: "YOU KNOW",
    captionColor: "white",
  },
  {
    id: "c2",
    image: "/images/scroll-stopper/burger-eating.jpg",
    alt: "Food and Lifestyle Meal",
    type: "photo",
  },
  {
    id: "c3",
    image: "/images/scroll-stopper/belly-fat.jpg",
    alt: "Fitness UGC Reel",
    type: "reel",
    caption: "Struggling\nwith belly fat",
    captionColor: "red",
  },
  {
    id: "c4",
    image: "/images/scroll-stopper/honestly.jpg",
    alt: "Honestly Reel",
    type: "reel",
    caption: "Honestly...",
    captionColor: "white",
  },
  {
    id: "c5",
    image: "/images/services/social-media.jpg",
    alt: "Team in Studio",
    type: "photo",
  },
  {
    id: "c6",
    image: "/stichora-dark.jpg",
    alt: "Dark Sparks Flares",
    type: "photo",
  },
  {
    id: "c7",
    image: "/images/services/paid-ads.jpg",
    alt: "Yellow Highlight Document",
    type: "wireframe",
  },
  {
    id: "c8",
    image: "/stichora-stone.jpg",
    alt: "McDonald's Red M Card",
    type: "brand",
    badge: "M",
  },
  {
    id: "c9",
    image: "/why-choose-us.jpg",
    alt: "Perforated Mesh Texture",
    type: "pattern",
  },
  {
    id: "c10",
    image: "/images/services/content-strategy.jpg",
    alt: "Minimalist Document",
    type: "pattern",
  },
  {
    id: "c11",
    image: "/stichora.jpg",
    alt: "Red Dress Portrait",
    type: "photo",
  },
  {
    id: "c12",
    image: "/images/services/branding.jpg",
    alt: "Editorial Tailoring",
    type: "photo",
  },
];

/**
 * 3-Card Fanned Showcase Component
 * Simple, clean UI code rendering three distinct reel cards in a fanned layout:
 * - Left Card: tilted left (~-12°) with existing /images/scroll-stopper/belly-fat.jpg
 * - Center Card: elevated upright hero (0°) with existing /images/scroll-stopper/honestly.jpg
 * - Right Card: tilted right (~+12°) with existing /images/scroll-stopper/you-know.jpg
 */
export function ThreeCardsShowcase() {
  return (
    <motion.div
      variants={scrollStopperStageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-40px" }}
      className="relative my-8 sm:my-10 lg:my-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-full max-w-4xl mx-auto flex items-center justify-center pointer-events-auto"
    >
      {/* Subtle gold ambient glow in center */}
      <div
        className="absolute w-[300px] sm:w-[450px] h-[250px] sm:h-[350px] bg-[#fdbb11]/8 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-center">
        {/* Left Card - Tilted Left & Slightly Below */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -6, y: -4, zIndex: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative -rotate-[13deg] translate-y-4 sm:translate-y-6 md:translate-y-7 lg:translate-y-8 -mr-6 sm:-mr-10 md:-mr-14 lg:-mr-16 z-10 w-[135px] sm:w-[195px] md:w-[235px] lg:w-[260px] aspect-[9/13] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0c14] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer select-none group"
        >
          <Image
            src="/images/scroll-stopper/belly-fat.jpg"
            alt="Fitness Reel"
            fill
            sizes="(max-width: 640px) 135px, (max-width: 768px) 195px, 260px"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-3 sm:bottom-4 md:bottom-5 px-2.5 sm:px-3 text-center pointer-events-none">
            <span className="block text-red-500 font-extrabold text-[11px] sm:text-xs md:text-sm leading-tight drop-shadow-md">
              Struggling
            </span>
            <span className="block text-white font-bold text-[10px] sm:text-xs md:text-[13px] leading-tight drop-shadow-md">
              with belly fat
            </span>
          </div>
        </motion.div>

        {/* Center Card - Hero Upright (Same size as Left and Right cards) */}
        <motion.div
          whileHover={{ scale: 1.05, y: -6, zIndex: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rotate-0 z-20 w-[135px] sm:w-[195px] md:w-[235px] lg:w-[260px] aspect-[9/13] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0c14] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] cursor-pointer select-none group"
        >
          <Image
            src="/images/scroll-stopper/honestly.jpg"
            alt="Honestly Reel"
            fill
            sizes="(max-width: 640px) 135px, (max-width: 768px) 195px, 260px"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-3 sm:bottom-5 px-3 text-center pointer-events-none">
            <span className="block text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-tight leading-tight drop-shadow-md">
              Honestly
            </span>
            <span className="block text-white/90 text-[10px] sm:text-xs md:text-sm italic font-serif leading-tight drop-shadow-md">
              I&apos;ve tried so many
            </span>
          </div>
        </motion.div>

        {/* Right Card - Tilted Right & Slightly Below */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 6, y: -4, zIndex: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rotate-[13deg] translate-y-4 sm:translate-y-6 md:translate-y-7 lg:translate-y-8 -ml-6 sm:-ml-10 md:-ml-14 lg:-ml-16 z-10 w-[135px] sm:w-[195px] md:w-[235px] lg:w-[260px] aspect-[9/13] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0c14] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer select-none group"
        >
          <Image
            src="/images/scroll-stopper/you-know.jpg"
            alt="Street Creator Reel"
            fill
            sizes="(max-width: 640px) 135px, (max-width: 768px) 195px, 260px"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-3 sm:bottom-4 md:bottom-5 px-2.5 sm:px-3 text-center pointer-events-none">
            <span className="block text-white font-extrabold text-[10px] sm:text-xs md:text-[13px] tracking-wider uppercase leading-tight drop-shadow-md">
              YOU KNOW
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Preserved Rotating 3D Wheel Component
 * -------------------------------------------------------------
 * NOTE: Preserved 100% intact per user request for future re-enablement.
 * Simply set SHOW_ROTATING_WHEEL = true to switch back to this rotating cylinder.
 */
export function ScrollStopperRotatingWheel() {
  const totalCards = CARDS.length;
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { cardWidth, cardHeight, radius } = useRingDimensions(totalCards);

  useRingAnimation({
    totalCards,
    radius,
    cardElementsRef,
    initialRotation: -30,
    speed: 0.038,
  });

  return (
    <motion.div
      variants={scrollStopperStageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-40px" }}
      className="relative my-6 sm:my-8 lg:my-0 lg:absolute lg:left-[51%] lg:top-[51%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[760px] xl:max-w-[820px] h-[260px] sm:h-[300px] md:h-[360px] lg:h-[460px] xl:h-[500px] mx-auto flex items-center justify-center pointer-events-none"
    >
      <div
        className="relative flex items-center justify-center w-full h-full pointer-events-none"
        style={{ perspective: "1100px" }}
      >
        <div
          className="relative flex items-center justify-center w-0 h-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateZ(19deg) rotateX(-37deg)",
          }}
        >
          <div
            className="relative flex items-center justify-center w-0 h-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {CARDS.map((card, idx) => {
              const angle = (idx * 360) / totalCards - 30;
              return (
                <StopperCardItem
                  key={card.id}
                  card={card}
                  idx={idx}
                  width={cardWidth}
                  height={cardHeight}
                  radius={radius}
                  angle={angle}
                  setRef={(el) => {
                    cardElementsRef.current[idx] = el;
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ScrollStopper() {
  const { topHeadline, description, bottomHeadline, ctaHref = "/contact" } =
    SCROLL_STOPPER_CONTENT;

  return (
    <section
      id="scroll-stopper"
      data-nav-theme="dark"
      className="relative w-full bg-[#07070a] text-white py-10 sm:py-14 lg:py-16 overflow-hidden select-none border-t border-white/10 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Subtle Gold Ambient Glow in Stage */}
      <div
        className="absolute bottom-10 right-1/4 w-[350px] h-[250px] bg-[#fdbb11]/5 blur-[120px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container
        size="lg"
        className="relative flex flex-col justify-between lg:min-h-175 xl:min-h-185 z-10"
      >
        {/* Top Headline with Masked Reveals */}
        <motion.div
          variants={scrollStopperHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="relative z-30 pointer-events-none mb-4 lg:mb-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.03] font-primary pointer-events-auto">
            <span className="block overflow-hidden py-1">
              <motion.span
                variants={scrollStopperTitleVariants}
                className="block origin-bottom-left"
              >
                {topHeadline.line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                variants={scrollStopperTitleVariants}
                className="block origin-bottom-left"
              >
                {topHeadline.line2}
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Center Stage: Renders 3-Card Fanned Showcase by default; Rotating Wheel preserved via toggle */}
        {SHOW_ROTATING_WHEEL ? (
          <ScrollStopperRotatingWheel />
        ) : (
          <ThreeCardsShowcase />
        )}

        {/* Bottom Row: Clear hierarchy with enlarged, readable copy */}
        <motion.div
          variants={scrollStopperBottomRowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-40px" }}
          className="relative z-30 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 pt-4 lg:pt-6"
        >
          <div className="w-full md:max-w-sm lg:max-w-[380px] xl:max-w-[420px] pointer-events-none">
            <motion.p
              variants={scrollStopperDescVariants}
              className="text-sm sm:text-[0.9375rem] lg:text-base text-neutral-400 font-primary leading-relaxed sm:leading-relaxed font-normal pointer-events-auto"
            >
              {description}
            </motion.p>
          </div>

          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Link
              href={ctaHref}
              className="group block text-left md:text-right"
              aria-label="Let's create something big"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.03] font-primary group-hover:text-[#fdbb11] transition-colors">
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    variants={scrollStopperCtaTitleVariants}
                    className="block origin-bottom-right"
                  >
                    {bottomHeadline.line1}
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    variants={scrollStopperCtaTitleVariants}
                    className="block origin-bottom-right"
                  >
                    {bottomHeadline.line2}
                  </motion.span>
                </span>
              </h2>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ScrollStopper;
