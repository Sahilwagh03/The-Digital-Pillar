"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { ABOUT_CONTENT } from "@/constants/about";
import {
  aboutHeaderContainerVariants,
  aboutTagVariants,
  aboutWordVariants,
  aboutContentContainerVariants,
  aboutStatementVariants,
  aboutDescriptionVariants,
  aboutCtaVariants,
} from "@/animation/about";

export function About() {
  const { tag, headline, leftStatements, description, cta } = ABOUT_CONTENT;
  const words = headline.split(" ");

  return (
    <section
      id="about"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <Container size="lg">
        {/* Top Grid: Tag & Masked Word-by-Word Headline */}
        <motion.div
          variants={aboutHeaderContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 sm:mb-20"
        >
          {/* Eyebrow Tag */}
          <div className="lg:col-span-3 pt-1">
            <motion.span
              variants={aboutTagVariants}
              className="inline-block text-xs sm:text-[0.8125rem] font-medium tracking-[0.25em] text-neutral-400 uppercase font-primary"
            >
              {tag}
            </motion.span>
          </div>

          {/* Headline Display Text with Word-by-Word Reveal */}
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.14] font-primary text-balance">
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block overflow-hidden py-0.5 mr-[0.25em] last:mr-0 align-top"
                >
                  <motion.span
                    variants={aboutWordVariants}
                    className="inline-block origin-bottom-left"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>
        </motion.div>

        {/* Bottom Grid: Left Statements & Right Description/CTA */}
        <motion.div
          variants={aboutContentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          <div className="hidden lg:block lg:col-span-3" />

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Uppercase Statements with Masked Reveal */}
            <div className="md:col-span-5 flex flex-col space-y-1.5 sm:space-y-2">
              {leftStatements.map((statement, idx) => (
                <span key={idx} className="block overflow-hidden py-0.5">
                  <motion.span
                    variants={aboutStatementVariants}
                    className="inline-block text-xs sm:text-[0.8125rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] text-neutral-400 uppercase font-primary"
                  >
                    {statement}
                  </motion.span>
                </span>
              ))}
            </div>

            {/* Right Column: Velvety Blur Fade-in Description & CTA */}
            <div className="md:col-span-7 flex flex-col items-start">
              <motion.p
                variants={aboutDescriptionVariants}
                className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg font-primary"
              >
                {description}
              </motion.p>

              <motion.div variants={aboutCtaVariants}>
                <Link
                  href={cta.href}
                  className="group inline-flex items-center gap-2.5 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.2em] text-white uppercase font-primary"
                >
                  <span className="border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                    {cta.label}
                  </span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
