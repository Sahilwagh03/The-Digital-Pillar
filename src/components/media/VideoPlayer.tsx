"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, RotateCcw, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaVideoItem } from "@/src/config/media/videos";
import { buildImageKitUrl } from "@/src/lib/imagekit";

export interface VideoPlayerProps {
  /** Video item from the central media registry */
  video?: MediaVideoItem;
  /** Explicit video URL (overrides video.videoUrl if provided) */
  videoUrl?: string;
  /** Explicit thumbnail poster URL (overrides video.thumbnailUrl if provided) */
  thumbnailUrl?: string;
  /** Fallback video URL if primary fails to load */
  fallbackVideoUrl?: string;
  /** Fallback thumbnail URL if primary fails to load */
  fallbackThumbnailUrl?: string;
  /** Title/label for accessibility */
  title?: string;
  /** Container CSS classes */
  className?: string;
  /** Video element CSS classes */
  videoClassName?: string;
  /** Aspect ratio presets or custom */
  aspectRatio?: "16/9" | "9/16" | "4/5" | "1/1" | "auto";
  /** Whether to show browser native controls */
  controls?: boolean;
  /** Autoplay after first interaction or mount */
  autoPlay?: boolean;
  /** Loop playback */
  loop?: boolean;
  /** Start muted */
  muted?: boolean;
  /** Whether to load video stream immediately on mount (defaults to false for zero initial bandwidth) */
  preloadVideo?: boolean;
  /** Callback when video starts playing */
  onPlay?: () => void;
  /** Callback when video pauses */
  onPause?: () => void;
  /** Callback when video ends */
  onEnded?: () => void;
}

export function VideoPlayer({
  video,
  videoUrl: explicitVideoUrl,
  thumbnailUrl: explicitThumbnailUrl,
  fallbackVideoUrl: explicitFallbackVideoUrl,
  fallbackThumbnailUrl: explicitFallbackThumbnailUrl,
  title: explicitTitle,
  className,
  videoClassName,
  aspectRatio = "16/9",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = true,
  preloadVideo = false,
  onPlay,
  onPause,
  onEnded,
}: VideoPlayerProps) {
  // Resolve source parameters
  const primaryVideoSrc = explicitVideoUrl || video?.videoUrl || "";
  const primaryThumbSrc = explicitThumbnailUrl || video?.thumbnailUrl || "";
  const fallbackVideoSrc = explicitFallbackVideoUrl || video?.fallbackVideoUrl;
  const fallbackThumbSrc = explicitFallbackThumbnailUrl || video?.fallbackThumbnailUrl;
  const videoTitle = explicitTitle || video?.title || "Video player";

  // Playback & network states
  const [hasStarted, setHasStarted] = useState(autoPlay || preloadVideo);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlaybackStarted, setHasPlaybackStarted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [fallbackActive, setFallbackActive] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Derived sources (avoids unnecessary useEffect setState in React 19)
  const currentVideoSrc = fallbackActive && fallbackVideoSrc ? fallbackVideoSrc : primaryVideoSrc;
  const currentThumbSrc =
    fallbackActive && fallbackThumbSrc
      ? fallbackThumbSrc
      : buildImageKitUrl(primaryThumbSrc, { quality: 85, format: "auto" }) || primaryThumbSrc;

  // Play handler (loads stream on demand)
  const handleStartPlay = async () => {
    setHasError(false);
    setErrorMessage(null);

    if (!hasStarted) {
      setHasStarted(true);
    }

    setIsBuffering(true);

    // Let the video element mount if it hasn't yet
    setTimeout(async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
          setHasPlaybackStarted(true);
          setIsBuffering(false);
          onPlay?.();
        } catch (err: unknown) {
          setIsBuffering(false);
          // If browser blocked unmuted autoplay, retry muted
          if (err instanceof Error && err.name === "NotAllowedError" && !isMuted) {
            setIsMuted(true);
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasPlaybackStarted(true);
                  onPlay?.();
                })
                .catch(() => {});
            }
          }
        }
      }
    }, 50);
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasPlaybackStarted(true);
          onPlay?.();
        })
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      onPause?.();
    }
  };

  const handleVideoError = () => {
    setIsBuffering(false);
    // If primary failed and fallback exists, try fallback
    if (fallbackVideoSrc && !fallbackActive) {
      console.warn(`[VideoPlayer] Primary stream failed. Attempting fallback: ${fallbackVideoSrc}`);
      setFallbackActive(true);
      setHasError(false);
      return;
    }

    setHasError(true);
    setIsPlaying(false);
    setErrorMessage("Unable to load video. Please check your connection.");
  };

  const handleRetry = () => {
    setHasError(false);
    setErrorMessage(null);
    setFallbackActive(false);
    handleStartPlay();
  };

  // Aspect ratio mapping
  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : aspectRatio === "4/5"
      ? "aspect-[4/5]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : "";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-black border border-white/10 group select-none shadow-2xl",
        aspectClass,
        className
      )}
    >
      {/* 1. Poster Thumbnail Image (Always rendered initially; zero video stream loaded) */}
      {(!hasStarted || !hasPlaybackStarted) && (
        <div className="absolute inset-0 z-10 w-full h-full">
          {currentThumbSrc ? (
            <Image
              src={currentThumbSrc}
              alt={videoTitle}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
              priority={autoPlay}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => {
                if (fallbackThumbSrc && !fallbackActive) {
                  setFallbackActive(true);
                }
              }}
            />
          ) : (
            <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-600 text-sm">
              No Thumbnail Available
            </div>
          )}

          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Centered Brand Play Button */}
          {!hasError && (
            <button
              type="button"
              onClick={handleStartPlay}
              aria-label={`Play ${videoTitle}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fdbb11] hover:bg-white text-black flex items-center justify-center shadow-[0_4px_30px_rgba(253,187,17,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 group/btn"
            >
              {isBuffering ? (
                <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 animate-spin text-black" />
              ) : (
                <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-black text-black" />
              )}
            </button>
          )}

          {/* Video Title Bar */}
          {videoTitle && (
            <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
              <p className="text-sm sm:text-base font-semibold text-white font-primary drop-shadow-md line-clamp-1">
                {videoTitle}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 2. Actual Video Element (Mounted ONLY after user clicks play or if preload is requested) */}
      {hasStarted && (
        <video
          ref={videoRef}
          src={currentVideoSrc}
          poster={currentThumbSrc}
          controls={controls}
          autoPlay={autoPlay || hasStarted}
          loop={loop}
          muted={isMuted}
          playsInline
          preload="metadata"
          onWaiting={() => setIsBuffering(true)}
          onPlaying={() => {
            setIsBuffering(false);
            setIsPlaying(true);
          }}
          onPause={() => {
            setIsPlaying(false);
            onPause?.();
          }}
          onEnded={() => {
            setIsPlaying(false);
            onEnded?.();
          }}
          onError={handleVideoError}
          className={cn(
            "w-full h-full object-cover z-0 transition-opacity duration-500",
            videoClassName
          )}
          aria-label={videoTitle}
        />
      )}

      {/* 3. Buffering Indicator */}
      {isBuffering && hasStarted && !hasError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-xs pointer-events-none">
          <Loader2 className="w-10 h-10 animate-spin text-[#fdbb11]" />
        </div>
      )}

      {/* 4. Quick Custom Floating Play/Pause/Mute Controls for Frameless Views */}
      {hasStarted && !controls && !hasError && (
        <div className="absolute bottom-3 right-3 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#fdbb11] hover:text-black transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={() => {
              const nextMuted = !isMuted;
              setIsMuted(nextMuted);
              if (videoRef.current) videoRef.current.muted = nextMuted;
            }}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#fdbb11] hover:text-black transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* 5. Error State with Retry Button */}
      {hasError && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 p-6 text-center backdrop-blur-sm">
          <AlertCircle className="w-10 h-10 text-red-400 mb-3" />
          <p className="text-sm sm:text-base font-semibold text-white font-primary mb-1">
            Playback Error
          </p>
          <p className="text-xs text-neutral-400 mb-4 max-w-xs">
            {errorMessage || "Unable to play video asset."}
          </p>
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fdbb11] hover:bg-white text-black text-xs font-bold uppercase tracking-wider font-primary transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
