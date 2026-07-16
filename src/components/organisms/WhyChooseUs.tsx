"use client";

import { m } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { GradientText } from "@/components/atoms/GradientText";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { StatCounter } from "@/components/molecules/StatCounter";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { fadeUp } from "@/components/motion/variants";
import { useI18n } from "@/components/providers/LanguageProvider";
import { features, stats } from "@/lib/content";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { whatsappLink } from "@/lib/utils";

export function WhyChooseUs() {
  const { t } = useI18n();
  const waHref = whatsappLink(site.contact.whatsapp, t(ui.wa.quote));
  return (
    <section id="why" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t(ui.why.eyebrow)}
          title={
            <>
              {t(ui.why.titleLead)}{" "}
              <GradientText> {t(ui.why.titleAccent)} </GradientText>
            </>
          }
          subtitle={t(ui.why.subtitle)}
        />

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <m.div key={stat.label.en} variants={fadeUp}>
              <StatCounter stat={stat} />
            </m.div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title.en} feature={feature} />
          ))}
        </StaggerGroup>

        <Reveal className="mt-14">
          <div className="gradient-ring relative overflow-hidden rounded-3xl glass-strong px-6 py-10 text-center shadow-card sm:px-10">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(0,168,150,0.18),transparent_70%)]" />
            <h3 className="mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
              {t(ui.why.bannerTitle)}
            </h3>
            <p className="mx-auto my-6 max-w-full text-center text-mist/80">
              {t(ui.why.bannerSubtitle)}
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={waHref} variant="whatsapp" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t(ui.why.bannerCta)}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
