"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the DOM animation feature set (~15kb) on demand instead of the full
 * Framer Motion bundle. Every animated component uses the lightweight `m`
 * primitive, so features are code-split away until this provider hydrates.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
