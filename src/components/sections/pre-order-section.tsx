"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Clock, Package, CheckCircle2, Lock, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticWrapper } from "@/components/navigation/magnetic-wrapper";
import { ProductFinish, StorageOption, AccessoryItem } from "@/types/pre-order";

const FINISHES: ProductFinish[] = [
  {
    id: "silver-mist",
    name: "Silver Mist",
    hex: "#e2e4e9",
    borderHex: "rgba(226, 228, 233, 0.4)",
    tagline: "Natural Anodized Titanium",
    imageSrc: "/aether-one-device.jpg",
  },
  {
    id: "titanium-black",
    name: "Titanium Black",
    hex: "#181a20",
    borderHex: "rgba(255, 255, 255, 0.2)",
    tagline: "Obsidian Stealth Finish",
    imageSrc: "/aether-lifestyle-creative.jpg",
  },
  {
    id: "midnight-graphite",
    name: "Midnight Graphite",
    hex: "#282c35",
    borderHex: "rgba(138, 144, 158, 0.4)",
    tagline: "Dark Graphite Matrix",
    imageSrc: "/aether-lifestyle-morning.jpg",
  },
  {
    id: "arctic-white",
    name: "Arctic White",
    hex: "#f7f8fa",
    borderHex: "rgba(247, 248, 250, 0.5)",
    tagline: "Silk Ceramic White",
    imageSrc: "/aether-one-device.jpg",
  },
];

const STORAGE_OPTIONS: StorageOption[] = [
  { id: "storage-256", capacity: "256 GB", price: 1299, label: "Pioneer Entry" },
  { id: "storage-512", capacity: "512 GB", price: 1499, label: "Recommended" },
  { id: "storage-1tb", capacity: "1 TB", price: 1799, label: "Ultimate Neural Vault" },
];

const ACCESSORIES: AccessoryItem[] = [
  {
    id: "dock",
    name: "Wireless Acoustic Charging Dock",
    price: 149,
    description: "Acoustic titanium charging base with magnetic auto-alignment.",
  },
  {
    id: "case",
    name: "Hand-Stitched Leather Travel Sleeve",
    price: 99,
    description: "Full-grain Tuscan leather sleeve custom-molded for AETHER ONE.",
  },
  {
    id: "stand",
    name: "Magnetic Titanium Desk Stand",
    price: 199,
    description: "Elevated 360-degree desk mount crafted from solid titanium.",
  },
];

export function PreOrderSection() {
  const [selectedFinish, setSelectedFinish] = useState<ProductFinish>(FINISHES[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>(STORAGE_OPTIONS[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Toggle Accessory Selection
  const toggleAccessory = (id: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate Total Price
  const accessoryTotal = selectedAccessories.reduce((sum, accId) => {
    const item = ACCESSORIES.find((a) => a.id === accId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = selectedStorage.price + accessoryTotal;
  const depositAmount = 100;

  // Handle Reservation Trigger
  const handleReserve = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmationModal(true);
    }, 1200);
  };

  return (
    <section
      id="pre-order"
      aria-label="AETHER ONE Pre-Order Experience"
      className="relative min-h-screen w-full py-28 sm:py-40 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Volumetric Atmospheric Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-[var(--accent-teal)]/15 via-[#00f5d4]/5 to-[var(--accent-amber)]/10 blur-[160px] opacity-75 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.025]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" dot={true}>
            PIONEER BATCH 01 RESERVATIONS
          </Badge>
          <Typography variant="hero" gradient={true} className="text-balance font-extrabold tracking-tight">
            Reserve Your AETHER ONE.
          </Typography>
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            Configure your finish, memory capacity, and optional acoustic accessories. Secured with a 100% fully refundable $100 reservation deposit.
          </Typography>
        </div>

        {/* Main 2-Column Product Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Product Preview & Finish Visualizer (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center">
            <motion.div
              key={selectedFinish.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[44px] p-6 glass-panel-elevated border-white/20 shadow-[0_32px_90px_rgba(0,0,0,0.95)] flex flex-col items-center justify-between overflow-hidden group"
            >
              {/* Background Glow Matching Finish */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700"
                style={{ background: `radial-gradient(circle at center, ${selectedFinish.hex} 0%, transparent 70%)` }}
              />

              {/* Header Badge */}
              <div className="w-full flex items-center justify-between relative z-10">
                <Badge variant="teal" dot={true}>
                  LIMITED BATCH 01
                </Badge>
                <span className="text-[11px] font-mono text-white/50 uppercase">
                  SHIPS NOV 2026
                </span>
              </div>

              {/* Central Device Image Preview */}
              <div className="relative w-52 h-64 sm:w-60 sm:h-76 rounded-[36px] overflow-hidden border border-white/15 shadow-2xl my-auto transform group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={selectedFinish.imageSrc}
                  alt={selectedFinish.name}
                  fill
                  sizes="320px"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 pointer-events-none" />
              </div>

              {/* Finish Label Footer */}
              <div className="w-full text-center relative z-10 space-y-1">
                <Typography variant="h3" className="text-white font-semibold text-lg">
                  {selectedFinish.name}
                </Typography>
                <p className="text-xs font-mono text-[var(--accent-teal)]">
                  {selectedFinish.tagline}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Configurator Steps & Customization (7 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Step 1: Finish Selection Swatches */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-[var(--accent-teal)] uppercase tracking-wider">
                  01. SELECT FINISH
                </span>
                <span className="text-xs font-mono text-white/70">{selectedFinish.name}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FINISHES.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;

                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={cn(
                        "p-4 rounded-2xl border text-center transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] flex flex-col items-center gap-3 group",
                        isSelected
                          ? "glass-panel-elevated border-white/30 shadow-xl bg-white/[0.05]"
                          : "glass-panel border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                      )}
                    >
                      <span
                        className="w-8 h-8 rounded-full border shadow-md transition-transform group-hover:scale-110 flex items-center justify-center"
                        style={{ backgroundColor: finish.hex, borderColor: finish.borderHex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-[#07080b]" />}
                      </span>
                      <div className="space-y-0.5">
                        <span className="block text-xs font-semibold text-white">{finish.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Storage & Memory Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-[var(--accent-teal)] uppercase tracking-wider">
                  02. SELECT MEMORY CAPACITY
                </span>
                <span className="text-xs font-mono text-white/70">{selectedStorage.capacity}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {STORAGE_OPTIONS.map((option) => {
                  const isSelected = selectedStorage.id === option.id;

                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedStorage(option)}
                      className={cn(
                        "p-5 rounded-2xl border text-left transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] space-y-2 relative group",
                        isSelected
                          ? "glass-panel-elevated border-white/30 shadow-xl bg-white/[0.05]"
                          : "glass-panel border-white/10 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-mono font-bold text-white">{option.capacity}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] glow-dot-teal" />
                        )}
                      </div>
                      <span className="block text-xs font-mono text-[var(--accent-teal)]">${option.price} USD</span>
                      <span className="block text-[10px] text-[var(--text-muted)] font-mono uppercase">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Acoustic Accessories */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-[var(--accent-teal)] uppercase tracking-wider">
                  03. HARDWARE ACCESSORIES (OPTIONAL)
                </span>
                <span className="text-xs font-mono text-white/70">{selectedAccessories.length} Selected</span>
              </div>

              <div className="space-y-3">
                {ACCESSORIES.map((acc) => {
                  const isSelected = selectedAccessories.includes(acc.id);

                  return (
                    <button
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={cn(
                        "w-full p-4 rounded-2xl border text-left transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] flex items-center justify-between gap-4 group",
                        isSelected
                          ? "glass-panel-elevated border-white/30 bg-white/[0.05]"
                          : "glass-panel border-white/10 hover:border-white/20"
                      )}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">{acc.name}</span>
                          <span className="text-xs font-mono text-[var(--accent-teal)]">+${acc.price}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{acc.description}</p>
                      </div>

                      <div
                        className={cn(
                          "w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                          isSelected
                            ? "bg-[var(--accent-teal)] border-[var(--accent-teal)] text-[#07080b]"
                            : "border-white/20 group-hover:border-white/40"
                        )}
                      >
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5 text-white/40" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Summary & Pre-Order Reservation Trigger */}
            <div className="glass-panel-elevated p-8 rounded-3xl border-white/20 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                    TOTAL HARDWARE VALUE
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-mono font-bold text-white">${totalPrice}</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">USD</span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono text-[var(--accent-teal)] uppercase tracking-wider block">
                    RESERVATION DEPOSIT
                  </span>
                  <span className="text-xl font-mono font-bold text-[var(--accent-teal)] glow-text-teal">
                    ${depositAmount} USD
                  </span>
                  <span className="block text-[10px] text-white/60 font-mono">100% Fully Refundable</span>
                </div>
              </div>

              {/* Primary Pre-Order CTA Button */}
              <MagneticWrapper strength={0.35}>
                <Button
                  variant="primary"
                  size="lg"
                  glow={true}
                  onClick={handleReserve}
                  disabled={isSubmitting}
                  icon={<ArrowUpRight className="w-5 h-5" />}
                  className="w-full justify-center text-sm font-semibold uppercase tracking-wider py-5"
                >
                  {isSubmitting ? "Processing Reservation..." : `Reserve AETHER ONE ($${depositAmount} Deposit)`}
                </Button>
              </MagneticWrapper>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-mono text-[var(--text-muted)] pt-2">
                <div className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-teal)]" />
                  <span>Secure SSL Deposit</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Clock className="w-4 h-4 text-[var(--accent-teal)]" />
                  <span>Ships November 2026</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Package className="w-4 h-4 text-[var(--accent-teal)]" />
                  <span>Free Express Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* Reservation Confirmation Modal Drawer */}
      <AnimatePresence>
        {showConfirmationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07080b]/90 backdrop-blur-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Reservation Confirmed"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel-elevated p-8 sm:p-12 rounded-3xl max-w-lg w-full border-white/20 shadow-2xl text-center space-y-6 relative"
            >
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/40 flex items-center justify-center text-[var(--accent-teal)] mx-auto shadow-[0_0_32px_#00f5d4]">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div className="space-y-2">
                <Badge variant="teal" dot={true}>
                  RESERVATION CONFIRMED
                </Badge>
                <Typography variant="h2" className="text-white font-bold">
                  You Are Registered for Pioneer Batch 01.
                </Typography>
                <Typography variant="body" className="text-[var(--text-muted)] text-sm">
                  Your reservation deposit of ${depositAmount} USD for AETHER ONE ({selectedFinish.name}, {selectedStorage.capacity}) is secured. A priority invite will arrive in your email.
                </Typography>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs font-mono space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-white/60">RESERVATION ID:</span>
                  <span className="text-[var(--accent-teal)] font-bold">AE-2026-90412</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">ESTIMATED SHIPPING:</span>
                  <span className="text-white font-bold">NOVEMBER 2026</span>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={() => setShowConfirmationModal(false)}
                className="w-full justify-center"
              >
                Done
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
