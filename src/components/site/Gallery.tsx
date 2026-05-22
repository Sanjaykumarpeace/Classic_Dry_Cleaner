import { Reveal } from "./Reveal";
import storefrontImg from "@/assets/img1.jpeg";
import rackImg from "@/assets/img2.jpeg";
import sareeWallImg from "@/assets/img12.jpeg";
import verticalRackImg from "@/assets/img8.jpeg";
import counterImg from "@/assets/img5.jpeg";
import toysImg from "@/assets/img6.jpeg";

const gallery = [
  {
    src: storefrontImg,
    title: "Storefront",
    className: "sm:col-span-2",
    width: 872,
    height: 402,
  },
  {
    src: rackImg,
    title: "Clean garment racks",
    className: "sm:col-span-2 lg:col-span-1",
    width: 872,
    height: 402,
  },
  {
    src: sareeWallImg,
    title: "Saree collection care",
    className: "sm:col-span-2",
    width: 872,
    height: 402,
  },
  {
    src: verticalRackImg,
    title: "Ethnic wear handling",
    className: "",
    width: 433,
    height: 939,
  },
  {
    src: counterImg,
    title: "Packed garments",
    className: "",
    width: 397,
    height: 705,
  },
  {
    src: toysImg,
    title: "Soft toy care",
    className: "",
    width: 423,
    height: 939,
  },
];

export function Gallery() {
  return (
    <section className="relative bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Real store photos
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
              A closer look at <span className="italic text-primary">Classic</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Local proof matters. These are real views from the store, the garment racks, and the
              daily care process.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[240px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04} className={item.className}>
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img
                  src={item.src}
                  alt={`${item.title} at Classic Dry Cleaners`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
