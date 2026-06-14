"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { LightStreaks } from "@/components/effects";
import { site } from "@/lib/site";
import { Phone, Zap } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden border-y border-orange/20 bg-gradient-to-r from-orange/10 via-bg-elevated to-purple/10">
      <LightStreaks />
      <div className="absolute inset-0 shimmer-line opacity-10" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-center gap-4 text-center sm:text-left">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange/20 sm:flex">
            <Zap className="h-7 w-7 text-orange" aria-hidden />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange">Quick Response</p>
            <h2 className="font-display mt-1 text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
              Need help fast? Call Infinity Mobile today.
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Mobile service across Citrus County — we come to you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <a
            href={`tel:${site.phoneTel}`}
            className="focus-ring btn-primary inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white"
          >
            <Phone className="h-5 w-5" aria-hidden />
            {site.phone}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
