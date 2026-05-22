import { motion } from "motion/react";
import { ArrowRight, MapPin, Phone, Sparkles, Star } from "lucide-react";
import storefront from "@/assets/img1.jpeg";
import { site } from "./config";
import { BrandLogo } from "./BrandLogo";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-luxury text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={storefront}
          alt="Classic Dry Cleaner storefront in Bengaluru"
          className="h-full w-full object-cover opacity-65"
          width={872}
          height={402}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/72 to-navy-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/35 via-transparent to-navy-deep" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
      </div>

      <div className="mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-4 pt-32 pb-20 md:pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 w-fit rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
        >
          <BrandLogo light />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Trusted in Bagalur, Kattigenahalli & Yelahanka
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.04] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The art of <span className="italic text-gradient-gold">spotless</span>
          <br />
          garment care.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg md:text-xl"
        >
          Luxury dry cleaning, expert steam finishing, and trusted fabric treatment. Free doorstep
          pickup & delivery across north Bengaluru.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Book a Free Pickup
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" /> Visit Store
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex flex-col gap-4 text-sm text-white/72 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span>
              <span className="font-semibold text-white">{site.rating}</span> | {site.reviewsCount}+
              Google reviews
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/15 sm:block" />
          <div>
            <span className="font-semibold text-white">{site.yearsTrusted}+ years</span> of trusted
            service
          </div>
          <div className="hidden h-4 w-px bg-white/15 sm:block" />
          <div>
            Free pickup within <span className="font-semibold text-white">8 km</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
