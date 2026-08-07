"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, ChevronDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticWrapper } from "@/components/navigation/magnetic-wrapper";
import { HeroProductTeaser } from "@/components/canvas/hero-product-teaser";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="AETHER Hero Product Unveil"
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-32 pb-12 sm:pt-36 sm:pb-16 overflow-hidden select-none bg-[#07080b]"
    >
      {/* Background Volumetric Lighting & Atmospheric Noise Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Radial Ambient Aurora */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[var(--accent-teal)]/15 via-[#00f5d4]/5 to-transparent rounded-full blur-[140px] opacity-70 transform-gpu" />

        {/* Secondary Warm Core Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[var(--accent-amber)]/10 via-transparent to-transparent rounded-full blur-[120px] opacity-50 transform-gpu" />

        {/* Subtle Noise Texture Shader Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      {/* Main Hero Editorial Content Container */}
      <Container size="lg" className="relative z-10 my-auto flex flex-col items-center text-center">
        {/* Stagger 1: Eyebrow Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <Badge variant="teal" dot={true} className="px-4 py-1.5 text-xs">
            AETHER NC-1 • ZERO-DISPLAY NEURAL ERA
          </Badge>
        </motion.div>

        {/* Stagger 2: Hero Headline (Max 2 lines, massive typography) */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto space-y-2 mb-6"
        >
          <Typography
            variant="hero"
            gradient={true}
            className="tracking-tight text-balance font-extrabold leading-[1.02]"
          >
            Beyond Screens.
          </Typography>
          <Typography
            variant="hero"
            className="text-[var(--text-titanium)] tracking-tight text-balance font-extrabold leading-[1.02]"
          >
            Intelligent Air.
          </Typography>
        </motion.div>

        {/* Stagger 3: Emotion-Driven Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            The world&apos;s first screenless ambient neural companion. Crafted from acoustic-grade titanium and powered by localized 5ms NC-1 neural architecture.
          </Typography>
        </motion.div>

        {/* Stagger 4: Action CTAs (Primary Pre-Order + Secondary Film) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 sm:mb-16"
        >
          <MagneticWrapper strength={0.35}>
            <Link href="#pre-order" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                glow={true}
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full sm:w-auto min-w-[200px] text-sm uppercase tracking-wider font-semibold"
              >
                Pre-order Edition
              </Button>
            </Link>
          </MagneticWrapper>

          <MagneticWrapper strength={0.25}>
            <Link href="#film" className="w-full sm:w-auto">
              <Button
                variant="glass"
                size="lg"
                icon={<Play className="w-4 h-4 text-[var(--accent-teal)] fill-[var(--accent-teal)]" />}
                iconPosition="left"
                className="w-full sm:w-auto min-w-[180px] text-sm font-medium"
              >
                Watch Film (1:45)
              </Button>
            </Link>
          </MagneticWrapper>
        </motion.div>

        {/* Stagger 5: Floating Product Silhouette Teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <HeroProductTeaser />
        </motion.div>
      </Container>

      {/* Stagger 6: Animated Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 flex flex-col items-center gap-2 mt-6 cursor-pointer group"
      >
        <Link
          href="#manifesto"
          className="flex flex-col items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] rounded-full px-4 py-2"
          aria-label="Scroll to learn more about AETHER"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--text-muted)] group-hover:text-white transition-colors uppercase">
            <Sparkles className="w-3 h-3 text-[var(--accent-teal)] animate-pulse" />
            <span>Scroll to Unveil</span>
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors"
          >
            <ChevronDown className="w-3.5 h-3.5 text-[var(--text-titanium)] group-hover:text-[var(--accent-teal)] transition-colors" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
