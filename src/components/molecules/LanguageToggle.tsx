"use client";

import { m } from "framer-motion";
import { Globe } from "lucide-react";
import { useI18n } from "@/components/providers/LanguageProvider";
import { LOCALES, LOCALE_SHORT } from "@/lib/i18n";
import { ui } from "@/lib/ui";
import { cn } from "@/lib/utils";

/** Navbar CTA that flips the whole site between English and Bahasa Indonesia. */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale, swapping, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      disabled={swapping}
      aria-label={`${t(ui.language.ariaLabel)} - ${t(ui.language.switchTo)}`}
      title={t(ui.language.switchTo)}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-mist",
        "transition-colors hover:border-teal/50 hover:text-white disabled:cursor-wait",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60",
        className,
      )}
    >
      {/* the globe spins a half-turn each time the language flips */}
      <m.span
        animate={{ rotate: locale === "en" ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="grid place-items-center"
      >
        <Globe className="h-4 w-4 text-teal-light" />
      </m.span>

      <span className="inline-flex items-center gap-1.5">
        {LOCALES.map((l, i) => (
          <span key={l} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden className="text-mist/30">
                /
              </span>
            )}
            <span
              className={cn(
                "transition-colors duration-300",
                l === locale ? "text-white" : "text-mist/45",
              )}
            >
              {LOCALE_SHORT[l]}
            </span>
          </span>
        ))}
      </span>
    </button>
  );
}
