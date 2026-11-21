"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { OUR_FOCUS_CONTENT } from "@/constants/our-focus";

export function ServicesList() {
  const { tag, title, description, services } = OUR_FOCUS_CONTENT;

  return (
    <section
      id="all-services"
      data-nav-theme="dark"
      className="relative w-full bg-transparent text-white py-12 sm:py-20 lg:py-36 border-t border-white/[0.06]"
    >
      <Container size="full" className="w-full h-auto max-w-[105rem] px-6 sm:px-10 lg:px-10 xl:px-14">
        <div className="flex flex-col lg:flex-row items-start justify-between h-auto w-full gap-12 lg:gap-8">
          {/* Left Column: Sticky Title */}
          <div className="w-full lg:w-[28%] xl:w-[26%] shrink-0 pt-2 lg:sticky lg:top-36 lg:self-start">
            <div className="max-w-md">
              <span className="block text-xs sm:text-[0.8125rem] font-semibold tracking-[0.25em] text-[#fdbb11] uppercase font-primary mb-3 sm:mb-6">
                {tag}
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.14] font-primary mb-0 lg:mb-6 pb-1">
                {title}
              </h2>

              <p className="hidden lg:block text-sm sm:text-base text-neutral-400 font-normal leading-relaxed font-primary max-w-sm">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column: All 9 Services in Clean Editorial Rows */}
          <div className="w-full lg:w-[72%] xl:w-[74%] relative h-auto">
            <div className="flex flex-col">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10 py-5 sm:py-8 lg:py-12 border-b border-white/[0.08] px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-10 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-4 sm:gap-5 lg:gap-5 xl:gap-6 min-w-0">
                    <div className="relative -ml-[1px] flex items-center shrink-0 text-neutral-400">
                      <span className="text-xs sm:text-sm font-mono text-[#fdbb11]/80 tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 2xl:w-26 2xl:h-26 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-neutral-900 shadow-md group-hover:border-white/30 transition-colors">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 72px, (max-width: 768px) 88px, 104px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-[2.2rem] font-medium tracking-tight text-white font-primary transition-colors duration-300 group-hover:text-[#fdbb11] whitespace-normal">
                      {service.title}
                    </h3>
                  </div>

                  <div className="hidden lg:flex pr-2 sm:pr-4 flex-col justify-center shrink-0">
                    <div className="text-[0.6875rem] sm:text-xs md:text-[0.72rem] lg:text-[0.75rem] xl:text-[0.78rem] font-medium tracking-[0.12em] sm:tracking-[0.14em] text-neutral-400 uppercase font-primary space-y-1 text-left">
                      {service.descriptionLines.map((line, lineIdx) => (
                        <div key={lineIdx} className="leading-tight">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesList;
