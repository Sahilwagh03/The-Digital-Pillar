"use client";

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
      className="relative w-full bg-transparent text-white pt-20 sm:pt-28 lg:pt-32 pb-4 sm:pb-6 overflow-hidden select-none"
    >
      {/* Ambient Atmospheric Depth Glow centered behind Footer content for seamless blending */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-6xl h-[650px] bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(28,36,61,0.45)_0%,rgba(19,25,43,0.15)_50%,transparent_80%)] pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Subtle Warm Brand Glow centered behind CTA */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[320px] bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(253,187,17,0.06)_0%,transparent_75%)] blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Architectural Dot Matrix Texture with Smooth Vertical Fade */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] pointer-events-none -z-0"
        aria-hidden="true"
      />

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
                className="text-xs sm:text-sm text-[#fdbb11] font-mono block mb-5 sm:mb-7 font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(253,187,17,0.3)]"
              >
                {tagline}
              </motion.span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] font-black text-white tracking-tight leading-[1.12] sm:leading-[1.14] font-primary">
                <span className="block overflow-hidden pt-1 pb-3 sm:pb-4 -mb-3 sm:-mb-4">
                  <motion.span
                    variants={footerHeadlineVariants}
                    className="block origin-bottom-left"
                  >
                    {headlineLine1}
                  </motion.span>
                </span>
                <span className="block overflow-hidden pt-1 pb-3 sm:pb-4 -mb-3 sm:-mb-4">
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
              <span className="text-xs sm:text-sm text-neutral-400 font-mono tracking-wider font-semibold">
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
                className="group relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#fdbb11] text-black hover:text-black text-xs sm:text-[0.8125rem] font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(253,187,17,0.35)] hover:shadow-[0_0_35px_rgba(253,187,17,0.55)] active:scale-95 isolate"
              >
                {/* Diagonal White Wipe Layer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -left-[30%] w-[160%] h-full bg-white -skew-x-12 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 pointer-events-none -z-10"
                />
                <span className="relative z-10 inline-flex items-center gap-3">
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-black" />
                </span>
              </Link>
            </motion.div>

            {/* Enquiry & Social Side-by-Side */}
            <motion.div
              variants={footerSubColVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
            >
              {/* Business Enquiry */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-neutral-400 mb-3 sm:mb-4">
                  {businessEnquiry.title}
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  <a
                    href={`mailto:${businessEnquiry.email}`}
                    className="block text-xs sm:text-sm text-neutral-200 font-semibold hover:text-[#fdbb11] transition-colors"
                  >
                    {businessEnquiry.email}
                  </a>
                  <a
                    href={`tel:${businessEnquiry.phone.replace(/\s+/g, "")}`}
                    className="block text-xs sm:text-sm text-neutral-200 font-semibold hover:text-[#fdbb11] transition-colors"
                  >
                    {businessEnquiry.phone}
                  </a>
                  {businessEnquiry.address && (
                    businessEnquiry.mapUrl ? (
                      <a
                        href={businessEnquiry.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block text-xs sm:text-sm text-neutral-300 pt-0.5 leading-relaxed font-medium hover:text-[#fdbb11] transition-colors"
                      >
                        <span>{businessEnquiry.address}</span>
                        <span className="inline-block ml-1 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[11px]">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-neutral-300 pt-0.5 leading-relaxed font-medium">
                        {businessEnquiry.address}
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-neutral-400 mb-3 sm:mb-4">
                  {social.title}
                </h3>
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-neutral-200 font-semibold">
                  {social.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fdbb11] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile Handle */}
            <motion.div variants={footerTaglineVariants} className="block lg:hidden pt-10">
              <span className="text-xs sm:text-sm text-neutral-400 font-mono tracking-wider font-semibold">
                {handle}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Giant Bottom Ghost Typography / Watermark - Original flat edge-to-edge */}
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
          <defs>
            <linearGradient id="footerWatermarkWhiteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.42" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="130"
            textAnchor="middle"
            fill="url(#footerWatermarkWhiteGradient)"
            className="font-primary select-none uppercase"
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
