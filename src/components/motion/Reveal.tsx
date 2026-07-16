"use client";

import { m, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp } from "./variants";

type Tag = "div" | "section" | "article" | "li" | "span";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: Tag;
  amount?: number;
}

/**
 * Animates children in when scrolled into view. Uses the standalone `useInView`
 * hook (IntersectionObserver) so it works with LazyMotion's minimal feature set
 * and never leaves content stuck hidden.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
  amount = 0.25,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const MotionTag = m[as] as any;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
