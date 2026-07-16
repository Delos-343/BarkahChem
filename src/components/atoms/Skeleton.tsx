import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/**
 * Base shimmer placeholder. Compose these to build section skeletons or reuse
 * them directly wherever the app starts loading data asynchronously as it grows.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-md bg-white/[0.06]",
        "after:absolute after:inset-0 after:content-[''] after:-translate-x-full",
        "after:animate-shimmer after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
        className,
      )}
    />
  );
}
