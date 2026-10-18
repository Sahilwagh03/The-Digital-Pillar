"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ABOUT_TEAM_DATA, TeamMember } from "@/constants/about";
import { useAboutTeamAnimation } from "@/animation/about-team";
import { cn } from "@/lib/utils";

export interface AboutTeamProps {
  id?: string;
  tag?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  members?: TeamMember[];
  className?: string;
}

export function AboutTeam({
  id = "team",
  tag,
  headlineLine1,
  headlineLine2,
  members = ABOUT_TEAM_DATA.members,
  className,
}: AboutTeamProps) {
  const activeTag = tag !== undefined ? tag : ABOUT_TEAM_DATA.tag;
  const activeHeadlineLine1 = headlineLine1 || ABOUT_TEAM_DATA.headlineLine1;
  const activeHeadlineLine2 = headlineLine2 || ABOUT_TEAM_DATA.headlineLine2;

  const total = members.length;
  const { sectionRef, pinnedRef, trackRef, registerCard, scrollToIndex } =
    useAboutTeamAnimation(total);

  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const handleMobilePrev = () => {
    setMobileActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleMobileNext = () => {
    setMobileActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  const activeMobileMember = members[mobileActiveIndex];
  const isMobileWide = activeMobileMember?.size === "wide";

  return (
    <section
      id={id}
      ref={sectionRef}
      data-nav-theme="dark"
      className={cn(
        "relative w-full bg-[#050505] text-white select-none overflow-clip",
        className
      )}
    >
      {/* ==================================================================== */}
      {/* DESKTOP PINNED STAGE (min-width: 1024px)                              */}
      {/* ==================================================================== */}
      <div
        ref={pinnedRef}
        className="hidden lg:block w-full h-screen relative overflow-hidden bg-[#050505]"
      >
        {/* PINNED BOTTOM-LEFT HEADER: Stays fixed over sliding cards */}
        <div className="absolute bottom-16 xl:bottom-20 left-8 sm:left-12 lg:left-16 xl:left-24 z-20 pointer-events-none max-w-xl">
          {activeTag ? (
            <span className="text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-400 uppercase font-primary mb-3 sm:mb-4 block">
              {activeTag}
            </span>
          ) : null}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem] font-bold text-white tracking-[-0.03em] leading-[0.98] font-primary select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            {activeHeadlineLine1}
            <br />
            {activeHeadlineLine2}
          </h2>
        </div>

        {/* HORIZONTAL DIVIDER LINE: Runs edge-to-edge near the bottom */}
        <div className="absolute bottom-12 xl:bottom-14 left-0 right-0 border-b border-neutral-800/80 z-10 pointer-events-none" />

        {/* HORIZONTAL SLIDING CARDS TRACK */}
        <div className="absolute inset-0 flex items-end pb-16 xl:pb-20 z-10 pointer-events-auto">
          <div
            ref={trackRef}
            className="flex items-end gap-8 xl:gap-10 2xl:gap-12 will-change-transform"
            style={{
              paddingLeft: "max(44vw, 620px)",
              paddingRight: "48px",
            }}
          >
            {members.map((member, idx) => {
              const isWide = member.size === "wide";

              return (
                <div
                  key={member.id}
                  ref={registerCard(idx)}
                  onClick={() => scrollToIndex(idx)}
                  className={cn(
                    "group relative flex-shrink-0 h-[440px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] bg-neutral-950 overflow-hidden cursor-pointer select-none transition-all duration-300 border border-white/5 hover:border-white/20",
                    isWide
                      ? "w-[480px] sm:w-[560px] lg:w-[680px] xl:w-[780px] 2xl:w-[860px]"
                      : "w-[300px] sm:w-[340px] lg:w-[380px] xl:w-[420px] 2xl:w-[460px]"
                  )}
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt || member.name}
                    fill
                    priority={idx < 2}
                    sizes={
                      isWide
                        ? "(max-width: 1280px) 780px, 860px"
                        : "(max-width: 1280px) 420px, 460px"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                  />

                  {/* Dark gradient overlay at bottom for optimal text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                  {/* Member / Team Info in Bottom-Right Corner */}
                  <div className="absolute bottom-6 right-6 sm:bottom-7 sm:right-7 xl:bottom-8 xl:right-8 text-right z-10 pointer-events-none">
                    <h3 className="text-xl sm:text-2xl xl:text-[1.65rem] font-bold font-primary text-white tracking-tight leading-snug drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-primary text-neutral-300 font-normal mt-0.5 tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MOBILE & TABLET RESPONSIVE VIEW (< 1024px)                           */}
      {/* ==================================================================== */}
      <div className="block lg:hidden w-full py-16 sm:py-24 bg-[#050505]">
        <Container size="lg">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              {activeTag ? (
                <span className="inline-block text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase font-primary mb-2.5">
                  {activeTag}
                </span>
              ) : null}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] font-primary">
                {activeHeadlineLine1}
                <br />
                {activeHeadlineLine2}
              </h2>
            </div>

            {/* Mobile Card Carousel with Adaptive Aspect Ratio */}
            <div className="relative w-full flex flex-col items-center">
              <div
                className={cn(
                  "relative w-full mx-auto bg-neutral-950 overflow-hidden border border-white/10 shadow-2xl transition-all duration-300",
                  isMobileWide
                    ? "max-w-[560px] aspect-[16/10]"
                    : "max-w-[420px] aspect-[3/4]"
                )}
              >
                <Image
                  src={activeMobileMember.imageSrc}
                  alt={
                    activeMobileMember.imageAlt || activeMobileMember.name
                  }
                  fill
                  sizes="(max-width: 640px) 100vw, 560px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                <div className="absolute bottom-6 right-6 text-right">
                  <h3 className="text-2xl font-bold font-primary text-white tracking-tight leading-snug">
                    {activeMobileMember.name}
                  </h3>
                  <p className="text-sm font-primary text-neutral-300 font-normal mt-0.5">
                    {activeMobileMember.role}
                  </p>
                </div>
              </div>

              {/* Mobile Carousel Controls */}
              <div
                className={cn(
                  "w-full flex items-center justify-between mt-6 pt-4 border-t border-neutral-800 transition-all",
                  isMobileWide ? "max-w-[560px]" : "max-w-[420px]"
                )}
              >
                <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-neutral-400">
                  <span>
                    {String(mobileActiveIndex + 1).padStart(2, "0")}
                  </span>
                  <span>/</span>
                  <span>{String(total).padStart(2, "0")}</span>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {members.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setMobileActiveIndex(dotIdx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        mobileActiveIndex === dotIdx
                          ? "w-6 bg-white"
                          : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
                      )}
                      aria-label={`Go to team member ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Chevrons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleMobilePrev}
                    aria-label="Previous team member"
                    className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-200 active:scale-95 hover:bg-neutral-800 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleMobileNext}
                    aria-label="Next team member"
                    className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-200 active:scale-95 hover:bg-neutral-800 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default AboutTeam;
