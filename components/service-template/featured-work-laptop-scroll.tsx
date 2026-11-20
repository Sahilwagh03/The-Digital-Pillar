"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { ServiceFeaturedWorkData } from "@/constants/services";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeaturedWorkLaptopScrollProps {
  featuredWork: ServiceFeaturedWorkData;
}

export function FeaturedWorkLaptopScroll({
  featuredWork,
}: FeaturedWorkLaptopScrollProps) {
  const { headline, subtitle, items, tag = "FEATURED PLATFORMS" } = featuredWork;
  const [activeStep, setActiveStep] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedStageRef = useRef<HTMLDivElement | null>(null);
  const laptopTrackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinnedStage = pinnedStageRef.current;
      const laptopTrack = laptopTrackRef.current;

      if (!section || !pinnedStage || !laptopTrack || items.length === 0) return;

      const mm = gsap.matchMedia();

      // Desktop: Pinned Scrubbed Scroll Animation
      mm.add("(min-width: 1024px)", () => {
        gsap.set(laptopTrack, { yPercent: 0 });

        const count = items.length;
        const scrollDistance = (count - 1) * 750;

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedStage,
            pin: true,
            start: "top 90px",
            end: `+=${scrollDistance}`,
            scrub: 0.7,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const currentStep = Math.min(
                count - 1,
                Math.round(self.progress * (count - 1))
              );
              setActiveStep(currentStep);
            },
          },
        });

        for (let i = 0; i < count - 1; i++) {
          masterTl.to(
            laptopTrack,
            {
              yPercent: -(i + 1) * 100,
              ease: "power2.inOut",
              duration: 1,
            },
            i
          );
        }
      });
    },
    { scope: sectionRef, dependencies: [items] }
  );

  if (!items || items.length === 0) return null;

  const currentItem = items[activeStep] || items[0];
  const currentUrl =
    currentItem.liveUrl ||
    (currentItem.href && currentItem.href.startsWith("http")
      ? currentItem.href
      : currentItem.client
      ? `https://${currentItem.client.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`
      : "https://thedigitalpillar.com");
  const isExternal = /^https?:\/\//i.test(currentUrl);
  const isWidescreenWebsite = items.some(
    (item) => item.objectFit === "contain" || item.liveUrl
  );

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative w-full bg-transparent text-white pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Header without extra pills - ample margin so it never touches the pinned stage */}
      <Container size="lg" className="relative z-10 pb-6 sm:pb-8 border-b border-white/[0.06] mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#fdbb11] uppercase font-primary mb-2 sm:mb-3 drop-shadow-[0_0_10px_rgba(253,187,17,0.3)]">
              {tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.14] font-primary pb-1">
              {headline}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-primary max-w-sm md:text-right">
            {subtitle}
          </p>
        </div>
      </Container>

      {/* Pinned Stage: Perfectly Proportioned Centered Laptop */}
      <div ref={pinnedStageRef} className="w-full relative z-10">
        <Container size="full" className="max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[460px] lg:h-[calc(100vh-140px)] py-4 lg:py-0">
            {/* Centered Laptop Mockup - Scaled generously for full website visibility */}
            <div className="relative w-full max-w-[560px] sm:max-w-[700px] md:max-w-[840px] lg:max-w-[980px] xl:max-w-[1060px] flex flex-col items-center">
              {/* Laptop Display Top Shell / Bezel */}
              <div className="relative w-full rounded-t-2xl sm:rounded-t-3xl bg-[#0c0d13] border-[7px] sm:border-[8px] lg:border-[10px] border-[#181a24] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(253,187,17,0.12)] ring-1 ring-white/10 overflow-hidden">
                {/* Laptop Top Center Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-2 sm:h-2.5 bg-[#181a24] rounded-b-md z-30 flex items-center justify-center gap-1 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-700" />
                </div>

                {/* Browser Navigation Bar */}
                <div className="w-full bg-[#13151f] border-b border-white/[0.08] px-3 sm:px-4 py-2 flex items-center justify-between text-xs select-none z-20 shrink-0">
                  {/* Traffic Light Window Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]/90 shadow-sm" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]/90 shadow-sm" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]/90 shadow-sm" />
                  </div>

                  {/* Browser URL Input Bar */}
                  {isExternal ? (
                    <a
                      href={currentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#090a10] hover:bg-white/[0.08] hover:border-[#fdbb11]/50 border border-white/10 rounded-md px-3 sm:px-4 py-0.5 text-[10px] sm:text-[11px] font-mono text-neutral-300 max-w-[240px] sm:max-w-[360px] md:max-w-[420px] truncate flex items-center gap-1.5 shadow-inner transition-colors group/url cursor-pointer"
                      title={`Open ${currentUrl} in new tab`}
                    >
                      <span className="text-[#fdbb11] text-[9px]">🔒</span>
                      <span className="truncate group-hover/url:text-[#fdbb11] transition-colors">
                        {currentUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-neutral-400 group-hover/url:text-[#fdbb11] shrink-0 transition-transform group-hover/url:translate-x-0.5 group-hover/url:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div className="bg-[#090a10] border border-white/10 rounded-md px-3 sm:px-4 py-0.5 text-[10px] sm:text-[11px] font-mono text-neutral-300 max-w-[200px] sm:max-w-[280px] truncate flex items-center gap-1.5 shadow-inner">
                      <span className="text-[#fdbb11] text-[9px]">🔒</span>
                      <span className="truncate">{currentUrl}</span>
                    </div>
                  )}

                  {/* Right Status Counter */}
                  <div className="flex items-center text-[10px] font-mono text-neutral-500">
                    <span className="font-semibold text-[#fdbb11]/80">
                      0{activeStep + 1} / 0{items.length}
                    </span>
                  </div>
                </div>

                {/* Laptop Screen Display Window - Matches exact website screenshot proportions (no empty gaps) */}
                <div
                  className={cn(
                    "w-full overflow-hidden relative bg-black",
                    isWidescreenWebsite ? "aspect-[1024/454]" : "aspect-[16/9]"
                  )}
                >
                  <div
                    ref={laptopTrackRef}
                    style={{
                      transform:
                        typeof window !== "undefined" && window.innerWidth < 1024
                          ? `translateY(-${activeStep * 100}%)`
                          : undefined,
                      transition:
                        typeof window !== "undefined" && window.innerWidth < 1024
                          ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                          : undefined,
                    }}
                    className="flex flex-col w-full h-full will-change-transform"
                  >
                    {items.map((item, idx) => {
                      const targetUrl =
                        item.liveUrl ||
                        (item.href && item.href.startsWith("http") ? item.href : undefined);

                      const slideContent = (
                        <>
                          <MediaCard
                            src={item.videoSrc || item.imageSrc}
                            type={item.videoSrc ? "video" : "image"}
                            poster={item.poster || item.imageSrc}
                            alt={item.imageAlt}
                            priority={idx === 0}
                            className="w-full h-full absolute inset-0 bg-black"
                            mediaClassName={cn(
                              "w-full h-full",
                              isWidescreenWebsite
                                ? "object-cover object-top"
                                : item.objectFit === "cover"
                                ? "object-cover object-center"
                                : "object-contain object-center"
                            )}
                          />
                          {targetUrl && (
                            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 opacity-0 group-hover/slide:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/slide:translate-y-0 pointer-events-none">
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#fdbb11]/50 text-[#fdbb11] text-[10px] sm:text-xs font-mono font-medium shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                                VISIT LIVE SITE
                                <ArrowUpRight className="w-3 h-3" />
                              </span>
                            </div>
                          )}
                        </>
                      );

                      return targetUrl ? (
                        <a
                          key={item.id || idx}
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/slide w-full h-full shrink-0 relative bg-black overflow-hidden block cursor-pointer"
                          title={`Visit ${item.client || item.title}`}
                        >
                          {slideContent}
                        </a>
                      ) : (
                        <div
                          key={item.id || idx}
                          className="w-full h-full shrink-0 relative bg-black overflow-hidden"
                        >
                          {slideContent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Laptop Bottom Aluminum Chassis Base */}
              <div className="relative w-[112%] h-3 sm:h-4 lg:h-5 bg-gradient-to-b from-[#2d3142] via-[#1c1f2b] to-[#12141c] rounded-b-xl sm:rounded-b-2xl shadow-[0_25px_50px_rgba(0,0,0,0.95)] border-t border-white/20 flex justify-center z-10">
                {/* Display Opener Notch */}
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-[#0a0b0f] rounded-b-md" />
              </div>

              {/* Ambient Under-Laptop Glow */}
              <div className="w-[88%] mx-auto h-3.5 bg-gradient-to-r from-transparent via-[#fdbb11]/20 to-transparent blur-md -mt-1 pointer-events-none" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default FeaturedWorkLaptopScroll;
