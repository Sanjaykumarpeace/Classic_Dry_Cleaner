import { Reveal } from "./Reveal";
import { Star } from "lucide-react";
import { site } from "./config";

const reviews = [
  {
    name: "Priya Sharma",
    area: "Yelahanka",
    rating: 5,
    text: "My silk saree came back looking brand new. The packaging itself feels premium and carefully done.",
  },
  {
    name: "Arjun Reddy",
    area: "Bagalur",
    rating: 5,
    text: "The only place I trust with my suits. Stitching, lining, buttons - everything is handled with care.",
  },
  {
    name: "Meera Iyer",
    area: "Kattigenahalli",
    rating: 5,
    text: "Free pickup is a game changer. Quick turnaround and zero compromise on quality. Highly recommended.",
  },
  {
    name: "Rohit Nair",
    area: "Sathanur",
    rating: 5,
    text: "Removed a stubborn wine stain from my white shirt that two other dry cleaners had given up on.",
  },
  {
    name: "Ananya Gupta",
    area: "Yelahanka New Town",
    rating: 5,
    text: "Their steam finishing is unreal. Crisp shirts every single time. Worth every rupee.",
  },
  {
    name: "Karthik M.",
    area: "Bagalur Cross",
    rating: 5,
    text: "Professional, on-time, and genuinely careful with the clothes. Best dry cleaner in north Bengaluru.",
  },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Loved across north Bengaluru
              </span>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
                {site.reviewsCount}+ five-star <span className="italic text-primary">reviews</span>.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft">
              <div className="font-display text-4xl font-medium">{site.rating}</div>
              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">on Google</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-charcoal font-display text-sm font-medium text-primary-foreground">
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.area}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
