import { Reveal } from "./Reveal";
import {
  Shirt, Wind, Crown, Footprints, Sparkles,
  Bed, Layers, Zap, Truck,
} from "lucide-react";

const services = [
  { icon: Shirt, title: "Premium Dry Cleaning", desc: "Solvent-based fabric-safe cleaning for delicate garments." },
  { icon: Wind, title: "Steam Ironing", desc: "Crisp, wrinkle-free finishing with industrial steam press." },
  { icon: Crown, title: "Saree Cleaning", desc: "Specialised care for silk, georgette & embroidered sarees." },
  { icon: Sparkles, title: "Suit & Blazer", desc: "Hand-finished cleaning for formal & designer wear." },
  { icon: Footprints, title: "Shoe Cleaning", desc: "Leather conditioning, sneaker restoration & polishing." },
  { icon: Layers, title: "Curtain Cleaning", desc: "Bulk curtain wash with dust removal & finishing." },
  { icon: Bed, title: "Blanket Cleaning", desc: "Deep wash for blankets, comforters & quilts." },
  { icon: Zap, title: "Express Laundry", desc: "Same-day & next-day turnaround when you need it fast." },
  { icon: Truck, title: "Pickup & Delivery", desc: "Free doorstep pickup & delivery across north Bengaluru." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/80">
              What we do
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
              Bespoke care for every fabric in your wardrobe.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              From everyday shirts to heirloom silks — every garment is inspected, treated, and
              finished by hand with the attention it deserves.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-charcoal text-primary-foreground shadow-soft">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Inquire <span aria-hidden>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
