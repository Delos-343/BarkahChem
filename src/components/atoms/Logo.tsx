import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

/** Brand mark: a gradient flask tile beside the wordmark. */
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-teal-dark shadow-glow">
        <FlaskConical className="h-5 w-5 text-white" strokeWidth={2.2} />
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(244,168,53,0.7)]" />
      </span>
      {showText && (
        <span className="text-lg font-extrabold leading-none tracking-tight text-white font-display">
          Barkah<span className="text-teal-light">Chem</span>
        </span>
      )}
    </span>
  );
}
