"use client";

import Image from "next/image";

export function ChatbotHeader({ onClose, onMinimize }: { onClose: () => void; onMinimize?: () => void }) {
  return (
    <div className="relative flex shrink-0 items-start justify-between gap-3 overflow-hidden border-b border-white/10 bg-bg-elevated px-4 py-3">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange via-purple to-orange opacity-80" />
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-orange/30">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-full w-full object-contain" />
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg-elevated bg-emerald-500" aria-hidden />
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Infinity Assistant
          </h2>
          <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-zinc-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            Online — Citrus County, FL
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        {onMinimize ? (
          <button
            type="button"
            onClick={onMinimize}
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/5 hover:text-white"
            aria-label="Minimize chat"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeWidth="2" strokeLinecap="round" d="M5 12h14" />
            </svg>
          </button>
        ) : null}
        <button
          type="button"
          onClick={onClose}
          className="focus-ring flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/5 hover:text-white"
          aria-label="Close chat"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
