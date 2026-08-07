"use client";

import { useState, useEffect } from "react";

export interface MouseVectorState {
  x: number; // Normalized -1 to +1
  y: number; // Normalized -1 to +1
  pixelX: number;
  pixelY: number;
}

export function useMouseVector(): MouseVectorState {
  const [vector, setVector] = useState<MouseVectorState>({
    x: 0,
    y: 0,
    pixelX: 0,
    pixelY: 0,
  });

  useEffect(() => {
    // Only enable parallax on non-touch desktop devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const normalizedX = (e.clientX / innerWidth) * 2 - 1;
        const normalizedY = (e.clientY / innerHeight) * 2 - 1;

        setVector({
          x: normalizedX,
          y: normalizedY,
          pixelX: e.clientX,
          pixelY: e.clientY,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return vector;
}
