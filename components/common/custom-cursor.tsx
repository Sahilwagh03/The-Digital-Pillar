"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

export type CursorType = "default" | "hover" | "view" | "hidden";

function subscribeFinePointer(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(pointer: fine)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getFinePointerSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isFinePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getServerSnapshot
  );

  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorText, setCursorText] = useState("View");
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Exact pointer coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for the single full yellow dot
  const cursorX = useSpring(mouseX, { damping: 24, stiffness: 300, mass: 0.12 });
  const cursorY = useSpring(mouseY, { damping: 24, stiffness: 300, mass: 0.12 });

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Check for custom "view" cursor trigger (e.g. Work section image)
      const viewElement = target.closest<HTMLElement>('[data-cursor="view"]');
      if (viewElement) {
        setCursorType("view");
        setCursorText(viewElement.getAttribute("data-cursor-text") || "View");
        return;
      }

      // 2. Check for hidden cursor trigger
      const hideElement = target.closest<HTMLElement>('[data-cursor="hidden"]');
      if (hideElement) {
        setCursorType("hidden");
        return;
      }

      // 3. Check for interactive elements (links, buttons, inputs)
      const interactive = target.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      if (interactive) {
        setCursorType("hover");
        return;
      }

      // 4. Default idle cursor
      setCursorType("default");
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsPressed(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isFinePointer, mouseX, mouseY]);

  if (!isFinePointer) return null;

  const isView = cursorType === "view";
  const isHover = cursorType === "hover";
  const isHidden = cursorType === "hidden" || !isVisible;

  // Single full yellow circle sizing:
  // default: 18px solid yellow dot
  // hover: 38px expanded yellow circle
  // view: 96px big yellow circle displaying "View ↗"
  const size = isView ? 96 : isHover ? 38 : 18;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Single Full Yellow Dot / Morphing Big "View" Circle */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: size,
          height: size,
          scale: isHidden ? 0 : isPressed ? (isView ? 0.94 : 0.8) : 1,
          opacity: isHidden ? 0 : 1,
          backgroundColor: "#fdbb11",
          boxShadow: isView
            ? "0 0 45px rgba(253, 187, 17, 0.7)"
            : isHover
            ? "0 0 24px rgba(253, 187, 17, 0.6)"
            : "0 0 16px rgba(253, 187, 17, 0.55)",
        }}
        transition={{
          type: "spring",
          damping: isView ? 20 : 25,
          stiffness: isView ? 260 : 320,
          mass: 0.12,
        }}
        className="rounded-full bg-[#fdbb11] flex items-center justify-center will-change-transform shadow-lg"
      >
        <AnimatePresence mode="wait">
          {isView && (
            <motion.div
              key="view-content"
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-0.5 text-black font-extrabold uppercase font-mono tracking-widest text-[11px] sm:text-xs select-none"
            >
              <span>{cursorText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default CustomCursor;
