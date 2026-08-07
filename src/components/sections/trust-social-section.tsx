"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Newspaper, TrendingUp, Sparkles, CheckCircle2, Lock, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { IndustryAward, MediaQuote, GlobalMetric, TrustPrinciple } from "@/types/trust-social";

const AWARDS: IndustryAward[] = [
  {
    id: "design-gold",
    year: "2026",
    title: "Global Industrial Design Gold Award",
    organization: "International Design Forum",
    category: "Industrial Hardware Purity",
  },
  {
    id: "ai-innovation",
    year: "2026",
    title: "Best Consumer AI Innovation",
    organization: "Applied AI Council",
    category: "Local 5ms Neural Architecture",
  },
  {
    id: "sustainability",
    year: "2026",
    title: "Sustainable Material Engineering Mark",
    organization: "Clean Tech Alliance",
    category: "100% Recycled Aerospace Titanium",
  },
  {
    id: "zero-ui",
    year: "2026",
    title: "Spatial Computing Excellence Prize",
    organization: "Zero-UI Association",
    category: "Screenless Ambient Design",
  },
];

const MEDIA_QUOTES: MediaQuote[] = [
  {
    id: "tech-horizon",
    outlet: "TECH HORIZON",
    headline: "A Landmark Achievement",
    quote: "“AETHER ONE does for ambient intelligence what the original iPhone did for touch computing.”",
    author: "Marcus Vance",
    role: "Senior Hardware Editor",
  },
  {
    id: "neo-design",
    outlet: "NEO DESIGN MONOGRAPH",
    headline: "Material Excellence",
    quote: "“The most significant material achievement in handheld consumer electronics this decade.”",
    author: "Elena Rostova",
    role: "Architectural Critic",
  },
  {
    id: "quantum-review",
    outlet: "QUANTUM REVIEW",
    headline: "Unmatched Speed & Privacy",
    quote: "“On-device 5ms neural processing without a screen is a staggering leap forward for user privacy.”",
    author: "Dr. Aris Thorne",
    role: "AI Systems Chair",
  },
  {
    id: "arch-tech",
    outlet: "ARCHITECTURAL TECH",
    headline: "Silent Luxury",
    quote: "“A masterclass in acoustic titanium machining and quiet, calm software.”",
    author: "Julian Mercer",
    role: "Executive Editor",
  },
];

const GLOBAL_METRICS: GlobalMetric[] = [
  {
    id: "patents",
    value: "42",
    label: "Patents Filed",
    description: "Proprietary acoustic, thermal, and local AI hardware innovations.",
  },
  {
    id: "rd-hours",
    value: "14,000+",
    label: "R&D Hours",
    description: "Meticulous 5-axis CNC titanium machining and acoustics testing.",
  },
  {
    id: "privacy-score",
    value: "100%",
    label: "On-Device Privacy",
    description: "Zero cloud voice data uploads or remote server profiling.",
  },
  {
    id: "global-labs",
    value: "4",
    label: "Research Labs",
    description: "Design and engineering centers in Zurich, Tokyo, Cupertino, and Berlin.",
  },
];

const TRUST_PRINCIPLES: TrustPrinciple[] = [
  {
    id: "air-gapped",
    title: "Air-Gapped RAM Vault",
    badge: "100% PRIVATE",
    description: "All voice processing runs locally in temporary RAM and is destroyed in 5ms. Zero cloud persistence.",
  },
  {
    id: "titanium-durability",
    title: "Grade 5 Titanium Shell",
    badge: "AEROSPACE GRADE",
    description: "Machined from solid titanium to withstand physical drops, corrosion, and extreme daily wear.",
  },
  {
    id: "warranty",
    title: "5-Year Guarantee",
    badge: "FULL WARRANTY",
    description: "Comprehensive 5-year hardware replacement guarantee covering materials, sensors, and silicon.",
  },
];

export function TrustSocialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="trust"
      aria-label="AETHER ONE Industry Recognition & Credibility"
      className="relative min-h-screen w-full py-28 sm:py-40 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Volumetric Atmospheric Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[600px] bg-gradient-to-b from-[var(--accent-teal)]/10 via-transparent to-transparent blur-[150px] opacity-50 transform-gpu" />
        <div className="absolute bottom-1/4 right-1/3 w-[800px] h-[600px] bg-gradient-to-t from-[var(--accent-amber)]/10 via-transparent to-transparent blur-[150px] opacity-40 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-36 sm:space-y-48">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" dot={true}>
            INDUSTRY ACCLAIM & CREDIBILITY
          </Badge>
          <Typography variant="h1" gradient={true} className="text-balance font-extrabold tracking-tight">
            Validated by Visionaries. Grounded in Engineering.
          </Typography>
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            AETHER ONE is recognized globally by leading industrial designers, AI researchers, and technology publications.
          </Typography>
        </div>

        {/* 1. Global Numbers Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border-white/15 text-center space-y-2 relative group hover:border-white/30 transition-all overflow-hidden"
            >
              <Typography variant="h2" className="text-[var(--accent-teal)] glow-text-teal font-extrabold font-mono text-3xl sm:text-4xl lg:text-3xl xl:text-4xl whitespace-nowrap">
                {metric.value}
              </Typography>
              <Typography variant="h3" className="text-white font-semibold text-base">
                {metric.label}
              </Typography>
              <Typography variant="body" className="text-[var(--text-muted)] text-xs leading-relaxed">
                {metric.description}
              </Typography>
            </motion.div>
          ))}
        </div>

        {/* 2. Industry Recognition Awards Grid */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-[var(--accent-teal)] uppercase tracking-widest font-bold block mb-1">
                EXCELLENCE RECOGNITION
              </span>
              <Typography variant="h2" className="text-white font-bold tracking-tight text-2xl sm:text-3xl">
                Industry Awards 2026.
              </Typography>
            </div>
            <Badge variant="teal" dot={true}>
              4 GLOBAL HONORS
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="glass-panel p-6 rounded-2xl border-white/10 flex items-start gap-4 hover:border-white/25 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/30 flex items-center justify-center text-[var(--accent-teal)] shrink-0 shadow-[0_0_20px_rgba(0,245,212,0.2)]">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[var(--accent-teal)] font-bold">
                      {award.year}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">•</span>
                    <span className="text-[10px] font-mono text-white/60 uppercase">{award.category}</span>
                  </div>
                  <Typography variant="h3" className="text-white font-semibold text-lg group-hover:text-[var(--accent-teal)] transition-colors">
                    {award.title}
                  </Typography>
                  <Typography variant="body" className="text-[var(--text-muted)] text-xs">
                    {award.organization}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Media Coverage Editorial Quotes */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="teal" dot={true}>
              EDITORIAL PRESS
            </Badge>
            <Typography variant="h2" className="text-white font-bold tracking-tight">
              What Design Critics Are Saying.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MEDIA_QUOTES.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="glass-panel-elevated p-8 rounded-3xl border-white/15 space-y-6 relative overflow-hidden group hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-teal)]">
                      {item.outlet}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 uppercase">{item.headline}</span>
                  </div>
                  <p className="text-base font-serif italic text-white/90 leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">{item.author}</span>
                  <span className="text-[var(--text-muted)]">{item.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Trust & Security Metrics */}
        <div className="glass-panel-elevated p-8 sm:p-12 rounded-3xl border-white/20 shadow-2xl max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <Badge variant="amber" dot={true}>
              SOVEREIGN SECURITY
            </Badge>
            <Typography variant="h2" className="text-white font-bold text-2xl sm:text-3xl">
              Architectural Trust Principles.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_PRINCIPLES.map((principle) => (
              <div
                key={principle.id}
                className="glass-panel p-6 rounded-2xl border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-5 h-5 text-[var(--accent-teal)]" />
                  <Badge variant="teal" dot={false} className="text-[9px]">
                    {principle.badge}
                  </Badge>
                </div>
                <Typography variant="h3" className="text-white font-semibold text-base">
                  {principle.title}
                </Typography>
                <Typography variant="body" className="text-[var(--text-muted)] text-xs leading-relaxed">
                  {principle.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
