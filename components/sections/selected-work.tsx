import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SELECTED_WORK_CONTENT } from "@/constants/selected-work";

export function SelectedWork() {
  const { headlineLine1, headlineLine2, viewAllCta, featuredProject } =
    SELECTED_WORK_CONTENT;

  return (
    <section
      id="selected-work"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 border-t border-neutral-200/80 overflow-hidden"
    >
      {/* Full-height vertical divider line touching section top and bottom */}
      <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-neutral-200/80 pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[32rem] sm:min-h-[36rem]">
          {/* Left Column: Headline and View All CTA */}
          <div className="lg:col-span-6 lg:pr-12 xl:pr-16 flex flex-col justify-center py-16 sm:py-24 lg:py-28">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-neutral-950 leading-[1.08] font-primary mb-8 sm:mb-10 text-balance">
              {headlineLine1}
              <br />
              {headlineLine2}
            </h2>

            <div>
              <Link
                href={viewAllCta.href}
                className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-neutral-950 uppercase font-primary"
              >
                <span className="border-b border-neutral-950/60 pb-0.5 group-hover:border-neutral-950 transition-colors">
                  {viewAllCta.label}
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Project Showcase */}
          <div className="lg:col-span-6 lg:pl-12 xl:pl-16 flex flex-col justify-center py-16 sm:py-24 lg:py-28 border-t lg:border-t-0 border-neutral-200/80">
            <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden mb-6 shadow-sm group cursor-pointer">
              <Image
                src={featuredProject.imageSrc}
                alt={featuredProject.title}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-primary mb-3">
              {featuredProject.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
              <p className="sm:col-span-8 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed font-primary">
                {featuredProject.description}
              </p>

              <div className="sm:col-span-4 flex sm:justify-end">
                <Link
                  href={featuredProject.href}
                  className="group inline-flex items-center gap-2 text-xs sm:text-[0.75rem] font-semibold tracking-[0.18em] text-neutral-950 uppercase font-primary shrink-0"
                >
                  <span className="border-b border-neutral-950/60 pb-0.5 group-hover:border-neutral-950 transition-colors">
                    {featuredProject.ctaLabel}
                  </span>
                  <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SelectedWork;
