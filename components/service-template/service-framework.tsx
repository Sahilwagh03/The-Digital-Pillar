"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ServiceFrameworkData } from "@/constants/services";
import { useServiceFrameworkAnimation } from "@/animation/service-framework";

interface ServiceFrameworkProps {
  framework: ServiceFrameworkData;
}

export function ServiceFramework({ framework }: ServiceFrameworkProps) {
  const { tag, headline, description, steps } = framework;
  const [, setHoveredIndex] = useState<number | null>(null);

  const {
    containerRef,
    junction1FillRef,
    junction2FillRef,
    junction3FillRef,
    registerCard,
    registerBadge,
    registerMobileLine,
  } = useServiceFrameworkAnimation();

  const descText =
    description ||
    "Our systematic four-phase methodology engineers category authority from initial insight to omnipresent market execution. Together with our clients, we build enduring competitive advantage and achieve compounding online growth.";

  const headlineWords = headline.split(" ");
  const midIndex = Math.ceil(headlineWords.length / 2);
  const headlineLine1 = headlineWords.slice(0, midIndex).join(" ");
  const headlineLine2 = headlineWords.slice(midIndex).join(" ");

  return (
    <section
      id="process"
      data-nav-theme="light"
      className="relative w-full bg-[#f6f6f6] text-neutral-900 py-24 sm:py-32 lg:py-40 overflow-hidden select-none"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-32 lg:pt-4">
            <div>
              <span className="inline-block text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-500 uppercase font-primary mb-4 sm:mb-6">
                {tag || "OUR PROCESS"}
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-neutral-950 tracking-tight leading-[1.04] font-primary mb-6 sm:mb-8 text-balance">
                <span className="block">{headlineLine1}</span>
                <span className="block">{headlineLine2}</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md font-primary mb-8 sm:mb-10">
                {descText}
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 pb-1 border-b border-neutral-950 text-xs sm:text-[0.8125rem] font-semibold tracking-wider uppercase text-neutral-950 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                <span>EXPLORE OUR PROCESS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div
              ref={containerRef}
              className="hidden sm:block w-full max-w-[620px] relative"
            >
              <div className="relative w-full bg-[#f6f6f6] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div
                    className="absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none"
                    style={{ left: "50%", top: "25%" }}
                  >
                    <div className="absolute inset-0 bg-neutral-200/50" />
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ transform: "rotate(45deg)" }}
                    >
                      <div
                        ref={junction1FillRef}
                        className="w-[180%] h-[200%] absolute flex flex-col justify-end pointer-events-none"
                      >
                        <div className="w-full h-full bg-[#0a0a0a]" />
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none"
                    style={{ left: "50%", top: "50%" }}
                  >
                    <div className="absolute inset-0 bg-neutral-200/50" />
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ transform: "rotate(-45deg)" }}
                    >
                      <div
                        ref={junction2FillRef}
                        className="w-[180%] h-[200%] absolute flex flex-col justify-end pointer-events-none"
                      >
                        <div className="w-full h-full bg-[#0a0a0a]" />
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none"
                    style={{ left: "50%", top: "75%" }}
                  >
                    <div className="absolute inset-0 bg-neutral-200/50" />
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ transform: "rotate(45deg)" }}
                    >
                      <div
                        ref={junction3FillRef}
                        className="w-[180%] h-[200%] absolute flex flex-col justify-end pointer-events-none"
                      >
                        <div className="w-full h-full bg-[#0a0a0a]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-0 relative z-20">
                  <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-br-[32px] -ml-2 -mt-2 w-[calc(100%+10px)] h-[calc(100%+10px)]" />
                  </div>

                  {steps[0] && (
                    <div
                      ref={registerCard(0)}
                      onMouseEnter={() => setHoveredIndex(0)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:bg-[#121212] group cursor-pointer"
                    >
                      <span
                        ref={registerBadge(0)}
                        className="text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300"
                      >
                        {steps[0].number}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight font-primary leading-tight group-hover:text-amber-400 transition-colors">
                          {steps[0].title}
                        </h3>
                        {steps[0].description && (
                          <p className="text-xs text-neutral-400 font-primary leading-relaxed mt-2 line-clamp-2">
                            {steps[0].description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {steps[1] && (
                    <div
                      ref={registerCard(1)}
                      onMouseEnter={() => setHoveredIndex(1)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:bg-[#121212] group cursor-pointer"
                    >
                      <span
                        ref={registerBadge(1)}
                        className="text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300"
                      >
                        {steps[1].number}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight font-primary leading-tight group-hover:text-amber-400 transition-colors">
                          {steps[1].title}
                        </h3>
                        {steps[1].description && (
                          <p className="text-xs text-neutral-400 font-primary leading-relaxed mt-2 line-clamp-2">
                            {steps[1].description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-tl-[32px] rounded-bl-[32px] -mr-2 w-[calc(100%+10px)] h-full" />
                  </div>

                  <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-tr-[32px] rounded-br-[32px] -ml-2 w-[calc(100%+10px)] h-full" />
                  </div>

                  {steps[2] && (
                    <div
                      ref={registerCard(2)}
                      onMouseEnter={() => setHoveredIndex(2)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:bg-[#121212] group cursor-pointer"
                    >
                      <span
                        ref={registerBadge(2)}
                        className="text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300"
                      >
                        {steps[2].number}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight font-primary leading-tight group-hover:text-amber-400 transition-colors">
                          {steps[2].title}
                        </h3>
                        {steps[2].description && (
                          <p className="text-xs text-neutral-400 font-primary leading-relaxed mt-2 line-clamp-2">
                            {steps[2].description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {steps[3] && (
                    <>
                      <div
                        ref={registerCard(3)}
                        onMouseEnter={() => setHoveredIndex(3)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:bg-[#121212] group cursor-pointer"
                      >
                        <span
                          ref={registerBadge(3)}
                          className="text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300"
                        >
                          {steps[3].number}
                        </span>
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight font-primary leading-tight group-hover:text-amber-400 transition-colors">
                            {steps[3].title}
                          </h3>
                          {steps[3].description && (
                            <p className="text-xs text-neutral-400 font-primary leading-relaxed mt-2 line-clamp-2">
                              {steps[3].description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-[#f6f6f6] rounded-tl-[32px] -mr-2 -mb-2 w-[calc(100%+10px)] h-[calc(100%+10px)]" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="block sm:hidden w-full space-y-3">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative">
                  <div className="bg-[#0a0a0a] text-white p-6 flex flex-col justify-between min-h-[160px]">
                    <span className="text-xs font-mono text-neutral-400 tracking-wider">
                      {step.number}
                    </span>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-white font-primary tracking-tight">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-xs text-neutral-400 font-primary leading-relaxed mt-1.5">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="flex justify-center my-2">
                      <div className="w-0.5 h-6 bg-neutral-300/60 overflow-hidden relative">
                        <div
                          ref={registerMobileLine(idx)}
                          className="w-full h-full bg-neutral-900"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServiceFramework;
