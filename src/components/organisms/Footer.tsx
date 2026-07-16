"use client";

import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { useI18n } from "@/components/providers/LanguageProvider";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const waHref = whatsappLink(site.contact.whatsapp);

  return (
    <footer className="relative border-t border-white/10 bg-navy-950/70">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/70">
              {t(site.description)}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t(ui.footer.products)}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.slug}`}
                    className="text-sm text-mist/70 transition-colors hover:text-teal-light"
                  >
                    {t(c.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t(ui.footer.company)}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-mist/70 transition-colors hover:text-teal-light"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t(ui.footer.getInTouch)}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-mist/70">
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-teal-light"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-wa" />
                  {site.contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-teal-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-teal-light" />
                  {site.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-teal-light" />
                {t(site.contact.hours)}
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-teal-light" />
                {t(site.contact.serviceArea)}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-mist/50 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name} &nbsp; | &nbsp; {t(ui.footer.rights)}
          </p>
          <p>{t(ui.footer.tagline)}</p>
        </div>
      </Container>
    </footer>
  );
}
