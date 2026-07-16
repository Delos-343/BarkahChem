"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { GradientText } from "@/components/atoms/GradientText";
import { Icon } from "@/components/atoms/Icon";
import { Pill } from "@/components/atoms/Pill";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { m } from "framer-motion";
import { fadeUp } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";
import { f1448 } from "@/lib/f1448";
import { ui } from "@/lib/ui";

/** Featured campaign product: the F-1448 fuel additive series. */
export function F1448Spotlight() {
  const { t } = useI18n();

  const flyers = [
    { href: f1448.flyers.en, label: t(ui.f1448.flyerEn) },
    { href: f1448.flyers.id, label: t(ui.f1448.flyerId) },
  ];

  return (
    <section id="f1448" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(226,112,58,0.16),transparent_70%)]"
      />
      <Container>
        <div className="gradient-ring relative overflow-hidden rounded-3xl glass-strong p-5 shadow-card sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            {/* Copy */}
            <div>
              <Reveal className="flex w-full justify-center lg:justify-start">
                <Pill>{t(ui.f1448.eyebrow)}</Pill>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-4 text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-left lg:text-4xl xl:text-[2.6rem]">
                  {t(ui.f1448.titleLead)}{" "}
                  <GradientText className="from-[#F4A835] via-[#E2703A] to-[#F4A835]">
                    {t(ui.f1448.titleAccent)}
                  </GradientText>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-mist/80 sm:text-base lg:mx-0 lg:text-left">
                  {t(ui.f1448.subtitle)}
                </p>
              </Reveal>

              {/* Price, then full-width variant pills */}
              <Reveal delay={0.15}>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-full rounded-2xl border border-[#E2703A]/30 bg-[#E2703A]/10 px-5 py-3 text-center sm:w-auto sm:text-left">
                      <div className="text-2xl font-extrabold text-white">{f1448.price}</div>
                      <div className="text-xs text-mist/60">{t(ui.f1448.priceNote)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {f1448.variants.map((v) => (
                      <span
                        key={v.id}
                        className="w-full rounded-xl border px-3 py-2.5 text-center text-xs"
                        style={{ borderColor: `${v.accent}55`, background: `${v.accent}14` }}
                      >
                        <span className="font-bold text-white">{v.code}</span>
                        <span className="ml-1.5 text-mist/70">
                          {t(v.name)} · {t(v.tagline)}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Benefits */}
              <StaggerGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {f1448.benefits.map((b) => (
                  <m.div
                    key={b.title.en}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 sm:block"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#E2703A]/20 text-[#F4A835]">
                      <Icon name={b.icon} className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 sm:mt-3">
                      <h3 className="text-sm font-bold text-white">{t(b.title)}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-mist/65">{t(b.desc)}</p>
                    </div>
                  </m.div>
                ))}
              </StaggerGroup>

              {/* Works with - full-width pills */}
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-2">
                  <span className="block text-center text-xs font-semibold uppercase tracking-wider text-mist/50 lg:text-left">
                    {t(ui.f1448.compatTitle)}
                  </span>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {f1448.compatibility.map((c) => (
                      <span
                        key={c.en}
                        className="w-full rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-xs text-mist"
                      >
                        ✓ {t(c)}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Flyer downloads - full-width */}
              <Reveal delay={0.15}>
                <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {flyers.map((flyer) => (
                    <a
                      key={flyer.href}
                      href={flyer.href}
                      download
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-mist transition-colors hover:border-white/25 hover:text-white"
                    >
                      <Download className="h-4 w-4 shrink-0 text-teal-light" />
                      {flyer.label}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Product photo - leads on mobile, sits right on desktop */}
            <Reveal className="relative order-first lg:order-none lg:justify-self-end">
              <div className="relative mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10 shadow-card sm:max-w-[300px] lg:max-w-[340px] lg:rounded-[1.75rem]">
                <Image
                  src={f1448.image}
                  alt={`${f1448.code} ${f1448.series} - ${f1448.variants.map((v) => v.code).join(" & ")}`}
                  width={741}
                  height={846}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-4 pt-10">
                  <div className="text-center">
                    <div className="text-base font-extrabold tracking-tight text-[#F4A835] sm:text-lg">
                      {f1448.code} <span className="text-white/90">{f1448.series}</span>
                    </div>
                    <div className="text-xs text-mist/70">
                      {f1448.volume} · {t(ui.f1448.stockNote)}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
