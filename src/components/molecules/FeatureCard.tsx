"use client";

import { m } from "framer-motion";
import { memo } from "react";
import type { Feature } from "@/lib/content";
import { Icon } from "@/components/atoms/Icon";
import { fadeUp } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";

interface FeatureCardProps {
  feature: Feature;
}

/** Trust/benefit card used in the "Why choose us" grid. */
export const FeatureCard = memo(function FeatureCard({ feature }: FeatureCardProps) {
  const { t } = useI18n();

  return (
    <m.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl glass p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-teal-light/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal/25 to-teal-dark/25 text-teal-light ring-1 ring-inset ring-teal/30 transition-transform duration-300 group-hover:scale-110">
        <Icon name={feature.icon} className="h-6 w-6" strokeWidth={2} />
      </span>
      <h3 className="mt-4 text-base font-bold text-white">{t(feature.title)}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mist/70">{t(feature.desc)}</p>
    </m.article>
  );
});
