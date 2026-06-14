"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionGlow } from "@/components/effects";
import { Dialog } from "@/components/ui/Dialog";
import { cn } from "@/lib/cn";
import {
  serviceCategories,
  services,
  type Service,
  type ServiceCategory,
} from "@/lib/services";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

type FilterId = "all" | ServiceCategory;

export function ServicesSection() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [selected, setSelected] = useState<Service | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? services : services.filter((s) => s.category === filter)),
    [filter],
  );

  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow position="top-right" color="purple" />
      <SectionGlow position="bottom-left" color="orange" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center" scale>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">What We Do</p>
          <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Professional <span className="text-gradient-accent">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            From precision auto repair to handyman projects and exterior cleaning — Infinity Mobile
            brings expert service directly to you across Citrus County.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filter services"
          >
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition",
                  filter === cat.id
                    ? "bg-gradient-to-r from-orange to-purple-deep text-white shadow-lg shadow-orange/20"
                    : "border border-white/10 text-zinc-400 hover:border-white/20 hover:text-white",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  type="button"
                  onClick={() => setSelected(service)}
                  className="focus-ring group metallic-border hover-lift border-beam rounded-2xl bg-bg-elevated p-6 text-left transition hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange/20 to-purple/20 transition group-hover:from-orange/30 group-hover:to-purple/30">
                      <Icon className="h-6 w-6 text-orange transition group-hover:text-purple" />
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-orange" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold uppercase tracking-wide text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange opacity-0 transition group-hover:opacity-100">
                    View details <ArrowRight className="h-3 w-3" />
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
      >
        {selected ? (
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange/20">
                <selected.icon className="h-5 w-5 text-orange" />
              </div>
              <p className="text-sm text-zinc-400">{selected.shortDescription}</p>
            </div>
            <ul className="mt-5 space-y-3">
              {selected.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-orange to-purple" />
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              onClick={() => setSelected(null)}
              className="focus-ring btn-primary mt-6 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-bold text-white"
            >
              Request a Quote
            </a>
          </div>
        ) : null}
      </Dialog>
    </section>
  );
}
