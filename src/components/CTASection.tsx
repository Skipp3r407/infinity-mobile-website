"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionGlow } from "@/components/effects";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { FileText, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow position="bottom-right" color="mixed" />
      <div className="absolute inset-0 bg-gradient-to-br from-orange/15 via-bg to-purple/15" />
      <div className="absolute inset-0 shimmer-line opacity-10" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Call Infinity Mobile today or request a quote online. Professional mobile service across
            Citrus County, Florida.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href={`tel:${site.phoneTel}`}
              className="focus-ring inline-flex items-center gap-3 text-2xl font-bold text-white transition hover:text-orange sm:text-3xl"
            >
              <Phone className="h-8 w-8 text-orange" aria-hidden />
              {site.phone}
            </a>

            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
              <MapPin className="h-4 w-4 text-purple" aria-hidden />
              {site.location}
            </div>

            <Link href="#quote">
              <Button size="lg" className="gap-2">
                <FileText className="h-5 w-5" aria-hidden />
                Request a Quote
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
