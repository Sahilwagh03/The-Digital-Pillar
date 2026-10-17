"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGlobeIconProps {
  className?: string;
}

export function AnimatedGlobeIcon({ className }: AnimatedGlobeIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40px" });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full select-none pointer-events-none", className)}
    >
      <motion.svg
        viewBox="0 0 204 199"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        initial={{ opacity: 0, rotate: -25, scale: 0.94 }}
        animate={
          isInView
            ? { opacity: 1, rotate: 0, scale: 1 }
            : { opacity: 0, rotate: -25, scale: 0.94 }
        }
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <g
          className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12 group-hover:scale-[1.04]"
          style={{
            transformOrigin: "120.291px 78px",
          }}
        >
          {/* Outer Sphere Boundary */}
          <path
            d="M239.564 78C239.564 143.873 186.163 197.273 120.291 197.273C54.4184 197.273 1.01819 143.873 1.01819 78C1.01819 12.1275 54.4184 -41.2727 120.291 -41.2727C186.163 -41.2727 239.564 12.1275 239.564 78Z"
            strokeWidth="1.4"
            strokeLinecap="round"
            className="stroke-neutral-900/50 group-hover:stroke-neutral-900/80 transition-colors duration-500"
          />
          {/* Inner Longitude Meridians */}
          <path
            d="M120.291 -41.2727C120.291 -41.2727 161.018 -3.45452 161.018 78C161.018 159.455 120.291 197.273 120.291 197.273"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="stroke-neutral-900/30 group-hover:stroke-neutral-900/50 transition-colors duration-500"
          />
          <path
            d="M120.291 -41.2727C120.291 -41.2727 79.5636 -3.45452 79.5636 78C79.5636 159.455 120.291 197.273 120.291 197.273"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="stroke-neutral-900/30 group-hover:stroke-neutral-900/50 transition-colors duration-500"
          />
          <path
            d="M120.291 -41.2727C175.564 -16.5454 198.836 27.0909 198.836 78C198.836 128.909 175.564 172.545 120.291 197.273"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="stroke-neutral-900/20 group-hover:stroke-neutral-900/40 transition-colors duration-500"
          />
          <path
            d="M120.291 -41.2727C65.0182 -16.5454 41.7455 27.0909 41.7455 78C41.7455 128.909 65.0182 172.545 120.291 197.273"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="stroke-neutral-900/20 group-hover:stroke-neutral-900/40 transition-colors duration-500"
          />
          {/* Inner Latitude Parallels */}
          <path
            d="M239.564 78C239.564 122.183 186.163 158 120.291 158C54.4184 158 1.01819 122.183 1.01819 78C1.01819 33.8172 54.4184 -2 120.291 -2C186.163 -2 239.564 33.8172 239.564 78Z"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="stroke-neutral-900/20 group-hover:stroke-neutral-900/40 transition-colors duration-500"
          />
          <path
            d="M239.564 78C239.564 100.493 186.163 118.727 120.291 118.727C54.4184 118.727 1.01819 100.493 1.01819 78C1.01819 55.5069 54.4184 37.2727 120.291 37.2727C186.163 37.2727 239.564 55.5069 239.564 78Z"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="stroke-neutral-900/20 group-hover:stroke-neutral-900/40 transition-colors duration-500"
          />
          <path
            d="M40.2909 -4.90918C98.4727 22.7272 142.109 22.7272 200.291 -4.90918"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="stroke-neutral-900/15 group-hover:stroke-neutral-900/35 transition-colors duration-500"
          />
          <path
            d="M40.2909 160.909C98.4727 133.273 142.109 133.273 200.291 160.909"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="stroke-neutral-900/15 group-hover:stroke-neutral-900/35 transition-colors duration-500"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default AnimatedGlobeIcon;
