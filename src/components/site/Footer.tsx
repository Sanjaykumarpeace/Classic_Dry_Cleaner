import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { site } from "./config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-luxury text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-glow)" }} />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient">
                <span className="font-display text-xl font-semibold text-navy-deep">C</span>
              </span>
              <div>
                <div className="font-display text-lg font-semibold">Classic</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">Dry Cleaners</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Luxury garment care, spotless finishing, and trusted fabric treatment — proudly serving Bagalur, Kattigenahalli & Yelahanka.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>Premium Dry Cleaning</li>
              <li>Steam Ironing</li>
              <li>Saree & Suit Care</li>
              <li>Curtains & Blankets</li>
              <li>Pickup & Delivery</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Visit / Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <span>{site.address}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href={site.phoneHref}>{site.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <span>{site.hours}</span></li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href="#" className="rounded-full border border-white/15 p-2 hover:bg-white/5"><Instagram className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="rounded-full border border-white/15 p-2 hover:bg-white/5"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Classic Dry Cleaners. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="hover:text-white">Directions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
