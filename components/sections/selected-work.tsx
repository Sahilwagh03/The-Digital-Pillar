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
      <div
        ref={pinnedContainerRef}
        className="relative w-full min-h-screen overflow-hidden"
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
    </div>
  );
}

export default SelectedWork;
