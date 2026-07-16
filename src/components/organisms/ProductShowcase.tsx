"use client";

import { Container } from "@/components/atoms/Container";
import { GradientText } from "@/components/atoms/GradientText";
import { Icon } from "@/components/atoms/Icon";
import { ProductRow } from "@/components/molecules/ProductRow";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { useI18n } from "@/components/providers/LanguageProvider";
import type { Category } from "@/lib/products";
import { categories } from "@/lib/products";
import { ui } from "@/lib/ui";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const { t } = useI18n();

  return (
    <section id="products" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t(ui.showcase.eyebrow)}
          title={
            <>
              {t(ui.showcase.titleLead)}{" "}
              <GradientText> {t(ui.showcase.titleAccent)} </GradientText>
            </>
          }
          subtitle={t(ui.showcase.subtitle)}
        />
      </Container>

      <div className="mt-16 flex flex-col gap-20 lg:gap-28">
        {categories.map((category, i) => (
          <CategorySection key={category.id} category={category} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function CategorySection({ category, flip }: { category: Category; flip: boolean }) {
  const { t } = useI18n();
  return (
    <div id={category.slug} className="scroll-mt-24">
      <Container>
        {/* Artwork sits on the OUTER edge of its column so the gap is identical
            whether the section is flipped or not. */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal
            className={cn(
              "relative lg:justify-self-start",
              flip && "lg:order-2 lg:justify-self-end",
            )}
          >
            <Artwork category={category} />
          </Reveal>

          <div className={cn(flip && "lg:order-1")}>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}
                >
                  <Icon name={category.icon} className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {t(category.name)}
                </h3>
              </div>
            </Reveal>

            <StaggerGroup className="grid gap-3">
              {category.products.map((p) => (
                <ProductRow key={p.id} product={p} accent={category.accent} />
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Artwork({ category }: { category: Category }) {
  const { t } = useI18n();
  return (
    <div
      className={cn(
        "gradient-ring relative aspect-[4/5] max-h-[460px] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br shadow-card sm:aspect-[16/10] lg:aspect-[4/5] lg:w-[360px]",
        category.gradient,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_90%_100%,rgba(0,0,0,0.35),transparent_60%)]" />

      <div className="absolute inset-0 grid place-items-center">
        <Icon
          name={category.icon}
          className="h-28 w-28 text-white/90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] animate-float sm:h-32 sm:w-32"
          strokeWidth={1.4}
        />
      </div>

      {category.products.slice(0, 3).map((p, idx) => {
        const spots = ["left-6 top-6", "right-7 top-10", "bottom-8 left-10"];
        return (
          <span
            key={p.id}
            className={cn(
              "absolute grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur animate-float-slow",
              spots[idx],
            )}
            style={{ animationDelay: `${idx * 1.2}s` }}
          >
            <Icon name={p.icon} className="h-5 w-5" strokeWidth={2} />
          </span>
        );
      })}

      <div className="absolute inset-x-4 bottom-4">
        <div className="rounded-xl border border-white/15 bg-navy-900/40 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur">
          {t(category.heroLabel)}
        </div>
      </div>
    </div>
  );
}
