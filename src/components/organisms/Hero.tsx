"use client";

import { m } from "framer-motion";
import { BadgeCheck, MessageCircle, ShoppingBag, Star } from "lucide-react";
import { Aurora } from "@/components/atoms/Aurora";
import { Button } from "@/components/atoms/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { Icon } from "@/components/atoms/Icon";
import { Pill } from "@/components/atoms/Pill";
import { fadeUp, staggerContainer } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { whatsappLink } from "@/lib/utils";

export function Hero() {
  const { t } = useI18n();
  const waHref = whatsappLink(site.contact.whatsapp, t(ui.wa.order));

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">

      <Aurora />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Copy */}
        <m.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <m.div variants={fadeUp} className="flex w-full justify-center lg:justify-start">
            <Pill>{t(ui.hero.eyebrow)}</Pill>
          </m.div>

          <m.h1
            variants={fadeUp}
            className="text-4xl w-full text-center font-extrabold leading-[1.25] text-white sm:text-justify sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t(ui.hero.titleLine1)}
            <br />
            <GradientText> {t(ui.hero.titleLine2)} </GradientText>
          </m.h1>

          <m.p
            variants={fadeUp}
            className="max-w-lg text-base leading-relaxed text-mist/80 sm:text-lg"
          >
            {t(ui.hero.subtitle)}
          </m.p>

          <m.div variants={fadeUp} className="flex w-full flex-col gap-3 sm:flex-row">
            <Button
              href="#categories"
              variant="primary"
              size="lg"
              className="w-full sm:flex-1"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(ui.hero.ctaBrowse)}
            </Button>
            <Button
              href={waHref}
              variant="whatsapp"
              size="lg"
              className="w-full sm:flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              {t(ui.common.orderOnWhatsApp)}
            </Button>
          </m.div>

          <m.ul variants={fadeUp} className="grid w-full grid-cols-2 gap-2.5 pt-2 sm:grid-cols-4">
            {categories.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-mist transition-colors hover:border-white/25 hover:text-white"
                >
                  <span
                    className="grid h-6 w-6 place-items-center rounded-full"
                    style={{ backgroundColor: `${c.accent}22`, color: c.accent }}
                  >
                    <Icon name={c.icon} className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  {t(ui.chips[c.id] ?? c.name)}
                </a>
              </li>
            ))}
          </m.ul>
        </m.div>

        {/* Visual */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const { t } = useI18n();

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto aspect-square w-full max-w-[440px]"
    >
      {/* rotating conic halo */}
      <div className="absolute inset-6 animate-[spin_28s_linear_infinite] rounded-[2.5rem] bg-[conic-gradient(from_0deg,rgba(0,168,150,0.5),rgba(244,168,53,0.35),rgba(13,79,108,0.2),rgba(0,168,150,0.5))] opacity-60 blur-2xl" />

      {/* glass panel */}
      <div className="gradient-ring absolute inset-0 rounded-[2.25rem] glass-strong shadow-card">
        <div className="grid h-full grid-cols-2 gap-4 p-6 sm:p-8">
          {categories.map((c, i) => (
            <m.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-navy-800/50 p-4"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.gradient} text-white shadow-lg animate-float`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <Icon name={c.icon} className="h-7 w-7" strokeWidth={2} />
              </span>
              <span className="text-center text-xs font-semibold text-mist">
                {t(ui.chips[c.id] ?? c.name)}
              </span>
            </m.div>
          ))}
        </div>
      </div>

      {/* floating badges */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -left-4 top-10 flex items-center gap-2 rounded-full glass px-3.5 py-2 shadow-card animate-float-slow"
      >
        <BadgeCheck className="h-4 w-4 text-teal-light" />
        <span className="text-xs font-semibold text-white">{t(ui.hero.sniCertified)}</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute -right-3 bottom-12 flex items-center gap-2 rounded-full glass px-3.5 py-2 shadow-card animate-float-slow [animation-delay:-3s]"
      >
        <Star className="h-4 w-4 fill-gold text-gold" />
        <span className="text-xs font-semibold text-white">{t(ui.hero.happyCustomers)}</span>
      </m.div>
    </m.div>
  );
}
