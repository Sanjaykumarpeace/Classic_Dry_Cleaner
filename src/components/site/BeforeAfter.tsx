import { Reveal } from "./Reveal";
import sareeImg from "@/assets/img8.jpeg";
import readyImg from "@/assets/img7.jpeg";
import interiorImg from "@/assets/img4.jpeg";

const items = [
  {
    title: "Silk saree revival",
    before: "Dull, creased and travel-worn",
    after: "Fresh drape with a premium finish",
    image: sareeImg,
  },
  {
    title: "Finished garment care",
    before: "Loose piles and mixed handling",
    after: "Sorted, folded and ready for pickup",
    image: readyImg,
  },
  {
    title: "Organized store workflow",
    before: "Daily garments moving through service",
    after: "Tagged, arranged and easy to track",
    image: interiorImg,
  },
];

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-luxury py-20 text-white md:py-32">
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
              Real craft is visible in the finish: cleaner fabric, sharper shape, and garments
              returned with care.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <figure className="group overflow-hidden rounded-3xl border border-white/10 glass-dark shadow-elegant">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={it.image}
                    alt={`${it.title} by Classic Dry Cleaners`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={720}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                  <div className="absolute left-4 right-4 top-4 flex justify-between gap-2 text-[10px] font-semibold uppercase tracking-wider">
                    <span className="rounded-full bg-white/12 px-3 py-1 text-white/85 backdrop-blur">
                      Before
                    </span>
                    <span className="rounded-full bg-gold px-3 py-1 text-navy-deep">After</span>
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl">{it.title}</h3>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs leading-relaxed text-white/75">
                      <p>{it.before}</p>
                      <p className="text-white">{it.after}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
