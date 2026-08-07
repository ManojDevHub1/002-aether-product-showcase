"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("AETHER System Error:", error);
  }, [error]);

  return (
    <Container size="sm" className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl max-w-md w-full border-white/10 flex flex-col items-center gap-6 shadow-2xl">
        <div className="w-12 h-12 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/20 flex items-center justify-center text-[var(--accent-amber)] font-mono text-xl font-bold">
          !
        </div>
        <div className="space-y-2">
          <Typography variant="h3" className="text-white">
            System Interrupt
          </Typography>
          <Typography variant="body" className="text-[var(--text-muted)] text-sm">
            A temporary neural exception occurred. The system has automatically isolated the node.
          </Typography>
        </div>
        <Button variant="primary" onClick={reset} className="w-full justify-center">
          Re-initialize Node
        </Button>
      </div>
    </Container>
  );
}
