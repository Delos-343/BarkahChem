"use client";

import { animate, useInView } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/content";
import { easeOutExpo } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";

interface StatCounterProps {
  stat: Stat;
}

/** Number that counts up from zero the first time it scrolls into view. */
export const StatCounter = memo(function StatCounter({ stat }: StatCounterProps) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: easeOutExpo,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl glass px-4 py-6 text-center shadow-card"
    >
      <div className="bg-gradient-to-r from-gold via-gold-light to-teal-light bg-clip-text text-4xl font-extrabold tabular-nums text-transparent sm:text-5xl">
        {display}
        {stat.suffix}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-mist/70">
        {t(stat.label)}
      </div>
    </div>
  );
});
