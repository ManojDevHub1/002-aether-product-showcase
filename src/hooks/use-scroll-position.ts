"use client";

import { useEffect, useState } from "react";

export interface ScrollPositionState {
  scrollY: number;
  isScrolled: boolean;
  scrollDirection: "up" | "down" | null;
  scrollProgress: number;
}

export function useScrollPosition(threshold = 20): ScrollPositionState {
  const [scrollState, setScrollState] = useState<ScrollPositionState>({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: null,
    scrollProgress: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentScrollY / docHeight)) : 0;
          const direction = currentScrollY > lastScrollY ? "down" : "up";

          setScrollState({
            scrollY: currentScrollY,
            isScrolled: currentScrollY > threshold,
            scrollDirection: currentScrollY === lastScrollY ? null : direction,
            scrollProgress: progress,
          });

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}
