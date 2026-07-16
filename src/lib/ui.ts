import type { LocalizedText } from "./i18n";

/**
 * Every piece of interface copy, in both languages.
 * Components read these through `t()` from the LanguageProvider.
 */
export const ui = {
  language: {
    switchTo: { en: "Bahasa Indonesia", id: "English" } as LocalizedText,
    ariaLabel: { en: "Switch language", id: "Ganti bahasa" } as LocalizedText,
  },

  nav: {
    products: { en: "Products", id: "Produk" } as LocalizedText,
    order: { en: "Place An Order", id: "Cara Pesan" } as LocalizedText,
    why: { en: "Why Us", id: "Kenapa Kami" } as LocalizedText,
    contact: { en: "Contact", id: "Kontak" } as LocalizedText,
  },

  common: {
    orderNow: { en: "Order Now", id: "Pesan Sekarang" } as LocalizedText,
    chatWithUs: { en: "Chat with us", id: "Chat dengan kami" } as LocalizedText,
    seeMore: { en: "See More", id: "Lihat Selengkapnya" } as LocalizedText,
    orderOnWhatsApp: { en: "Order on WhatsApp", id: "Pesan via WhatsApp" } as LocalizedText,
  },

  hero: {
    eyebrow: { en: "Trusted Across Indonesia", id: "Dipercaya di Seluruh Indonesia" } as LocalizedText,
    titleLine1: { en: "Quality You", id: "Kualitas yang" } as LocalizedText,
    titleLine2: { en: "Can Trust", id: "Bisa Dipercaya" } as LocalizedText,
    subtitle: {
      en: "Car care, fragrances, dishwashing, and industrial gum rosin - the everyday essentials, all under one roof. Tell us what you need and we'll take it from there.",
      id: "Perawatan mobil, parfum, sabun cuci piring, dan gondorukem industri - semua kebutuhan harian dalam satu tempat. Beri tahu kebutuhan Anda, sisanya biar kami yang urus.",
    } as LocalizedText,
    ctaBrowse: { en: "Browse Our Catalog", id: "Lihat Katalog Kami" } as LocalizedText,
    sniCertified: { en: "SNI Certified", id: "Bersertifikat SNI" } as LocalizedText,
    happyCustomers: { en: "25+ Happy Customers", id: "25+ Pelanggan Puas" } as LocalizedText,
  },

  chips: {
    automotive: { en: "Auto Care", id: "Otomotif" } as LocalizedText,
    fragrance: { en: "Fragrance", id: "Parfum" } as LocalizedText,
    dishwashing: { en: "Dishwash", id: "Cuci Piring" } as LocalizedText,
    "gum-rosin": { en: "Gum Rosin", id: "Gondorukem" } as LocalizedText,
  } as Record<string, LocalizedText>,

  categories: {
    eyebrow: { en: "What we make", id: "Yang Kami Produksi" } as LocalizedText,
    titleLead: { en: "Four Ranges,", id: "Empat Rangkaian," } as LocalizedText,
    titleAccent: { en: "One Trusted Shop", id: "Satu Toko Terpercaya" } as LocalizedText,
    subtitle: {
      en: "Whether you're detailing a car, freshening a room, or supplying a factory, there's a range here built for the job.",
      id: "Entah Anda sedang memoles mobil, menyegarkan ruangan, atau memasok pabrik, ada rangkaian yang pas untuk pekerjaan itu.",
    } as LocalizedText,
  },

  showcase: {
    eyebrow: { en: "Take A Peek", id: "Lihat Lebih Dekat" } as LocalizedText,
    titleLead: { en: "A Closer Look,", id: "Lebih Dekat," } as LocalizedText,
    titleAccent: { en: "Range By Range", id: "Rangkaian demi Rangkaian" } as LocalizedText,
    subtitle: {
      en: "Have a look through each range, then send us the products and quantities you want - we'll confirm it all on WhatsApp.",
      id: "Telusuri setiap rangkaian, lalu kirim produk dan jumlah yang Anda mau - semuanya kami konfirmasi lewat WhatsApp.",
    } as LocalizedText,
  },

  order: {
    eyebrow: { en: "How to Order", id: "Cara Pesan" } as LocalizedText,
    titleLead: { en: "Order at", id: "Pesan dalam" } as LocalizedText,
    titleAccent: { en: "a Minute's Notice", id: "Hitungan Menit" } as LocalizedText,
    subtitle: {
      en: "No accounts, no checkout, no fuss. Send a message and we'll take it from there - usually within the hour.",
      id: "Tanpa akun, tanpa checkout, tanpa ribet. Kirim pesan dan sisanya kami yang urus - biasanya dalam satu jam.",
    } as LocalizedText,
  },

  why: {
    eyebrow: { en: "Why Choose Us", id: "Kenapa Memilih Kami" } as LocalizedText,
    titleLead: { en: "Why Pick", id: "Kenapa Pilih" } as LocalizedText,
    titleAccent: { en: "BarkahChem Solutions", id: "BarkahChem Solutions" } as LocalizedText,
    subtitle: {
      en: "One year in and dozens of orders later, here's what keeps our customers coming back.",
      id: "Satu tahun berjalan dan puluhan pesanan kemudian, inilah yang membuat pelanggan kami kembali lagi.",
    } as LocalizedText,
    bannerTitle: {
      en: "Ready when you are - let's talk.",
      id: "Siap kapan pun Anda siap - mari bicara.",
    } as LocalizedText,
    bannerSubtitle: {
      en: "A quick quote, bulk pricing, or a question - one message and we're on it.",
      id: "Butuh penawaran cepat, harga grosir, atau sekadar bertanya - satu pesan langsung kami tangani.",
    } as LocalizedText,
    bannerCta: { en: "Talk to Us", id: "Hubungi Kami" } as LocalizedText,
  },

  contact: {
    eyebrow: { en: "Get in Touch", id: "Hubungi Kami" } as LocalizedText,
    titleLead: { en: "Let's Take Your", id: "Kami Siap Terima" } as LocalizedText,
    titleAccent: { en: "Order", id: "Pesanan Anda" } as LocalizedText,
    subtitle: {
      en: "WhatsApp is the fastest way to reach us, but email works too. Either way, a real person gets back to you - never a bot.",
      id: "WhatsApp adalah cara tercepat menghubungi kami, tapi email juga bisa. Bagaimanapun, yang membalas orang sungguhan - bukan bot.",
    } as LocalizedText,
    labelWhatsApp: { en: "Chat on WhatsApp", id: "Chat via WhatsApp" } as LocalizedText,
    labelEmail: { en: "Send an email", id: "Kirim Email" } as LocalizedText,
  },

  footer: {
    products: { en: "Products", id: "Produk" } as LocalizedText,
    company: { en: "Company", id: "Perusahaan" } as LocalizedText,
    getInTouch: { en: "Get in Touch", id: "Hubungi Kami" } as LocalizedText,
    rights: { en: "All Rights Reserved.", id: "Seluruh Hak Cipta Dilindungi." } as LocalizedText,
    tagline: {
      en: "Car Care · Fragrance · Dishwashing · Gum Rosin",
      id: "Otomotif · Parfum · Cuci Piring · Gondorukem",
    } as LocalizedText,
  },

  knowledge: {
    show: { en: "Product knowledge", id: "Pengetahuan Produk" } as LocalizedText,
    hide: { en: "Hide details", id: "Tutup Detail" } as LocalizedText,
    howItWorks: { en: "How it works", id: "Cara Kerjanya" } as LocalizedText,
    benefits: { en: "Key benefits", id: "Manfaat Utama" } as LocalizedText,
    usage: { en: "How to use", id: "Cara Pakai" } as LocalizedText,
    cautions: { en: "Good to know", id: "Catatan Penting" } as LocalizedText,
  },

  f1448: {
    eyebrow: { en: "Featured Product", id: "Produk Unggulan" } as LocalizedText,
    titleLead: { en: "Next-Generation", id: "Aditif Bahan Bakar" } as LocalizedText,
    titleAccent: { en: "Fuel Additive", id: "Generasi Terbaru" } as LocalizedText,
    subtitle: {
      en: "The F-1448 series cleans your fuel system from the inside out - more kilometres per litre, a smoother engine, and cleaner exhaust. Works on both gasoline and diesel.",
      id: "Seri F-1448 membersihkan sistem bahan bakar dari dalam - lebih irit per liter, mesin lebih halus, dan emisi lebih bersih. Cocok untuk bensin maupun diesel.",
    } as LocalizedText,
    priceNote: { en: "per 100 ml bottle", id: "per botol 100 ml" } as LocalizedText,
    variantsTitle: { en: "Two formulas", id: "Dua formula" } as LocalizedText,
    compatTitle: { en: "Works with", id: "Cocok untuk" } as LocalizedText,
    order: { en: "Order F-1448 on WhatsApp", id: "Pesan F-1448 via WhatsApp" } as LocalizedText,
    flyerEn: { en: "Flyer (English)", id: "Brosur (English)" } as LocalizedText,
    flyerId: { en: "Flyer (Indonesia)", id: "Brosur (Indonesia)" } as LocalizedText,
    stockNote: { en: "Limited stock", id: "Stok terbatas" } as LocalizedText,
  },

  wa: {
    order: {
      en: "Hi BarkahChem Solutions, I'd like to place an order.",
      id: "Halo BarkahChem Solutions, saya ingin memesan.",
    } as LocalizedText,
    quote: {
      en: "Hi BarkahChem Solutions, I'd like a quote.",
      id: "Halo BarkahChem Solutions, saya ingin minta penawaran.",
    } as LocalizedText,
  },
};
