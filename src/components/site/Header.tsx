import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "./config";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 12);
      setHidden(currentY > 160 && currentY > lastY && !open);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4 md:py-5",
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 md:px-5",
            scrolled
              ? "border-white/15 bg-navy-deep/85 shadow-elegant backdrop-blur-xl"
              : "border-white/10 bg-navy-deep/20 backdrop-blur-sm",
          )}
        >
          <BrandLogo light compact />

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-white bg-white/10" }}
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
              <span>{site.phoneDisplay}</span>
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
            className="rounded-full p-2.5 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl glass-dark p-5 shadow-elegant md:hidden animate-in fade-in slide-in-from-top-2">
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
                Call {site.phoneDisplay}
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
