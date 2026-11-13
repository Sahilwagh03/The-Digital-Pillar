"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { buildImageKitUrl, ImageKitTransformOptions } from "@/src/lib/imagekit";
import { MediaImageItem } from "@/src/config/media/images";

export interface MediaImageProps extends Omit<ImageProps, "src" | "alt"> {
  /** Registry item from config/media/images */
  image?: MediaImageItem;
  /** Direct ImageKit path (e.g. "/the-digital-pillar/hero.jpg") or absolute URL */
  src?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Fallback image URL if primary fails */
  fallbackSrc?: string;
  /** Image quality (1-100, defaults to 80) */
  quality?: number;
  /** Image format conversion ('auto', 'webp', 'avif', etc., defaults to 'auto') */
  format?: ImageKitTransformOptions["format"];
  /** Blur level for placeholders */
  blur?: number;
  /** Container CSS classes */
  className?: string;
  /** Crop mode */
  crop?: ImageKitTransformOptions["crop"];
  /** Focus mode */
  focus?: ImageKitTransformOptions["focus"];
}

export function MediaImage({
  image,
  src: explicitSrc,
  alt: explicitAlt,
  fallbackSrc: explicitFallbackSrc,
  width,
  height,
  quality = 80,
  format = "auto",
  blur,
  crop,
  focus,
  className,
  priority = false,
  fill = false,
  sizes,
  ...restProps
}: MediaImageProps) {
  const primarySrc = explicitSrc || image?.pathOrUrl || "";
  const fallbackSrc = explicitFallbackSrc || image?.fallbackUrl || "/hero-bg.jpg";
  const altText = explicitAlt || image?.alt || "Image asset";

  // Build optimized ImageKit transformation URL
  const numericWidth = typeof width === "number" ? width : undefined;
  const numericHeight = typeof height === "number" ? height : undefined;

  const optimizedSrc = buildImageKitUrl(primarySrc, {
    width: numericWidth,
    height: numericHeight,
    quality: typeof quality === "number" ? quality : 80,
    format,
    blur,
    crop,
    focus,
  });

  const [currentSrc, setCurrentSrc] = useState(optimizedSrc || primarySrc || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  // If the asset is hosted on ImageKit, ImageKit handles the transforms on its CDN.
  // Setting unoptimized={true} ensures Vercel does NOT re-process the image, avoiding Vercel optimization fees!
  const isImageKitAsset = currentSrc.includes("ik.imagekit.io");

  return (
    <Image
      src={currentSrc}
      alt={altText}
      width={!fill ? width || image?.width || 800 : undefined}
      height={!fill ? height || image?.height || 600 : undefined}
      fill={fill}
      priority={priority}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"}
      unoptimized={isImageKitAsset}
      className={cn("transition-opacity duration-300", className)}
      onError={() => {
        if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
          setHasError(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
      {...restProps}
    />
  );
}

export default MediaImage;

