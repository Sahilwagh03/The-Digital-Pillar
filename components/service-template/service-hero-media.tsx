"use client";

import React from "react";
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
    <div className={cn("grid grid-cols-3 gap-4 lg:gap-8 items-start", className)}>
      {items.map((item, index) => {
        const isSteppedDown = index % 2 === 0;

        return (
          <div
            key={item.id || `${item.src}-${index}`}
            className={cn(
              "service-img overflow-hidden rounded-2xl lg:rounded-3xl",
              isSteppedDown && "mt-6 lg:mt-12"
            )}
          >
            <MediaCard
              type={item.type}
              src={item.src}
              alt={item.alt || `${title} Hero Showcase ${index + 1}`}
              poster={item.poster}
              priority={index === 1}
              className="w-full h-35 sm:h-45 md:h-60 lg:h-120"
              mediaClassName="w-full h-35 sm:h-45 md:h-60 lg:h-120 object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
