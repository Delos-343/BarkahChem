import type { IconKey } from "@/components/atoms/Icon";
import type { LocalizedList, LocalizedText } from "./i18n";

/** Deep-dive content shown in the expandable panel under a product. */
export interface ProductKnowledge {
  howItWorks: LocalizedList;
  benefits: LocalizedList;
  usage: LocalizedList;
  cautions: LocalizedList;
}

export interface Product {
  id: string;
  title: LocalizedText;
  desc: LocalizedText;
  icon: IconKey;
  /** Optional - only products we have real product knowledge for. */
  knowledge?: ProductKnowledge;
}

export interface Category {
  id: string;
  name: LocalizedText;
  slug: string;
  blurb: LocalizedText;
  heroLabel: LocalizedText;
  icon: IconKey;
  accent: string;
  gradient: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "automotive",
    name: { en: "Automotive Care", id: "Perawatan Otomotif" },
    slug: "automotive",
    blurb: {
      en: "Keep your car running clean and looking its best, inside and out.",
      id: "Jaga mobil Anda tetap bersih dan tampil prima, luar dan dalam.",
    },
    heroLabel: { en: "Everything Your Car Needs", id: "Semua Kebutuhan Mobil Anda" },
    icon: "Car",
    accent: "#2E86C1",
    gradient: "from-[#2E86C1] to-[#0D4F6C]",
    products: [
      {
        id: "engine-flush",
        title: { en: "Engine Flush & Conditioner", id: "Engine Flush & Conditioner" },
        desc: {
          en: "Clears out built-up sludge so your engine runs cleaner and smoother.",
          id: "Melarutkan endapan sludge agar mesin bekerja lebih bersih dan halus.",
        },
        icon: "Settings",
      },
      {
        id: "car-polish",
        title: { en: "Car Polish & Wax", id: "Poles & Wax Mobil" },
        desc: {
          en: "A deep, lasting shine with UV protection - safe on any paint.",
          id: "Kilap dalam yang tahan lama plus perlindungan UV - aman untuk semua cat.",
        },
        icon: "Sparkles",
      },
      {
        id: "tire-shine",
        title: { en: "Tire Shine Spray", id: "Semir Ban" },
        desc: {
          en: "Rich, long-lasting gloss that keeps sidewalls looking new.",
          id: "Kilap pekat tahan lama yang menjaga dinding ban tetap seperti baru.",
        },
        icon: "Disc3",
        knowledge: {
          howItWorks: {
            en: [
              "A water-based formula that cares for the sidewall: it restores deep black, protects the rubber, and prevents dulling and cracking - not just shine for shine's sake.",
              "Water-based is the safest choice long term: it won't strip the rubber's natural oils or leave it brittle.",
              "The finish is a natural satin, not a sticky wet look that attracts dust.",
              "Sidewalls only - never the tread that touches the road.",
            ],
            id: [
              "Formula berbasis air yang merawat dinding samping ban: mengembalikan warna hitam pekat, melindungi karet, mencegah kusam dan retak - bukan sekadar bikin mengkilap.",
              "Berbasis air paling aman jangka panjang: tidak mengikis minyak alami karet dan tidak membuat getas.",
              "Hasilnya kilap alami/satin, bukan efek basah yang lengket dan cepat menarik debu.",
              "Hanya untuk dinding samping - jangan pernah di tapak yang menyentuh jalan.",
            ],
          },
          benefits: {
            en: [
              "Prevents oxidation and fading - brings back deep black and clears the grey haze.",
              "UV protection against sun and heat damage.",
              "Keeps the rubber elastic - prevents drying, hairline cracks and brittleness.",
              "Anti-dust and water resistant - dirt rinses away more easily.",
            ],
            id: [
              "Cegah oksidasi & pudar - kembalikan warna hitam pekat, hilangkan kusam/abu-abu.",
              "Perlindungan UV dari kerusakan akibat matahari dan panas.",
              "Jaga elastisitas - cegah kering, retak halus, dan getas.",
              "Anti-debu & tahan air - kotoran lebih mudah hilang.",
            ],
          },
          usage: {
            en: [
              "Wash the tyre properly - remove mud, dust and oil, then dry it completely.",
              "Sidewalls only. Never apply to the tread - it makes the contact surface slippery.",
              "Apply evenly with a sponge or cloth; don't overdo it.",
              "Let it soak in for 5-10 minutes, then wipe off the excess until it isn't tacky.",
              "Work in the shade, while the tyre is cool.",
              "About once a week for water-based.",
            ],
            id: [
              "Cuci bersih ban - hilangkan lumpur, debu, dan minyak, lalu keringkan total.",
              "Hanya di dinding samping. DILARANG di permukaan tapak - BAHAYA LICIN.",
              "Oleskan rata pakai spons atau lap; jangan berlebihan.",
              "Diamkan meresap 5-10 menit, lalu lap sisa berlebih sampai tidak lengket.",
              "Gunakan di tempat teduh, saat ban tidak panas.",
              "Cukup seminggu sekali untuk jenis water-based.",
            ],
          },
          cautions: {
            en: [
              "Never apply to the tread - the road contact surface has to stay grippy.",
              "Solvent/silicone shines look wetter but dry the rubber out over time - save those for shows, not daily use.",
              "Take care not to splash the wheels.",
            ],
            id: [
              "Jangan pernah aplikasikan ke tapak ban - permukaan yang menyentuh aspal harus tetap mencengkeram.",
              "Semir berbasis pelarut/silikon memang lebih mengkilap, tapi lama-lama membuat karet kering dan getas - cocok untuk acara/pameran, bukan harian.",
              "Hati-hati jangan sampai tumpah ke velg.",
            ],
          },
        },
      },
      {
        id: "interior-cleaner",
        title: { en: "Multi-purpose Cleaner", id: "Pembersih Interior Serbaguna" },
        desc: {
          en: "One bottle for the whole interior - easy on dashboards, plastics and fabric.",
          id: "Satu botol untuk seluruh interior - aman untuk dasbor, plastik, dan kain.",
        },
        icon: "SprayCan",
        knowledge: {
          howItWorks: {
            en: [
              "Formulated specifically for car interiors - dashboard, plastics, vinyl, leather, rubber, panels and touchscreens. It is not a household cleaner.",
              "pH neutral (6-8), so it won't strip the original protective coating or fade the colour.",
              "Gentle surfactants lift dust and oil, while UV inhibitors and polymers protect the surface afterwards.",
              "An anti-static finish means dust doesn't settle straight back on.",
            ],
            id: [
              "Diformulasikan khusus untuk interior mobil - dasbor, plastik, vinil, kulit, karet, panel, dan layar sentuh. Bukan pembersih rumah tangga.",
              "pH netral (6-8), tidak merusak lapisan pelindung asli dan tidak memudarkan warna.",
              "Surfaktan lembut mengangkat debu dan minyak, sementara penghambat UV dan polimer melindungi permukaan setelahnya.",
              "Efek anti-statis membuat debu tidak langsung menempel kembali.",
            ],
          },
          benefits: {
            en: [
              "Lifts dust, fingerprints, oil and everyday grime.",
              "UV protection - prevents fading, cracking and drying from the sun.",
              "Anti-static - surfaces stay clean for longer.",
              "Never sticky or greasy: a natural matte/satin finish with no windscreen glare.",
              "Safe on hard and soft-touch plastic, vinyl, real and synthetic leather, rubber and button panels.",
            ],
            id: [
              "Angkat debu, sidik jari, minyak, dan kotoran harian.",
              "Perlindungan UV - cegah pudar, retak, dan kering akibat matahari.",
              "Anti-statis - permukaan tetap bersih lebih lama.",
              "Tidak lengket dan tidak berminyak: hasil matte/satin alami, tidak silau di kaca depan.",
              "Aman untuk plastik keras & lunak, vinil, kulit asli/sintetis, karet, dan panel tombol.",
            ],
          },
          usage: {
            en: [
              "Dust first with a dry microfibre cloth, and a soft brush for vents and buttons.",
              "Never spray straight onto the dashboard or screen - spray the cloth first, away from electronics.",
              "Wipe gently and evenly across the surface.",
              "Let it soak in briefly, then buff off the excess until dry and clean.",
              "Work in the shade, while the surface is cool.",
              "Try a hidden area first to make sure it suits your material.",
            ],
            id: [
              "Bersihkan debu dulu pakai kain serat halus kering, dan sikat halus untuk celah AC/tombol.",
              "Jangan semprot langsung ke dasbor atau layar - semprotkan ke kain lap dulu, hindari celah elektronik.",
              "Usap perlahan dan merata ke seluruh permukaan.",
              "Diamkan sebentar agar meresap, lalu lap sisa berlebih sampai kering dan bersih.",
              "Lakukan di tempat teduh, saat permukaan tidak panas.",
              "Coba dulu di area tersembunyi untuk memastikan cocok.",
            ],
          },
          cautions: {
            en: [
              "Keep it out of electronic gaps and vents.",
              "Skip high-gloss finishes on a modern dashboard - they cause windscreen glare and attract dust.",
            ],
            id: [
              "Jangan sampai masuk ke celah elektronik atau ventilasi.",
              "Hindari hasil sangat mengkilap untuk dasbor modern - bikin silau di kaca depan dan menarik debu.",
            ],
          },
        },
      },
    ],
  },
  {
    id: "fragrance",
    name: { en: "Fragrance & Deodorant", id: "Parfum & Deodoran" },
    slug: "fragrance",
    blurb: {
      en: "Natural scents and deodorants that feel good and last all day.",
      id: "Wangi dan deodoran alami yang nyaman dipakai dan tahan seharian.",
    },
    heroLabel: { en: "Scents That Feel Like You", id: "Wangi yang Mewakili Anda" },
    icon: "Flower2",
    accent: "#A569BD",
    gradient: "from-[#A569BD] to-[#6B2F5E]",
    products: [
      {
        id: "body-mist",
        title: { en: "Body Mist Spray", id: "Body Mist Spray" },
        desc: {
          en: "Light, fresh scents that stay with you all day.",
          id: "Wangi ringan dan segar yang menemani Anda seharian.",
        },
        icon: "SprayCan",
      },
      {
        id: "perfume-oil",
        title: { en: "Perfume Oil Roll-On", id: "Minyak Parfum Roll-On" },
        desc: {
          en: "Concentrated botanical oils - alcohol-free and kind to skin.",
          id: "Minyak botani pekat - bebas alkohol dan lembut di kulit.",
        },
        icon: "Droplet",
      },
      {
        id: "tawas-deodorant",
        title: { en: "Tawas Natural Deodorant", id: "Deodoran Alami Tawas" },
        desc: {
          en: "Pure alum mineral salt - kills odour at the source, no aluminium chloride.",
          id: "Garam mineral tawas murni - membunuh bau dari akarnya, tanpa aluminium klorida.",
        },
        icon: "Leaf",
        knowledge: {
          howItWorks: {
            en: [
              "Made from 100% natural alum mineral salt (potassium alum) - a remedy Indonesians have used for generations. No artificial fragrance, alcohol, parabens or aluminium chloride.",
              "It doesn't mask body odour, it removes the cause: the bacteria that multiply in damp areas.",
              "It forms a thin protective layer on the skin that stops bacteria growing, without blocking your sweat pores.",
              "Your sweat glands keep working normally - sweat itself has no smell.",
            ],
            id: [
              "Terbuat dari 100% garam mineral tawas alami (kalium aluminium sulfat) - sudah digunakan turun-temurun di Indonesia. Tanpa pewangi buatan, alkohol, paraben, atau aluminium klorida.",
              "Bukan menutupi bau badan, tapi menghilangkan penyebabnya: bakteri yang berkembang biak di area lembap.",
              "Membentuk lapisan tipis pelindung di kulit yang mencegah bakteri berkembang biak, tanpa menyumbat pori-pori keringat.",
              "Kelenjar keringat tetap bekerja normal - keringat sendiri sebenarnya tidak berbau.",
            ],
          },
          benefits: {
            en: [
              "Safe and gentle: no irritation, itching or sting, even straight after shaving.",
              "Long lasting: stays effective for 24-48 hours from a single application.",
              "Economical: one bottle lasts 2-3 weeks of daily use.",
              "Leaves no yellow or white stains on your clothes - it has no oils, dyes or perfume.",
              "Doesn't block pores, so your body still regulates its temperature normally.",
              "Eco-friendly and suitable for sensitive skin, children, and expecting or nursing mothers.",
            ],
            id: [
              "Aman & lembut: tidak menyebabkan iritasi, gatal, atau perih meski dipakai setelah bercukur.",
              "Tahan lama: sekali pakai efeknya bertahan 24-48 jam.",
              "Hemat: satu botol cukup untuk 2-3 minggu pemakaian harian.",
              "Tidak meninggalkan noda kuning atau putih di pakaian - tanpa minyak, pewarna, atau pewangi.",
              "Tidak menyumbat pori-pori, tubuh tetap bisa mengatur suhu secara normal.",
              "Ramah lingkungan dan cocok untuk kulit sensitif, anak-anak, hingga ibu hamil dan menyusui.",
            ],
          },
          usage: {
            en: [
              "Apply after every shower.",
              "Use on clean, dry underarms.",
              "Let it dry for a few seconds.",
              "Store somewhere dry after use so it doesn't go soft.",
            ],
            id: [
              "Gunakan cairan tawas setiap habis mandi.",
              "Aplikasikan ke ketiak yang sudah bersih dan kering.",
              "Biarkan beberapa detik hingga kering.",
              "Simpan di tempat kering setelah dipakai agar tidak lembek.",
            ],
          },
          cautions: {
            en: [
              "It is not an antiperspirant: it stops the odour, but you will still sweat normally.",
              "Keep away from eyes and open wounds.",
              "Very sensitive skin? Patch-test a small area first.",
              "Store somewhere cool and dry, away from excess damp.",
            ],
            id: [
              "Bukan antiperspiran: menghilangkan bau, tapi keringat tetap keluar seperti biasa.",
              "Jauhkan dari mata dan luka terbuka.",
              "Jika kulit sangat sensitif, tes dulu di area kecil.",
              "Simpan di tempat sejuk dan kering, hindari kelembapan berlebih.",
            ],
          },
        },
      },
      {
        id: "room-freshener",
        title: { en: "Room & Fabric Freshener", id: "Pewangi Ruangan & Kain" },
        desc: {
          en: "A long-lasting lift for rooms, curtains and linens.",
          id: "Kesegaran tahan lama untuk ruangan, gorden, dan seprai.",
        },
        icon: "Wind",
      },
    ],
  },
  {
    id: "dishwashing",
    name: { en: "Dishwashing Products", id: "Produk Cuci Piring" },
    slug: "dishwashing",
    blurb: {
      en: "Grease-cutting soaps and greener formulas for every sink.",
      id: "Sabun perontok lemak dan formula ramah lingkungan untuk setiap dapur.",
    },
    heroLabel: {
      en: "Tough on Grease, Easy on the Planet",
      id: "Ampuh pada Lemak, Ramah pada Bumi",
    },
    icon: "Droplets",
    accent: "#1ABC9C",
    gradient: "from-[#1ABC9C] to-[#1A5276]",
    products: [
      {
        id: "liquid-dish-soap",
        title: { en: "Concentrated Liquid Dish Soap", id: "Sabun Cuci Piring Cair Pekat" },
        desc: {
          en: "Cuts through grease fast, yet stays gentle on your hands - lemon or original.",
          id: "Merontokkan lemak dengan cepat, tetap lembut di tangan - lemon atau original.",
        },
        icon: "Droplets",
      },
      {
        id: "dish-bar-soap",
        title: { en: "Dishwash Bar Soap", id: "Sabun Colek Cuci Piring" },
        desc: {
          en: "A long-lasting bar that lathers well in hard or soft water.",
          id: "Batangan awet yang tetap berbusa di air sadah maupun air lunak.",
        },
        icon: "Square",
      },
      {
        id: "eco-dish-powder",
        title: { en: "Eco Dishwash Powder", id: "Bubuk Cuci Piring Ramah Lingkungan" },
        desc: {
          en: "Phosphate-free and biodegradable, with bulk sizes when you need more.",
          id: "Bebas fosfat dan mudah terurai, tersedia ukuran besar bila butuh lebih banyak.",
        },
        icon: "Recycle",
      },
      {
        id: "commercial-dish-liquid",
        title: { en: "Commercial Dishwash Liquid", id: "Sabun Cuci Piring Industri" },
        desc: {
          en: "High-foam cleaning power for busy kitchens - 5L and 20L packs.",
          id: "Busa melimpah untuk dapur sibuk - kemasan 5L dan 20L.",
        },
        icon: "FlaskConical",
      },
    ],
  },
  {
    id: "gum-rosin",
    name: { en: "Gum Rosin", id: "Gondorukem" },
    slug: "gum-rosin",
    blurb: {
      en: "Dependable industrial and food-grade rosin, supplied by the batch.",
      id: "Gondorukem industri dan food-grade yang andal, dipasok per batch.",
    },
    heroLabel: { en: "A Rosin For Every Industry", id: "Gondorukem untuk Setiap Industri" },
    icon: "TreePine",
    accent: "#27AE60",
    gradient: "from-[#27AE60] to-[#1D6A39]",
    products: [
      {
        id: "pale-yellow-rosin",
        title: { en: "Pale Yellow Gum Rosin", id: "Gondorukem Kuning Muda" },
        desc: {
          en: "Grade WW/WG - a clean, pale rosin for adhesives and varnishes.",
          id: "Grade WW/WG - gondorukem bersih dan pucat untuk perekat dan vernis.",
        },
        icon: "Container",
      },
      {
        id: "dark-grade-rosin",
        title: { en: "Dark Grade Rosin", id: "Gondorukem Grade Gelap" },
        desc: {
          en: "Grade D-N - a dependable pick for soap and rubber processing.",
          id: "Grade D-N - pilihan andal untuk pengolahan sabun dan karet.",
        },
        icon: "TreePine",
      },
      {
        id: "hydrogenated-rosin",
        title: { en: "Hydrogenated Rosin", id: "Gondorukem Terhidrogenasi" },
        desc: {
          en: "Extra-stable and refined for food-grade and pharmaceutical use.",
          id: "Lebih stabil dan murni untuk keperluan food-grade dan farmasi.",
        },
        icon: "FlaskConical",
      },
      {
        id: "tall-oil-rosin",
        title: { en: "Tall Oil Rosin", id: "Tall Oil Rosin" },
        desc: {
          en: "A cost-effective industrial grade, supplied in bulk.",
          id: "Grade industri yang ekonomis, tersedia dalam jumlah besar.",
        },
        icon: "Package",
      },
    ],
  },
];
