import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { ContactMap } from "@/components/site/ContactMap";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Classic Dry Cleaners - Premium Dry Cleaning in Bagalur, Bengaluru" },
      {
        name: "description",
        content:
          "Bengaluru's premium dry cleaning and laundry service. Free pickup and delivery in Bagalur, Kattigenahalli, Yelahanka. 4.9 star rated. Saree, suit, curtain and express laundry experts.",
      },
      { property: "og:title", content: "Classic Dry Cleaners - Premium Garment Care in Bengaluru" },
      {
        property: "og:description",
        content:
          "Luxury dry cleaning, steam finishing and free doorstep pickup across north Bengaluru.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <BeforeAfter />
      <Reviews />
      <FAQ />
      <ContactMap />
      <CTA />
    </SiteLayout>
  );
}
