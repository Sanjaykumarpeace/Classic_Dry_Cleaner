import { motion } from "motion/react";
import { ArrowRight, MapPin, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { site } from "./config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-luxury text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Premium dry cleaned suits and shirts on wooden hangers in a luxury boutique"
          className="h-full w-full object-cover opacity-55"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
      </div>

      {/* Ambient floating orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pt-32 pb-24 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Trusted in Bagalur, Kattigenahalli & Yelahanka
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The art of <span className="italic text-gradient-gold">spotless</span><br />
          garment care.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          Luxury dry cleaning, expert steam finishing, and trusted fabric treatment.
          Free doorstep pickup & delivery across north Bengaluru.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Book a Free Pickup
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" /> Visit Store
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span><span className="font-semibold text-white">{site.rating}</span> · {site.reviewsCount}+ Google reviews</span>
          </div>
          <div className="h-4 w-px bg-white/15 hidden sm:block" />
          <div><span className="font-semibold text-white">{site.yearsTrusted}+ years</span> of trusted service</div>
          <div className="h-4 w-px bg-white/15 hidden sm:block" />
          <div>Free pickup within <span className="font-semibold text-white">8 km</span></div>
        </motion.div>
      </div>
    </section>
  );
}
