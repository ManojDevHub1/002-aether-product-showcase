"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, ShieldCheck, Zap, Radio, ChevronRight, Sparkles, Sliders, CheckCircle2, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { HardwareLayer, MaterialCard, SpecCategory } from "@/types/tech-specs";

const HARDWARE_LAYERS: HardwareLayer[] = [
  {
    id: "lens-prism",
    number: "LAYER 01",
    name: "Crystalline Optical Prism Lens",
    material: "Multi-Spectrum Sapphire Glass",
    description: "Pure optical lens that transmits bioluminescent aurora signals while housing ambient light profiling sensors.",
    tolerance: "0.005mm Optical Flatness",
  },
  {
    id: "titanium-chassis",
    number: "LAYER 02",
    name: "Grade 5 Aerospace Titanium Chassis",
    material: "Anodized Structural Titanium",
    description: "Machined from a solid titanium block using 5-axis CNC diamond tooling to create a seamless acoustic enclosure.",
    tolerance: "0.010mm Machining Precision",
  },
  {
    id: "neural-soc",
    number: "LAYER 03",
    name: "AETHER NC-1 Neural Processor SoC",
    material: "4nm Custom Neural Silicon",
    description: "4-billion parameter on-device AI chip executing intent, speech, and context at an ultra-low 5ms latency.",
    tolerance: "4nm Lithography Node",
  },
  {
    id: "acoustic-mesh",
    number: "LAYER 04",
    name: "Spatial Beamforming Acoustic Mesh",
    material: "Micro-Perforated Acoustic Array",
    description: "360-degree spatial beamforming microphone array capturing whispering voice commands in high-noise environments.",
    tolerance: "0.15mm Micro-Apertures",
  },
  {
    id: "photonic-battery",
    number: "LAYER 05",
    name: "Photonic Battery Core & Haptic Motor",
    material: "Kinetic & Solar Energy Core",
    description: "Provides 72 hours of uninterrupted power through ambient kinetic vibration harvesting and micro-photonic rim solar cells.",
    tolerance: "72h Continuous Runtime",
  },
];

const MATERIALS: MaterialCard[] = [
  {
    id: "titanium",
    title: "Grade 5 Titanium",
    category: "STRUCTURAL HARDWARE",
    description: "Aerospace alloy offering an unbeatable strength-to-weight ratio and natural acoustic resonance.",
    spec: "42.5g Featherweight Mass",
  },
  {
    id: "ceramic",
    title: "Silk Ceramic Coating",
    category: "SURFACE FINISH",
    description: "Diamond-hard plasma ceramic oxidation layer that resists scratches and fingerprints indefinitely.",
    spec: "9H Mohs Hardness Rating",
  },
  {
    id: "optical-glass",
    title: "Ultra-Clear Sapphire Prism",
    category: "OPTICAL LENS",
    description: "Scratch-proof optical lens boasting 99.8% light transmission for serene status signals.",
    spec: "99.8% Optical Purity",
  },
  {
    id: "sustainability",
    title: "100% Recycled Elements",
    category: "SUSTAINABILITY",
    description: "Formed entirely from 100% recycled aerospace titanium and 100% recycled rare-earth magnets.",
    spec: "Zero Environmental Footprint",
  },
];

const SPEC_CATEGORIES: SpecCategory[] = [
  {
    id: "dimensions",
    category: "Dimensions & Physical Build",
    items: [
      { label: "Height", value: "88.4 mm" },
      { label: "Width", value: "62.1 mm" },
      { label: "Thickness", value: "14.2 mm" },
      { label: "Total Mass", value: "42.5 grams" },
      { label: "Enclosure Material", value: "Grade 5 Anodized Aerospace Titanium" },
    ],
  },
  {
    id: "processor",
    category: "Neural Core & Processing",
    items: [
      { label: "Neural Processor", value: "AETHER NC-1 (Custom 4nm SoC)" },
      { label: "Model Architecture", value: "4-Billion On-Device Multimodal Model" },
      { label: "Execution Latency", value: "5.0 milliseconds (Zero Cloud Dependency)" },
      { label: "Local RAM Vault", value: "16GB Unified LPDDR5X (Air-Gapped)" },
    ],
  },
  {
    id: "acoustics",
    category: "Acoustics & Spatial Sensors",
    items: [
      { label: "Microphone Array", value: "360° 8-Mic Beamforming Acoustic Mesh" },
      { label: "Noise Cancellation", value: "-48 dB Dynamic Spatial Isolation" },
      { label: "Haptic Feedback", value: "Directional Acoustic Resonator Motor" },
      { label: "Ambient Perception", value: "Camera-Free Micro-Spectrum Depth Sensor" },
    ],
  },
  {
    id: "power",
    category: "Power & Battery Management",
    items: [
      { label: "Battery Runtime", value: "72 Hours Continuous Ambient Use" },
      { label: "Energy Harvesting", value: "Kinetic Vibration + Micro-Photonic Solar Rim" },
      { label: "Charging Method", value: "Acoustic Titanium Dock (Magnetic Alignment)" },
      { label: "Fast Charge", value: "5 Minutes Charge = 18 Hours Use" },
    ],
  },
];

export function TechSpecsSection() {
  const [activeLayer, setActiveLayer] = useState<HardwareLayer>(HARDWARE_LAYERS[0]);
  const [activeSpecCategory, setActiveSpecCategory] = useState<SpecCategory>(SPEC_CATEGORIES[0]);

  return (
    <section
      id="specs"
      aria-label="AETHER ONE Technical Specifications & Engineering Excellence"
      className="relative min-h-screen w-full py-28 sm:py-40 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Background Lighting Shimmer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[var(--accent-teal)]/10 via-transparent to-transparent blur-[140px] opacity-60 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-36 sm:space-y-48">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" dot={true}>
            ENGINEERING EXCELLENCE
          </Badge>
          <Typography variant="h1" gradient={true} className="text-balance font-extrabold tracking-tight">
            Machined to 0.01mm Purity.
          </Typography>
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            Explore AETHER ONE’s exploded internal hardware architecture, luxury material breakdown, and radical spec transparency.
          </Typography>
        </div>

        {/* 1. Exploded Hardware Layer Stage */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-[var(--accent-teal)] uppercase tracking-widest font-bold block mb-1">
                INTERACTIVE HARDWARE STAGE
              </span>
              <Typography variant="h2" className="text-white font-bold tracking-tight text-2xl sm:text-3xl">
                Exploded Architecture.
              </Typography>
            </div>
            <Badge variant="teal" dot={true}>
              5 PRECISION LAYERS
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Layer Selection Buttons (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {HARDWARE_LAYERS.map((layer) => {
                const isActive = activeLayer.id === layer.id;

                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer)}
                    className={cn(
                      "p-5 rounded-2xl text-left transition-all border outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] cursor-pointer group",
                      isActive
                        ? "glass-panel-elevated border-white/25 shadow-2xl bg-white/[0.04]"
                        : "bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.02]"
                    )}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono text-[var(--accent-teal)] font-bold">
                        {layer.number}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] glow-dot-teal" />
                      )}
                    </div>
                    <Typography variant="h3" className="text-white text-base font-semibold group-hover:text-[var(--accent-teal)] transition-colors">
                      {layer.name}
                    </Typography>
                    <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                      {layer.tolerance}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Exploded Stage Visual Display (7 Columns) */}
            <div className="lg:col-span-7 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl aspect-square sm:aspect-[4/3] rounded-3xl p-8 glass-panel-elevated border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden relative"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                    <Badge variant="teal" dot={true}>
                      {activeLayer.number}
                    </Badge>
                    <span className="text-xs font-mono text-white/50">{activeLayer.tolerance}</span>
                  </div>

                  {/* Central Layer Graphic Preview */}
                  <div className="my-auto py-8 flex flex-col items-center justify-center text-center relative z-10 space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/30 flex items-center justify-center text-[var(--accent-teal)] shadow-[0_0_32px_rgba(0,245,212,0.25)]">
                      <Layers className="w-10 h-10 animate-pulse" />
                    </div>
                    <Typography variant="h3" className="text-white font-bold text-xl sm:text-2xl max-w-sm">
                      {activeLayer.name}
                    </Typography>
                    <Badge variant="neutral">{activeLayer.material}</Badge>
                  </div>

                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <Typography variant="body" className="text-[var(--text-muted)] text-sm">
                      {activeLayer.description}
                    </Typography>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* 2. Material Breakdown Cards Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="teal" dot={true}>
              MATERIAL SCIENCE
            </Badge>
            <Typography variant="h2" className="text-white font-bold tracking-tight">
              Aerospace Purity & Sustainability.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((mat) => (
              <motion.div
                key={mat.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-panel p-6 rounded-2xl border-white/10 hover:border-white/25 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[var(--accent-teal)] font-bold uppercase tracking-wider">
                    {mat.category}
                  </span>
                  <Typography variant="h3" className="text-white font-semibold text-lg">
                    {mat.title}
                  </Typography>
                  <Typography variant="body" className="text-[var(--text-muted)] text-xs leading-relaxed">
                    {mat.description}
                  </Typography>
                </div>
                <div className="pt-3 border-t border-white/10 text-right">
                  <span className="text-xs font-mono text-white/80 font-bold">{mat.spec}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Minimal Technical Specifications Matrix */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="teal" dot={true}>
              TECHNICAL SPECIFICATIONS
            </Badge>
            <Typography variant="h2" className="text-white font-bold tracking-tight">
              Radical Engineering Transparency.
            </Typography>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex overflow-x-auto no-scrollbar justify-center gap-2 pb-2">
            {SPEC_CATEGORIES.map((cat) => {
              const isActive = activeSpecCategory.id === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveSpecCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] border cursor-pointer",
                    isActive
                      ? "bg-white text-[#07080b] border-white font-bold shadow-lg"
                      : "glass-panel text-white/70 border-white/10 hover:border-white/30"
                  )}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>

          {/* Active Spec Matrix Table */}
          <motion.div
            key={activeSpecCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border-white/15 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="divide-y divide-white/10">
              {activeSpecCategory.items.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                  <span className="text-sm font-mono font-bold text-[var(--accent-teal)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
