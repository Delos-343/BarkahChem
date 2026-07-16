import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Pill } from "@/components/atoms/Pill";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
}

/** Eyebrow + title + subtitle block, reused at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Pill className={eyebrowClassName}> { eyebrow } </Pill>}
      <h2 className={cn("max-w-full text-3xl font-extrabold leading-[1.5] text-white sm:text-4xl md:text-[2.75rem] my-6", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-full text-base leading-relaxed text-mist/80",
            align === "center" && "mx-auto text-center",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
