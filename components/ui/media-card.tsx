"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type MediaType = "image" | "video";

export interface MediaCardProps {
  src: string;
  type?: MediaType;
  alt?: string;
  poster?: string;
  className?: string;
  mediaClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
}

export function MediaCard({
  src,
  type,
  alt = "Media asset",
  poster,
  className,
  mediaClassName,
  width = 1280,
  height = 800,
  priority = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
}: MediaCardProps) {
  const [videoError, setVideoError] = useState(false);

  const isVideo =
    type === "video" ||
    (!type && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src));

  if (isVideo && !videoError) {
    return (
      <div className={cn("relative w-full h-full overflow-hidden bg-neutral-900", className)}>
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="metadata"
          onError={() => setVideoError(true)}
          className={cn("w-full h-full object-cover", mediaClassName)}
          aria-label={alt}
        />
      </div>
    );
  }

  const finalImageSrc = isVideo && videoError && poster ? poster : src;

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-neutral-900", className)}>
      <Image
        src={finalImageSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn("w-full h-full object-cover", mediaClassName)}
      />
    </div>
  );
}
