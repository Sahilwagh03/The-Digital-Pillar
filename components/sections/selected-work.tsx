'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SELECTED_WORK_CONTENT, FeaturedProject } from '@/constants/selected-work';
import { useSelectedWorkAnimation } from '@/animation/selected-work';
import { OurFocus } from '@/components/sections/our-focus';

function WorkPanel({ children }: { children: React.ReactNode }) {
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
    </div>
  );
}

interface ProjectCardProps {
  project: FeaturedProject;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ project }, ref) => {
  return (
    <div className="w-1/2 h-screen">
      <div className="flex flex-col justify-center py-20 px-20 w-full h-full border-l border-neutral-200/80">
        <div ref={ref} className="flex flex-col justify-center h-full w-full">
          <div className="relative w-full h-full overflow-hidden mb-6 shadow-sm group cursor-pointer">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-primary mb-3">
            {project.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
            <p className="sm:col-span-8 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed font-primary">
              {project.description}
            </p>

            <div className="sm:col-span-4 flex sm:justify-end">
              <Link
                href={project.href}
                className="group inline-flex items-center gap-2 text-xs sm:text-[0.75rem] font-semibold tracking-[0.18em] text-neutral-950 uppercase font-primary shrink-0"
              >
                <span className="border-b border-neutral-950/60 pb-0.5 group-hover:border-neutral-950 transition-colors">
                  {project.ctaLabel}
                </span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

interface SelectedWorkEndCtaProps {
  endCta: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    ctaLabel: string;
    href: string;
  };
}

const SelectedWorkEndCta = forwardRef<HTMLDivElement, SelectedWorkEndCtaProps>(({ endCta }, ref) => {
  return (
    <div className="w-1/2 h-screen">
      <div className="flex flex-col justify-center items-center text-center w-full h-full py-20 px-10 border-l border-neutral-200/80">
        <div ref={ref} className="flex flex-col justify-center items-center text-center w-full">
          <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-neutral-950 leading-[1.18] font-primary mb-8 sm:mb-10 text-balance max-w-lg">
            {endCta.headlineLine1}
            <br />
            {endCta.headlineLine2}
            <br />
            {endCta.headlineLine3}
          </h3>

          <div>
            <Link
              href={endCta.href}
              className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-neutral-950 uppercase font-primary"
            >
              <span className="border-b border-neutral-950/60 pb-0.5 group-hover:border-neutral-950 transition-colors">
                {endCta.ctaLabel}
              </span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
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
      className="relative w-full bg-[#050505]"
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
          data-nav-theme="light"
          className="absolute inset-0 z-10 w-full h-screen bg-white text-neutral-900 border-t border-neutral-200/80 overflow-hidden"
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
          data-nav-theme="light"
          className="relative w-full bg-white text-neutral-900 border-t border-neutral-200/80"
        >
          {/* Header */}
          <div className="px-6 sm:px-10 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.12] sm:leading-[1.08] font-primary mb-6 sm:mb-8 text-balance">
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

          {/* Vertical List of Projects */}
          <div className="px-6 sm:px-10 pb-16 sm:pb-24 max-w-2xl mx-auto space-y-12 sm:space-y-16">
            {projects.map((project, idx) => (
              <article
                key={project.id || idx}
                className="mobile-work-card flex flex-col border-b border-neutral-200/80 pb-12 sm:pb-16 last:border-b-0 last:pb-0"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl shadow-sm mb-5 sm:mb-6 group cursor-pointer bg-neutral-100">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-primary mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed font-primary max-w-lg">
                    {project.description}
                  </p>

                  <div className="shrink-0 pt-2 sm:pt-0">
                    <Link
                      href={project.href}
                      className="group inline-flex items-center gap-2 text-xs sm:text-[0.75rem] font-semibold tracking-[0.18em] text-neutral-950 uppercase font-primary shrink-0"
                    >
                      <span className="border-b border-neutral-950/60 pb-0.5 group-hover:border-neutral-950 transition-colors">
                        {project.ctaLabel}
                      </span>
                      <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* End CTA Card */}
          <div className="mobile-work-card px-6 sm:px-10 py-16 sm:py-20 bg-neutral-50/80 border-t border-neutral-200/80 text-center">
            <div className="max-w-lg mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 leading-[1.2] font-primary mb-6 sm:mb-8 text-balance">
                {endCta.headlineLine1}
                <br />
                {endCta.headlineLine2}
                <br />
                {endCta.headlineLine3}
              </h3>

              <Link
                href={endCta.href}
                className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-neutral-950 uppercase font-primary"
              >
                <span className="border-b border-neutral-950/60 pb-0.5 group-hover:border-neutral-950 transition-colors">
                  {endCta.ctaLabel}
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
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
