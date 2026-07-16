import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

/** Nav item with an animated teal underline that grows in on hover. */
export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group relative text-sm font-medium text-mist/90 transition-colors hover:text-white",
        className,
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-teal-light to-gold transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
