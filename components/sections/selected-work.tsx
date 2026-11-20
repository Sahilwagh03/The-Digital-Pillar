'use client';

import { forwardRef, type ReactNode } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { SELECTED_WORK_CONTENT, FeaturedProject, SelectedWorkContent } from '@/constants/selected-work';
import { useSelectedWorkAnimation } from '@/animation/selected-work';
import { OurFocus } from '@/components/sections/our-focus';

function WorkPanel({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen shrink-0 items-center justify-center">
      {children}
    </div>
  );
}

interface SelectedWorkIntroProps {
  headlineLine1: string;
  headlineLine2: string;
  viewAllCta: {
    label: string;
    href: string;
  };
}

function SelectedWorkIntro({ headlineLine1, headlineLine2, viewAllCta }: SelectedWorkIntroProps) {
  return (
    <div className="w-1/2 h-screen">
      <div className="flex flex-col justify-center items-center text-center w-full h-full py-20 px-10">
        <h2 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-white leading-[1.14] font-primary mb-8 sm:mb-10 text-balance pb-1">
          {headlineLine1}
          <br />
          {headlineLine2}
        </h2>

        <div>
          <Link
            href={viewAllCta.href}
            className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-[#fdbb11] uppercase font-primary"
          >
            <span className="border-b border-[#fdbb11]/60 pb-0.5 group-hover:border-[#fdbb11] group-hover:text-white transition-colors">
              {viewAllCta.label}
            </span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5 text-[#fdbb11]">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: FeaturedProject;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ project }, ref) => {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="w-1/2 h-screen">
      <div className="flex flex-col justify-center py-6 lg:py-8 px-6 lg:px-10 xl:px-14 w-full h-full border-l border-white/10">
        <div ref={ref} className="w-full max-w-md lg:max-w-lg xl:max-w-[500px] mx-auto">
          <Link
            href={project.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            data-cursor="view"
            data-cursor-text="View"
            aria-label={`View ${project.title} project`}
            className="group relative w-full h-[74vh] sm:h-[76vh] lg:h-[78vh] max-h-[760px] min-h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col justify-end p-6 sm:p-8 lg:p-9 cursor-pointer block"
          >
            {/* Background Full-Size Image */}
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              quality={95}
              unoptimized={project.imageSrc.startsWith("http")}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
            />

            {/* Subtle Gradient strictly at the bottom for text contrast */}
            <div
              className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-[5]"
              aria-hidden="true"
            />

            {/* Content Overlayed at the Bottom */}
            <div className="relative z-10 flex flex-col justify-end">
              {project.category && (
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#fdbb11] uppercase mb-1.5 sm:mb-2 block drop-shadow-[0_0_12px_rgba(253,187,17,0.4)]">
                  {project.category}
                </span>
              )}

              <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-white font-primary leading-tight drop-shadow-md">
                {project.title}
              </h3>

              {/* Description: smoothly expands and reveals on card hover */}
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed font-primary line-clamp-4 drop-shadow">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

interface SelectedWorkEndCtaProps {
  endCta: SelectedWorkContent['endCta'];
}

const SelectedWorkEndCta = forwardRef<HTMLDivElement, SelectedWorkEndCtaProps>(({ endCta }, ref) => {
  return (
    <div className="w-1/2 h-screen">
      <div className="flex flex-col justify-center items-center text-center w-full h-full py-20 px-10 border-l border-white/10 bg-[#0c0c12]/40">
        <div ref={ref} className="flex flex-col justify-center items-center text-center w-full">
          <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-[1.18] font-primary mb-8 sm:mb-10 text-balance max-w-lg">
            {endCta.headlineLine1}
            <br />
            {endCta.headlineLine2}
            <br />
            {endCta.headlineLine3}
          </h3>

          <div>
            <Link
              href={endCta.href}
              className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-[#fdbb11] uppercase font-primary"
            >
              <span className="border-b border-[#fdbb11]/60 pb-0.5 group-hover:border-[#fdbb11] group-hover:text-white transition-colors">
                {endCta.ctaLabel || "VIEW ALL WORK"}
              </span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5 text-[#fdbb11]">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

SelectedWorkEndCta.displayName = 'SelectedWorkEndCta';

export function SelectedWork() {
  const {
    sectionRef,
    pinnedContainerRef,
    selectedWorkLayerRef,
    trackRef,
    servicesContainerRef,
    servicesTrackRef,
    firstCardRef,
    registerSubsequentCard,
  } = useSelectedWorkAnimation();

  const { headlineLine1, headlineLine2, viewAllCta, projects, endCta } = SELECTED_WORK_CONTENT;
  const [project1, project2, project3, project4] = projects;

  return (
    <div
      ref={sectionRef}
      id="selected-work-wrapper"
      className="relative w-full bg-transparent"
    >
      {/* ============================================================ */}
      {/* DESKTOP VIEW (lg: 1024px+): Pinned horizontal showcase & reveal */}
      {/* ============================================================ */}
      <div
        ref={pinnedContainerRef}
        className="hidden lg:block relative w-full min-h-screen overflow-hidden"
      >
        <div className="relative z-0 w-full">
          <OurFocus
            servicesContainerRef={servicesContainerRef}
            servicesTrackRef={servicesTrackRef}
          />
        </div>

        <section
          id="selected-work"
          ref={selectedWorkLayerRef}
          data-nav-theme="dark"
          className="absolute inset-0 z-10 w-full h-screen bg-[#080b12] text-white border-t border-white/10 overflow-hidden"
        >
          <div className="w-full h-full overflow-hidden">
            <div ref={trackRef} className="flex w-fit flex-nowrap">
              <WorkPanel>
                <SelectedWorkIntro
                  headlineLine1={headlineLine1}
                  headlineLine2={headlineLine2}
                  viewAllCta={viewAllCta}
                />
                <ProjectCard ref={firstCardRef} project={project1} />
              </WorkPanel>

              <WorkPanel>
                <ProjectCard ref={registerSubsequentCard(0)} project={project2} />
                <ProjectCard ref={registerSubsequentCard(1)} project={project3} />
              </WorkPanel>

              <WorkPanel>
                <ProjectCard ref={registerSubsequentCard(2)} project={project4} />
                <SelectedWorkEndCta ref={registerSubsequentCard(3)} endCta={endCta} />
              </WorkPanel>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* MOBILE & TABLET VIEW (< 1024px): Clean list with fade anim    */}
      {/* ============================================================ */}
      <div className="block lg:hidden w-full">
        <section
          id="selected-work-mobile"
          data-nav-theme="dark"
          className="relative w-full bg-transparent text-white border-t border-white/10"
        >
          {/* Header */}
          <div className="px-6 sm:px-10 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.14] sm:leading-[1.16] font-primary mb-6 sm:mb-8 text-balance pb-1">
              {headlineLine1}
              <br />
              {headlineLine2}
            </h2>

            <div>
              <Link
                href={viewAllCta.href}
                className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-[#fdbb11] uppercase font-primary"
              >
                <span className="border-b border-[#fdbb11]/60 pb-0.5 group-hover:border-[#fdbb11] group-hover:text-white transition-colors">
                  {viewAllCta.label}
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 text-[#fdbb11]">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Vertical List of Projects */}
          <div className="px-6 sm:px-10 pb-16 sm:pb-24 max-w-2xl mx-auto space-y-10 sm:space-y-14">
            {projects.map((project, idx) => {
              const isExternal = project.href.startsWith("http");

              return (
                <article
                  key={project.id || idx}
                  className="mobile-work-card flex flex-col border-b border-white/10 pb-10 sm:pb-14 last:border-b-0 last:pb-0"
                >
                  <Link
                    href={project.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    data-cursor="view"
                    data-cursor-text="View"
                    aria-label={`View ${project.title} project`}
                    className="group relative w-full aspect-[4/5] sm:aspect-[3/4] h-[480px] sm:h-[540px] max-h-[620px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl cursor-pointer bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-all duration-500 block flex flex-col justify-end p-6 sm:p-8"
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      quality={95}
                      unoptimized={project.imageSrc.startsWith("http")}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 600px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                    />

                    {/* Subtle Gradient strictly at the bottom */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-[5]"
                      aria-hidden="true"
                    />

                    {/* Content Overlayed */}
                    <div className="relative z-10 flex flex-col justify-end">
                      {project.category && (
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#fdbb11] uppercase mb-1.5 block drop-shadow-[0_0_12px_rgba(253,187,17,0.4)]">
                          {project.category}
                        </span>
                      )}

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-primary leading-tight mb-2 drop-shadow-md">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed font-primary line-clamp-3 drop-shadow">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* End CTA Card */}
          <div className="mobile-work-card px-6 sm:px-10 py-16 sm:py-20 bg-[#0c101c] border-t border-white/10 text-center">
            <div className="max-w-lg mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-[1.2] font-primary mb-6 sm:mb-8 text-balance">
                {endCta.headlineLine1}
                <br />
                {endCta.headlineLine2}
                <br />
                {endCta.headlineLine3}
              </h3>

              <Link
                href={endCta.href}
                className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-[#fdbb11] uppercase font-primary"
              >
                <span className="border-b border-[#fdbb11]/60 pb-0.5 group-hover:border-[#fdbb11] group-hover:text-white transition-colors">
                  {endCta.ctaLabel || "VIEW ALL WORK"}
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5 text-[#fdbb11]">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Focus Section for Mobile & Tablet */}
        <OurFocus />
      </div>
    </div>
  );
}

export default SelectedWork;
