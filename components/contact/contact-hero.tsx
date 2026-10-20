"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { CONTACT_HERO_DATA, ContactHeroCardItem } from "@/constants/contact";
import {
  contactHeroContainerVariants,
  contactHeroHeadlineVariants,
  contactHeroSubtitleVariants,
  contactHeroCardsContainerVariants,
  contactHeroCardVariants,
  contactHeroBadgeVariants,
} from "@/animation/contact";
import { cn } from "@/lib/utils";

/**
 * Speech Bubble Pill Badge with Downward Pointer Tail
 */
function SpeechBubbleBadge({
  text,
  variant,
}: {
  text: string;
  variant: "blue" | "green";
}) {
  const isBlue = variant === "blue";

  return (
    <motion.div
      variants={contactHeroBadgeVariants}
      animate={{ y: [0, -3.5, 0] }}
      transition={{
        y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
      }}
      className={cn(
        "absolute -top-12 sm:-top-14 md:-top-16 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none",
        isBlue ? "text-[#1D70F7]" : "text-[#4A9E7D]"
      )}
    >
      <div
        className={cn(
          "relative inline-flex items-center justify-center rounded-full px-3.5 py-1.5 sm:px-4 sm:py-1.5",
          "text-white text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-tight whitespace-nowrap leading-none",
          isBlue
            ? "bg-[#1D70F7] shadow-[0_8px_20px_-3px_rgba(29,112,247,0.45)]"
            : "bg-[#4A9E7D] shadow-[0_8px_20px_-3px_rgba(74,158,125,0.45)]"
        )}
      >
        <span>{text}</span>

        {/* Crisp Downward Pointer Tail */}
        <svg
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-2.5 fill-current overflow-visible"
          viewBox="0 0 14 10"
        >
          <path d="M0 0 L7 10 L14 0 Z" />
        </svg>
      </div>
    </motion.div>
  );
}

/**
 * Single Fanned Deck Card
 */
function FannedCard({
  card,
  index,
}: {
  card: ContactHeroCardItem;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Z-index ascending from left to right (Card 0 behind Card 1 behind Card 2 ...)
  const baseZIndex = (index + 1) * 5;

  return (
    <div
      className={cn(
        "relative shrink-0 transition-transform duration-300 ease-out",
        index > 0 && "-ml-7 xs:-ml-9 sm:-ml-14 md:-ml-18 lg:-ml-22 xl:-ml-24"
      )}
      style={{
        zIndex: isHovered ? 70 : baseZIndex,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Bubble attached to specific cards (Card 1 and Card 6) */}
      {card.badge && (
        <SpeechBubbleBadge
          text={card.badge.text}
          variant={card.badge.variant}
        />
      )}

      {/* Card Body */}
      <motion.div
        variants={contactHeroCardVariants}
        animate={{
          rotate: isHovered ? 0 : card.rotation,
          y: isHovered ? -18 : card.yOffset,
          scale: isHovered ? 1.06 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 24,
        }}
        className={cn(
          "relative cursor-pointer overflow-hidden",
          "rounded-2xl sm:rounded-[1.35rem] lg:rounded-[1.5rem]",
          "w-[96px] xs:w-[120px] sm:w-[160px] md:w-[195px] lg:w-[225px] xl:w-[245px]",
          "aspect-square",
          "bg-white ring-1 ring-black/[0.08]",
          "shadow-[0_20px_45px_-8px_rgba(0,0,0,0.22),0_8px_18px_-4px_rgba(0,0,0,0.12)]",
          "hover:shadow-[0_32px_65px_-12px_rgba(0,0,0,0.32)]"
        )}
      >
        <Image
          src={card.src}
          alt={card.alt}
          fill
          priority={index < 5}
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 210px, 260px"
          className="object-cover object-center select-none pointer-events-none transition-transform duration-500 hover:scale-105"
        />

        {/* Subtle glass edge reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
      </motion.div>
    </div>
  );
}

export function ContactHero() {
  const { headline, description, cards } = CONTACT_HERO_DATA;

  return (
    <section
      id="contact-hero"
      data-nav-theme="light"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#F8F8F9] text-neutral-950 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-28"
    >
      {/* Soft Luminous Studio Radial Lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 12%, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 249, 0.8) 55%, rgba(238, 238, 241, 0.95) 100%)",
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-14">
        {/* Top Headline Block */}
        <Container size="lg" className="w-full flex flex-col items-center text-center">
          <motion.div
            variants={contactHeroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-4xl mx-auto px-2 sm:px-4 w-full"
          >
            {/* Headline with Masked Reveal Matching Home Hero Sizing */}
            <div className="overflow-hidden py-1 w-full flex justify-center">
              <motion.h1
                variants={contactHeroHeadlineVariants}
                className="text-[2.75rem] xs:text-[3.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight text-neutral-950 leading-[1.03] sm:leading-[1.06] font-primary text-center text-balance"
              >
                Let&apos;s start something.
              </motion.h1>
            </div>

            {/* Subtitle */}
            {description && (
              <motion.p
                variants={contactHeroSubtitleVariants}
                className="mt-2.5 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed max-w-lg mx-auto font-primary text-center text-pretty px-2"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </Container>

        {/* Fanned Cards Deck with Speech Bubbles */}
        <motion.div
          variants={contactHeroCardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex items-end justify-center relative pb-2 px-4 overflow-visible"
        >
          <div className="flex items-end justify-center max-w-full">
            {cards.map((card, index) => (
              <FannedCard
                key={card.id}
                card={card}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;
