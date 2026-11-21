"use client";

import { MediaCard } from "@/components/ui/media-card";
import { ServiceHeroMediaItem, DEFAULT_SERVICE_HERO_MEDIA } from "@/constants/services";
import { cn } from "@/lib/utils";

interface ServiceHeroMediaProps {
  media?: ServiceHeroMediaItem[];
  title?: string;
  className?: string;
}

export function ServiceHeroMedia({
  media,
  title = "Service",
  className,
}: ServiceHeroMediaProps) {
  const items = media && media.length > 0 ? media : DEFAULT_SERVICE_HERO_MEDIA;

  return (
    <div className={cn("grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-8 items-start", className)}>
      {items.map((item, index) => {
        const isSteppedDown = index % 2 === 0;

        return (
          <div
            key={item.id || `${item.src}-${index}`}
            className={cn(
              "group service-img overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-neutral-950 shadow-2xl transition-all duration-500 hover:border-[#fdbb11]/30",
              isSteppedDown && "mt-3 sm:mt-6 lg:mt-12"
            )}
          >
            <MediaCard
              type={item.type || "video"}
              src={item.src}
              alt={item.alt || `${title} Hero Showcase ${index + 1}`}
              poster={item.poster}
              priority
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[180px] sm:h-[260px] md:h-[380px] lg:h-[500px] xl:h-[560px]"
              mediaClassName={cn(
                "w-full h-[180px] sm:h-[260px] md:h-[380px] lg:h-[500px] xl:h-[560px] object-cover",
                item.type === "image"
                  ? "object-top transition-[object-position] duration-[5000ms] ease-in-out group-hover:object-bottom cursor-pointer"
                  : "object-center"
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
