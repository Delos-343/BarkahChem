"use client";

import { Clock, MapPin } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { GradientText } from "@/components/atoms/GradientText";
import { ContactCard } from "@/components/molecules/ContactCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { useI18n } from "@/components/providers/LanguageProvider";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { whatsappLink } from "@/lib/utils";

export function Contact() {
  const { t } = useI18n();
  const waHref = whatsappLink(site.contact.whatsapp, t(ui.wa.order));

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t(ui.contact.eyebrow)}
              eyebrowClassName="self-center lg:self-start"
              titleClassName="w-full text-center lg:text-left"
              title={
                <>
                  {t(ui.contact.titleLead)}{" "}
                  <GradientText> {t(ui.contact.titleAccent)} </GradientText>
                </>
              }
              subtitle={t(ui.contact.subtitle)}
            />

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist">
                <MapPin className="h-4 w-4 text-teal-light" />
                {t(site.contact.serviceArea)}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist">
                <Clock className="h-4 w-4 text-teal-light" />
                {t(site.contact.hours)}
              </span>
            </div>
          </div>

          <StaggerGroup
            stagger={0.12}
            className="grid h-full grid-rows-2 gap-4 self-stretch"
          >
            <ContactCard
              icon="MessageCircle"
              label={t(ui.contact.labelWhatsApp)}
              value={site.contact.whatsapp}
              href={waHref}
              accent="wa"
              external
            />
            <ContactCard
              icon="Mail"
              label={t(ui.contact.labelEmail)}
              value={site.contact.email}
              href={`mailto:${site.contact.email}`}
              accent="teal"
            />
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
