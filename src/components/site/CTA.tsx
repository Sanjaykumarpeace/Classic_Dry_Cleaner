import { Reveal } from "./Reveal";
import { site } from "./config";
import { ArrowRight, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-luxury p-8 text-white shadow-elegant noise sm:p-10 md:p-16">
            <div
              className="absolute inset-0 opacity-40"
              style={{ background: "var(--gradient-radial-glow)" }}
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <BrandLogo light className="mb-7" />
                <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                  Ready for couture-grade <span className="italic text-gradient-gold">care</span>?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                  WhatsApp us now. We can pick up your garments today and return them spotless.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  Schedule Pickup
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
