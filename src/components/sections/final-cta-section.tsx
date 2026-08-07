"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticWrapper } from "@/components/navigation/magnetic-wrapper";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-label="AETHER ONE Final Cinematic Call to Action"
      className="relative min-h-[90vh] w-full py-32 sm:py-44 bg-[#07080b] flex flex-col justify-center items-center text-center overflow-hidden select-none"
    >
      {/* Background Cinematic Aurora Lighting & Particle Noise */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Atmospheric Aurora Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-radial from-[var(--accent-teal)]/20 via-[#00f5d4]/5 to-transparent blur-[160px] opacity-75 transform-gpu" />

        {/* Top Specular Light Beams */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-[100px] opacity-50 transform-gpu" />

        {/* Noise Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
      </div>

      <Container size="lg" className="relative z-10 flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Badge variant="teal" dot={true} className="px-4 py-1.5 text-xs">
            THE ERA OF AMBIENT INTELLIGENCE
          </Badge>
        </motion.div>

        {/* Original Massive Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto space-y-3 mb-6"
        >
          <Typography
            variant="hero"
            gradient={true}
            className="tracking-tight text-balance font-extrabold leading-[1.03]"
          >
            Step Into the Atmosphere.
          </Typography>
          <Typography
            variant="hero"
            className="text-[var(--text-titanium)] tracking-tight text-balance font-extrabold leading-[1.03]"
          >
            Silence Is the Ultimate Upgrade.
          </Typography>
        </motion.div>

        {/* Short Emotional Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            Reclaim your presence. Lift your gaze back to the world and experience personalized intelligence designed for human intimacy and screenless freedom.
          </Typography>
        </motion.div>

        {/* Dual Actions: Magnetic Primary Pre-order + Ghost Watch Film */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <MagneticWrapper strength={0.35}>
            <Link href="#pre-order" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                glow={true}
                icon={<ArrowUpRight className="w-5 h-5" />}
                className="w-full sm:w-auto min-w-[220px] text-sm uppercase tracking-wider font-semibold py-5"
              >
                Pre-order AETHER ONE
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
                className="w-full sm:w-auto min-w-[200px] text-sm font-medium py-5"
              >
                Watch Launch Film (1:45)
              </Button>
            </Link>
          </MagneticWrapper>
        </motion.div>

        {/* Bottom Reassurance Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-xs font-mono text-white/50"
        >
          <ShieldCheck className="w-4 h-4 text-[var(--accent-teal)]" />
          <span>Pioneer Batch 01 • 100% Refundable $100 Reservation Deposit</span>
        </motion.div>
      </Container>
    </section>
  );
}
