"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Moon, Sparkles, Compass, ArrowUpRight, Camera, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { LifestyleScene, GalleryItem } from "@/types/lifestyle-gallery";

const LIFESTYLE_SCENES: LifestyleScene[] = [
  {
    id: "morning-focus",
    number: "01",
    title: "The Quiet Awakening.",
    subtitle: "MORNING RHYTHM",
    location: "Architectural Residence",
    timeOfDay: "06:45 AM",
    description:
      "Wake up to gentle acoustic haptic pulses rather than jarring phone alarms. AETHER ONE whispers your morning schedule, weather, and key priorities while sunrise warms your home.",
    quote: "“The morning no longer begins with a flood of notifications. It begins with calm clarity.”",
    imageSrc: "/aether-lifestyle-morning.jpg",
    aspectRatio: "wide",
    accentColor: "teal",
  },
  {
    id: "creative-work",
    number: "02",
    title: "Pure Flow State.",
    subtitle: "CREATIVE STUDIO",
    location: "Design Sanctuary",
    timeOfDay: "11:30 AM",
    description:
      "Sit at your workspace without twenty open browser tabs or constant app interruptions. AETHER ONE filters noise and captures your voice ideas silently in local RAM.",
    quote: "“Your focus is your most valuable asset. AETHER ONE protects it fiercely.”",
    imageSrc: "/aether-lifestyle-creative.jpg",
    aspectRatio: "wide",
    accentColor: "teal",
  },
  {
    id: "travel",
    number: "03",
    title: "Navigating Without Friction.",
    subtitle: "GLOBAL EXPLORATION",
    location: "Tokyo Transit Node",
    timeOfDay: "04:15 PM",
    description:
      "Walk through foreign cities with total confidence. AETHER ONE translates conversations instantly in your ear and guides your route through subtle directional vibrations in your palm.",
    quote: "“Explore the world with your eyes up, absorbing every detail.”",
    imageSrc: "/aether-one-device.jpg",
    aspectRatio: "square",
    accentColor: "amber",
  },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "titanium-finish",
    title: "Grade 5 Anodized Finish",
    category: "CRAFTSMANSHIP",
    caption: "Micro-brushed aerospace titanium sculpted with 0.01mm tolerance.",
    imageSrc: "/aether-lifestyle-morning.jpg",
    gridSpan: "col-span-12 md:col-span-8",
  },
  {
    id: "optical-lens",
    title: "Optical Prism Lens",
    category: "LUMINANCE",
    caption: "Crystalline glass core emitting soft bioluminescent aurora signals.",
    imageSrc: "/aether-one-device.jpg",
    gridSpan: "col-span-12 md:col-span-4",
  },
  {
    id: "studio-setup",
    title: "Minimalist Workspace Integration",
    category: "ATMOSPHERE",
    caption: "Harmonizes with luxury architectural interiors and desk stone.",
    imageSrc: "/aether-lifestyle-creative.jpg",
    gridSpan: "col-span-12 md:col-span-6",
  },
  {
    id: "haptic-dock",
    title: "Neural Charging Dock",
    category: "HARDWARE ACCESSORY",
    caption: "Acoustic titanium charging base with magnetic alignment.",
    imageSrc: "/aether-lifestyle-morning.jpg",
    gridSpan: "col-span-12 md:col-span-6",
  },
];

export function LifestyleGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-label="AETHER ONE Lifestyle Experience & Cinematic Gallery"
      className="relative min-h-screen w-full py-28 sm:py-40 bg-[#07080b] overflow-hidden select-none"
    >
      {/* Volumetric Atmospheric Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[600px] bg-gradient-to-l from-[var(--accent-teal)]/10 via-transparent to-transparent blur-[150px] opacity-50 transform-gpu" />
        <div className="absolute bottom-1/4 left-0 w-[800px] h-[600px] bg-gradient-to-r from-[var(--accent-amber)]/10 via-transparent to-transparent blur-[150px] opacity-40 transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.025]" />
      </div>

      <Container size="xl" className="relative z-10 space-y-36 sm:space-y-48">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" dot={true}>
            LIFESTYLE & ASPIRATION
          </Badge>
          <Typography variant="h1" gradient={true} className="text-balance font-extrabold tracking-tight">
            What It Feels Like to Live Screenless.
          </Typography>
          <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
            Explore 5 daily scenes showing how AETHER ONE transforms your morning awakening, creative flow state, and evening peace.
          </Typography>
        </div>

        {/* 5 Cinematic Lifestyle Scenes */}
        <div className="space-y-32 sm:space-y-44">
          {LIFESTYLE_SCENES.map((scene, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex flex-col gap-10 lg:gap-16 items-center justify-between",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Scene Story Column */}
                <div className="w-full lg:w-5/12 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-teal)]">
                      SCENE {scene.number}
                    </span>
                    <span className="w-6 h-[1px] bg-white/15" />
                    <Badge variant={scene.accentColor}>{scene.subtitle}</Badge>
                  </div>

                  <Typography variant="h2" className="text-white font-semibold tracking-tight text-balance">
                    {scene.title}
                  </Typography>

                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] py-1 border-y border-white/10">
                    <span>LOCATION: {scene.location}</span>
                    <span>•</span>
                    <span>TIME: {scene.timeOfDay}</span>
                  </div>

                  <Typography variant="body-lead" className="text-[var(--text-muted)] text-balance">
                    {scene.description}
                  </Typography>

                  {/* Magazine Quote Callout */}
                  <div className="glass-panel p-6 rounded-2xl border-white/10 relative overflow-hidden">
                    <p className="text-sm font-serif italic text-white/90 leading-relaxed">
                      {scene.quote}
                    </p>
                  </div>
                </div>

                {/* Scene Photography Display Card Column */}
                <div className="w-full lg:w-7/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative w-full aspect-[16/10] rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl glass-panel-elevated overflow-hidden group"
                  >
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden border border-white/10">
                      <Image
                        src={scene.imageSrc}
                        alt={scene.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        priority={index === 0}
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Dark Editorial Overlay with Specular Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/90 via-[#07080b]/20 to-transparent pointer-events-none" />

                      {/* Floating Location Badge on Image */}
                      <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                        <Camera className="w-3.5 h-3.5 text-[var(--accent-teal)]" />
                        <span className="text-xs font-mono text-white/90">
                          {scene.location} • {scene.timeOfDay}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cinematic Asymmetrical Gallery Section */}
        <div className="pt-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal" dot={true}>
              CINEMATIC GALLERY
            </Badge>
            <Typography variant="h2" className="text-white font-bold tracking-tight">
              Industrial Purity in Focus.
            </Typography>
            <Typography variant="body" className="text-[var(--text-muted)]">
              An architectural survey of AETHER ONE’s materials, glass optical core, and workplace presence.
            </Typography>
          </div>

          {/* Asymmetrical 12-Column Gallery Grid */}
          <div className="grid grid-cols-12 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={cn(
                  item.gridSpan,
                  "group relative aspect-[16/10] rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent glass-panel-elevated overflow-hidden shadow-2xl"
                )}
              >
                <div className="relative w-full h-full rounded-[22px] overflow-hidden border border-white/10">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Glass Overlay with Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/90 via-[#07080b]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent-teal)] uppercase">
                      {item.category}
                    </span>
                    <Typography variant="h3" className="text-white font-semibold text-lg">
                      {item.title}
                    </Typography>
                    <Typography variant="body" className="text-white/70 text-xs line-clamp-1">
                      {item.caption}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
