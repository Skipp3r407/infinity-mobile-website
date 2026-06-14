"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionGlow } from "@/components/effects";
import { whyChooseItems } from "@/lib/services";
import { cn } from "@/lib/cn";
import {
  BadgeCheck,
  Car,
  MapPin,
  Search,
  Truck,
} from "lucide-react";

const icons = [Truck, Search, Car, MapPin, BadgeCheck];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="relative overflow-hidden border-t border-white/10 bg-bg-elevated/50 py-20 sm:py-28">
      <SectionGlow position="center" color="mixed" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">Why Choose Us</p>
          <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Built on <span className="text-gradient-accent">Trust</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Infinity Mobile is more than a mobile mechanic — it is a full-service partner for your
            vehicle and your property, delivered with professionalism and integrity.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <article
                  className={cn(
                    "group hover-lift border-beam h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-orange/30 hover:bg-white/[0.04]",
                    i === 4 && "sm:col-span-2 lg:col-span-1",
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange/15 to-purple/15 transition group-hover:from-orange/25 group-hover:to-purple/25">
                    <Icon className="h-5 w-5 text-orange" aria-hidden />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
