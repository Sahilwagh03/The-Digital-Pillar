'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { OUR_FOCUS_CONTENT } from '@/constants/our-focus';

interface OurFocusProps {
  servicesContainerRef?: React.RefObject<HTMLDivElement | null>;
  servicesTrackRef?: React.RefObject<HTMLDivElement | null>;
}

export function OurFocus({ servicesContainerRef, servicesTrackRef }: OurFocusProps = {}) {
  const { tag, title, description, services } = OUR_FOCUS_CONTENT;

  return (
    <section
      id="services"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white min-h-screen lg:h-screen lg:overflow-hidden flex items-center py-20 sm:py-28 lg:py-0"
    >
      <Container size="full" className="w-full h-auto lg:h-full max-w-[105rem] px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center h-auto lg:h-full w-full">
          <div className="w-full lg:w-[28%] xl:w-[26%] mb-8 lg:mb-0 shrink-0 pt-6 lg:pt-0">
            <div className="max-w-md">
              <span className="block text-xs sm:text-[0.8125rem] font-medium tracking-[0.25em] text-neutral-400 uppercase font-primary mb-4 sm:mb-6">
                {tag}
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.08] font-primary mb-6">
                {title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed font-primary max-w-sm">
                {description}
              </p>
            </div>
          </div>

          <div
            ref={servicesContainerRef}
            className="w-full lg:w-[72%] xl:w-[74%] relative border-white/8 h-auto lg:h-full lg:overflow-hidden"
          >
            <div
              ref={servicesTrackRef}
              className="flex flex-col py-6 lg:pt-20 lg:pb-20 xl:pt-24 xl:pb-24"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 lg:py-12 border-b border-white/[0.08] px-4 sm:px-6 lg:px-10 xl:px-14 transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                    <div className="relative -ml-[1px] flex items-center gap-2.5 text-neutral-400">
                      <span className="w-1.5 h-1.5 rotate-45 bg-neutral-300 transition-transform duration-300 group-hover:scale-125 group-hover:bg-white" />
                      <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-neutral-900 shadow-md">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 72px, (max-width: 768px) 88px, 112px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-medium tracking-tight text-white font-primary transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 pl-14 md:pl-0 pr-2 sm:pr-4 flex flex-col justify-center shrink-0">
                    <div className="text-[0.6875rem] sm:text-xs md:text-[0.75rem] lg:text-[0.8125rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] text-neutral-400 uppercase font-primary space-y-1 text-left md:text-left">
                      {service.descriptionLines.map((line, lineIdx) => (
                        <div key={lineIdx} className="leading-tight">
                          {line}
                        </div>
                      ))}
                    </div>
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

export default OurFocus;
