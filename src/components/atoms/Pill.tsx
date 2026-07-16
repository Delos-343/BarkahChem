import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: ReactNode;
  className?: string;
  /** Show the pulsing teal status dot. */
  dot?: boolean;
}

/** Small glass "eyebrow" label that sits above section headings. */
export function Pill({ children, className, dot = true }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mist backdrop-blur",
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-teal-light/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-light" />
        </span>
      )}
      {children}
    </span>
  );
}
