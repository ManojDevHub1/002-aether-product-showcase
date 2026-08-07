"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMouseVector } from "@/hooks/use-mouse-vector";
import { cn } from "@/lib/utils";

export interface HeroProductTeaserProps {
  className?: string;
}

export function HeroProductTeaser({ className }: HeroProductTeaserProps) {
  const { x, y } = useMouseVector();

  // Mouse parallax offset calculation
  const parallaxX = x * 24;
  const parallaxY = y * 18;
  const shadowX = -x * 30;
  const shadowY = -y * 20;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full max-w-[460px] aspect-square mx-auto pointer-events-none select-none",
        className
      )}
    >
      {/* Ambient Volumetric Backdrop Light */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.60, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[var(--accent-teal)]/25 via-[#00f5d4]/15 to-[var(--accent-amber)]/20 blur-[100px] transform-gpu"
        style={{
          transform: `translate3d(${parallaxX * 0.5}px, ${parallaxY * 0.5}px, 0)`,
        }}
      />

      {/* Main Teardrop Silhouette Device Shell */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotateX: [0, 5, 0],
          rotateY: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
        }}
        className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-[48px] p-[1.5px] bg-gradient-to-b from-white/40 via-white/10 to-white/5 shadow-2xl backdrop-blur-3xl transform-gpu will-change-transform group"
      >
        {/* Outer Titanium Frame */}
        <div className="relative w-full h-full rounded-[46px] bg-gradient-to-b from-[#16181e] via-[#0d0e12] to-[#07080b] p-3 flex flex-col items-center justify-between overflow-hidden shadow-2xl">
          
          {/* Top Specular Rim Light Gradient */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-white/25 via-white/5 to-transparent z-10 pointer-events-none" />

          {/* Device Product Photograph Render */}
          <div className="relative w-full h-full rounded-[38px] overflow-hidden border border-white/10 shadow-inner">
            <Image
              src="/aether-one-device.jpg"
              alt="AETHER ONE AI Companion Device"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              priority
              className="object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
            />

            {/* Glass Reflection Highlight Sweep Over Image */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
            />
          </div>

          {/* Engraved Telemetry Marker */}
          <div className="absolute bottom-5 z-20 text-[10px] font-mono tracking-[0.25em] text-white/60 uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            AETHER ONE • NC-1 CORE
          </div>
        </div>

        {/* Dynamic Shadow Cast below Device */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-8 rounded-[100%] bg-black/90 blur-xl pointer-events-none transition-transform"
          style={{
            transform: `translate3d(${shadowX}px, ${shadowY}px, 0) scale(${1 - Math.abs(y) * 0.1})`,
          }}
        />
      </motion.div>
    </div>
  );
}
