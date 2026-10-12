"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SCROLL_STOPPER_CONTENT } from "@/constants/scroll-stopper";

interface CardSpec {
  id: string;
  image: string;
  alt: string;
  type?: "reel" | "brand" | "wireframe" | "pattern" | "photo";
  caption?: string;
  captionColor?: "white" | "red" | "accent";
  badge?: string;
}

// Exactly 12 cards ordered sequentially around the ring to match reference 1:1
const CARDS: CardSpec[] = [
  {
    id: "c1",
    image: "/images/scroll-stopper/you-know.jpg",
    alt: "YOU KNOW Reel",
    type: "reel",
    caption: "YOU KNOW",
    captionColor: "white",
  },
  {
    id: "c2",
    image: "/images/scroll-stopper/burger-eating.jpg",
    alt: "Food and Lifestyle Meal",
    type: "photo",
  },
  {
    id: "c3",
    image: "/images/scroll-stopper/belly-fat.jpg",
    alt: "Fitness UGC Reel",
    type: "reel",
    caption: "Struggling\nwith belly fat",
    captionColor: "red",
  },
  {
    id: "c4",
    image: "/images/scroll-stopper/honestly.jpg",
    alt: "Honestly Reel",
    type: "reel",
    caption: "Honestly...",
    captionColor: "white",
  },
  {
    id: "c5",
    image: "/images/services/social-media.jpg",
    alt: "Team in Studio",
    type: "photo",
  },
  {
    id: "c6",
    image: "/stichora-dark.jpg",
    alt: "Dark Sparks Flares",
    type: "photo",
  },
  {
    id: "c7",
    image: "/images/services/paid-ads.jpg",
    alt: "Yellow Highlight Document",
    type: "wireframe",
  },
  {
    id: "c8",
    image: "/stichora-stone.jpg",
    alt: "McDonald's Red M Card",
    type: "brand",
    badge: "M",
  },
  {
    id: "c9",
    image: "/why-choose-us.jpg",
    alt: "Perforated Mesh Texture",
    type: "pattern",
  },
  {
    id: "c10",
    image: "/images/services/content-strategy.jpg",
    alt: "Minimalist Document",
    type: "pattern",
  },
  {
    id: "c11",
    image: "/stichora.jpg",
    alt: "Red Dress Portrait",
    type: "photo",
  },
  {
    id: "c12",
    image: "/images/services/branding.jpg",
    alt: "Editorial Tailoring",
    type: "photo",
  },
];

export function ScrollStopper() {
  const { topHeadline, description, bottomHeadline, ctaHref = "/contact" } =
    SCROLL_STOPPER_CONTENT;

  const totalCards = CARDS.length;
  const cylinderRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mathematical zero-spacing radius formula:
  // For a regular N-gon with side length W:
  // radius = (W / 2) / tan(180° / N)
  // For N=12: tan(15°) = 0.26794919 => radius = W * 1.866025
  // This guarantees adjacent square cards touch side-by-side with 0px gap!
  const [dimensions, setDimensions] = useState({
    cardWidth: 132,
    cardHeight: 132,
    radius: 246.3,
  });

  // Start with rotation angle -30deg so:
  // - Burger eating guy is at front center (0deg)
  // - "YOU KNOW" is at front left (-30deg)
  // - "Struggling with belly fat" is at front right (+30deg)
  // - "Honestly..." is at front far right (+60deg)
  // - Yellow highlight wireframe is at back center (180deg)
  // - Red M card is at back left (210deg)
  // - Perforated dot mesh is at back far-left (240deg)
  const rotationRef = useRef(-30);
  const speedRef = useRef(0.035); // subtle ambient drift
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Responsive scale maintaining proper square cards and enlarged circle radius
  useEffect(() => {
    function updateDimensions() {
      const width = window.innerWidth;
      let size = 132;

      if (width < 640) {
        size = 84;
      } else if (width < 768) {
        size = 98;
      } else if (width < 1024) {
        size = 114;
      } else if (width < 1440) {
        size = 132;
      } else {
        size = 144;
      }

      // Proper square card: width === height
      const w = size;
      const h = size;

      // Exact zero-gap radius formula
      const halfAngleRad = Math.PI / totalCards;
      const r = (w / 2) / Math.tan(halfAngleRad);

      setDimensions({ cardWidth: w, cardHeight: h, radius: r });
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [totalCards]);

  // Butter-smooth 3D animation loop
  useEffect(() => {
    const baseSpeed = 0.035;

    const animate = () => {
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.02) {
          rotationRef.current += velocityRef.current;
          velocityRef.current *= 0.94;
        } else {
          const targetSpeed = isHoveredRef.current ? 0.008 : baseSpeed;
          speedRef.current = speedRef.current * 0.95 + targetSpeed * 0.05;
          rotationRef.current += speedRef.current;
        }
      }

      if (cylinderRef.current) {
        cylinderRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }

      // Depth-based opacity falloff:
      // Front cards are solid 1.0, back cards fade softly to ~0.38
      const stepAngle = 360 / totalCards;
      cardElementsRef.current.forEach((el, i) => {
        if (!el) return;
        const angle = i * stepAngle;
        const currentRot = (angle + rotationRef.current) % 360;
        const rad = (currentRot * Math.PI) / 180;
        const cosVal = Math.cos(rad);
        const depth = (cosVal + 1) / 2; // [0, 1]

        const opacity = 0.38 + 0.62 * Math.pow(depth, 1.4);
        el.style.opacity = opacity.toFixed(3);
      });

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [totalCards]);

  // Pointer drag interactions
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    if (e.currentTarget) {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    const sensitivity = 0.32;
    rotationRef.current += deltaX * sensitivity;
    velocityRef.current = deltaX * sensitivity;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = false;
    if (e.currentTarget) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <section
      id="scroll-stopper"
      data-nav-theme="light"
      className="relative w-full bg-white text-neutral-900 py-14 sm:py-18 lg:py-20 xl:py-24 overflow-hidden select-none border-t border-neutral-200/80"
    >
      <Container
        size="lg"
        className="relative min-h-125 sm:min-h-140 lg:min-h-155 xl:min-h-165 flex flex-col justify-between"
      >
        {/* Top-Left Headline */}
        <div className="relative z-30 pointer-events-none">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-neutral-950 leading-[1.03] font-primary pointer-events-auto">
            {topHeadline.line1}
            <br />
            {topHeadline.line2}
          </h2>
        </div>

        {/* Centered 3D Rotating Cylinder Stage with enlarged radius and square cards matching reference UI */}
        <div
          className="relative lg:absolute lg:left-[51%] lg:top-[47%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-full lg:w-[540px] xl:w-[600px] h-[320px] sm:h-[370px] lg:h-[420px] xl:h-[460px] flex items-center justify-center my-6 lg:my-0 touch-none cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
        >
          {/* 3D Perspective Stage */}
          <div
            className="relative flex items-center justify-center w-full h-full pointer-events-none"
            style={{
              perspective: "1100px",
            }}
          >
            {/* 
              Exact Direction Tilt matching the reference image:
              - rotateX(-35deg): opens the ring so we look inside from above.
              - rotateZ(18deg): tilts the left side UP and right side DOWN (top at ~11:00, bottom at ~5:00).
            */}
            <div
              className="relative flex items-center justify-center w-0 h-0"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateZ(18deg) rotateX(-35deg)",
              }}
            >
              {/* Rotating 3D Ring */}
              <div
                ref={cylinderRef}
                className="relative flex items-center justify-center w-0 h-0"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {CARDS.map((card, idx) => {
                  const angle = (idx * 360) / totalCards;
                  return (
                    <div
                      key={card.id}
                      ref={(el) => {
                        cardElementsRef.current[idx] = el;
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-[opacity] duration-75 ease-linear"
                      style={{
                        width: `${dimensions.cardWidth}px`,
                        height: `${dimensions.cardHeight}px`,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "visible",
                        transform: `rotateY(${angle}deg) translateZ(${dimensions.radius}px)`,
                      }}
                    >
                      <div className="relative w-full h-full rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden bg-neutral-100 shadow-[0_4px_18px_rgba(0,0,0,0.1)] border border-neutral-300/30">
                        {/* Base Image */}
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          sizes="180px"
                          className="object-cover pointer-events-none"
                          priority={idx < 4}
                        />

                        {/* Card Custom Overlays Matching Reference Image */}
                        {card.type === "wireframe" ? (
                          <div className="absolute inset-0 bg-[#f7f7f7]/95 p-2.5 sm:p-3 flex flex-col justify-between pointer-events-none">
                            <div className="space-y-1 opacity-35">
                              <div className="w-7 h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                              <div className="w-14 h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                              <div className="w-10 h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                            </div>
                            <div className="bg-amber-100/95 border border-amber-300/70 rounded px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono text-amber-900 leading-tight text-center font-medium shadow-xs">
                              reels · motion
                            </div>
                            <div className="space-y-0.5 opacity-30">
                              <div className="w-full h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                              <div className="w-2/3 h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                            </div>
                          </div>
                        ) : card.type === "brand" ? (
                          <div className="absolute inset-0 bg-[#f8f8f8]/95 flex flex-col items-center justify-center p-2.5 pointer-events-none">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-600 flex items-center justify-center text-amber-300 font-black text-base sm:text-lg shadow-md tracking-tighter">
                              M
                            </div>
                            <div className="mt-2 space-y-0.5 w-full px-2 opacity-30">
                              <div className="w-full h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                              <div className="w-2/3 mx-auto h-0.5 sm:h-1 bg-neutral-500 rounded-full" />
                            </div>
                          </div>
                        ) : card.type === "pattern" ? (
                          <div className="absolute inset-0 bg-neutral-200/70 backdrop-blur-[1px] pointer-events-none flex items-center justify-center">
                            <div
                              className="w-full h-full opacity-35"
                              style={{
                                backgroundImage:
                                  "radial-gradient(#000 1.5px, transparent 1.5px)",
                                backgroundSize: "7px 7px",
                              }}
                            />
                          </div>
                        ) : (
                          /* Reel Media Card */
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none flex flex-col justify-end p-2 sm:p-2.5">
                            {card.caption && (
                              <div
                                className={`font-primary font-bold text-center leading-tight whitespace-pre-line tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] ${card.captionColor === "red"
                                  ? "text-red-500 text-[10px] sm:text-[11px] lg:text-xs font-black"
                                  : card.captionColor === "accent"
                                    ? "text-amber-400 text-[10px] sm:text-[11px] tracking-wider uppercase font-black"
                                    : "text-white text-[10px] sm:text-[11px] lg:text-xs font-extrabold uppercase"
                                  }`}
                              >
                                {card.caption}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Left Paragraph & Right Headline */}
        <div className="relative z-30 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-4">
          {/* Bottom-Left Paragraph */}
          <div className="max-w-[280px] sm:max-w-xs lg:max-w-[340px] pointer-events-none">
            <p className="text-[11px] sm:text-xs text-neutral-600 font-primary leading-relaxed pointer-events-auto">
              {description}
            </p>
          </div>

          {/* Bottom-Right Headline */}
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Link
              href={ctaHref}
              className="group block text-left md:text-right"
              aria-label="Let's create something big"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-neutral-950 leading-[1.03] font-primary group-hover:text-neutral-700 transition-colors">
                {bottomHeadline.line1}
                <br />
                {bottomHeadline.line2}
              </h2>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ScrollStopper;
