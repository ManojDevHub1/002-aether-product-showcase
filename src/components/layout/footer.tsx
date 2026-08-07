"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowRight,
  Cpu,
  Globe,
  Share2,
  MessageSquare,
  Radio,
  Sparkles,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticWrapper } from "@/components/navigation/magnetic-wrapper";

const NAV_GROUPS = [
  {
    title: "Product & Architecture",
    links: [
      { label: "AETHER ONE", href: "#products" },
      { label: "NC-1 Neural Core", href: "#technology" },
      { label: "Zero-UI OS", href: "#experience" },
      { label: "Exploded Hardware", href: "#specs" },
      { label: "Craftsmanship Gallery", href: "#gallery" },
    ],
  },
  {
    title: "Company & Vision",
    links: [
      { label: "Manifesto", href: "#manifesto" },
      { label: "Design Monograph", href: "#monograph" },
      { label: "Press & Media Kit", href: "#press" },
      { label: "Executive Team", href: "#about" },
      { label: "Research Careers", href: "#careers" },
    ],
  },
  {
    title: "Support & Concierge",
    links: [
      { label: "Pioneer Order Status", href: "#pre-order" },
      { label: "NC-1 Whitepaper", href: "#whitepaper" },
      { label: "Security Architecture", href: "#privacy" },
      { label: "Concierge Support", href: "#contact" },
      { label: "System Telemetry", href: "#telemetry" },
    ],
  },
  {
    title: "Legal & Sovereignty",
    links: [
      { label: "Air-Gapped Privacy", href: "#privacy" },
      { label: "Terms of Sovereignty", href: "#terms" },
      { label: "Hardware Guarantee", href: "#warranty" },
      { label: "Compliance & Patents", href: "#patents" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Global Network", icon: Globe, href: "#network" },
  { label: "Press & Share", icon: Share2, href: "#press" },
  { label: "Community Journal", icon: MessageSquare, href: "#journal" },
  { label: "Live Telemetry", icon: Radio, href: "#telemetry" },
  { label: "Design Lab", icon: Sparkles, href: "#design" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const currentYear = new Date().getFullYear();

  // Scroll to Top Handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Newsletter Subscription Submit
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setSubscribed(true);
  };

  return (
    <footer
      id="footer"
      aria-label="AETHER Global Footer"
      className="relative w-full pt-28 pb-16 bg-[#07080b] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Background Volumetric Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-[var(--accent-teal)]/10 via-transparent to-transparent blur-[160px] opacity-60 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-20">
        
        {/* Top Row: Brand Lockup & Newsletter Glass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          
          {/* Brand Lockup & Mission (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] rounded-full py-1"
              aria-label="AETHER Homepage"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/15">
                <Cpu className="w-5 h-5 text-[var(--accent-teal)]" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white font-mono uppercase">
                AETHER
              </span>
            </Link>

            <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance text-sm sm:text-base max-w-md">
              Liberating human potential through screenless ambient computing. Crafted from acoustic titanium and powered by air-gapped neural intelligence.
            </Typography>

            {/* Telemetry Status Node */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] glow-dot-teal animate-pulse" />
              <span>NC-1 System Normal • Node 04 Active</span>
            </div>
          </div>

          {/* Minimalist Glass Newsletter Subscriber (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-panel-elevated p-8 sm:p-10 rounded-3xl border-white/15 space-y-6 relative overflow-hidden">
              <div className="space-y-2">
                <Badge variant="teal" dot={true}>
                  AETHER PRIVATE JOURNAL
                </Badge>
                <Typography variant="h3" className="text-white font-bold text-xl sm:text-2xl">
                  Subscribe to Engineering Insights.
                </Typography>
                <Typography variant="body" className="text-[var(--text-muted)] text-xs sm:text-sm">
                  Receive quarterly monographs on hardware reductionism, local neural SoC design, and screenless spatial computing.
                </Typography>
              </div>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative w-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address..."
                        className="w-full h-12 px-5 rounded-full bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm font-mono outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full sm:w-auto shrink-0 justify-center text-xs uppercase font-semibold tracking-wider"
                    >
                      Subscribe
                    </Button>
                  </div>
                  {errorMsg && (
                    <span className="block text-xs font-mono text-red-400 pl-2">
                      {errorMsg}
                    </span>
                  )}
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/30 flex items-center gap-3 text-[var(--accent-teal)] font-mono text-xs"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>You are subscribed to the AETHER Private Journal. Welcome to the pioneer network.</span>
                </motion.div>
              )}
            </div>
          </div>

        </div>

        {/* Middle Row: 4-Column Editorial Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-white/10">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-white/90 uppercase block border-b border-white/10 pb-2">
                {group.title}
              </span>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs font-medium text-[var(--text-muted)] hover:text-white transition-colors relative group inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <span className="w-0 h-[1px] bg-[var(--accent-teal)] absolute bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row: Social Icons, Dynamic Copyright, & Back to Top Floating Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-xs font-mono text-[var(--text-muted)]">
          
          {/* Social Icons List */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const IconComp = social.icon;
              return (
                <MagneticWrapper key={social.label} strength={0.25}>
                  <a
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[var(--accent-teal)] hover:border-white/30 hover:bg-white/10 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
                    aria-label={social.label}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                </MagneticWrapper>
              );
            })}
          </div>

          {/* Dynamic Copyright Statement */}
          <div className="text-center">
            <span>Designed & Engineered by AETHER Technologies © {currentYear}. All rights reserved.</span>
          </div>

          {/* Floating Back To Top Button */}
          <MagneticWrapper strength={0.3}>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] cursor-pointer group"
              aria-label="Scroll back to top of page"
            >
              <span className="text-xs uppercase font-mono tracking-wider font-semibold">Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[var(--accent-teal)] group-hover:-translate-y-1 transition-transform" />
            </button>
          </MagneticWrapper>

        </div>

      </Container>
    </footer>
  );
}
