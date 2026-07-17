import type { LocalizedText } from "./i18n";
import { ui } from "./ui";

/** Single source of truth for brand + contact details. */
export const site = {
  name: "BarkahChem Solutions",
  shortName: "BarkahChem",
  tagline: {
    en: "Quality You Can Trust",
    id: "Kualitas yang Bisa Dipercaya",
  } as LocalizedText,
  description: {
    en: "From car care and home fragrance to everyday dishwashing and industrial gum rosin - dependable products, all in one place. Message us and we'll sort your order, wherever you are in Indonesia or overseas.",
    id: "Dari perawatan mobil dan pewangi rumah hingga sabun cuci piring harian dan gondorukem industri - produk andalan, semua dalam satu tempat. Kirim pesan dan kami urus pesanan Anda, di mana pun Anda berada di Indonesia maupun luar negeri.",
  } as LocalizedText,
  url: "http://epmindochemical.com/",

  contact: {
    /** International format so wa.me links resolve correctly (62...). */
    whatsapp: "+62 812-8334-4965",
    email: "info@barkahchem.com",
    hours: {
      en: "Mon – Sat, 8 AM – 5 PM",
      id: "Senin – Sabtu, 08.00 – 17.00 WIB",
    } as LocalizedText,
    serviceArea: {
      en: "DKI Jakarta, Indonesia",
      id: "DKI Jakarta, Indonesia",
    } as LocalizedText,
  },

  nav: [
    { label: ui.nav.products, href: "#categories" },
    { label: ui.nav.order, href: "#order" },
    { label: ui.nav.why, href: "#why" },
    { label: ui.nav.contact, href: "#contact" },
  ],
};

export type Site = typeof site;
