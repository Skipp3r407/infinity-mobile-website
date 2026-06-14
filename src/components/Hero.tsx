"use client";

import { ParticlesBackground } from "@/components/ParticlesBackground";
import { LightStreaks } from "@/components/effects";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] overflow-hidden garage-texture">
      <ParticlesBackground />
      <LightStreaks />

      <div className="pointer-events-none absolute inset-0 smoke-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute -left-1/4 top-1/3 h-96 w-96 rounded-full bg-orange/10 blur-[120px] pulse-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-purple/10 blur-[100px] pulse-glow"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-1/2 h-px shimmer-line opacity-30" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-gradient-to-b from-orange/20 via-purple/10 to-transparent blur-3xl" />
          <Image
            src="/logo.png"
            alt="Infinity Mobile — Mobile Auto Repair & Handyman Services"
            width={480}
            height={320}
            className="relative h-auto w-56 object-contain sm:w-72 md:w-80 lg:w-96"
            priority
            sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
          />
        </motion.div>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-8 max-w-4xl text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="text-shimmer">{site.tagline}</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base font-medium uppercase tracking-[0.25em] text-zinc-400 sm:text-lg"
        >
          Serving {site.location}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a href={`tel:${site.phoneTel}`}>
            <Button size="lg" className="min-w-[200px] gap-2">
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </Button>
          </a>
          <Link href="#quote">
            <Button variant="outline" size="lg" className="min-w-[200px] gap-2">
              <FileText className="h-5 w-5" aria-hidden />
              Request Quote
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange/60" />
          {site.status}
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple/60" />
        </motion.div>
      </div>
    </section>
  );
}
