"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SCROLL_STOPPER_CONTENT } from "@/constants/scroll-stopper";
import { useRingDimensions } from "@/hooks/useRingDimensions";
import { useRingAnimation } from "@/hooks/useRingAnimation";
import { StopperCardItem, CardSpec } from "./scroll-stopper-card";

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

import { motion } from "motion/react";
import {
  scrollStopperHeaderVariants,
  scrollStopperTitleVariants,
  scrollStopperStageVariants,
  scrollStopperBottomRowVariants,
  scrollStopperDescVariants,
  scrollStopperCtaTitleVariants,
} from "@/animation/scroll-stopper";

export function ScrollStopper() {
  const { topHeadline, description, bottomHeadline, ctaHref = "/contact" } =
    SCROLL_STOPPER_CONTENT;

  const totalCards = CARDS.length;
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { cardWidth, cardHeight, radius } = useRingDimensions(totalCards);

  const rotationRef = useRingAnimation({
    totalCards,
    radius,
    cardElementsRef,
    initialRotation: -30,
    speed: 0.038,
  });

  return (
    <section
      id="scroll-stopper"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 py-10 sm:py-14 lg:py-16 overflow-hidden select-none border-t border-neutral-200/80 scroll-mt-20 sm:scroll-mt-24"
    >
      <Container
        size="lg"
        className="relative flex flex-col justify-between lg:min-h-175 xl:min-h-185"
      >
        {/* Top Headline with Masked Reveals */}
        <motion.div
          variants={scrollStopperHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="relative z-30 pointer-events-none mb-4 lg:mb-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-neutral-950 leading-[1.03] font-primary pointer-events-auto">
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

        {/* 3D Rotating Cylinder Stage: centered & responsive across mobile, tablet, and desktop */}
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
                  const angle = (idx * 360) / totalCards + rotationRef.current;
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
              className="text-sm sm:text-[0.9375rem] lg:text-base text-neutral-700 font-primary leading-relaxed sm:leading-relaxed font-normal pointer-events-auto"
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-neutral-950 leading-[1.03] font-primary group-hover:text-neutral-700 transition-colors">
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
