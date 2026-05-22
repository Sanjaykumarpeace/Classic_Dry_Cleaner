import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Reviews } from "@/components/site/Reviews";
import { CTA } from "@/components/site/CTA";
import { site } from "@/components/site/config";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Classic Dry Cleaners | Trusted Garment Care in Bengaluru" },
      {
        name: "description",
        content: `Over ${site.yearsTrusted} years of trusted dry cleaning and garment care in north Bengaluru. Family-run, detail-obsessed, and proudly local.`,
      },
      { property: "og:title", content: "About - Classic Dry Cleaners" },
      {
        property: "og:description",
        content: "A decade of trusted, detail-obsessed garment care in Bengaluru.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { v: `${site.yearsTrusted}+`, l: "Years of trust" },
  { v: "50,000+", l: "Garments cared for" },
  { v: `${site.rating} star`, l: "Average rating" },
  { v: "8 km", l: "Free pickup radius" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-luxury pt-36 pb-20 text-white md:pt-44 md:pb-32">
        <div className="mx-auto max-w-5xl px-4">
          <BrandLogo light className="mb-8" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Our story
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium leading-[1.06] sm:text-5xl md:text-7xl">
            A decade of <span className="italic text-gradient-gold">obsessive</span> garment care.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            Classic Dry Cleaners began with a simple belief - that the clothes you love deserve more
            than a transactional wash. They deserve attention, respect, and the kind of finish you
            would expect from a couture house.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            From our store on Bagalur Main Road, we have spent over a decade quietly building a
            reputation for one thing: garments that come back looking better than you remember.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
                  <div className="font-display text-4xl font-medium text-gradient-gold sm:text-5xl">
                    {s.v}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Reviews />
      <CTA />
    </SiteLayout>
  );
}
