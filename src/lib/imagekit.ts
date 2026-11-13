/**
 * Centralized ImageKit Configuration and URL Transformation Utilities
 *
 * Security Guarantee:
 * - IMAGEKIT_PRIVATE_KEY is NEVER exposed to client-side bundles.
 * - Client-side components safely use URL transformation builders.
 * - Server / CLI tools lazily instantiate the ImageKit SDK.
 */

export interface ImageKitTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  blur?: number;
  crop?: "maintain_ratio" | "force" | "at_max" | "at_least";
  focus?: "center" | "top" | "bottom" | "left" | "right" | "auto";
  aspectRatio?: string;
  raw?: string;
}

/**
 * Returns the public ImageKit URL endpoint.
 * Safe to call on both client and server.
 */
export function getImageKitUrlEndpoint(): string {
  const endpoint =
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ||
    process.env.IMAGEKIT_URL_ENDPOINT ||
    "";
  return endpoint.replace(/\/+$/, "");
}

/**
 * Returns the public ImageKit key.
 * Safe to call on both client and server.
 */
export function getImageKitPublicKey(): string {
  return (
    process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY ||
    process.env.IMAGEKIT_PUBLIC_KEY ||
    ""
  );
}

/**
 * Builds an optimized ImageKit CDN URL with transformations.
 *
 * Examples:
 * buildImageKitUrl("/images/hero.jpg", { width: 1200, quality: 80 })
 * => "https://ik.imagekit.io/your_id/images/hero.jpg?tr=w-1200,q-80,f-auto"
 */
export function buildImageKitUrl(
  pathOrUrl: string,
  options?: ImageKitTransformOptions
): string {
  if (!pathOrUrl) return "";

  const endpoint = getImageKitUrlEndpoint();
  const isFullUrl = /^https?:\/\//i.test(pathOrUrl);

  // If pathOrUrl is already an external non-ImageKit URL (e.g. Unsplash), return it bare unless endpoint matches
  if (isFullUrl && endpoint && !pathOrUrl.startsWith(endpoint)) {
    return pathOrUrl;
  }

  // Construct absolute URL
  let fullUrl: string;
  if (isFullUrl) {
    fullUrl = pathOrUrl;
  } else {
    const cleanPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
    fullUrl = endpoint ? `${endpoint}${cleanPath}` : cleanPath;
  }

  if (!options || Object.keys(options).length === 0) {
    return fullUrl;
  }

  // Construct transformation string (e.g. tr=w-800,h-600,q-80,f-auto)
  const transforms: string[] = [];

  if (options.width) transforms.push(`w-${options.width}`);
  if (options.height) transforms.push(`h-${options.height}`);
  if (options.quality) transforms.push(`q-${options.quality}`);
  if (options.format) {
    transforms.push(`f-${options.format}`);
  } else {
    // Default to automatic format negotiation (WebP/AVIF where supported)
    transforms.push("f-auto");
  }
  if (options.blur) transforms.push(`bl-${options.blur}`);
  if (options.crop) transforms.push(`c-${options.crop}`);
  if (options.focus) transforms.push(`fo-${options.focus}`);
  if (options.aspectRatio) transforms.push(`ar-${options.aspectRatio}`);
  if (options.raw) transforms.push(options.raw);

  if (transforms.length === 0) return fullUrl;

  const trString = `tr=${transforms.join(",")}`;
  const separator = fullUrl.includes("?") ? "&" : "?";
  return `${fullUrl}${separator}${trString}`;
}

/**
 * Extracts or constructs an ImageKit video thumbnail URL.
 * ImageKit can automatically extract a frame from hosted MP4 videos:
 * e.g., https://ik.imagekit.io/your_id/videos/my-reel.mp4/ik-thumbnail.jpg?tr=so-1
 */
export function getImageKitVideoThumbnailUrl(
  videoPathOrUrl: string,
  options?: { timeOffsetSeconds?: number; width?: number; height?: number }
): string {
  if (!videoPathOrUrl) return "";

  const endpoint = getImageKitUrlEndpoint();
  const isFullUrl = /^https?:\/\//i.test(videoPathOrUrl);

  let baseVideoUrl: string;
  if (isFullUrl) {
    baseVideoUrl = videoPathOrUrl.split("?")[0];
  } else {
    const cleanPath = videoPathOrUrl.startsWith("/")
      ? videoPathOrUrl
      : `/${videoPathOrUrl}`;
    baseVideoUrl = endpoint ? `${endpoint}${cleanPath}` : cleanPath;
  }

  const offset = options?.timeOffsetSeconds ?? 1;
  const transforms: string[] = [`so-${offset}`];
  if (options?.width) transforms.push(`w-${options?.width}`);
  if (options?.height) transforms.push(`h-${options?.height}`);
  transforms.push("f-auto");

  return `${baseVideoUrl}/ik-thumbnail.jpg?tr=${transforms.join(",")}`;
}

/**
 * Server-only ImageKit SDK loader.
 * Throws an explicit error if accidentally invoked in client code.
 */
export function getImageKitServerInstance() {
  if (typeof window !== "undefined") {
    throw new Error(
      "[Security Violation] Attempted to instantiate server-side ImageKit client in a browser environment. Never expose IMAGEKIT_PRIVATE_KEY to the client."
    );
  }

  const publicKey =
    process.env.IMAGEKIT_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint =
    process.env.IMAGEKIT_URL_ENDPOINT ||
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    throw new Error(
      "[Configuration Error] Missing required ImageKit server credentials. Please ensure IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, and IMAGEKIT_URL_ENDPOINT are set."
    );
  }

  // Use dynamic require so that ImageKit SDK is never bundled into client packages
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ImageKit = require("imagekit");
  return new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });
}

