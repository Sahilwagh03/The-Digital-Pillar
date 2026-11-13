"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { Magnetic } from "@/components/ui/magnetic";
import { HERO_CONTENT, HERO_SOCIAL_PROOF } from "@/constants/hero";
import TiltedGridHero from "../common/tilted-grid";
import {
  heroContainerVariants,
  heroHeadlineLineVariants,
  heroSubtitleVariants,
  heroCtaVariants,
  heroGridVariants,
  heroGlowVariants,
} from "@/animation/hero";

export function Hero() {
  // Micro-interaction: Interactive Smooth Mouse Spotlight on Background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 140, mass: 0.1 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 140, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleScrollDown = () => {
    const target =
      document.getElementById("values") ||
      document.getElementById("services") ||
      document.getElementById("selected-work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      data-nav-theme="dark"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#070707] pt-20 sm:pt-24 pb-4 sm:pb-8"
    >
      {/* Ambient Cinematic Golden Glow */}
      <motion.div
        variants={heroGlowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] bg-gradient-to-b from-[#fdbb11]/15 via-[#fdbb11]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Micro-interaction: Dynamic Ambient Spotlight that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 hidden sm:block"
        style={{
          background: useMotionTemplate`radial-gradient(550px circle at ${smoothX}px ${smoothY}px, rgba(253, 187, 17, 0.08), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col w-full flex-1 justify-center">
        <Container size="lg" className="w-full flex flex-col items-center gap-3 sm:gap-4 text-center relative z-20">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 sm:gap-4 text-center items-center max-w-4xl px-2"
          >

            {/* 2. Masked Headline Lines Reveal with Rotating Text (Hover Pause & Click Cycle) */}
            <h1 className="text-[2.75rem] xs:text-[3.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.03] sm:leading-[1.06] font-primary text-balance">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={heroHeadlineLineVariants}
                  className="inline-flex flex-wrap items-baseline justify-center gap-x-2.5 sm:gap-x-3.5 origin-bottom-left"
                >
                  <span>{HERO_CONTENT.titleLine1}</span>
                  <RotatingText
                    words={HERO_CONTENT.rotatingWords}
                    intervalMs={HERO_CONTENT.rotationIntervalMs}
                    fallbackWord={HERO_CONTENT.titleLine2}
                    className="text-[#fdbb11] font-extrabold drop-shadow-[0_0_24px_rgba(253,187,17,0.35)]"
                  />
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={heroHeadlineLineVariants}
                  className="block origin-bottom-left"
                >
                  {HERO_CONTENT.titleLine3.trim()}
                </motion.span>
              </span>
            </h1>

            {/* 3. Subtitle / Description */}
            <motion.p
              variants={heroSubtitleVariants}
              className="text-[0.8125rem] xs:text-sm sm:text-base text-zinc-400 sm:text-zinc-300/80 w-full max-w-xl leading-relaxed font-primary font-normal text-pretty"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* 4. Action Stack: Magnetic CTA Button + Stacked Social Proof Pill */}
            <motion.div
              variants={heroCtaVariants}
              className="pt-1 flex flex-col items-center gap-3 sm:gap-3.5 relative z-20"
            >
              {/* Magnetic CTA Button with Shimmer Sweep */}
              <Magnetic strength={0.25}>
                <Button
                  href={HERO_CONTENT.cta.href}
                  variant="primary"
                  size="md"
                  className="relative overflow-hidden cursor-pointer font-bold px-8 py-3.5 tracking-wide bg-[#fdbb11] text-black shadow-[0_0_25px_rgba(253,187,17,0.3)] hover:shadow-[0_0_40px_rgba(253,187,17,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group/btn font-primary"
                >
                  {/* Micro-interaction: Light sweep shimmer on hover */}
                  <span
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-[200%] group-hover/btn:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="flex items-center gap-2">
                    <span>{HERO_CONTENT.cta.label}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </Button>
              </Magnetic>

              {/* Social Proof Trust Indicator Centered Below Button */}
              <div className="flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm select-none group/trust transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
                <div className="flex items-center -space-x-1.5 group-hover/trust:-space-x-0.5 transition-all duration-300">
                  {HERO_SOCIAL_PROOF.avatars.slice(0, 4).map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-5 h-5 rounded-full overflow-hidden ring-1.5 ring-black"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-left text-[11px] leading-none">
                  <div className="flex items-center text-[#fdbb11] text-[9px] tracking-tight">
                    {"★★★★★"}
                  </div>
                  <span className="font-semibold text-white tracking-tight">
                    {HERO_SOCIAL_PROOF.rating}
                  </span>
                  <span className="text-neutral-500 font-normal">·</span>
                  <span className="text-neutral-400 font-normal">
                    {HERO_SOCIAL_PROOF.label}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* 5. 3D Tilted Grid Entrance */}
        <motion.div
          variants={heroGridVariants}
          initial="hidden"
          animate="visible"
          className="w-full -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 relative"
        >
          <TiltedGridHero
            images={HERO_CONTENT.images}
            tileHeight={50}
            aspectRatio={2 / 3}
            axis={55}
            curve={55}
            gap={10}
            className="h-[340px] xs:h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] w-full"
          />
        </motion.div>
      </div>

      {/* 6. Interactive Bottom Scroll Indicator (Pinned at Bottom Center) */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={handleScrollDown}
          className="group/scroll flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer select-none"
          aria-label="Scroll down to explore"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 group-hover/scroll:text-neutral-200 uppercase">
            Scroll to explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#fdbb11] animate-bounce transition-transform duration-300 group-hover/scroll:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
