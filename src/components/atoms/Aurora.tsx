import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
  /** Show the faint grid overlay on top of the blobs. */
  grid?: boolean;
}

/**
 * Decorative, GPU-friendly animated gradient blobs + optional grid.
 * Purely presentational - sits behind content with pointer-events disabled.
 */
export function Aurora({ className, grid = true }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-teal/25 blur-[110px] animate-blob" />
      <div className="absolute right-[-6rem] top-24 h-[22rem] w-[22rem] rounded-full bg-gold/15 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-navy-500/40 blur-[120px] animate-blob [animation-delay:-12s]" />
      {grid && (
        <div className="absolute inset-0 bg-grid-navy [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      )}
    </div>
  );
}
