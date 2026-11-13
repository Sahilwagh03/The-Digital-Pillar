/**
 * Centralized Videos Registry
 *
 * This registry holds all public video assets delivered via ImageKit CDN
 * with support for local fallbacks and type-safe metadata.
 *
 * The migration CLI (`npm run media:migrate`) automatically generates entries
 * for this registry when private Google Drive videos are migrated.
 */

export interface MediaVideoItem {
  id?: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  fallbackVideoUrl?: string;
  fallbackThumbnailUrl?: string;
  aspectRatio?: "16:9" | "9:16" | "4:5" | "1:1";
  durationSeconds?: number;
  tags?: string[];
  description?: string;
}

export const videos: Record<string, MediaVideoItem> = {
  projectDemo: {
    id: "project-demo",
    title: "The Digital Pillar - Brand Showreel",
    videoUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/videos/client-testimonial.mp4`
      : "/videos/client-testimonial.mp4",
    thumbnailUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/thumbnails/nilanjan.jpg`
      : "/images/client-stories/nilanjan.jpg",
    fallbackVideoUrl: "/videos/client-testimonial.mp4",
    fallbackThumbnailUrl: "/images/client-stories/nilanjan.jpg",
    aspectRatio: "9:16",
    tags: ["showreel", "hero", "branding"],
  },

  clientStoryNilanjan: {
    id: "story-nilanjan",
    title: "Nilanjan - Studio Craft Case Study",
    videoUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/videos/nilanjan.mp4`
      : "/videos/client-testimonial.mp4",
    thumbnailUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/thumbnails/nilanjan.jpg`
      : "/images/client-stories/nilanjan.jpg",
    fallbackVideoUrl: "/videos/client-testimonial.mp4",
    fallbackThumbnailUrl: "/images/client-stories/nilanjan.jpg",
    aspectRatio: "9:16",
    tags: ["client-story", "founder", "content-strategy"],
  },

  clientStoryAaun: {
    id: "story-aaun",
    title: "Aaun - SaaSify Global Case Study",
    videoUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/videos/aaun.mp4`
      : "/videos/client-testimonial.mp4",
    thumbnailUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/thumbnails/aaun.jpg`
      : "/images/client-stories/aaun.jpg",
    fallbackVideoUrl: "/videos/client-testimonial.mp4",
    fallbackThumbnailUrl: "/images/client-stories/aaun.jpg",
    aspectRatio: "9:16",
    tags: ["client-story", "b2b", "inbound"],
  },

  clientStoryDev: {
    id: "story-dev",
    title: "Dev - Nexus Media Growth",
    videoUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/videos/dev.mp4`
      : "/videos/client-testimonial.mp4",
    thumbnailUrl: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/the-digital-pillar/thumbnails/dev.jpg`
      : "/images/client-stories/dev.jpg",
    fallbackVideoUrl: "/videos/client-testimonial.mp4",
    fallbackThumbnailUrl: "/images/client-stories/dev.jpg",
    aspectRatio: "9:16",
    tags: ["client-story", "retention", "creator"],
  },
};

export default videos;

