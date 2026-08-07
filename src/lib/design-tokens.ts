/**
 * AETHER Design Tokens System
 * Single Source of Truth for Javascript/TypeScript runtime configurations.
 */

export const DESIGN_TOKENS = {
  colors: {
    bgObsidian: "#07080B",
    surfaceBasalt: "#0F1116",
    surfaceSlate: "#16181E",
    textTitanium: "#E2E4E9",
    textWhite: "#F7F8FA",
    textMuted: "#8A909E",
    accentTeal: "#00F5D4",
    accentAmber: "#FF6B35",
    glassSurface: "rgba(255, 255, 255, 0.03)",
    borderSubtle: "rgba(255, 255, 255, 0.06)",
    borderStrong: "rgba(255, 255, 255, 0.16)",
  },
  shadows: {
    soft: "0px 4px 16px rgba(0, 0, 0, 0.4)",
    medium: "0px 12px 32px rgba(0, 0, 0, 0.6)",
    large: "0px 24px 64px rgba(0, 0, 0, 0.8)",
    floating: "0px 32px 80px rgba(0, 0, 0, 0.95)",
    glowTeal: "0px 0px 32px rgba(0, 245, 212, 0.25)",
    glowAmber: "0px 0px 32px rgba(255, 107, 53, 0.20)",
  },
  motion: {
    easing: {
      appleEaseOut: [0.16, 1, 0.3, 1] as const,
      appleEaseInOut: [0.65, 0, 0.35, 1] as const,
      springSmooth: { type: "spring", stiffness: 300, damping: 30 },
      springSnappy: { type: "spring", stiffness: 450, damping: 25 },
    },
    duration: {
      instant: 0.1,
      fast: 0.25,
      medium: 0.4,
      slow: 0.8,
      cinematic: 1.2,
    },
  },
  breakpoints: {
    xs: 320,
    mobile: 375,
    mobileLg: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    desktop: 1440,
    ultraWide: 1920,
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
