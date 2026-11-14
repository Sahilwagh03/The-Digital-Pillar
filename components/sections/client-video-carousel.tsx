"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { ClientVideoStory } from "@/constants/client-stories";

interface ClientVideoCarouselProps {
  stories: ClientVideoStory[];
}

export function ClientVideoCarousel({ stories }: ClientVideoCarouselProps) {
  // 5 sets of items for a generous, rock-solid infinite circular sliding buffer
  const extendedStories = [...stories, ...stories, ...stories, ...stories, ...stories];
  const middleOffset = stories.length * 2; // Start squarely at the middle set (index = 10 for 5 stories)

  const [currentIndex, setCurrentIndex] = useState(middleOffset);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [playingStoryId, setPlayingStoryId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [timerResetKey, setTimerResetKey] = useState(0);

  const isSlidingRef = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(24);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Touch tracking for mobile swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Measure card width & gap dynamically based on viewport width
  useEffect(() => {
    const updateDimensions = () => {
      if (!viewportRef.current) return;
      const width = viewportRef.current.offsetWidth;
      if (width < 640) {
        // Mobile: 1 card with side peek
        const newGap = 16;
        setGap(newGap);
        setCardWidth(Math.min(310, width - 32));
      } else if (width < 1024) {
        // Tablet: 2 cards visible
        const newGap = 20;
        setGap(newGap);
        setCardWidth((width - newGap) / 2);
      } else {
        // Desktop: 3 cards visible (matches reference screenshot)
        const newGap = 24;
        setGap(newGap);
        setCardWidth((width - newGap * 2) / 3);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Atomic slide forward (used by both auto-scroll and manual controls)
  const advanceNext = useCallback(() => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setTimeout(() => {
      isSlidingRef.current = false;
    }, 650);

    setPlayingStoryId(null);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [setPlayingStoryId, setIsTransitioning, setCurrentIndex]);

  // Manual next button: advances and resets the auto-scroll timer
  const handleNext = useCallback(() => {
    advanceNext();
    setTimerResetKey((prev) => prev + 1);
  }, [advanceNext, setTimerResetKey]);

  // Manual prev button: retreats and resets the auto-scroll timer
  const handlePrev = useCallback(() => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setTimeout(() => {
      isSlidingRef.current = false;
    }, 650);

    setPlayingStoryId(null);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimerResetKey((prev) => prev + 1);
  }, [setPlayingStoryId, setIsTransitioning, setCurrentIndex, setTimerResetKey]);

  // Bulletproof infinite loop normalization:
  // When sliding passes the middle set boundary, silently snap back without animation
  useEffect(() => {
    if (currentIndex >= middleOffset + stories.length) {
      const snapTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev - stories.length);
      }, 650);
      return () => clearTimeout(snapTimer);
    } else if (currentIndex < middleOffset) {
      const snapTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev + stories.length);
      }, 650);
      return () => clearTimeout(snapTimer);
    }
  }, [currentIndex, middleOffset, stories.length]);

  // Re-enable smooth transition immediately after instant snap
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Production-grade auto-scroll: smooth continuous progression every 3.0s
  // Only pauses when client is actively watching/playing an inline video
  useEffect(() => {
    if (playingStoryId !== null) return;

    const timer = setInterval(() => {
      advanceNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [playingStoryId, timerResetKey, advanceNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Toggle inline video playback on card click
  const togglePlay = (storyId: string) => {
    setPlayingStoryId((prev) => {
      const next = prev === storyId ? null : storyId;
      if (next && videoRefs.current[next]) {
        videoRefs.current[next]?.play().catch(() => {});
      } else if (prev && videoRefs.current[prev]) {
        videoRefs.current[prev]?.pause();
      }
      return next;
    });
  };

  // Active real index for dots
  const activeDotIndex = ((currentIndex % stories.length) + stories.length) % stories.length;

  return (
    <div
      className="relative w-full py-6 sm:py-10 select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Giant Stylized Watermark Typography Behind Cards (Matches Reference Image) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap font-black font-primary text-[6.5rem] sm:text-[11rem] md:text-[15rem] lg:text-[20rem] tracking-tighter text-[#fdbb11]/30 leading-none z-0"
        aria-hidden="true"
      >
        CLIENT
      </div>

      {/* Outer Carousel Container with Arrow Navigation */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-12 md:px-14">
        {/* Navigation Button: Left Arrow (Brand Orange / Yellow Circular Button) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous client story"
          className="absolute -left-2 sm:left-1 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdbb11] hover:bg-white text-black flex items-center justify-center shadow-[0_4px_20px_rgba(253,187,17,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-30"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Navigation Button: Right Arrow (Brand Orange / Yellow Circular Button) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next client story"
          className="absolute -right-2 sm:right-1 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdbb11] hover:bg-white text-black flex items-center justify-center shadow-[0_4px_20px_rgba(253,187,17,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-30"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Viewport Mask: Clips the sliding track cleanly */}
        <div ref={viewportRef} className="w-full overflow-hidden py-4">
          {/* Continuous Sliding Filmstrip Track with Luxury Easing */}
          <motion.div
            initial={false}
            className="flex items-center will-change-transform"
            animate={{
              x: -currentIndex * (cardWidth + gap),
            }}
            transition={{
              duration: isTransitioning ? 0.65 : 0,
              ease: [0.16, 1, 0.3, 1], // Smooth luxury easing curve
            }}
            style={{
              gap: `${gap}px`,
            }}
          >
            {extendedStories.map((story, idx) => {
              const uniqueCardKey = `${story.id}-${idx}`;
              const isPlaying = playingStoryId === uniqueCardKey;

              return (
                <div
                  key={uniqueCardKey}
                  onClick={() => togglePlay(uniqueCardKey)}
                  style={{
                    width: `${cardWidth}px`,
                    minWidth: `${cardWidth}px`,
                  }}
                  className={`relative aspect-[9/13] rounded-3xl overflow-hidden bg-[#0d0d14] border shadow-[0_20px_50px_rgba(0,0,0,0.7)] group cursor-pointer transition-all duration-500 shrink-0 ${
                    isPlaying
                      ? "border-[#fdbb11] shadow-[0_25px_60px_rgba(253,187,17,0.25)]"
                      : "border-white/10 hover:border-[#fdbb11]/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(253,187,17,0.15)]"
                  }`}
                >
                  {/* Poster Thumbnail Image */}
                  <Image
                    src={story.thumbnail}
                    alt={story.name}
                    fill
                    sizes="(max-width: 640px) 310px, (max-width: 1024px) 45vw, 360px"
                    priority={idx >= middleOffset && idx < middleOffset + 3}
                    unoptimized={story.thumbnail.startsWith("http")}
                    className={`object-cover transition-transform duration-700 pointer-events-none select-none ${
                      isPlaying ? "opacity-0" : "opacity-100 group-hover:scale-105"
                    }`}
                  />

                  {/* Inline Video Player (Plays directly on the card without modals) */}
                  {isPlaying && (
                    <video
                      ref={(el) => {
                        videoRefs.current[uniqueCardKey] = el;
                        if (el) {
                          el.play().catch(() => {});
                        }
                      }}
                      src={story.videoUrl || "/videos/client-testimonial.mp4"}
                      poster={story.thumbnail}
                      playsInline
                      autoPlay
                      loop
                      muted={isMuted}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                  )}

                  {/* Ambient Gradient Overlays for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30 pointer-events-none z-15" />

                  {/* Center Play Button (Visible when video is not playing) */}
                  {!isPlaying && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#fdbb11] group-hover:border-[#fdbb11] transition-all duration-300 z-20">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 text-[#fdbb11] fill-[#fdbb11] group-hover:text-black group-hover:fill-black transition-colors" />
                    </div>
                  )}

                  {/* Center Pause Indicator on Hover (Visible when playing) */}
                  {isPlaying && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
                      <Pause className="w-6 h-6 text-white fill-white" />
                    </div>
                  )}

                  {/* Top-Right Mute / Unmute Button (Active when video is playing) */}
                  {isPlaying && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#fdbb11] hover:text-black transition-colors cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#fdbb11] hover:text-black" />
                      )}
                    </button>
                  )}

                  {/* Bottom Bar: Client Name & Role */}
                  <div className="absolute inset-x-0 bottom-4 sm:bottom-5 px-5 pointer-events-none z-20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-primary leading-tight tracking-tight drop-shadow-md">
                      {story.name}
                    </h3>
                    {story.role && (
                      <p className="text-xs text-neutral-300 font-normal mt-0.5 drop-shadow line-clamp-1">
                        {story.role}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {stories.map((_, idx) => {
            const isActive = idx === activeDotIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setPlayingStoryId(null);
                  setIsTransitioning(true);
                  setCurrentIndex(middleOffset + idx);
                  setTimerResetKey((prev) => prev + 1);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-8 bg-[#fdbb11] shadow-[0_0_10px_rgba(253,187,17,0.5)]"
                    : "w-2 bg-white/20 hover:bg-white/50"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ClientVideoCarousel;
