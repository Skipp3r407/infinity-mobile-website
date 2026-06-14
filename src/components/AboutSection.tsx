"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionGlow } from "@/components/effects";
import { site } from "@/lib/site";
import { BadgeCheck, MapPin, Truck } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow position="top-left" color="orange" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange/20 to-purple/20 blur-2xl" />
              <div className="relative metallic-border hover-lift overflow-hidden rounded-2xl bg-bg-elevated p-8 sm:p-12">
                <Image
                  src="/logo.png"
                  alt="Infinity Mobile"
                  width={400}
                  height={260}
                  className="mx-auto h-auto w-full max-w-xs object-contain"
                />
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                  {[
                    { icon: Truck, label: "Mobile Service" },
                    { icon: BadgeCheck, label: site.status },
                    { icon: MapPin, label: "Citrus County" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="text-center">
                      <Icon className="mx-auto h-5 w-5 text-orange" aria-hidden />
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-purple">About Us</p>
            <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Meet <span className="text-gradient-accent">{site.owner}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {site.owner} is the owner and operator of Infinity Mobile — a mobile mechanic and
              handyman serving Citrus County, Florida. With a commitment to professional,
              reliable service, Michael brings the expertise of a full-service garage directly to
              your driveway, workplace, or job site.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Whether you need brake work, engine diagnostics, a handyman repair, or exterior
              pressure washing, Infinity Mobile delivers honest assessments and quality workmanship.
              As an {site.status.toLowerCase()} business, you get the accountability and peace of
              mind you deserve.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Convenient on-site service means no tow trucks, no waiting rooms, and no wasted time.
              Just call, schedule, and we come to you.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
