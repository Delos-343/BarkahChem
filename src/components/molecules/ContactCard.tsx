"use client";

import { m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { memo } from "react";
import type { IconKey } from "@/components/atoms/Icon";
import { Icon } from "@/components/atoms/Icon";
import { fadeUp } from "@/components/motion/variants";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: IconKey;
  label: string;
  value: string;
  href: string;
  accent?: "wa" | "teal";
  external?: boolean;
}

/** Tappable contact channel (WhatsApp / email). */
export const ContactCard = memo(function ContactCard({
  icon,
  label,
  value,
  href,
  accent = "teal",
  external,
}: ContactCardProps) {
  return (
    <m.a
      href={href}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <span
        className={cn(
          "grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110",
          accent === "wa"
            ? "bg-gradient-to-br from-wa to-wa-dark shadow-[0_0_24px_-6px_rgba(37,211,102,0.8)]"
            : "bg-gradient-to-br from-teal to-teal-dark shadow-glow",
        )}
      >
        <Icon name={icon} className="h-6 w-6" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-mist/60">
          {label}
        </div>
        <div className="truncate font-semibold text-white">{value}</div>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-mist/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
    </m.a>
  );
});
