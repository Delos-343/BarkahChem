"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  STORAGE_KEY,
  resolve,
  resolveList,
  type Locale,
  type LocalizedList,
  type LocalizedText,
} from "@/lib/i18n";

/** Fade-out duration before the copy swaps (ms). Fade-in mirrors it. */
const SWAP_MS = 170;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** True while the crossfade is mid-swap - lets controls disable themselves. */
  swapping: boolean;
  t: (value: LocalizedText) => string;
  tl: (value: LocalizedList) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Client-side language state with a soft crossfade on change.
 *
 * The static export ships in DEFAULT_LOCALE and swaps after hydration, so we
 * read the saved preference in an effect (avoids hydration mismatches).
 *
 * NOTE: the wrapper animates OPACITY ONLY. A transform/filter here would make
 * this element the containing block for our `position: fixed` navbar and
 * floating button, which would visibly break them mid-transition.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [swapping, setSwapping] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "id") setLocaleState(saved);
    } catch {
      /* storage unavailable - keep the default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Don't leave timers running if this unmounts mid-swap.
  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  const persist = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      // Respect reduced-motion: swap instantly rather than blink.
      if (prefersReducedMotion()) {
        setLocaleState(next);
        persist(next);
        return;
      }

      setSwapping(true);
      const out = window.setTimeout(() => {
        setLocaleState(next);
        persist(next);
        // next frame, fade back in with the new copy already in place
        const back = window.setTimeout(() => setSwapping(false), 20);
        timers.current.push(back);
      }, SWAP_MS);
      timers.current.push(out);
    },
    [locale, persist],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "en" ? "id" : "en"),
      swapping,
      t: (v: LocalizedText) => resolve(v, locale),
      tl: (v: LocalizedList) => resolveList(v, locale),
    }),
    [locale, setLocale, swapping],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div
        className="motion-safe:transition-opacity motion-safe:ease-out"
        style={{
          opacity: swapping ? 0 : 1,
          transitionDuration: `${SWAP_MS}ms`,
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
