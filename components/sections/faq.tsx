"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FAQ_CONTENT } from "@/constants/faq";

export function FAQ() {
  const {
    tag,
    headlineLine1,
    headlineLine2,
    description,
    ctaText,
    ctaHref,
    items,
  } = FAQ_CONTENT;

  // First item open by default matching reference image
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 py-16 sm:py-24 lg:py-28 xl:py-32 border-t border-neutral-200/80"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start lg:top-28">
            <span className="text-xs sm:text-[0.8125rem] font-medium tracking-[0.05em] text-neutral-500 uppercase mb-4 sm:mb-6">
              {tag}
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight text-neutral-950 leading-[1.05] font-primary mb-4 sm:mb-6">
              {headlineLine1}
              <br />
              {headlineLine2}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-500 font-primary leading-relaxed max-w-[280px] sm:max-w-[320px]">
              {description}
            </p>
          </div>

          {/* Right Column: FAQ Accordion List & Bottom CTA */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
            <div className="w-full">
              {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="flex items-stretch border-b border-neutral-200/90 last:border-b-0 transition-colors"
                  >
                    {/* Number Column */}
                    <div className="w-12 sm:w-16 lg:w-20 shrink-0 pt-5 sm:pt-6 lg:pt-7 pb-5 sm:pb-6 lg:pb-7 pr-3 sm:pr-5 lg:pr-6 border-r border-neutral-200/90 flex items-start">
                      <span
                        className={`text-sm sm:text-base lg:text-lg transition-colors select-none ${isOpen
                            ? "text-amber-500 font-medium"
                            : "text-neutral-500 font-normal"
                          }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Content Column (Question + Answer + Toggle) */}
                    <div className="flex-1 pl-5 sm:pl-7 lg:pl-10 pt-5 sm:pt-6 lg:pt-7 pb-5 sm:pb-6 lg:pb-7 pr-1 sm:pr-2">
                      <button
                        id={`faq-trigger-${item.id}`}
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group"
                      >
                        <span
                          className={`text-base sm:text-lg lg:text-[1.25rem] leading-snug font-primary transition-colors ${isOpen
                              ? "font-semibold text-neutral-950"
                              : "font-normal text-neutral-800 group-hover:text-neutral-950"
                            }`}
                        >
                          {item.question}
                        </span>

                        <span
                          className="shrink-0 mt-2 sm:mt-2.5 flex items-center justify-center text-neutral-900"
                          aria-hidden="true"
                        >
                          <span className="w-3.5 sm:w-4 h-[1.5px] bg-neutral-900 inline-block transition-transform duration-200" />
                        </span>
                      </button>

                      {/* Smooth Collapsible Answer Container */}
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${item.id}`}
                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                            ? "grid-rows-[1fr] opacity-100 pt-3 sm:pt-4"
                            : "grid-rows-[0fr] opacity-0 pt-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-neutral-500 text-xs sm:text-sm lg:text-[0.9375rem] leading-relaxed max-w-xl font-primary">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom-Right "STILL HAVE QUESTIONS? →" Link */}
            <div className="flex justify-end pt-8 sm:pt-12 lg:pt-14">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-1.5 pb-1 border-b border-neutral-950 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-950 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
