"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface MagneticWrapperProps {
  children: React.ReactElement;
  strength?: number; // Distance multiplier (default 0.35)
}

export function MagneticWrapper({ children, strength = 0.35 }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setPosition({ x: 0, y: 0 });
  };

  if (isTouchDevice) {
    return <div className="inline-block">{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
