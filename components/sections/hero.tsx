import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  HERO_CONTENT
} from "@/constants/hero";
import TiltedGridHero from "../common/tilted-grid";

export function Hero() {
  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#070707] pt-20 sm:pt-24 pb-4 sm:pb-8"
    >
      <div className="relative z-10 flex flex-col w-full flex-1 justify-center">
        <Container size="lg" className="w-full flex flex-col items-center gap-3 sm:gap-4 text-center">
          <div className="flex flex-col gap-3 sm:gap-4 text-center items-center max-w-4xl px-2">
            <h1 className="text-[2.25rem] xs:text-[2.75rem] sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] font-primary text-balance">
              {HERO_CONTENT.titleLine1}
              {HERO_CONTENT.titleLine2}
              {HERO_CONTENT.titleLine3}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300/80 w-full max-w-xl leading-relaxed font-primary font-normal text-pretty">
              {HERO_CONTENT.description}
            </p>

            <div className="pt-1">
              <Button
                href={HERO_CONTENT.cta.href}
                variant="primary"
                size="md"
                className="font-semibold px-6 tracking-wide"
              >
                {HERO_CONTENT.cta.label}
              </Button>
            </div>
          </div>
        </Container>

        <div className="w-full -mt-2 sm:-mt-4 relative">
          <TiltedGridHero
            images={HERO_CONTENT.images}
            tileHeight={36}
            axis={46}
            className="h-[300px] xs:h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
