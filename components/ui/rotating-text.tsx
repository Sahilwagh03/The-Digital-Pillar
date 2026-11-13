"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface RotatingTextProps {
  /** Array of words to rotate through */
  words: string[];
  /** Duration each word stays visible before rotating in milliseconds (default: 2600) */
  intervalMs?: number;
  /** Custom CSS classes for the rotating word span */
  className?: string;
  /** Fallback static word if words array is empty */
  fallbackWord?: string;
}

export function RotatingText({
  words,
  intervalMs = 2600,
  className,
  fallbackWord = "growth",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const activeWords = words && words.length > 0 ? words : [fallbackWord];

  useEffect(() => {
    if (activeWords.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % activeWords.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [activeWords.length, intervalMs, isPaused]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % activeWords.length);
  };

  const currentWord = activeWords[index] || activeWords[0];

  return (
    <span
      className="inline-block relative overflow-hidden py-1 -my-1 align-baseline cursor-pointer group/rotate select-none transition-transform duration-200 active:scale-95"
      style={{ perspective: "1000px" }}
      aria-live="polite"
      aria-atomic="true"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleNext}
      title="Click to cycle next word"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${currentWord}-${index}`}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  y: "115%",
                  opacity: 0,
                  rotateX: -45,
                  filter: "blur(4px)",
                }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  y: "0%",
                  opacity: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  y: "-115%",
                  opacity: 0,
                  rotateX: 45,
                  filter: "blur(4px)",
                }
          }
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1], // Luxury cubic bezier easing
          }}
          className={cn(
            "inline-block will-change-transform transition-all duration-300 group-hover/rotate:brightness-110",
            className
          )}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RotatingText;
