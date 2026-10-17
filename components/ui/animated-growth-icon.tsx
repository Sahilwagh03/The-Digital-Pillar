"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGrowthIconProps {
  className?: string;
}

export function AnimatedGrowthIcon({ className }: AnimatedGrowthIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40px" });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full select-none pointer-events-none", className)}
    >
      <motion.svg
        viewBox="0 0 213 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.94 }
        }
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <g
          className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          style={{ transformOrigin: "160px 44px" }}
        >
          {/* Inner ring (radius ~51) */}
          <motion.path
            d="M210.908 43.9999C210.908 72.1162 188.116 94.909 159.999 94.909C131.883 94.909 109.09 72.1162 109.09 43.9999C109.09 15.8836 131.883 -6.90918 159.999 -6.90918C188.116 -6.90918 210.908 15.8836 210.908 43.9999Z"
            strokeWidth="1.3"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.85, opacity: 0 }
            }
            transition={{
              duration: 1.1,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "160px 44px" }}
            className="stroke-neutral-900/60 group-hover:stroke-neutral-900/90 transition-colors duration-500"
          />

          {/* Middle ring (radius ~102) */}
          <motion.path
            d="M261.817 44.0001C261.817 100.233 216.232 145.818 159.999 145.818C103.767 145.818 58.181 100.233 58.181 44.0001C58.181 -12.2326 103.767 -57.8181 159.999 -57.8181C216.232 -57.8181 261.817 -12.2326 261.817 44.0001Z"
            strokeWidth="1.2"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.88, opacity: 0 }
            }
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "160px 44px" }}
            className="stroke-neutral-900/35 group-hover:stroke-neutral-900/55 transition-colors duration-500"
          />

          {/* Outer ring (radius ~153) */}
          <motion.path
            d="M312.727 44C312.727 128.349 244.348 196.727 159.999 196.727C75.6503 196.727 7.27197 128.349 7.27197 44C7.27197 -40.349 75.6503 -108.727 159.999 -108.727C244.348 -108.727 312.727 -40.349 312.727 44Z"
            strokeWidth="1.1"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.9, opacity: 0 }
            }
            transition={{
              duration: 1.3,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "160px 44px" }}
            className="stroke-neutral-900/20 group-hover:stroke-neutral-900/40 transition-colors duration-500"
          />

          {/* Central Lightning Bolt Icon */}
          <motion.g
            initial={{ scale: 0.75, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.75, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "160px 44px" }}
            className="transition-transform duration-500 ease-out group-hover:scale-110"
          >
            <path
              d="M152 45.9999C151.811 46.0006 151.625 45.9475 151.465 45.8469C151.305 45.7463 151.176 45.6023 151.095 45.4316C151.013 45.2609 150.981 45.0705 151.003 44.8826C151.026 44.6946 151.101 44.5169 151.22 44.3699L161.12 34.1699C161.194 34.0842 161.295 34.0263 161.407 34.0057C161.518 33.985 161.634 34.0029 161.734 34.0564C161.834 34.1099 161.913 34.1958 161.957 34.3C162.002 34.4042 162.01 34.5206 161.98 34.6299L160.06 40.6499C160.003 40.8014 159.984 40.9644 160.005 41.1249C160.025 41.2854 160.084 41.4386 160.176 41.5713C160.269 41.7041 160.392 41.8124 160.535 41.8871C160.679 41.9617 160.838 42.0004 161 41.9999H168C168.189 41.9993 168.375 42.0523 168.535 42.1529C168.695 42.2535 168.824 42.3976 168.905 42.5683C168.987 42.739 169.019 42.9293 168.996 43.1173C168.974 43.3052 168.899 43.483 168.78 43.6299L158.88 53.8299C158.806 53.9156 158.705 53.9736 158.593 53.9942C158.481 54.0148 158.366 53.9969 158.266 53.9434C158.166 53.8899 158.087 53.804 158.043 53.6998C157.998 53.5956 157.99 53.4793 158.02 53.3699L159.94 47.3499C159.997 47.1984 160.016 47.0354 159.995 46.8749C159.975 46.7144 159.916 46.5612 159.824 46.4285C159.731 46.2957 159.608 46.1874 159.465 46.1128C159.321 46.0381 159.162 45.9994 159 45.9999H152Z"
              fill="currentColor"
              className="text-neutral-900 group-hover:text-black transition-colors duration-500"
            />
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
}

export default AnimatedGrowthIcon;
