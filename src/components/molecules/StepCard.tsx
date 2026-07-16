"use client";

import { m } from "framer-motion";
import { memo } from "react";
import type { Step } from "@/lib/content";
import { Icon } from "@/components/atoms/Icon";
import { fadeUp } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";

interface StepCardProps {
  step: Step;
}

/** One node in the "How to order" timeline. */
export const StepCard = memo(function StepCard({ step }: StepCardProps) {
  const { t } = useI18n();

  return (
    <m.div
      variants={fadeUp}
      className="group relative flex flex-col items-center gap-4 rounded-2xl glass p-6 text-center shadow-card"
    >
      <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-700 ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1">
        <Icon name={step.icon} className="h-7 w-7 text-teal-light" strokeWidth={2} />
        <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-xs font-extrabold text-navy-900 shadow-glow-gold">
          {step.n}
        </span>
      </span>
      <div className="leading-relaxed">
        <h3 className="text-base font-bold text-white"> {t(step.title)} </h3>
        <p className="mt-4 text-justify text-sm text-mist/70"> {t(step.desc)} </p>
      </div>
    </m.div>
  );
});
