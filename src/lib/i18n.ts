/**
 * Lightweight bilingual layer (English / Bahasa Indonesia).
 *
 * Every translatable string in the data layer is a `LocalizedText` pair, so the
 * catalogue keeps its shape and each component just resolves with `t()`.
 * Swap this for a CMS/i18n library later without touching the components.
 */
export const LOCALES = ["en", "id"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** A string that exists in both supported languages. */
export type LocalizedText = { en: string; id: string };

/** A list of strings in both languages (benefits, steps, cautions...). */
export type LocalizedList = { en: string[]; id: string[] };

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

/** Short label for the navbar toggle. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export function resolve(value: LocalizedText, locale: Locale): string {
  return value[locale] ?? value[DEFAULT_LOCALE];
}

export function resolveList(value: LocalizedList, locale: Locale): string[] {
  return value[locale] ?? value[DEFAULT_LOCALE];
}

export const STORAGE_KEY = "barkahchem.locale";
