"use client";

import { m, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { staggerContainer } from "./variants";

type Tag = "div" | "ul" | "section";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  as?: Tag;
}

/**
 * Parent that reveals its children in a staggered sequence once it enters the
 * viewport. Children just declare `variants` - they inherit the show/hidden
 * state from here, keeping each card component tiny.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  amount = 0.2,
  as = "div",
}: StaggerGroupProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const MotionTag = m[as] as any;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}
