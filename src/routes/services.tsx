import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { BrandLogo } from "@/components/site/BrandLogo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Premium Dry Cleaning, Laundry & Garment Care | Classic Dry Cleaners" },
      {
        name: "description",
        content:
          "Explore our premium dry cleaning, steam ironing, saree, suit, shoe, curtain, blanket and express laundry services with free pickup across Bengaluru.",
      },
      { property: "og:title", content: "Services - Classic Dry Cleaners" },
      { property: "og:description", content: "Bespoke care for every fabric in your wardrobe." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <div className="bg-luxury pt-36 pb-16 text-white md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <BrandLogo light className="mb-8" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Our craft
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.06] sm:text-5xl md:text-7xl">
            Premium services, <span className="italic text-gradient-gold">end to end</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            From everyday office shirts to delicate bridal wear - we have a fabric-specific process
            for every garment that comes through our doors.
          </p>
        </div>
      </div>
      <Services />
      <Process />
      <CTA />
    </SiteLayout>
  );
}
