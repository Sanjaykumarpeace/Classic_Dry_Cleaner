import { Reveal } from "./Reveal";
import { site } from "./config";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-luxury p-10 text-white shadow-elegant md:p-16 noise">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                  Ready for couture-grade <span className="italic text-gradient-gold">care</span>?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                  WhatsApp us now — we'll pick up your garments today and return them spotless.
                </p>
              </div>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Schedule Pickup
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
