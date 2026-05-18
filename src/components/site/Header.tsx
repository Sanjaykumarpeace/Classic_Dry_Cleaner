import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "./config";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 transition-all duration-500 md:px-6",
            scrolled ? "glass-dark shadow-elegant" : "bg-transparent",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient shadow-gold">
              <span className="font-display text-lg font-semibold text-navy-deep">C</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold tracking-wide text-white">
                Classic
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                Dry Cleaners
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-white" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>{site.phone}</span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Book Pickup
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl glass-dark p-5 md:hidden animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-medium text-white"
              >
                Call {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener"
                className="rounded-xl bg-gold-gradient px-4 py-3 text-center text-sm font-semibold text-navy-deep"
              >
                WhatsApp Pickup
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
