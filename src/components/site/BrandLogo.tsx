import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ light = false, compact = false, className }: BrandLogoProps) {
  return (
    <Link to="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy-deep shadow-gold ring-1 transition-transform duration-300 group-hover:scale-105",
          compact ? "h-10 w-10" : "h-12 w-12",
          light ? "ring-white/25" : "ring-gold/30",
        )}
      >
        <img
          src="/logo3.png"
          alt="Classic Dry Cleaners logo"
          className="h-full w-full scale-[1.08] rounded-full object-cover"
          width={96}
          height={96}
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate font-display font-semibold tracking-wide",
            compact ? "text-base" : "text-lg",
            light ? "text-white" : "text-navy-deep",
          )}
        >
          Classic
        </span>
        <span
          className={cn(
            "block truncate text-[10px] uppercase tracking-[0.22em]",
            light ? "text-white/65" : "text-foreground/55",
          )}
        >
          Dry Cleaners
        </span>
      </span>
    </Link>
  );
}
