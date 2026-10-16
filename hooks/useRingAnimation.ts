import { useEffect, useRef, MutableRefObject } from "react";

interface UseRingAnimationOptions {
  totalCards: number;
  radius: number;
  cardElementsRef: MutableRefObject<(HTMLDivElement | null)[]>;
  initialRotation?: number;
  speed?: number;
}

export function useRingAnimation({
  totalCards,
  radius,
  cardElementsRef,
  initialRotation = -45,
  speed = 0.038,
}: UseRingAnimationOptions) {
  const rotationRef = useRef(initialRotation);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      rotationRef.current += speed;

      const stepAngle = 360 / totalCards;
      cardElementsRef.current.forEach((el, i) => {
        if (!el) return;
        const cardAngle = (i * stepAngle + rotationRef.current) % 360;
        el.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;

        const rad = (cardAngle * Math.PI) / 180;
        const cosVal = Math.cos(rad);
        const depth = (cosVal + 1) / 2;

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
  }, [totalCards, radius, speed, cardElementsRef]);

  return rotationRef;
}
