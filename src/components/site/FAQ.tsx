"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Do you offer free pickup and delivery?",
    a: "Yes - free doorstep pickup and delivery within 8 km of our Bagalur store. Schedule via WhatsApp or call.",
  },
  {
    q: "How long does dry cleaning take?",
    a: "Standard turnaround is 48 hours. Express same-day and next-day service is available on request for an additional fee.",
  },
  {
    q: "Can you treat delicate sarees and bridal wear?",
    a: "Absolutely. Silk, georgette, embroidered, and bridal garments are handled separately with fabric-specific treatment and hand-finishing.",
  },
  {
    q: "Do you remove tough stains like ink, wine and oil?",
    a: "Yes. Stains are pre-treated during inspection. We have successfully treated wine, ink, oil, grease and curry stains on most fabrics.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Bagalur, Kattigenahalli, Yelahanka, Sathanur, Yelahanka New Town and surrounding north Bengaluru neighborhoods.",
  },
  {
    q: "How do I pay?",
    a: "Cash, UPI (GPay / PhonePe / Paytm), or card on delivery - whatever is easiest.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Questions, answered
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-6xl">
              Frequently asked.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-border bg-card transition-all",
                    isOpen && "shadow-soft",
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-display text-lg font-medium md:text-xl">{f.q}</span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-500",
                        isOpen && "rotate-45 text-primary",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-6 md:text-base">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
