import { Reveal } from "./Reveal";
import processImg from "@/assets/img11.jpeg";

const steps = [
  {
    n: "01",
    title: "Doorstep Pickup",
    desc: "Schedule via WhatsApp. We arrive on time, every time.",
  },
  {
    n: "02",
    title: "Garment Inspection",
    desc: "Each item is tagged, photographed and assessed for fabric and stains.",
  },
  {
    n: "03",
    title: "Fabric-Safe Cleaning",
    desc: "Solvent or wet-cleaning chosen per garment type - never one-size-fits-all.",
  },
  {
    n: "04",
    title: "Hand Steam Finishing",
    desc: "Industrial steam press for a crisp, showroom-ready finish.",
  },
  {
    n: "05",
    title: "Luxury Packaging",
    desc: "Wrapped in breathable garment covers, ready to wear.",
  },
  {
    n: "06",
    title: "On-Time Delivery",
    desc: "Delivered to your door - typically within 48 hours.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                The Classic process
              </span>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
                Six steps. <span className="italic text-primary">Zero compromise.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                A meticulous workflow refined over a decade - engineered to treat your clothes like
                they belong in a couture atelier.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={processImg}
                  alt="Classic Dry Cleaner store workflow and garment racks"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  width={397}
                  height={705}
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="group flex gap-5 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:shadow-soft sm:gap-6 sm:p-7">
                  <div className="shrink-0 font-display text-3xl font-medium text-gradient-gold md:text-4xl">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
