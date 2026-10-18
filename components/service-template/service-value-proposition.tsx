"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ServiceValuePropositionData } from "@/constants/services";

interface ServiceValuePropositionProps {
  valueProposition: ServiceValuePropositionData;
}

export function ServiceValueProposition({
  valueProposition,
}: ServiceValuePropositionProps) {
  const { headline, card1, card2, card3 } = valueProposition;

  return (
    <section
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36 overflow-hidden"
    >
      <Container size="lg">
        <div className="max-w-4xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-medium sm:font-semibold text-white tracking-tight leading-[1.18] font-primary">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          <div className="group relative h-[300px] sm:h-[340px] lg:h-[380px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-end overflow-hidden border border-white/10 bg-gradient-to-br from-[#c85a28]/35 via-[#23120b] to-[#0c0806] shadow-xl transition-all duration-500 hover:border-white/20">
            <div
              className="absolute -top-12 -left-12 w-64 h-64 bg-[#e86f34]/40 blur-3xl rounded-full pointer-events-none transition-transform duration-700 ease-out group-hover:scale-125"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 bg-[#963712]/30 blur-2xl rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white font-primary leading-snug">
                {card1.title}
              </h3>
              {card1.description && (
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-primary leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card1.description}
                </p>
              )}
            </div>
          </div>

          <div className="group relative h-[300px] sm:h-[340px] lg:h-[380px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-end overflow-hidden border border-white/10 bg-neutral-950 shadow-xl transition-all duration-500 hover:border-white/20">
            <Image
              src={card2.imageSrc}
              alt={card2.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white font-primary leading-snug">
                {card2.title}
              </h3>
              {card2.description && (
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-primary leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card2.description}
                </p>
              )}
            </div>
          </div>

          <div className="group relative h-[300px] sm:h-[340px] lg:h-[380px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-white/10 bg-[#0e0e0e] shadow-xl transition-all duration-500 hover:border-white/20">
            <div className="flex items-baseline gap-2.5">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-primary">
                {card3.metric}
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400 font-primary">
                {card3.metricLabel}
              </span>
            </div>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <span className="text-sm sm:text-base font-medium tracking-tight text-neutral-200 font-primary">
                {card3.title}
              </span>

              <div className="flex items-center -space-x-3 shrink-0">
                {card3.avatars.map((avatarSrc, idx) => (
                  <div
                    key={idx}
                    className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#0e0e0e] shadow-md bg-neutral-800"
                  >
                    <Image
                      src={avatarSrc}
                      alt={`Partner avatar ${idx + 1}`}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
