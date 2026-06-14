"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionGlow } from "@/components/effects";
import { trustItems } from "@/lib/services";
import { cn } from "@/lib/cn";
import {
  BadgeCheck,
  Car,
  Clock,
  MapPin,
  Wrench,
} from "lucide-react";

const icons = [BadgeCheck, Car, MapPin, Clock, Wrench];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-bg-elevated/80" aria-label="Trust indicators">
      <SectionGlow position="center" color="mixed" />
      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {trustItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.label} delay={i * 0.06}>
                <div
                  className={cn(
                    "group icon-pulse-hover flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-4 text-center transition hover-lift border-beam hover:border-orange/30 hover:bg-white/[0.04]",
                    i === 4 && "col-span-2 sm:col-span-1",
                  )}
                >
                  <Icon
                    data-icon
                    className="h-5 w-5 text-orange transition group-hover:text-purple group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                    aria-hidden
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300 sm:text-xs">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
