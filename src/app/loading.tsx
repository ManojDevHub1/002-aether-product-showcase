export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080b] text-[var(--text-titanium)]">
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10">
        <div className="w-8 h-8 rounded-full border-2 border-t-[var(--accent-teal)] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        <div className="absolute inset-0 rounded-full bg-[var(--accent-teal)]/10 blur-md animate-pulse" />
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] animate-pulse">
        Initializing AETHER Neural Core...
      </p>
    </div>
  );
}
