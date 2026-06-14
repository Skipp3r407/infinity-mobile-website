import { cn } from "@/lib/cn";
import type { Review } from "@/lib/reviews";
import { Quote, Star } from "lucide-react";

const categoryColors = {
  auto: "border-orange/30 bg-orange/10 text-orange-glow",
  handyman: "border-purple/30 bg-purple/10 text-purple",
  exterior: "border-silver/20 bg-white/5 text-silver",
};

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl metallic-border bg-bg-elevated p-6 transition hover-lift border-beam hover:shadow-[0_0_40px_rgba(249,115,22,0.08)]">
      <Quote className="absolute right-4 top-4 h-8 w-8 text-orange/10 transition group-hover:text-orange/20" aria-hidden />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < review.rating ? "fill-orange text-orange" : "fill-zinc-800 text-zinc-700",
              )}
              aria-hidden
            />
          ))}
        </div>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
            categoryColors[review.category],
          )}
        >
          {review.service}
        </span>
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
        <div>
          <p className="text-sm font-bold text-white">{review.author}</p>
          <p className="mt-0.5 text-xs text-zinc-500">
            {review.city}, FL · {review.relativeTime}
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange/20 to-purple/20 text-xs font-bold text-orange">
          {review.author.charAt(0)}
        </div>
      </figcaption>
    </figure>
  );
}
