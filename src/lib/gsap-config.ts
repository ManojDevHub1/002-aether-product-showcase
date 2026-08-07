"use client";

import gsap from "gsap";

let registered = false;

/**
 * Initializes and registers GSAP plugins once in client runtime.
 */
export function initGSAP() {
  if (typeof window === "undefined" || registered) return;
  
  // Custom GSAP default configuration
  gsap.config({
    autoSleep: 60,
    force3D: true,
  });

  registered = true;
}

export { gsap };
