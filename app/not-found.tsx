"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      data-nav-theme="dark"
      className="relative min-h-[75vh] sm:min-h-[80vh] bg-[#050505] text-white flex flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Brand Color Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#fdbb11]/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

          {/* Monumental Architectural 404 Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative select-none my-1 sm:my-2"
          >
            <div className="text-[100px] sm:text-[150px] md:text-[190px] lg:text-[220px] font-black leading-none tracking-tight font-primary flex items-center justify-center">
              <span className="bg-gradient-to-b from-white via-white/85 to-white/10 bg-clip-text text-transparent">
                4
              </span>
              <div className="relative inline-flex items-center justify-center mx-1 sm:mx-2">
                <span className="bg-gradient-to-b from-white via-white/85 to-white/10 bg-clip-text text-transparent">
                  0
                </span>
                {/* Pillar Void Core in 0 */}
                <span
                  className="absolute inset-y-[22%] inset-x-[28%] rounded-full bg-gradient-to-b from-[#fdbb11]/30 to-[#fdbb11]/0 blur-sm pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              <span className="bg-gradient-to-b from-white via-white/85 to-white/10 bg-clip-text text-transparent">
                4
              </span>
            </div>

            {/* Subtle glow behind the 404 */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#fdbb11]/10 blur-3xl rounded-full -z-10 pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
            className="space-y-3 max-w-xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-primary">
              The pillar you are searching for has shifted
            </h1>
            <p className="text-sm sm:text-base text-white/60 font-secondary leading-relaxed max-w-lg mx-auto">
              This route does not exist in our architectural blueprint or has been
              relocated. Let us guide you back to solid digital ground.
            </p>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-6 sm:mt-7"
          >
            <Button
              href="/"
              variant="primary"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />}
              className="px-6 py-3 text-xs sm:text-sm uppercase tracking-wider font-bold"
            >
              Return to Home
            </Button>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-primary font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95 group"
            >
              <span>Explore Services</span>
              <Compass className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 text-[#fdbb11]" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
