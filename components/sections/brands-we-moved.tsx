import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PARTNER_BRANDS } from "@/constants/brands-we-moved";

export function BrandsWeMoved() {
  return (
    <section
      id="brands-we-moved"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <Container size="lg">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-[0.8125rem] font-medium tracking-[0.25em] text-neutral-400 uppercase">
            BRANDS WE&apos;VE MOVED
          </span>
        </div>

        <div className="relative w-full overflow-hidden select-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div className="animate-marquee flex w-max">
            <div className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-24 pr-12 sm:pr-16 md:pr-24">
              {PARTNER_BRANDS.map((brand, idx) => (
                <div
                  key={`track1-${idx}`}
                  className="relative flex items-center justify-center shrink-0 h-20 sm:h-24 md:h-28 px-3 sm:px-5"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={240}
                    height={90}
                    className="max-h-16 sm:max-h-20 md:max-h-24 w-auto h-auto object-contain select-none grayscale hover:grayscale-0 opacity-80 hover:opacity-100 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div
              className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-24 pr-12 sm:pr-16 md:pr-24"
              aria-hidden="true"
            >
              {PARTNER_BRANDS.map((brand, idx) => (
                <div
                  key={`track2-${idx}`}
                  className="relative flex items-center justify-center shrink-0 h-20 sm:h-24 md:h-28 px-3 sm:px-5"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={240}
                    height={90}
                    className="max-h-16 sm:max-h-20 md:max-h-24 w-auto h-auto object-contain select-none grayscale hover:grayscale-0 opacity-80 hover:opacity-100 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BrandsWeMoved;
