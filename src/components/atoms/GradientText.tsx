import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "gold-teal" | "teal";
}

/** Inline gradient-filled text used for emphasis in headings. */
export function GradientText({
  children,
  className,
  variant = "gold-teal",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        variant === "gold-teal"
          ? "bg-gradient-to-r from-gold via-gold-light to-teal-light"
          : "bg-gradient-to-r from-teal-light to-teal",
        className,
      )}
    >
      {children}
    </span>
  );
}
