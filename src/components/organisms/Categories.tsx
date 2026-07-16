"use client";

import { Container } from "@/components/atoms/Container";
import { GradientText } from "@/components/atoms/GradientText";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { useI18n } from "@/components/providers/LanguageProvider";
import { ui } from "@/lib/ui";
import { categories } from "@/lib/products";

export function Categories() {
  const { t } = useI18n();

  return (
    <section id="categories" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t(ui.categories.eyebrow)}
          title={
            <>
              {t(ui.categories.titleLead)}{" "}
              <GradientText> {t(ui.categories.titleAccent)} </GradientText>
            </>
          }
          subtitle={t(ui.categories.subtitle)}
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
