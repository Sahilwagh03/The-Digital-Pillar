import { memo } from "react";
import Image from "next/image";

export interface CardSpec {
  id: string;
  image: string;
  alt: string;
  type?: "reel" | "brand" | "wireframe" | "pattern" | "photo";
  caption?: string;
  captionColor?: "white" | "red" | "accent";
  badge?: string;
}

interface StopperCardItemProps {
  card: CardSpec;
  idx: number;
  width: number;
  height: number;
  radius: number;
  angle: number;
  setRef: (el: HTMLDivElement | null) => void;
}

export const StopperCardItem = memo(function StopperCardItem({
  card,
  idx,
  width,
  height,
  radius,
  angle,
  setRef,
}: StopperCardItemProps) {
  return (
    <div
      ref={setRef}
      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto will-change-transform"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transformStyle: "preserve-3d",
        backfaceVisibility: "visible",
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      }}
    >
      <div className="relative w-full h-full rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] overflow-hidden bg-[#0e0e14] shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-white/15">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="180px"
          className="object-cover pointer-events-none"
          priority={idx < 4}
        />

        {card.type === "wireframe" ? (
          <div className="absolute inset-0 bg-[#0c0c16]/95 border border-white/10 p-2.5 sm:p-3 flex flex-col justify-between pointer-events-none">
            <div className="space-y-1 opacity-50">
              <div className="w-7 h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
              <div className="w-14 h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
              <div className="w-10 h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
            </div>
            <div className="bg-[#fdbb11]/15 border border-[#fdbb11]/50 rounded px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono text-[#fdbb11] leading-tight text-center font-semibold shadow-xs">
              reels · motion
            </div>
            <div className="space-y-0.5 opacity-40">
              <div className="w-full h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
              <div className="w-2/3 h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
            </div>
          </div>
        ) : card.type === "brand" ? (
          <div className="absolute inset-0 bg-[#0c0c16]/95 flex flex-col items-center justify-center p-2.5 pointer-events-none border border-white/10">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-600 flex items-center justify-center text-amber-300 font-black text-base sm:text-lg shadow-md tracking-tighter">
              M
            </div>
            <div className="mt-2 space-y-0.5 w-full px-2 opacity-40">
              <div className="w-full h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
              <div className="w-2/3 mx-auto h-0.5 sm:h-1 bg-neutral-600 rounded-full" />
            </div>
          </div>
        ) : card.type === "pattern" ? (
          <div className="absolute inset-0 bg-[#0c0c16]/85 backdrop-blur-[1px] pointer-events-none flex items-center justify-center">
            <div
              className="w-full h-full opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(253,187,17,0.3) 1.5px, transparent 1.5px)",
                backgroundSize: "7px 7px",
              }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-2 sm:p-2.5">
            {card.caption && (
              <div
                className={`font-primary font-bold text-center leading-tight whitespace-pre-line tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] ${
                  card.captionColor === "red"
                    ? "text-red-400 text-[10px] sm:text-[11px] lg:text-xs font-black"
                    : card.captionColor === "accent"
                    ? "text-[#fdbb11] text-[10px] sm:text-[11px] tracking-wider uppercase font-black drop-shadow-[0_0_8px_rgba(253,187,17,0.8)]"
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
});
