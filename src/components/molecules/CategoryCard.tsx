"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import type { Category } from "@/lib/products";
import { Icon } from "@/components/atoms/Icon";
import { fadeUp } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";
import { ui } from "@/lib/ui";
import { cn } from "@/lib/utils";

export const CategoryCard = memo(function CategoryCard({ category }: { category: Category }) {
  const { t } = useI18n();

  return (
    <m.a
      href={`#${category.slug}`}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl glass p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: category.accent }}
      />
      <span
        className={cn(
          "relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3",
          category.gradient,
        )}
      >
        <Icon name={category.icon} className="h-7 w-7" strokeWidth={2} />
      </span>
      <div className="relative">
        <h3 className="text-lg font-bold text-white">{t(category.name)}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mist/75">{t(category.blurb)}</p>
      </div>
      <span className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light">
        {t(ui.common.seeMore)}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </m.a>
  );
});
