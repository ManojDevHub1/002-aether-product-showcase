"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, ShieldCheck, Volume2, Compass, Sparkles, Lock, Radio, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { ExperienceChapter } from "@/types/technology-experience";

const CHAPTERS: ExperienceChapter[] = [
  {
    id: "intelligence",
    number: "01",
    title: "Thought, Answered.",
    tagline: "Adaptive Neural Fluidity",
    description:
      "Speak naturally without raising your voice. AETHER ONE understands context, tone, and implicit intent—answering before you even finish formulating the thought.",
    quote: "“It doesn't feel like using software. It feels like having an extension of your own mind.”",
    badge: "INTELLIGENCE",
    accentColor: "teal",
    visualType: "neural",
  },
  {
    id: "awareness",
    number: "02",
    title: "Sensing Without Looking.",
    tagline: "Ambient Spatial Harmony",
    description:
      "No notifications buzzing your wrist. No screen pulling your gaze away from the world. AETHER ONE senses your environment and gently whispers context only when it matters.",
    quote: "“Your eyes belong to reality. Technology belongs in the atmosphere.”",
    badge: "AWARENESS",
    accentColor: "teal",
    visualType: "awareness",
  },
  {
    id: "privacy",
    number: "03",
    title: "Your Life Belongs to You.",
    tagline: "Air-Gapped Sovereign Vault",
    description:
      "Every voice interaction is processed locally on AETHER silicon and destroyed from temporary RAM in 5 milliseconds. Zero cloud uploads. Zero ad profiling. Total privacy.",
    quote: "“Privacy is not a feature toggle. It is the physical foundation of our hardware.”",
    badge: "SOVEREIGN PRIVACY",
    accentColor: "amber",
    visualType: "privacy",
  },
  {
    id: "sound",
    number: "04",
    title: "Acoustic Resonance.",
    tagline: "Haptic Whispering Engine",
    description:
      "Feel subtle micro-vibrations in your palm. Directional acoustic haptics guide your navigation through cities and confirm actions without a single visual distraction.",
    quote: "“Tactile precision that communicates through acoustic warmth and physical weight.”",
    badge: "ACOUSTIC HAPTICS",
    accentColor: "teal",
    visualType: "sound",
  },
  {
    id: "lifestyle",
    number: "05",
    title: "Living Beyond Screens.",
    tagline: "The Zero-Friction Era",
    description:
      "Reclaim your presence. AETHER ONE silently organizes your schedule, voice notes, and communications in the background—giving you back the ultimate luxury: undivided attention.",
    quote: "“The ultimate luxury of the 21st century is freedom from notification loops.”",
    badge: "FREEDOM",
    accentColor: "teal",
    visualType: "lifestyle",
  },
];

export function TechnologyExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      aria-label="AETHER ONE Technology Experience Chapters"
      className="relative min-h-screen w-full py-28 sm:py-40 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Background Volumetric Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-10 w-[700px] h-[500px] bg-gradient-to-r from-[var(--accent-teal)]/10 to-transparent blur-[140px] opacity-40 transform-gpu" />
        <div className="absolute bottom-1/3 right-10 w-[700px] h-[500px] bg-gradient-to-l from-[var(--accent-amber)]/10 to-transparent blur-[140px] opacity-30 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-32 sm:space-y-48">
        {/* Section Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" dot={true}>
            THE USER EXPERIENCE
          </Badge>
          <Typography variant="h1" gradient={true} className="text-balance font-extrabold tracking-tight">
            How It Feels to Own AETHER ONE.
          </Typography>
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            Forget specs and benchmarks. This is what computing feels like when software recedes into pure ambient intelligence.
          </Typography>
        </div>

        {/* 5 Alternating Magazine-Style Chapters */}
        <div className="space-y-32 sm:space-y-48">
          {CHAPTERS.map((chapter, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex flex-col gap-12 lg:gap-20 items-center justify-between",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Text Content Column */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-teal)]">
                      CHAPTER {chapter.number}
                    </span>
                    <span className="w-8 h-[1px] bg-white/15" />
                    <Badge variant={chapter.accentColor}>{chapter.badge}</Badge>
                  </div>

                  <Typography variant="h2" className="text-white font-semibold text-balance tracking-tight">
                    {chapter.title}
                  </Typography>

                  <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
                    {chapter.description}
                  </Typography>

                  {/* High-Contrast Editorial Quote Card */}
                  <div className="glass-panel p-6 rounded-2xl border-white/10 relative overflow-hidden group hover:border-white/20 transition-all">
                    <p className="text-sm font-serif italic text-white/90 leading-relaxed">
                      {chapter.quote}
                    </p>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Visual Artwork Card Column */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative w-full max-w-lg aspect-[4/3] rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl glass-panel-elevated overflow-hidden group"
                  >
                    {/* Inner Render Stage */}
                    <div className="w-full h-full rounded-[22px] bg-[#0d0e12] p-8 flex flex-col justify-between relative overflow-hidden">
                      {/* Background Ambient Glow Shader */}
                      <div
                        className={cn(
                          "absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none",
                          chapter.accentColor === "teal"
                            ? "bg-gradient-to-tr from-[var(--accent-teal)] via-transparent to-transparent"
                            : "bg-gradient-to-tr from-[var(--accent-amber)] via-transparent to-transparent"
                        )}
                      />

                      {/* Card Header Icon & Tagline */}
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2">
                          {chapter.visualType === "neural" && <Cpu className="w-5 h-5 text-[var(--accent-teal)]" />}
                          {chapter.visualType === "awareness" && <Compass className="w-5 h-5 text-[var(--accent-teal)]" />}
                          {chapter.visualType === "privacy" && <Lock className="w-5 h-5 text-[var(--accent-amber)]" />}
                          {chapter.visualType === "sound" && <Volume2 className="w-5 h-5 text-[var(--accent-teal)]" />}
                          {chapter.visualType === "lifestyle" && <Sparkles className="w-5 h-5 text-[var(--accent-teal)]" />}
                          <span className="text-xs font-mono text-white/70 uppercase tracking-wider font-semibold">
                            {chapter.tagline}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-white/40">NC-1 STATE</span>
                      </div>

                      {/* Interactive Visual Graphic Layer */}
                      <div className="my-auto py-8 flex items-center justify-center relative z-10">
                        {chapter.visualType === "neural" && (
                          <div className="relative flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-[var(--accent-teal)]/30 animate-ping opacity-50" />
                            <div className="absolute w-16 h-16 rounded-full bg-[var(--accent-teal)]/20 blur-md" />
                            <div className="absolute w-8 h-8 rounded-full bg-[var(--accent-teal)] shadow-[0_0_24px_#00f5d4] animate-pulse" />
                          </div>
                        )}

                        {chapter.visualType === "awareness" && (
                          <div className="w-full space-y-3">
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="h-full w-1/3 bg-[var(--accent-teal)] rounded-full shadow-[0_0_12px_#00f5d4]"
                              />
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-white/40">
                              <span>AMBIENT FIELD ACTIVE</span>
                              <span>0.00ms DELAY</span>
                            </div>
                          </div>
                        )}

                        {chapter.visualType === "privacy" && (
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/30 flex items-center justify-center text-[var(--accent-amber)] shadow-[0_0_24px_rgba(255,107,53,0.2)]">
                              <ShieldCheck className="w-8 h-8" />
                            </div>
                            <span className="text-xs font-mono text-[var(--accent-amber)]">AIR-GAPPED VAULT LOCKED</span>
                          </div>
                        )}

                        {chapter.visualType === "sound" && (
                          <div className="flex items-end justify-center gap-2 h-16">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <motion.span
                                key={i}
                                animate={{ height: ["20%", "100%", "20%"] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: i * 0.15,
                                  ease: "easeInOut",
                                }}
                                className="w-2 bg-[var(--accent-teal)] rounded-full shadow-[0_0_8px_#00f5d4]"
                              />
                            ))}
                          </div>
                        )}

                        {chapter.visualType === "lifestyle" && (
                          <div className="flex flex-col items-center gap-2 text-center">
                            <Activity className="w-10 h-10 text-[var(--accent-teal)] animate-pulse" />
                            <span className="text-xs font-mono text-white/80">UNDIVIDED HUMAN ATTENTION</span>
                          </div>
                        )}
                      </div>

                      {/* Card Footer Telemetry */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/50 relative z-10 pt-4 border-t border-white/10">
                        <span>AETHER ONE CORE</span>
                        <span className="text-[var(--accent-teal)]">SYSTEM NORMAL</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
