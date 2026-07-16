"use client";

import { AnimatePresence, m } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";
import { LanguageToggle } from "@/components/molecules/LanguageToggle";
import { NavLink } from "@/components/molecules/NavLink";
import { useI18n } from "@/components/providers/LanguageProvider";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { cn, whatsappLink } from "@/lib/utils";

export function Navbar() {
  const { t } = useI18n();
  const waHref = whatsappLink(site.contact.whatsapp, t(ui.wa.order));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-navy-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" aria-label={site.name} className="shrink-0">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {t(item.label)}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button href={waHref} variant="whatsapp" size="sm" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            {t(ui.common.orderNow)}
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg glass text-white"
        >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-900/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {site.nav.map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-mist hover:bg-white/5 hover:text-white"
                >
                  {t(item.label)}
                </m.a>
              ))}
              <Button
                href={waHref}
                variant="whatsapp"
                size="md"
                fullWidth
                className="mt-3"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                {t(ui.common.orderNow)}
              </Button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
