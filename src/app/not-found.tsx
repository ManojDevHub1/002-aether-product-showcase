import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <Container size="sm" className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl max-w-lg w-full border-white/10 flex flex-col items-center gap-6 shadow-2xl">
        <Typography variant="code" className="text-4xl sm:text-6xl font-bold text-[var(--accent-teal)]">
          404
        </Typography>
        <div className="space-y-2">
          <Typography variant="h2" className="text-white">
            Uncharted Coordinates
          </Typography>
          <Typography variant="body">
            The requested neural path does not exist in the active AETHER node registry.
          </Typography>
        </div>
        <Link href="/">
          <Button variant="primary" size="md">
            Return to Core Interface
          </Button>
        </Link>
      </div>
    </Container>
  );
}
