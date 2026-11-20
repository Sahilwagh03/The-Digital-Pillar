"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { OUR_FOCUS_CONTENT } from "@/constants/our-focus";

export function ServicesList() {
  const { tag, title, description, services } = OUR_FOCUS_CONTENT;

  return (
    <section
      id="all-services"
      data-nav-theme="dark"
      className="relative w-full bg-transparent text-white py-20 sm:py-28 lg:py-36 border-t border-white/[0.06]"
    >
      <Container size="full" className="w-full h-auto max-w-[105rem] px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between h-auto w-full gap-12 lg:gap-8">
          {/* Left Column: Sticky Title */}
          <div className="w-full lg:w-[28%] xl:w-[26%] shrink-0 pt-2 lg:sticky lg:top-36 lg:self-start">
            <div className="max-w-md">
              <span className="block text-xs sm:text-[0.8125rem] font-semibold tracking-[0.25em] text-[#fdbb11] uppercase font-primary mb-4 sm:mb-6">
                {tag}
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.14] font-primary mb-6 pb-1">
                {title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed font-primary max-w-sm">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column: All 9 Services in Clean Editorial Rows */}
          <div className="w-full lg:w-[72%] xl:w-[74%] relative h-auto">
            <div className="flex flex-col divide-y divide-white/[0.08]">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-10 xl:px-14 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                    <div className="relative -ml-[1px] flex items-center gap-2.5 text-neutral-400">
                      <span className="text-xs sm:text-sm font-mono text-[#fdbb11]/80 tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-neutral-900 shadow-md group-hover:border-white/30 transition-colors">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 72px, (max-width: 768px) 88px, 112px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-medium tracking-tight text-white font-primary transition-colors duration-300 group-hover:text-[#fdbb11]">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 pl-14 md:pl-0 pr-2 sm:pr-4 flex items-center gap-8 justify-between md:justify-end shrink-0">
                    <div className="text-[0.6875rem] sm:text-xs md:text-[0.75rem] lg:text-[0.8125rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] text-neutral-400 uppercase font-primary space-y-1 text-left">
                      {service.descriptionLines.map((line, lineIdx) => (
                        <div key={lineIdx} className="leading-tight">
                          {line}
                        </div>
                      ))}
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:bg-[#fdbb11] group-hover:border-[#fdbb11] transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
