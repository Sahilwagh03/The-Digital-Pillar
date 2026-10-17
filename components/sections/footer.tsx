"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { FOOTER_CONTENT } from "@/constants/footer";
import {
  footerHeaderVariants,
  footerTaglineVariants,
  footerHeadlineVariants,
  footerRightColVariants,
  footerCtaVariants,
  footerSubColVariants,
  footerWatermarkVariants,
} from "@/animation/footer";

export function Footer() {
  const {
    tagline,
    headlineLine1,
    headlineLine2,
    ctaText,
    ctaHref,
    handle,
    businessEnquiry,
    social,
    watermark,
  } = FOOTER_CONTENT;

  return (
    <footer
      id="contact"
      data-nav-theme="dark"
      className="relative w-full bg-[#0a0a0a] text-white pt-20 sm:pt-28 lg:pt-32 pb-2 sm:pb-3 lg:pb-4 overflow-hidden select-none"
    >
      <Container size="lg" className="relative z-10">
        {/* Main Content: 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-16 sm:mb-24 lg:mb-32">
          {/* Left Column: Tagline & Masked Display Headline */}
          <motion.div
            variants={footerHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <motion.span
                variants={footerTaglineVariants}
                className="text-xs sm:text-sm text-neutral-400 font-primary block mb-5 sm:mb-7"
              >
                {tagline}
              </motion.span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-white tracking-tight leading-[1.04] font-primary">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    variants={footerHeadlineVariants}
                    className="block origin-bottom-left"
                  >
                    {headlineLine1}
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    variants={footerHeadlineVariants}
                    className="block origin-bottom-left"
                  >
                    {headlineLine2}
                  </motion.span>
                </span>
              </h2>
            </div>

            {/* Desktop Handle */}
            <motion.div
              variants={footerTaglineVariants}
              className="hidden lg:block pt-16 xl:pt-24"
            >
              <span className="text-xs sm:text-sm text-neutral-500 font-primary">
                {handle}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: CTA, Enquiry, and Social Links */}
          <motion.div
            variants={footerRightColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-14"
          >
            {/* Top CTA Link */}
            <motion.div variants={footerCtaVariants} className="mb-12 sm:mb-16 lg:mb-20">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 pb-1 border-b border-white text-xs sm:text-[0.8125rem] font-semibold tracking-wider uppercase text-white hover:text-neutral-300 hover:border-neutral-300 transition-colors"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Enquiry & Social Side-by-Side */}
            <motion.div
              variants={footerSubColVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
            >
              {/* Business Enquiry */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-medium tracking-wider uppercase text-neutral-500 mb-3 sm:mb-4">
                  {businessEnquiry.title}
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  <a
                    href={`mailto:${businessEnquiry.email}`}
                    className="block text-xs sm:text-sm text-white hover:text-neutral-300 transition-colors"
                  >
                    {businessEnquiry.email}
                  </a>
                  <a
                    href={`tel:${businessEnquiry.phone.replace(/\s+/g, "")}`}
                    className="block text-xs sm:text-sm text-white hover:text-neutral-300 transition-colors"
                  >
                    {businessEnquiry.phone}
                  </a>
                  {businessEnquiry.address && (
                    <p className="text-xs sm:text-sm text-neutral-400 pt-0.5 leading-relaxed">
                      {businessEnquiry.address}
                    </p>
                  )}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-medium tracking-wider uppercase text-neutral-500 mb-3 sm:mb-4">
                  {social.title}
                </h3>
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-white">
                  {social.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile Handle */}
            <motion.div variants={footerTaglineVariants} className="block lg:hidden pt-10">
              <span className="text-xs sm:text-sm text-neutral-500 font-primary">
                {handle}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Giant Bottom Ghost Typography / Watermark - Full screen edge-to-edge */}
      <motion.div
        variants={footerWatermarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-30px" }}
        className="w-full select-none pointer-events-none pt-8 sm:pt-12 lg:pt-16 overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1600 150"
          className="w-full h-auto select-none pointer-events-none block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <text
            x="50%"
            y="130"
            textAnchor="middle"
            className="font-primary fill-white/[0.12] select-none uppercase"
            style={{
              fontSize: "155px",
              fontWeight: 900,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-primary), sans-serif",
            }}
          >
            {watermark}
          </text>
        </svg>
      </motion.div>
    </footer>
  );
}

export default Footer;
