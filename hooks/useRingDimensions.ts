import { useState, useEffect } from "react";

export interface RingDimensions {
  cardWidth: number;
  cardHeight: number;
  radius: number;
}

export function useRingDimensions(totalCards: number): RingDimensions {
  const [dimensions, setDimensions] = useState<RingDimensions>({
    cardWidth: 136,
    cardHeight: 146.88,
    radius: 253.78,
  });

  useEffect(() => {
    function updateDimensions() {
      const width = window.innerWidth;
      let size = 136;

      if (width < 480) {
        size = 82;
      } else if (width < 640) {
        size = 94;
      } else if (width < 768) {
        size = 104;
      } else if (width < 1024) {
        size = 110;
      } else if (width < 1440) {
        size = 124;
      } else {
        size = 136;
      }

      const w = size;
      const h = size * 1.08;

      const halfAngleRad = Math.PI / totalCards;
      const r = (w / 2) / Math.tan(halfAngleRad);

      setDimensions({ cardWidth: w, cardHeight: h, radius: r });
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [totalCards]);

  return dimensions;
}
