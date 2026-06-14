import type { ReactNode } from "react";
import { LightStreaks } from "@/components/effects";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-bg-elevated py-16 sm:py-20">
      <LightStreaks />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_55%),radial-gradient(ellipse_at_80%_100%,rgba(168,85,247,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">{eyebrow}</p>
        ) : null}
        <h1 className="font-display mt-3 max-w-3xl text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
