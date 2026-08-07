"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { initGSAP } from "@/lib/gsap-config";

export function RootProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
