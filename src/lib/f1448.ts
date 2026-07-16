import type { IconKey } from "@/components/atoms/Icon";
import type { LocalizedText } from "./i18n";

export interface F1448Variant {
  id: string;
  code: string;
  name: LocalizedText;
  tagline: LocalizedText;
  accent: string;
}

export interface F1448Benefit {
  title: LocalizedText;
  desc: LocalizedText;
  icon: IconKey;
}

/** Featured campaign product - taken straight from the F-1448 flyers. */
export const f1448 = {
  code: "F-1448",
  series: "SERIES",
  price: "IDR 89.000",
  volume: "100 ml",
  image: "/products/f1448-bottles.jpg",
  flyers: {
    en: "/flyers/F1448-Flyer-English.pdf",
    id: "/flyers/F1448-Flyer-Indonesia.pdf",
  },

  variants: [
    {
      id: "gasoline",
      code: "F-1448 B",
      name: { en: "Gasoline", id: "Bensin" },
      tagline: { en: "Performance Additive", id: "Aditif Performa" },
      accent: "#E2703A",
    },
    {
      id: "diesel",
      code: "F-1448 D",
      name: { en: "Diesel", id: "Diesel" },
      tagline: { en: "Cetane & Cleaner", id: "Cetane & Pembersih" },
      accent: "#2E86C1",
    },
  ] as F1448Variant[],

  benefits: [
    {
      title: { en: "3-8% Fuel Savings", id: "Hemat BBM 3-8%" },
      desc: { en: "More kilometres per litre", id: "Lebih irit di setiap perjalanan" },
      icon: "Fuel",
    },
    {
      title: { en: "Cleaner Exhaust", id: "Emisi Lebih Bersih" },
      desc: { en: "Reduce emissions fast", id: "Ramah lingkungan, lulus uji emisi" },
      icon: "Leaf",
    },
    {
      title: { en: "Smooth Idle & Accel", id: "Akselerasi Halus" },
      desc: { en: "Responsive engine", id: "Mesin responsif & nyaman" },
      icon: "Gauge",
    },
    {
      title: { en: "Deep Cleans Injectors", id: "Bersihkan Injektor" },
      desc: { en: "Removes carbon deposits", id: "Hilangkan karbon & varnish" },
      icon: "SprayCan",
    },
    {
      title: { en: "Anti-Corrosion", id: "Anti-Korosi" },
      desc: { en: "Protects the fuel system", id: "Sistem bahan bakar terlindungi" },
      icon: "ShieldCheck",
    },
    {
      title: { en: "Better Combustion", id: "Pembakaran Optimal" },
      desc: { en: "Full power, less knock", id: "Tenaga penuh, bebas knocking" },
      icon: "Flame",
    },
  ] as F1448Benefit[],

  compatibility: [
    { en: "Turbo", id: "Turbo" },
    { en: "Direct Injection", id: "Direct Injection" },
    { en: "Hybrid", id: "Hybrid" },
    { en: "Gasoline & Diesel", id: "Bensin & Diesel" },
  ] as LocalizedText[],
};
