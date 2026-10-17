"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ServiceFrameworkData } from "@/constants/services";

interface ServiceFrameworkProps {
  framework: ServiceFrameworkData;
}

export function ServiceFramework({ framework }: ServiceFrameworkProps) {
  const { tag, headline, description, steps } = framework;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fallback default description if none provided
  const descText =
    description ||
    "Our systematic four-phase methodology engineers category authority from initial insight to omnipresent market execution. Together with our clients, we build enduring competitive advantage and achieve compounding online growth.";

  // Split headline into lines if possible
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
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Eyebrow, Display Headline, Description, & CTA Link */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-32 lg:pt-4">
            <div>
              {/* Eyebrow Tag */}
              <span className="inline-block text-xs sm:text-[0.8125rem] font-medium tracking-[0.2em] text-neutral-500 uppercase font-primary mb-4 sm:mb-6">
                {tag || "OUR PROCESS"}
              </span>

              {/* Large Display Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-neutral-950 tracking-tight leading-[1.04] font-primary mb-6 sm:mb-8 text-balance">
                <span className="block">{headlineLine1}</span>
                <span className="block">{headlineLine2}</span>
              </h2>

              {/* Body Description */}
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md font-primary mb-8 sm:mb-10">
                {descText}
              </p>
            </div>

            {/* CTA Link matching the screenshot */}
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

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Seamless Black Interlocking Cards (Zero White Hairlines)    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            {/* Desktop / Tablet Staggered Layout */}
            <div className="hidden sm:block w-full max-w-[620px] relative">
              {/* 
                Continuous solid black base container:
                Guarantees that underneath all junctions and subpixel boundaries,
                the background is 100% solid black (#0a0a0a). No white line or seam
                can ever bleed through!
              */}
              <div className="relative w-full bg-[#0a0a0a] overflow-hidden">
                <div className="grid grid-cols-2 gap-0 relative">
                  {/* ----------------------------------------------------------- */}
                  {/* ROW 1: [Col 1: Empty Space] | [Col 2: Step 01 (Black Card)] */}
                  {/* ----------------------------------------------------------- */}
                  {/* Col 1, Row 1: White background block with rounded-br to carve black fillet */}
                  <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-br-[32px] -ml-2 -mt-2 w-[calc(100%+10px)] h-[calc(100%+10px)]" />
                  </div>

                  {/* Step 01 Card */}
                  {steps[0] && (
                    <div
                      onMouseEnter={() => setHoveredIndex(0)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between rounded-tr-3xl transition-colors duration-300 hover:bg-[#121212] group cursor-pointer z-10"
                    >
                      <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
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

                  {/* ----------------------------------------------------------- */}
                  {/* ROW 2: [Col 1: Step 02 (Black Card)] | [Col 2: Empty Space] */}
                  {/* ----------------------------------------------------------- */}
                  {/* Step 02 Card */}
                  {steps[1] && (
                    <div
                      onMouseEnter={() => setHoveredIndex(1)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between rounded-tl-3xl rounded-bl-2xl transition-colors duration-300 hover:bg-[#121212] group cursor-pointer z-10"
                    >
                      <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
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

                  {/* Col 2, Row 2: White block with rounded-tl and rounded-bl carving both fillets */}
                  <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-tl-[32px] rounded-bl-[32px] -mr-2 w-[calc(100%+10px)] h-full" />
                  </div>

                  {/* ----------------------------------------------------------- */}
                  {/* ROW 3: [Col 1: Empty Space] | [Col 2: Step 03 (Black Card)] */}
                  {/* ----------------------------------------------------------- */}
                  {/* Col 1, Row 3: White block with rounded-tr and rounded-br carving fillets */}
                  <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden">
                    <div className="absolute inset-0 bg-[#f6f6f6] rounded-tr-[32px] rounded-br-[32px] -ml-2 w-[calc(100%+10px)] h-full" />
                  </div>

                  {/* Step 03 Card */}
                  {steps[2] && (
                    <div
                      onMouseEnter={() => setHoveredIndex(2)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between rounded-tr-2xl rounded-br-3xl transition-colors duration-300 hover:bg-[#121212] group cursor-pointer z-10"
                    >
                      <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
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

                  {/* ----------------------------------------------------------- */}
                  {/* ROW 4: [Col 1: Step 04 (Black Card)] | [Col 2: Empty Space] */}
                  {/* ----------------------------------------------------------- */}
                  {steps[3] && (
                    <>
                      {/* Step 04 Card */}
                      <div
                        onMouseEnter={() => setHoveredIndex(3)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative h-[210px] md:h-[230px] lg:h-[250px] bg-[#0a0a0a] text-white p-7 md:p-8 lg:p-9 flex flex-col justify-between rounded-tl-2xl rounded-bl-3xl transition-colors duration-300 hover:bg-[#121212] group cursor-pointer z-10"
                      >
                        <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
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

                      {/* Col 2, Row 4: White block with rounded-tl carving fillet */}
                      <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden">
                        <div className="absolute inset-0 bg-[#f6f6f6] rounded-tl-[32px] -mr-2 -mb-2 w-[calc(100%+10px)] h-[calc(100%+10px)]" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Stacked Cards Layout (< 640px) */}
            <div className="block sm:hidden w-full space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#0a0a0a] text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]"
                >
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
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServiceFramework;
