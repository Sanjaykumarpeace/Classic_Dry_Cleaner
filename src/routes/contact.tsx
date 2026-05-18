import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ContactMap } from "@/components/site/ContactMap";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Classic Dry Cleaners | Bagalur, Bengaluru" },
      { name: "description", content: "Call, WhatsApp or visit Classic Dry Cleaners on Bagalur Main Road. Free pickup across Bagalur, Kattigenahalli, Yelahanka & Sathanur." },
      { property: "og:title", content: "Contact — Classic Dry Cleaners" },
      { property: "og:description", content: "Book a free pickup or visit our Bagalur store." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-luxury pt-36 pb-16 text-white md:pt-44 md:pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Get in touch</span>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.05] md:text-7xl">
            We're a <span className="italic text-gradient-gold">message</span> away.
          </h1>
        </div>
      </section>
      <ContactMap />
      <FAQ />
    </SiteLayout>
  );
}
