"use client";

import { m } from "framer-motion";
import { memo } from "react";
import type { Product } from "@/lib/products";
import { Icon } from "@/components/atoms/Icon";
import { ProductKnowledge } from "@/components/molecules/ProductKnowledge";
import { fadeUp } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";

interface ProductRowProps {
  product: Product;
  accent: string;
}

export const ProductRow = memo(function ProductRow({ product, accent }: ProductRowProps) {
  const { t } = useI18n();

  return (
    <m.div
      variants={fadeUp}
      className="group rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.06]"
    >
      <div className="flex items-start gap-4">
        <span
          className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${accent}22`,
            color: accent,
            boxShadow: `inset 0 0 0 1px ${accent}44`,
          }}
        >
          <Icon name={product.icon} className="h-5 w-5" strokeWidth={2.1} />
        </span>
        <div className="min-w-0">
          <h4 className="font-semibold text-white">{t(product.title)}</h4>
          <p className="mt-0.5 text-sm leading-relaxed text-mist/70">{t(product.desc)}</p>
        </div>
      </div>

      {product.knowledge && (
        <ProductKnowledge knowledge={product.knowledge} accent={accent} />
      )}
    </m.div>
  );
});
