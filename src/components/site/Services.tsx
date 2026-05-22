import { Reveal } from "./Reveal";
import { Bed, Crown, Heart, Scissors, Shirt, Sparkles, Truck, Wind, Zap } from "lucide-react";
import dryCleaningImg from "@/assets/img2.jpeg";
import sareeImg from "@/assets/img12.jpeg";
import steamImg from "@/assets/img7.jpeg";
import suitImg from "@/assets/img3.jpeg";
import alterationImg from "@/assets/img9.jpeg";
import blanketImg from "@/assets/img5.jpeg";
import expressImg from "@/assets/img11.jpeg";
import pickupImg from "@/assets/img1.jpeg";
import toyImg from "@/assets/img10.jpeg";

const services = [
  {
    icon: Shirt,
    title: "Premium Dry Cleaning",
    desc: "Fabric-safe cleaning for daily wear, occasion wear and delicate garments.",
    image: dryCleaningImg,
  },
  {
    icon: Crown,
    title: "Saree & Ethnic Care",
    desc: "Specialised care for silk, georgette, zari and embroidered sarees.",
    image: sareeImg,
  },
  {
    icon: Wind,
    title: "Steam Ironing",
    desc: "Crisp, wrinkle-free finishing with industrial steam press.",
    image: steamImg,
  },
  {
    icon: Sparkles,
    title: "Suit & Blazer",
    desc: "Hand-finished cleaning for formal and designer wear.",
    image: suitImg,
  },
  {
    icon: Scissors,
    title: "Alterations",
    desc: "Jeans, pants, jackets and everyday alteration support in-store.",
    image: alterationImg,
  },
  {
    icon: Bed,
    title: "Blanket & Curtain Cleaning",
    desc: "Deep cleaning for blankets, bedsheets, curtains, quilts and bulky home fabrics.",
    image: blanketImg,
  },
  {
    icon: Heart,
    title: "Soft Toy Cleaning",
    desc: "Gentle care for plush toys, kids' soft items and delicate stuffed pieces.",
    image: toyImg,
  },
  {
    icon: Zap,
    title: "Express Laundry",
    desc: "Same-day and next-day turnaround when you need it fast.",
    image: expressImg,
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    desc: "Free doorstep pickup and delivery across north Bengaluru.",
    image: pickupImg,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32">
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
              From everyday shirts to heirloom silks - every garment is inspected, treated, and
              finished by hand with the attention it deserves.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} at Classic Dry Cleaners`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={900}
                    height={560}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/45 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-navy-deep shadow-soft backdrop-blur">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-auto pt-6 text-xs font-semibold uppercase tracking-wider text-primary opacity-80">
                    Inquire - premium care
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
