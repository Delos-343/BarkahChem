import type { IconKey } from "@/components/atoms/Icon";
import type { LocalizedText } from "./i18n";

export interface Step {
  n: number;
  title: LocalizedText;
  desc: LocalizedText;
  icon: IconKey;
}

export interface Stat {
  value: number;
  suffix: string;
  label: LocalizedText;
}

export interface Feature {
  title: LocalizedText;
  desc: LocalizedText;
  icon: IconKey;
}

/** "How to Order" - the four-step WhatsApp flow. */
export const steps: Step[] = [
  {
    n: 1,
    title: { en: "Find Your Needs", id: "Temukan Kebutuhan Anda" },
    desc: {
      en: "Have a look through our four ranges and pick what suits you.",
      id: "Telusuri empat rangkaian kami dan pilih yang sesuai kebutuhan.",
    },
    icon: "Search",
  },
  {
    n: 2,
    title: { en: "Tap To Chat", id: "Klik untuk Chat" },
    desc: {
      en: "Hit the green WhatsApp button on any product.",
      id: "Tekan tombol WhatsApp hijau di produk mana pun.",
    },
    icon: "MessageCircle",
  },
  {
    n: 3,
    title: { en: "Talk To Us", id: "Bicara dengan Kami" },
    desc: {
      en: "Send the product, how much you need, and where it's headed.",
      id: "Kirim nama produk, jumlah yang dibutuhkan, dan alamat tujuan.",
    },
    icon: "Send",
  },
  {
    n: 4,
    title: { en: "We Sort Everything", id: "Semuanya Kami Urus" },
    desc: {
      en: "We'll confirm everything, share payment details, and get it moving.",
      id: "Kami konfirmasi semuanya, kirim detail pembayaran, lalu barang berangkat.",
    },
    icon: "CheckCircle2",
  },
];

/** Animated counters in the "Why choose us" band. */
export const stats: Stat[] = [
  { value: 1, suffix: "+", label: { en: "Years in Business", id: "Tahun Beroperasi" } },
  { value: 25, suffix: "", label: { en: "Happy Customers", id: "Pelanggan Puas" } },
  { value: 4, suffix: "+", label: { en: "Product Ranges", id: "Rangkaian Produk" } },
  { value: 100, suffix: "%", label: { en: "Quality Assured", id: "Jaminan Kualitas" } },
];

/** Trust-building feature grid. */
export const features: Feature[] = [
  {
    title: { en: "Quality you can verify", id: "Kualitas yang Bisa Dibuktikan" },
    desc: {
      en: "Every product meets Indonesian SNI standards and international benchmarks - no shortcuts.",
      id: "Setiap produk memenuhi standar SNI dan tolok ukur internasional - tanpa jalan pintas.",
    },
    icon: "BadgeCheck",
  },
  {
    title: { en: "Out the door fast", id: "Cepat Dikirim" },
    desc: {
      en: "Order before noon and it ships the same day, anywhere in the country.",
      id: "Pesan sebelum siang, barang dikirim hari itu juga ke seluruh Indonesia.",
    },
    icon: "Truck",
  },
  {
    title: { en: "A real person on chat", id: "Dilayani Orang Sungguhan" },
    desc: {
      en: "Message us for a quick quote, a question, or a hand after your order - we actually reply.",
      id: "Kirim pesan untuk penawaran cepat, pertanyaan, atau bantuan setelah pesanan - kami benar-benar membalas.",
    },
    icon: "MessageCircle",
  },
  {
    title: { en: "Better prices in bulk", id: "Harga Lebih Baik untuk Grosir" },
    desc: {
      en: "Reselling, or buying by the pallet? We'll set you up with wholesale pricing.",
      id: "Mau jual lagi atau beli per palet? Kami siapkan harga grosirnya.",
    },
    icon: "Boxes",
  },
  {
    title: { en: "Greener choices", id: "Pilihan Lebih Hijau" },
    desc: {
      en: "Prefer eco-friendly? There are biodegradable options across our dishwash and fragrance ranges.",
      id: "Ingin yang ramah lingkungan? Tersedia pilihan mudah terurai di rangkaian cuci piring dan parfum.",
    },
    icon: "Recycle",
  },
  {
    title: { en: "Your brand, our formulas", id: "Merek Anda, Formula Kami" },
    desc: {
      en: "Want it under your own label? We handle custom branding and white-label runs for business clients.",
      id: "Ingin pakai merek sendiri? Kami melayani custom branding dan white-label untuk klien bisnis.",
    },
    icon: "Factory",
  },
];
