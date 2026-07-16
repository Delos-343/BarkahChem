"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { useI18n } from "@/components/providers/LanguageProvider";
import type { ProductKnowledge as Knowledge } from "@/lib/products";
import { ui } from "@/lib/ui";
import { cn } from "@/lib/utils";

interface ProductKnowledgeProps {
  knowledge: Knowledge;
  accent: string;
}

/** Expandable deep-dive shown under products we have real knowledge for. */
export function ProductKnowledge({ knowledge, accent }: ProductKnowledgeProps) {
  const { t, tl } = useI18n();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const sections = [
    { label: t(ui.knowledge.howItWorks), items: tl(knowledge.howItWorks), ordered: false },
    { label: t(ui.knowledge.benefits), items: tl(knowledge.benefits), ordered: false },
    { label: t(ui.knowledge.usage), items: tl(knowledge.usage), ordered: true },
    { label: t(ui.knowledge.cautions), items: tl(knowledge.cautions), ordered: false },
  ];

  return (
    <div className="mt-3 border-t border-white/5 pt-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
        style={{ color: accent }}
      >
        {open ? t(ui.knowledge.hide) : t(ui.knowledge.show)}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {sections.map((section) => (
                <div key={section.label}>
                  <h5
                    className="text-[0.7rem] font-bold uppercase tracking-[0.14em]"
                    style={{ color: accent }}
                  >
                    {section.label}
                  </h5>
                  {section.ordered ? (
                    <ol className="mt-2 list-inside list-decimal space-y-1.5 text-xs leading-relaxed text-mist/70 marker:text-mist/40">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-mist/70">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
