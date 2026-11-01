"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, TrendingUp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { ServiceFeaturedWorkData } from "@/constants/services";
import { cn } from "@/lib/utils";

interface FeaturedWorkCardsInlineProps {
  featuredWork: ServiceFeaturedWorkData;
}

export function FeaturedWorkCardsInline({
  featuredWork,
}: FeaturedWorkCardsInlineProps) {
  const { headline, subtitle, items, tag = "FEATURED PROFILES" } = featuredWork;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentScrollIdx, setCurrentScrollIdx] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const cardWidth = 380;
    const idx = Math.min(items.length - 1, Math.max(0, Math.round(scrollLeft / cardWidth)));
    setCurrentScrollIdx(idx);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [items.length]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-white/[0.06]"
    >
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#fdbb11]/8 blur-[160px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbb11]/10 border border-[#fdbb11]/30 text-[#fdbb11] text-[11px] font-mono uppercase tracking-widest mb-3 shadow-[0_0_12px_rgba(253,187,17,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] font-primary">
              {headline}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between md:justify-end gap-6">
            <p className="text-xs sm:text-sm text-neutral-400 font-primary max-w-xs">
              {subtitle}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 tracking-widest mr-2 select-none">
                <span className="text-[#fdbb11] font-bold">0{currentScrollIdx + 1}</span> / 0{items.length}
              </span>

              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={cn(
                  "w-11 h-11 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300",
                  canScrollLeft
                    ? "hover:bg-[#fdbb11] hover:text-black hover:border-[#fdbb11] hover:shadow-[0_0_15px_rgba(253,187,17,0.5)] cursor-pointer"
                    : "opacity-30 cursor-not-allowed"
                )}
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={cn(
                  "w-11 h-11 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300",
                  canScrollRight
                    ? "hover:bg-[#fdbb11] hover:text-black hover:border-[#fdbb11] hover:shadow-[0_0_15px_rgba(253,187,17,0.5)] cursor-pointer"
                    : "opacity-30 cursor-not-allowed"
                )}
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto no-scrollbar scroll-smooth py-8 -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing"
        >
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="w-[300px] sm:w-[370px] lg:w-[410px] h-[520px] sm:h-[580px] shrink-0 rounded-3xl overflow-hidden relative group border border-white/10 bg-neutral-950 transition-all duration-500 hover:border-[#fdbb11]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(253,187,17,0.15)] flex flex-col justify-between p-6 sm:p-8"
            >
              <MediaCard
                src={item.videoSrc || item.imageSrc}
                type={item.videoSrc ? "video" : "image"}
                poster={item.poster || item.imageSrc}
                alt={item.imageAlt}
                priority={idx === 0}
                className="w-full h-full absolute inset-0 -z-0"
                mediaClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35 group-hover:via-black/50 transition-colors pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-start justify-between gap-2">
                <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-200 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  {item.category}
                </span>

                {item.metric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdbb11]/15 border border-[#fdbb11]/35 text-[#fdbb11] text-xs font-mono font-semibold backdrop-blur-md shadow-[0_0_12px_rgba(253,187,17,0.25)]">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </div>
                )}
              </div>

              <div className="relative z-10 pt-4">
                {item.client && (
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1.5">
                    {item.client}
                  </p>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-primary mb-3">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs sm:text-sm text-neutral-300 font-primary line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {item.deliverables && item.deliverables.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.deliverables.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[10px] rounded-full bg-white/10 border border-white/15 text-neutral-300 font-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={item.href || "/work"}
                  className="flex items-center justify-between pt-3.5 border-t border-white/15 group/link"
                >
                  <span className="text-xs font-semibold tracking-wider text-white uppercase font-primary group-hover/link:text-[#fdbb11] transition-colors">
                    Explore Profile
                  </span>

                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover/link:bg-[#fdbb11] group-hover/link:text-black group-hover/link:border-[#fdbb11] group-hover/link:shadow-[0_0_15px_rgba(253,187,17,0.5)] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
