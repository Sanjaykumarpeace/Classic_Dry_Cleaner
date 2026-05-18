import { Reveal } from "./Reveal";

const items = [
  { title: "Wine stain — silk blouse", before: "Deep red set-in stain", after: "Completely lifted" },
  { title: "Yellowed wedding sherwani", before: "Aged ivory tone", after: "Restored bright white" },
  { title: "Office blazer", before: "Wrinkled & dull", after: "Pressed & finished" },
];

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-luxury py-24 text-white md:py-32">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Restoration in action
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
              Before & after, told <span className="italic text-gradient-gold">honestly</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              Real garments. Real transformations. No filters, no shortcuts — just careful,
              fabric-specific treatment.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="overflow-hidden rounded-3xl border border-white/10 glass-dark p-2 shadow-elegant">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-navy-deep">
                    <div className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">Before</div>
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/70">{it.before}</div>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-soft/30 to-primary">
                    <div className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-deep">After</div>
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white">{it.after}</div>
                  </div>
                </div>
                <div className="px-3 pb-3 pt-4">
                  <div className="font-display text-lg">{it.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
