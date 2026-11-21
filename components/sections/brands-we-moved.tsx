import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PARTNER_BRANDS } from "@/constants/brands-we-moved";

export function BrandsWeMoved() {
  return (
    <section
      id="brands-we-moved"
      data-nav-theme="dark"
      className="relative w-full bg-transparent text-white py-12 sm:py-20 lg:py-32 overflow-hidden border-t border-white/[0.06]"
    >
      <Container size="lg">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-xs sm:text-[0.8125rem] font-semibold tracking-[0.25em] text-[#fdbb11] uppercase">
            BRANDS WE&apos;VE MOVED
          </span>
        </div>

        <div className="relative w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
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
                    className="max-h-16 sm:max-h-20 md:max-h-24 w-auto h-auto object-contain select-none brightness-0 invert opacity-60 hover:opacity-100 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(253,187,17,0.35)] transition-all duration-300"
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
                    className="max-h-16 sm:max-h-20 md:max-h-24 w-auto h-auto object-contain select-none brightness-0 invert opacity-60 hover:opacity-100 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(253,187,17,0.35)] transition-all duration-300"
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
