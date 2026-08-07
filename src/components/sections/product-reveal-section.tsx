"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { ProductHotspot } from "@/types/product-reveal";

const HOTSPOTS: ProductHotspot[] = [
  {
    id: "adaptive-intelligence",
    title: "Adaptive Intelligence",
    category: "Neural Core",
    description:
      "AETHER ONE observes your daily rhythm, voice cadence, and implicit intent—learning to assist silently without needing manual instructions.",
    x: 28,
    y: 25,
    alignment: "top-left",
  },
  {
    id: "spatial-sensors",
    title: "Spatial Sensors",
    category: "Environmental Awareness",
    description:
      "A multi-spectrum acoustic sensor mesh reads ambient light and acoustic room dynamics without invasive visual cameras.",
    x: 72,
    y: 28,
    alignment: "top-right",
  },
  {
    id: "neural-processing",
    title: "Neural Processing",
    category: "Local SoC",
    description:
      "The local 4B-parameter NC-1 chip executes complex intent queries on-device at an unprecedented 5ms response latency.",
    x: 24,
    y: 62,
    alignment: "bottom-left",
  },
  {
    id: "ultra-precision-audio",
    title: "Ultra Precision Audio",
    category: "Acoustic Hardware",
    description:
      "Custom 360-degree beamforming microphones capture whispering voice intent while acoustic haptics provide silent tactile feedback.",
    x: 76,
    y: 68,
    alignment: "bottom-right",
  },
  {
    id: "ambient-awareness",
    title: "Ambient Awareness",
    category: "Zero-Screen UI",
    description:
      "A companion that remains completely dormant until human intent is felt—liberating your mind from screen notification loops.",
    x: 50,
    y: 84,
    alignment: "bottom-right",
  },
];

export function ProductRevealSection() {
  const [activeHotspot, setActiveHotspot] = useState<ProductHotspot | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Close active card on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveHotspot(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product-reveal"
      aria-label="AETHER ONE Product Reveal Stage"
      className="relative min-h-screen w-full py-28 sm:py-36 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Background Volumetric Lighting & Studio Lighting Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-radial from-[var(--accent-teal)]/10 via-transparent to-transparent blur-[140px] opacity-60 transform-gpu" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial from-white/5 via-transparent to-transparent blur-[120px] opacity-40 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
      </div>

      <Container size="xl" className="relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 w-full"
        >
          <SectionHeader
            badgeText="THE HARDWARE REVELATION"
            title="Sculpted from Titanium. Born for Silence."
            subtitle="Every millimeter of AETHER ONE is engineered to recede into your hand—merging Grade 5 aerospace titanium, seamless optical glass, and unyielding material purity."
          />
        </motion.div>

        {/* Center Stage Presentation Stage */}
        <div className="relative w-full max-w-5xl mx-auto aspect-square sm:aspect-[16/10] flex items-center justify-center rounded-3xl p-4 sm:p-8">
          
          {/* Studio Radial Backdrop Ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

          {/* Central Product Showcase Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-[380px] sm:w-96 sm:h-[500px] rounded-[52px] p-[2px] bg-gradient-to-b from-white/30 via-white/10 to-white/5 shadow-[0_32px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl transform-gpu"
          >
            {/* Outer Titanium Chassis */}
            <div className="relative w-full h-full rounded-[50px] bg-gradient-to-b from-[#181a20] via-[#0d0e12] to-[#07080b] p-3 flex flex-col items-center justify-between overflow-hidden shadow-2xl">
              
              {/* Studio Specular Lighting Beam */}
              <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-white/30 via-white/5 to-transparent z-10 pointer-events-none" />

              {/* High-Resolution Device Render */}
              <div className="relative w-full h-full rounded-[42px] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/aether-one-device.jpg"
                  alt="AETHER ONE Titanium & Glass Body"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Animated Glass Reflection Highlight */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
                />
              </div>

              {/* Bottom Holographic Logo Seal */}
              <div className="absolute bottom-4 z-20 px-4 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] glow-dot-teal animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase">
                  AETHER ONE • REVEAL STAGE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Hotspot Nodes Overlay (Desktop & Tablet) */}
          <div className="absolute inset-0 hidden sm:block pointer-events-none">
            {HOTSPOTS.map((hotspot, idx) => {
              const isActive = activeHotspot?.id === hotspot.id;
              return (
                <div
                  key={hotspot.id}
                  style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30"
                >
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.12 }}
                    onClick={() => setActiveHotspot(isActive ? null : hotspot)}
                    onMouseEnter={() => setActiveHotspot(hotspot)}
                    className={cn(
                      "group relative flex items-center justify-center w-8 h-8 rounded-full transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] cursor-pointer",
                      isActive
                        ? "bg-[var(--accent-teal)] text-[#07080b] scale-110 shadow-[0_0_24px_#00f5d4]"
                        : "bg-black/60 backdrop-blur-md border border-white/30 text-white hover:border-[var(--accent-teal)] hover:scale-110"
                    )}
                    aria-label={`Inspect ${hotspot.title}`}
                    aria-expanded={isActive}
                  >
                    <span className="absolute inset-0 rounded-full border border-[var(--accent-teal)]/50 animate-ping opacity-75" />
                    <span className="text-xs font-mono font-bold">0{idx + 1}</span>
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Hotspot Detail Card Popup (Desktop & Tablet) */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-lg w-full"
            >
              <GlassCard variant="elevated" hoverEffect={false} className="relative p-6 border-white/20">
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
                  aria-label="Close feature callout card"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="teal" dot={true}>
                    {activeHotspot.category}
                  </Badge>
                </div>

                <Typography variant="h3" className="text-white mb-2 font-semibold">
                  {activeHotspot.title}
                </Typography>

                <Typography variant="body" className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {activeHotspot.description}
                </Typography>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Hotspots Accordion List */}
        <div className="w-full mt-12 space-y-4 sm:hidden">
          <Typography variant="caption" className="block text-center text-[var(--accent-teal)] mb-4">
            [ TAP TO REVEAL CRAFTSMANSHIP DETAILS ]
          </Typography>
          {HOTSPOTS.map((hotspot, idx) => (
            <GlassCard key={hotspot.id} variant="standard" hoverEffect={false} className="p-5 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--accent-teal)] font-bold">
                  0{idx + 1} • {hotspot.category}
                </span>
                <Sparkles className="w-4 h-4 text-[var(--accent-teal)]" />
              </div>
              <Typography variant="h3" className="text-white text-lg font-medium">
                {hotspot.title}
              </Typography>
              <Typography variant="body" className="text-[var(--text-muted)] text-xs">
                {hotspot.description}
              </Typography>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
