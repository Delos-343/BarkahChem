"use client";

import { AnimatePresence, m } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const waHref = whatsappLink(
  site.contact.whatsapp,
  `Hi ${site.name}, I'd like to place an order.`,
);

/** Persistent WhatsApp CTA that fades in once the user scrolls past the hero. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order Now"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
        >
          <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-navy-900/90 px-0 py-2 text-sm font-semibold text-white opacity-0 shadow-card backdrop-blur transition-all duration-300 group-hover:max-w-[180px] group-hover:px-4 group-hover:opacity-100 sm:block">
            Chat with us
          </span>
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.8)] transition-transform duration-300 group-hover:scale-110">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-wa/60" />
            <MessageCircle className="relative h-7 w-7" strokeWidth={2.2} />
          </span>
        </m.a>
      )}
    </AnimatePresence>
  );
}
