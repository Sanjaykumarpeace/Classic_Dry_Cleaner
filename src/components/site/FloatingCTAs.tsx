import { MessageCircle, Phone } from "lucide-react";
import { site } from "./config";

export function FloatingCTAs() {
  return (
    <>
      <a
        href={site.phoneHref}
        aria-label="Call Classic Dry Cleaners"
        className="group fixed bottom-40 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-gold ring-1 ring-white/20 transition-transform hover:scale-110 md:bottom-24"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-gold opacity-20" />
        <Phone className="relative h-6 w-6" />
      </a>

      {/* Floating WhatsApp (always) */}
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp us"
        className="group fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110 md:bottom-8"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <MessageCircle className="relative h-6 w-6" />
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <div className="flex items-stretch gap-2 rounded-2xl glass-dark p-2 shadow-elegant">
          <a
            href={site.phoneHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-gradient px-4 py-3 text-sm font-semibold text-navy-deep"
          >
            <MessageCircle className="h-4 w-4" /> Book Pickup
          </a>
        </div>
      </div>
    </>
  );
}
