"use client";

import { ReviewCard } from "@/components/ReviewCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  reviewFilters,
  reviewStats,
  reviews,
  type ReviewCategory,
} from "@/lib/reviews";
import { site } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Phone, Star, Users } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type FilterId = "all" | ReviewCategory;

export function ReviewsPageContent() {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(
    () => (filter === "all" ? reviews : reviews.filter((r) => r.category === filter)),
    [filter],
  );

  return (
    <>
      <ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Star,
              label: "Average Rating",
              value: reviewStats.averageRating.toFixed(1),
              sub: `${reviewStats.fiveStarPercent}% five-star reviews`,
              accent: "text-orange",
            },
            {
              icon: Users,
              label: "Total Reviews",
              value: String(reviewStats.totalReviews),
              sub: "Citrus County customers",
              accent: "text-purple",
            },
            {
              icon: Phone,
              label: "Verified Local",
              value: site.status,
              sub: site.owner,
              accent: "text-orange-glow",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="metallic-border hover-lift border-beam rounded-2xl bg-bg-elevated p-5 sm:p-6"
            >
              <stat.icon className={cn("h-5 w-5", stat.accent)} aria-hidden />
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>
              <p className="font-display mt-1 text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-10">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter reviews">
          {reviewFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition",
                filter === f.id
                  ? "bg-gradient-to-r from-orange to-purple-deep text-white shadow-lg shadow-orange/20"
                  : "border border-white/10 text-zinc-400 hover:border-white/20 hover:text-white",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((review, i) => (
            <motion.div
              key={review.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ScrollReveal className="mt-16 rounded-2xl border border-orange/20 bg-gradient-to-br from-orange/10 via-bg-elevated to-purple/10 p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Ready to experience it yourself?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
          Join Citrus County customers who trust {site.name} for mobile auto repair and handyman
          service. Call Michael or request a quote today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`tel:${site.phoneTel}`}>
            <Button size="lg" className="gap-2">
              <Phone className="h-5 w-5" aria-hidden />
              {site.phone}
            </Button>
          </a>
          <Link href="/#quote">
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="h-5 w-5" aria-hidden />
              Request a Quote
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
