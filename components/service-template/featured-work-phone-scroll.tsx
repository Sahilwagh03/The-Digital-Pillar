"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";
import { MediaCard } from "@/components/ui/media-card";
import { ServiceFeaturedWorkData } from "@/constants/services";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeaturedWorkPhoneScrollProps {
  featuredWork: ServiceFeaturedWorkData;
}

export function FeaturedWorkPhoneScroll({
  featuredWork,
}: FeaturedWorkPhoneScrollProps) {
  const { headline, subtitle, items, tag = "FEATURED REELS" } = featuredWork;
  const [activeStep, setActiveStep] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedStageRef = useRef<HTMLDivElement | null>(null);
  const phoneTrackRef = useRef<HTMLDivElement | null>(null);
  const contentSlidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerInstanceRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinnedStage = pinnedStageRef.current;
      const phoneTrack = phoneTrackRef.current;
      const contentSlides = contentSlidesRef.current;

      if (!section || !pinnedStage || !phoneTrack || items.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        contentSlides.forEach((slide, idx) => {
          if (!slide) return;
          if (idx === 0) {
            gsap.set(slide, { opacity: 1, y: 0, pointerEvents: "auto" });
          } else {
            gsap.set(slide, { opacity: 0, y: 30, pointerEvents: "none" });
          }
        });

        gsap.set(phoneTrack, { yPercent: 0 });

        const count = items.length;
        const scrollDistance = (count - 1) * 900;

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

        scrollTriggerInstanceRef.current = masterTl.scrollTrigger || null;

        for (let i = 0; i < count - 1; i++) {
          const startTime = i;

          masterTl.to(
            phoneTrack,
            {
              yPercent: -(i + 1) * 100,
              ease: "power2.inOut",
              duration: 1,
            },
            startTime
          );

          if (contentSlides[i]) {
            masterTl.to(
              contentSlides[i],
              {
                opacity: 0,
                y: -25,
                ease: "power2.in",
                duration: 0.45,
                pointerEvents: "none",
              },
              startTime
            );
          }

          if (contentSlides[i + 1]) {
            masterTl.fromTo(
              contentSlides[i + 1],
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 0.55,
                pointerEvents: "auto",
              },
              startTime + 0.35
            );
          }
        }
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef, dependencies: [items.length] }
  );

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);

    if (scrollTriggerInstanceRef.current && window.innerWidth >= 1024) {
      const st = scrollTriggerInstanceRef.current;
      const targetProgress = stepIndex / Math.max(1, items.length - 1);
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } else {
      if (phoneTrackRef.current) {
        gsap.to(phoneTrackRef.current, {
          yPercent: -stepIndex * 100,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden border-t border-white/[0.06]"
    >
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-[#d95c27]/8 blur-[160px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10 pb-10 sm:pb-14 border-b border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase font-primary mb-3">
              {tag}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] font-primary">
              {headline}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-primary max-w-sm md:text-right">
            {subtitle}
          </p>
        </div>
      </Container>

      <div
        ref={pinnedStageRef}
        className="w-full relative z-10"
      >
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center min-h-[520px] lg:h-[calc(100vh-100px)] py-6 lg:py-0">
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-[210px] sm:w-[230px] lg:w-[250px] xl:w-[265px] h-[430px] sm:h-[470px] lg:h-[510px] xl:h-[540px] rounded-[42px] bg-neutral-950 p-2 sm:p-2.5 border-[4px] border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(217,92,39,0.1)] ring-1 ring-white/10 shrink-0">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-end pr-1.5 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-700" />
                </div>

                <div className="w-full h-full rounded-[34px] overflow-hidden relative bg-black">
                  <div
                    ref={phoneTrackRef}
                    className="flex flex-col w-full h-full will-change-transform"
                  >
                    {items.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        className="w-full h-full shrink-0 relative bg-black"
                      >
                        <MediaCard
                          src={item.videoSrc || item.imageSrc}
                          type={item.videoSrc ? "video" : "image"}
                          poster={item.poster || item.imageSrc}
                          alt={item.imageAlt}
                          priority={idx === 0}
                          className="w-full h-full absolute inset-0"
                          mediaClassName="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none"
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px] flex items-center">
              <div className="hidden lg:block w-full relative">
                {items.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    ref={(el) => {
                      contentSlidesRef.current[idx] = el;
                    }}
                    className="absolute top-1/2 -translate-y-1/2 inset-x-0 w-full"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-semibold text-amber-400 tracking-[0.2em] uppercase">
                          {item.category}
                        </span>
                        {item.client && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-neutral-600" />
                            <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
                              {item.client}
                            </span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {items.map((_, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleStepClick(sIdx)}
                            className={cn(
                              "px-2.5 py-1 text-[11px] font-mono rounded-full transition-all duration-300",
                              activeStep === sIdx
                                ? "bg-white text-black font-semibold scale-105"
                                : "bg-white/5 text-neutral-500 hover:text-white"
                            )}
                          >
                            0{sIdx + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    {item.metric && (
                      <div className="flex items-baseline gap-4 my-3 sm:my-5">
                        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-primary leading-none">
                          {item.metric}
                        </span>
                        {item.metricLabel && (
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wider font-primary">
                              {item.metricLabel}
                            </span>
                            <span className="text-[11px] text-neutral-400 font-mono tracking-wide">
                              Measured Campaign Lift
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug font-primary mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl font-primary mb-6">
                      {item.description ||
                        "Engineered for high conversion velocity, native audience retention, and algorithmic amplification across modern social channels."}
                    </p>

                    {item.deliverables && item.deliverables.length > 0 && (
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-white/[0.08] mb-6">
                        {item.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs font-mono text-neutral-300 uppercase tracking-wider"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="block lg:hidden w-full">
                <div className="flex items-center gap-2 mb-4">
                  {items.map((_, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleStepClick(sIdx)}
                      className={cn(
                        "px-3 py-1 text-xs font-mono rounded-full transition-all",
                        activeStep === sIdx
                          ? "bg-[#d95c27] text-white font-semibold"
                          : "bg-white/5 text-neutral-400 hover:text-white"
                      )}
                    >
                      0{sIdx + 1}
                    </button>
                  ))}
                </div>

                {items[activeStep] && (
                  <div>
                    <span className="block text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2">
                      0{activeStep + 1} // {items[activeStep].category}
                    </span>

                    {items[activeStep].metric && (
                      <div className="flex items-baseline gap-3 my-3">
                        <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-primary leading-none">
                          {items[activeStep].metric}
                        </span>
                        {items[activeStep].metricLabel && (
                          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-primary">
                            {items[activeStep].metricLabel}
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-white tracking-tight leading-snug font-primary mb-3">
                      {items[activeStep].title}
                    </h3>

                    <p className="text-sm text-neutral-400 font-normal leading-relaxed font-primary mb-5">
                      {items[activeStep].description}
                    </p>

                    {items[activeStep].deliverables && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08] mb-5">
                        {items[activeStep].deliverables.map((deliv, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
