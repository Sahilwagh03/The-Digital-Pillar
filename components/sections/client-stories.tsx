"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CLIENT_STORIES_CONTENT } from "@/constants/client-stories";

export function ClientStories() {
  const { title, descriptionLines, cta, stories } = CLIENT_STORIES_CONTENT;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = stories[activeIndex];

  return (
    <section
      id="client-stories"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 py-20 sm:py-28 lg:py-36 border-t border-neutral-200/80"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold tracking-tight text-neutral-950 leading-[1.05] font-primary">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="text-sm sm:text-base text-neutral-600 font-primary leading-snug max-w-sm">
              {descriptionLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-neutral-200 mt-10 sm:mt-12 lg:mt-14 mb-12 sm:mb-16 lg:mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-stretch min-h-[380px] lg:min-h-[420px]">
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between">
            <div className="flex flex-col items-start space-y-3.5 sm:space-y-4">
              {stories.map((story, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`group flex items-center text-xs sm:text-[0.8125rem] tracking-[0.2em] uppercase font-semibold font-primary transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-neutral-950 font-bold"
                        : "text-neutral-400 hover:text-neutral-700"
                    }`}
                  >
                    <span>{story.brandName}</span>
                    {isActive && (
                      <span className="ml-2.5 text-xs sm:text-sm inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div>
              <div className="inline-flex border border-neutral-200 divide-x divide-neutral-200 bg-white">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous client story"
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next client story"
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-7 flex flex-col justify-between">
            <div>
              <div
                key={currentStory.id}
                className="transition-opacity duration-300 animate-in fade-in"
              >
                <blockquote className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.35rem] font-semibold tracking-tight text-neutral-950 leading-[1.22] font-primary max-w-2xl lg:max-w-3xl">
                  {currentStory.quote}
                </blockquote>

                <div className="flex items-center gap-4 sm:gap-5 mt-8 sm:mt-12">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#d4d4d4] shrink-0 overflow-hidden relative shadow-sm">
                    {currentStory.author.avatarUrl ? (
                      <Image
                        src={currentStory.author.avatarUrl}
                        alt={currentStory.author.name}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-base sm:text-lg font-bold text-neutral-950 font-primary leading-tight">
                      {currentStory.author.name}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-500 font-primary mt-1">
                      {currentStory.author.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 sm:pt-14 lg:pt-0 flex flex-col items-start gap-8 sm:gap-10">
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-2 border-b border-neutral-950 pb-1 text-xs sm:text-sm font-bold tracking-[0.2em] text-neutral-950 uppercase font-primary hover:opacity-70 transition-opacity"
              >
                <span>{cta.label}</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>

              <div className="flex lg:hidden">
                <div className="inline-flex border border-neutral-200 divide-x divide-neutral-200 bg-white">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous client story"
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next client story"
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ClientStories;
