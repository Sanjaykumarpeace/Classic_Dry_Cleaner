import { Reveal } from "./Reveal";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "./config";

export function ContactMap() {
  return (
    <section id="contact" className="relative bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Visit our store
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
              Right on <span className="italic text-primary">Bagalur Main Road</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Address
                  </div>
                  <div className="mt-1 leading-relaxed">{site.address}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Call
                  </div>
                  <a href={site.phoneHref} className="mt-1 block text-lg font-medium">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Hours
                  </div>
                  <div className="mt-1">{site.hours}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" /> Book a Free Pickup
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition hover:bg-secondary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Classic Dry Cleaners location"
                src={site.mapsEmbed}
                className="h-[360px] w-full sm:h-[440px] lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
