import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  HERO_CONTENT,
  HERO_SOCIAL_PROOF,
  HERO_SCROLL_INDICATOR,
} from "@/constants/hero";

export function Hero() {
  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative h-svh w-full flex flex-col justify-between overflow-hidden bg-[#070707]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="The Digital Pillar"
          fill
          priority
          quality={95}
          className="object-cover object-[center_32%] select-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/55 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full w-full pt-16 sm:pt-24 pb-6 sm:pb-8">
        <Container size="lg" className="w-full h-full flex flex-col justify-between">
          <div className="my-auto flex flex-col justify-between gap-4 sm:gap-7">
            <div className="w-full max-w-4xl flex flex-col items-start">
              <h1 className="text-[2.75rem] xs:text-[4rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight text-white leading-[0.98] sm:leading-[1.06] font-primary text-balance">
                {HERO_CONTENT.titleLine1}
                <br />
                {HERO_CONTENT.titleLine2}
                <br />
                {HERO_CONTENT.titleLine3}
              </h1>

              <p className="mt-4 sm:mt-5 text-[1rem] sm:text-base text-zinc-200 sm:text-zinc-300/80 w-full max-w-xl leading-relaxed font-primary font-normal text-pretty">
                {HERO_CONTENT.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 pt-1">
              <Link
                href={HERO_CONTENT.cta.href}
                className="group inline-flex items-center gap-2.5 text-sm sm:text-[0.8125rem] font-semibold tracking-[0.18em] text-white uppercase"
              >
                <span className="border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                  {HERO_CONTENT.cta.label}
                </span>
                <span className="text-base sm:text-sm transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>

              <div className="flex items-center gap-3.5">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {HERO_SOCIAL_PROOF.avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-black/80 overflow-hidden shrink-0 shadow-md"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="2.5rem"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-white gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 fill-white text-white"
                        />
                      ))}
                    </div>
                    <span className="text-sm sm:text-xs font-bold sm:font-semibold text-white">
                      {HERO_SOCIAL_PROOF.rating}
                    </span>
                  </div>
                  <p className="text-[0.75rem] sm:text-xs text-white/90 sm:text-white/80 mt-0.5 font-normal tracking-tight">
                    {HERO_SOCIAL_PROOF.label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-1 pb-2 sm:pb-3 flex flex-col items-center justify-center text-center shrink-0">
            <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
              <a
                href={`#${HERO_SCROLL_INDICATOR.targetId}`}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-white/80 transition-all duration-300 hover:border-white/50 hover:text-white hover:scale-105 shadow-sm"
                aria-label={HERO_SCROLL_INDICATOR.label}
              >
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <span className="text-[0.6875rem] sm:text-xs text-zinc-300 sm:text-zinc-400 tracking-wide font-normal">
                {HERO_SCROLL_INDICATOR.label}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
