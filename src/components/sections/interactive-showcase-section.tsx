"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Radio,
  Zap,
  Volume2,
  Activity,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { useMouseVector } from "@/hooks/use-mouse-vector";
import { FlagshipFeature } from "@/types/interactive-feature";

const FLAGSHIP_FEATURES: FlagshipFeature[] = [
  {
    id: "adaptive-intelligence",
    number: "01",
    title: "Adaptive Intelligence",
    subtitle: "Real-Time Intent Prediction",
    description:
      "AETHER ONE continuously analyzes behavioral cadence and ambient context—predicting your intent before manual input is required.",
    badge: "PREDICTIVE ENGINE",
    metricLabel: "INTENT ACCURACY",
    metricValue: "99.4%",
    accentColor: "teal",
    hudType: "adaptive",
    specCallouts: [
      "Implicit Context Engine",
      "Behavioral Pattern Learning",
      "Zero-Touch Intent Anticipation",
    ],
  },
  {
    id: "spatial-awareness",
    number: "02",
    title: "Spatial Awareness",
    subtitle: "360° Micro-Spectrum Perception",
    description:
      "Perceives room acoustics, environmental noise profiles, and human proximity through an invisible sensor mesh—no invasive cameras.",
    badge: "CAMERA-FREE PERCEIVE",
    metricLabel: "ACOUSTIC CHANNELS",
    metricValue: "128 MESH",
    accentColor: "teal",
    hudType: "spatial",
    specCallouts: [
      "Micro-Spectrum Acoustic Depth",
      "Camera-Free Privacy Mesh",
      "Ambient Light & Spatial Profiling",
    ],
  },
  {
    id: "neural-interaction",
    number: "03",
    title: "Neural Interaction",
    subtitle: "Zero-Latency Local Compute",
    description:
      "On-device 4B-parameter NC-1 neural core executes complex multi-step reasoning at an unprecedented 5ms response latency.",
    badge: "5MS LOCAL SOC",
    metricLabel: "RESPONSE LATENCY",
    metricValue: "5.0 ms",
    accentColor: "amber",
    hudType: "neural",
    specCallouts: [
      "4B Parameter Local Silicon",
      "Air-Gapped Temporary RAM",
      "Zero Cloud Dependency",
    ],
  },
  {
    id: "ultra-precision-audio",
    number: "04",
    title: "Ultra Precision Audio",
    subtitle: "Spatial Beamforming Micro-Array",
    description:
      "Captures quiet whispering voice intent in noisy crowd environments while isolating acoustic haptic feedback directly into your hand.",
    badge: "BEAMFORMING ARRAY",
    metricLabel: "NOISE ISOLATION",
    metricValue: "-48 dB",
    accentColor: "teal",
    hudType: "audio",
    specCallouts: [
      "Whisper Voice Capture Engine",
      "Directional Acoustic Haptics",
      "Acoustic Noise Suppression",
    ],
  },
  {
    id: "infinite-battery",
    number: "05",
    title: "Infinite Battery Intelligence",
    subtitle: "72-Hour Photonic Energy Core",
    description:
      "Kinetic vibration harvesting combined with micro-photonic solar rim energy management yields 72 hours of uninterrupted ambient life.",
    badge: "PHOTONIC POWER",
    metricLabel: "BATTERY DURATION",
    metricValue: "72 Hours",
    accentColor: "teal",
    hudType: "battery",
    specCallouts: [
      "Kinetic Vibration Harvesting",
      "Micro-Photonic Solar Rim",
      "5-Min Emergency Dock Charge",
    ],
  },
];

export function InteractiveShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState<FlagshipFeature>(FLAGSHIP_FEATURES[0]);
  const { x, y } = useMouseVector();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Parallax Tilt Calculation for the HUD Stage
  const tiltX = y * 6;
  const tiltY = -x * 6;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard Arrow Navigation for Accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = FLAGSHIP_FEATURES.findIndex((f) => f.id === activeFeature.id);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % FLAGSHIP_FEATURES.length;
        setActiveFeature(FLAGSHIP_FEATURES[nextIndex]);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + FLAGSHIP_FEATURES.length) % FLAGSHIP_FEATURES.length;
        setActiveFeature(FLAGSHIP_FEATURES[prevIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFeature]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      aria-label="AETHER ONE Interactive Feature Showcase"
      className="relative min-h-screen w-full py-28 sm:py-36 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Volumetric Atmospheric Glow & Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[800px] bg-gradient-to-tr from-[var(--accent-teal)]/15 via-[#00f5d4]/5 to-[var(--accent-amber)]/10 blur-[160px] opacity-75 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.025]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <Badge variant="teal" dot={true}>
            FLAGSHIP HARDWARE INNOVATIONS
          </Badge>
          <Typography variant="h1" gradient={true} className="text-balance font-extrabold tracking-tight">
            Explore AETHER ONE Core Capabilities.
          </Typography>
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            Select a feature tab below or use your keyboard arrow keys to inspect AETHER ONE’s spatial HUD and live telemetry metrics.
          </Typography>
        </motion.div>

        {/* Mobile Horizontal Pill Scroll Bar (< 1024px) */}
        <div className="lg:hidden overflow-x-auto no-scrollbar flex items-center gap-2 pb-2 px-1">
          {FLAGSHIP_FEATURES.map((feature) => {
            const isActive = activeFeature.id === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] border",
                  isActive
                    ? "bg-[var(--accent-teal)] text-[#07080b] border-[var(--accent-teal)] shadow-[0_0_16px_#00f5d4]"
                    : "glass-panel text-white/70 border-white/10 hover:border-white/30"
                )}
              >
                {feature.number}. {feature.title}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Desktop Interactive Feature Selector (5 Columns) */}
          <div
            className="hidden lg:flex lg:col-span-5 flex-col gap-3"
            role="tablist"
            aria-label="Flagship Features Selector"
          >
            {FLAGSHIP_FEATURES.map((feature) => {
              const isActive = activeFeature.id === feature.id;

              return (
                <motion.button
                  key={feature.id}
                  role="tab"
                  id={`tab-${feature.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${feature.id}`}
                  onClick={() => setActiveFeature(feature)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={cn(
                    "relative text-left p-6 rounded-2xl transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] border text-balance group",
                    isActive
                      ? "glass-panel-elevated border-white/25 shadow-2xl bg-white/[0.05]"
                      : "bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                  )}
                >
                  {/* Active Tab Accent Border Glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureGlow"
                      className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-[var(--accent-teal)] shadow-[0_0_20px_#00f5d4]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[var(--accent-teal)]">
                        {feature.number}
                      </span>
                      <span className="text-base font-semibold text-white tracking-wide group-hover:text-[var(--accent-teal)] transition-colors">
                        {feature.title}
                      </span>
                    </div>
                    {isActive ? (
                      <Badge variant={feature.accentColor} dot={true} className="text-[10px] py-0.5 px-2.5">
                        ACTIVE
                      </Badge>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {feature.subtitle}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Stage & Spatial HUD (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                id={`panel-${activeFeature.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeFeature.id}`}
                initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                }}
                className="relative w-full max-w-2xl aspect-square sm:aspect-[4/3] rounded-3xl p-6 sm:p-8 glass-panel-elevated border-white/20 shadow-[0_32px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden group transform-gpu will-change-transform"
              >
                {/* Visual Canvas Background Specular Light */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-700",
                    activeFeature.accentColor === "teal"
                      ? "bg-radial from-[var(--accent-teal)]/35 via-transparent to-transparent"
                      : "bg-radial from-[var(--accent-amber)]/35 via-transparent to-transparent"
                  )}
                />

                {/* Top Telemetry Header Bar */}
                <div className="flex items-center justify-between relative z-10 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Badge variant={activeFeature.accentColor} dot={true}>
                      {activeFeature.badge}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      {activeFeature.metricLabel}
                    </span>
                    <span className="text-xl font-mono font-bold text-[var(--accent-teal)] glow-text-teal">
                      {activeFeature.metricValue}
                    </span>
                  </div>
                </div>

                {/* Center Device Visual + High-Precision Animated Spatial HUD Overlay */}
                <div className="relative my-auto py-6 flex items-center justify-center">
                  
                  {/* Central Device Image Render */}
                  <div className="relative w-44 h-56 sm:w-56 sm:h-72 rounded-[36px] overflow-hidden border border-white/20 shadow-2xl z-10 transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/aether-one-device.jpg"
                      alt={activeFeature.title}
                      fill
                      sizes="320px"
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/60 pointer-events-none" />
                  </div>

                  {/* Enhanced Dynamic HUD Overlay 01: Adaptive Radar Sweep */}
                  {activeFeature.hudType === "adaptive" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="w-72 h-72 sm:w-84 sm:h-84 rounded-full border border-dashed border-[var(--accent-teal)]/40 flex items-center justify-center"
                      >
                        <div className="w-1/2 h-1/2 bg-gradient-to-tr from-[var(--accent-teal)]/20 to-transparent rounded-tl-full" />
                      </motion.div>
                    </div>
                  )}

                  {/* Enhanced Dynamic HUD Overlay 02: Spatial Ripple Mesh */}
                  {activeFeature.hudType === "spatial" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [0.8, 1.8], opacity: [0.7, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                          className="absolute w-44 h-44 rounded-full border border-[var(--accent-teal)]/40 shadow-[0_0_12px_#00f5d4]"
                        />
                      ))}
                    </div>
                  )}

                  {/* Enhanced Dynamic HUD Overlay 03: Neural Core Ring */}
                  {activeFeature.hudType === "neural" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        animate={{ scale: [0.92, 1.08, 0.92], rotate: [0, 90, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-[var(--accent-amber)]/50 bg-[var(--accent-amber)]/10 shadow-[inset_0_0_30px_rgba(255,107,53,0.3)]"
                      />
                    </div>
                  )}

                  {/* Enhanced Dynamic HUD Overlay 04: Precision Audio Equalizer */}
                  {activeFeature.hudType === "audio" && (
                    <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: ["20px", "60px", "20px"] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                            className="w-1.5 bg-[var(--accent-teal)] rounded-full shadow-[0_0_8px_#00f5d4]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: ["20px", "60px", "20px"] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                            className="w-1.5 bg-[var(--accent-teal)] rounded-full shadow-[0_0_8px_#00f5d4]"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Enhanced Dynamic HUD Overlay 05: Photonic Solar Energy Collector */}
                  {activeFeature.hudType === "battery" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-72 h-72 rounded-full border border-[var(--accent-teal)]/60 bg-radial from-[var(--accent-teal)]/20 via-transparent to-transparent"
                      />
                    </div>
                  )}
                </div>

                {/* Bottom Spec Callouts Grid */}
                <div className="relative z-10 pt-4 border-t border-white/10 space-y-3">
                  <Typography variant="h3" className="text-white font-medium text-lg">
                    {activeFeature.subtitle}
                  </Typography>
                  <Typography variant="body" className="text-[var(--text-muted)] text-xs sm:text-sm">
                    {activeFeature.description}
                  </Typography>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    {activeFeature.specCallouts.map((callout, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-[11px] font-mono text-white/90 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-teal)] shrink-0" />
                        <span className="truncate">{callout}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}
