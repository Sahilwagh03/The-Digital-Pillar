"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { FAQ_CONTENT } from "@/constants/faq";
import {
  faqHeaderVariants,
  faqTagVariants,
  faqHeadlineVariants,
  faqDescVariants,
  faqListVariants,
  faqItemVariants,
  faqAnswerVariants,
} from "@/animation/faq";

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

  // First item open by default matching original state
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32 border-t border-white/10 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Subtle Ambient Gold Glow */}
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-[#fdbb11]/5 blur-[120px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Heading & Description with Orchestrated Reveal */}
          <motion.div
            variants={faqHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col items-start"
          >
            {/* Eyebrow Tag */}
            <motion.span
              variants={faqTagVariants}
              className="inline-block text-xs sm:text-[0.8125rem] font-semibold tracking-[0.05em] text-[#fdbb11] uppercase mb-4 sm:mb-6"
            >
              {tag}
            </motion.span>

            {/* Headline with Masked Reveals */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight text-white leading-[1.05] font-primary mb-4 sm:mb-6">
              <span className="block overflow-hidden py-1">
                <motion.span
                  variants={faqHeadlineVariants}
                  className="block origin-bottom-left"
                >
                  {headlineLine1}
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  variants={faqHeadlineVariants}
                  className="block origin-bottom-left"
                >
                  {headlineLine2}
                </motion.span>
              </span>
            </h2>

            {/* Description with Soft Blur-to-Clear Fade */}
            <motion.p
              variants={faqDescVariants}
              className="text-xs sm:text-sm text-neutral-400 font-primary leading-relaxed max-w-[280px] sm:max-w-[320px]"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Right Column: FAQ Accordion List & Bottom CTA */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
            <motion.div
              variants={faqListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              className="w-full"
            >
              {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    variants={faqItemVariants}
                    className="flex items-stretch border-b border-white/10 last:border-b-0 transition-colors"
                  >
                    {/* Number Column */}
                    <div className="w-12 sm:w-16 lg:w-20 shrink-0 pt-5 sm:pt-6 lg:pt-7 pb-5 sm:pb-6 lg:pb-7 pr-3 sm:pr-5 lg:pr-6 border-r border-white/10 flex items-start">
                      <span
                        className={`text-sm sm:text-base lg:text-lg transition-colors duration-300 select-none ${isOpen
                          ? "text-[#fdbb11] font-semibold drop-shadow-[0_0_8px_rgba(253,187,17,0.5)]"
                          : "text-neutral-500 font-normal"
                          }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Content Column (Question + Collapsible Answer + Toggle) */}
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
                          className={`text-base sm:text-lg lg:text-[1.25rem] leading-snug font-primary transition-colors duration-300 ${isOpen
                            ? "font-semibold text-[#fdbb11]"
                            : "font-normal text-neutral-200 group-hover:text-white"
                            }`}
                        >
                          {item.question}
                        </span>

                        {/* Animated Plus-to-Minus Icon */}
                        <span
                          className="relative w-4 h-4 mt-2 sm:mt-2.5 flex items-center justify-center shrink-0 text-[#fdbb11]"
                          aria-hidden="true"
                        >
                          <span className="absolute w-3.5 sm:w-4 h-[1.5px] bg-[#fdbb11] transition-transform duration-300" />
                          <span
                            className={`absolute w-3.5 sm:w-4 h-[1.5px] bg-[#fdbb11] transition-all duration-300 ${isOpen
                              ? "rotate-0 scale-0 opacity-0"
                              : "rotate-90 scale-100 opacity-100"
                              }`}
                          />
                        </span>
                      </button>

                      {/* Smooth Collapsible Answer Container with AnimatePresence */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${item.id}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${item.id}`}
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={faqAnswerVariants}
                            className="overflow-hidden"
                          >
                            <p className="text-neutral-400 text-xs sm:text-sm lg:text-[0.9375rem] leading-relaxed max-w-xl font-primary pt-3 sm:pt-4">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom-Right "STILL HAVE QUESTIONS? →" Link */}
            <div className="flex justify-end pt-8 sm:pt-12 lg:pt-14">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-1.5 pb-1 border-b border-[#fdbb11] text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#fdbb11] hover:text-white hover:border-white transition-colors"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#fdbb11] group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
