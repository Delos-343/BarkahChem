"use client";

import { Container } from "@/components/atoms/Container";
import { GradientText } from "@/components/atoms/GradientText";
import { StepCard } from "@/components/molecules/StepCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { useI18n } from "@/components/providers/LanguageProvider";
import { ui } from "@/lib/ui";
import { steps } from "@/lib/content";

export function HowToOrder() {
  const { t } = useI18n();

  return (
    <section id="order" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-navy-900/40" />
      <Container>
        <SectionHeading
          eyebrow={t(ui.order.eyebrow)}
          title={
            <>
              {t(ui.order.titleLead)}{" "}
              <GradientText> {t(ui.order.titleAccent)} </GradientText>
            </>
          }
          subtitle={t(ui.order.subtitle)}
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent lg:block" />

          <StaggerGroup
            stagger={0.14}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => (
              <StepCard key={step.n} step={step} />
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
