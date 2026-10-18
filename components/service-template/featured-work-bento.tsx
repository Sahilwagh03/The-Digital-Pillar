"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { ServiceFeaturedWorkData } from "@/constants/services";

interface FeaturedWorkBentoProps {
  featuredWork: ServiceFeaturedWorkData;
}

export function FeaturedWorkBento({ featuredWork }: FeaturedWorkBentoProps) {
  const { headline, subtitle, items } = featuredWork;
  const [topItem, midLeftItem, midRightItem, bottomItem] = items;

  return (
    <section
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-white/[0.06]"
    >
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 lg:pb-20">
          <div>
            {featuredWork.tag && (
              <span className="block text-[11px] sm:text-xs font-semibold tracking-widest text-[#d95c27] uppercase font-primary mb-3">
                {featuredWork.tag}
              </span>
            )}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] font-primary">
              {headline}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-primary max-w-xs md:text-right">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {topItem && (
            <div className="group relative w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl cursor-pointer transition-all duration-500 hover:border-white/20">
              <Link href={topItem.href || "/work"} className="block w-full h-full relative">
                <MediaCard
                  src={topItem.videoSrc || topItem.imageSrc}
                  type={topItem.videoSrc ? "video" : "image"}
                  poster={topItem.poster || topItem.imageSrc}
                  alt={topItem.imageAlt}
                  priority
                  className="w-full h-full"
                  mediaClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="block text-[11px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase font-primary mb-1.5 sm:mb-2">
                      {topItem.category}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight font-primary">
                      {topItem.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {midLeftItem && (
              <div className="group relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl cursor-pointer transition-all duration-500 hover:border-white/20">
                <Link href={midLeftItem.href || "/work"} className="block w-full h-full relative">
                  <MediaCard
                    src={midLeftItem.videoSrc || midLeftItem.imageSrc}
                    type={midLeftItem.videoSrc ? "video" : "image"}
                    poster={midLeftItem.poster || midLeftItem.imageSrc}
                    alt={midLeftItem.imageAlt}
                    className="w-full h-full"
                    mediaClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-end justify-between pointer-events-none">
                    <div>
                      <span className="block text-[11px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase font-primary mb-1">
                        {midLeftItem.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight font-primary">
                        {midLeftItem.title}
                      </h3>
                    </div>

                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {midRightItem && (
              <div className="group relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl cursor-pointer transition-all duration-500 hover:border-white/20">
                <Link href={midRightItem.href || "/work"} className="block w-full h-full relative">
                  <MediaCard
                    src={midRightItem.videoSrc || midRightItem.imageSrc}
                    type={midRightItem.videoSrc ? "video" : "image"}
                    poster={midRightItem.poster || midRightItem.imageSrc}
                    alt={midRightItem.imageAlt}
                    className="w-full h-full"
                    mediaClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-end justify-between pointer-events-none">
                    <div>
                      <span className="block text-[11px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase font-primary mb-1">
                        {midRightItem.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight font-primary">
                        {midRightItem.title}
                      </h3>
                    </div>

                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {bottomItem && (
            <div className="group relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl cursor-pointer transition-all duration-500 hover:border-white/20">
              <Link href={bottomItem.href || "/work"} className="block w-full h-full relative">
                <MediaCard
                  src={bottomItem.videoSrc || bottomItem.imageSrc}
                  type={bottomItem.videoSrc ? "video" : "image"}
                  poster={bottomItem.poster || bottomItem.imageSrc}
                  alt={bottomItem.imageAlt}
                  className="w-full h-full"
                  mediaClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="block text-[11px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase font-primary mb-1">
                      {bottomItem.category}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight font-primary">
                      {bottomItem.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
