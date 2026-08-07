"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { MagneticWrapper } from "@/components/navigation/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavItem } from "@/types/navigation";

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Specifications", href: "#specs" },
  { label: "About", href: "#about" },
];

export function Navbar({ items = DEFAULT_NAV_ITEMS }: { items?: NavItem[] }) {
  const { isScrolled } = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Track active section via hash or scroll
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-500 pointer-events-none"
        aria-label="Main Navigation Header"
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto relative w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
            isScrolled
              ? "glass-panel-pill py-2 px-4 sm:px-6 shadow-2xl backdrop-blur-3xl border-white/15"
              : "bg-transparent py-3 px-4 sm:px-6 border border-white/5"
          )}
          role="navigation"
          aria-label="Global Header Navigation"
        >
          {/* Brand / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] rounded-full px-2 py-1 transition-transform active:scale-95"
            aria-label="AETHER Homepage"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/15 group-hover:border-[var(--accent-teal)]/50 transition-colors">
              <Cpu className="w-4 h-4 text-[var(--accent-teal)] transition-transform duration-500 group-hover:rotate-90" />
              <span className="absolute inset-0 rounded-full bg-[var(--accent-teal)]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-base font-bold tracking-wider text-white font-mono uppercase">
              AETHER
            </span>
            <Badge variant="teal" dot={true} className="hidden xl:inline-flex text-[10px] py-0.5 px-2">
              NC-1 OS
            </Badge>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {items.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveSection(item.href)}
                    className={cn(
                      "relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]",
                      isActive
                        ? "text-white"
                        : "text-[var(--text-muted)] hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-inner"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Pre-Order CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <MagneticWrapper strength={0.3}>
              <Link href="#pre-order" tabIndex={-1}>
                <Button
                  variant="primary"
                  size="sm"
                  glow={true}
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider"
                >
                  Pre-order
                </Button>
              </Link>
            </MagneticWrapper>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--accent-teal)]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Fullscreen Glass Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between p-6 sm:p-10 bg-[#07080b]/90 backdrop-blur-3xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between pt-16">
              <Badge variant="teal" dot={true}>
                AETHER NC-1 Ambient System
              </Badge>
            </div>

            {/* Navigation Links List */}
            <nav className="flex flex-col gap-4 my-auto">
              {items.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-titanium)] hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent-teal)]" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Mobile Action & Telemetry Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col gap-4 pt-6 border-t border-white/10"
            >
              <Link href="#pre-order" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" glow={true} className="w-full justify-center">
                  Reserve AETHER Edition ($1,299)
                </Button>
              </Link>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span>Node 04 • Operational</span>
                <span>5ms Neural Latency</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
