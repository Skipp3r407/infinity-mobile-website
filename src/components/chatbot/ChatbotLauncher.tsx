"use client";

import { cn } from "@/lib/cn";
import { MessageCircle } from "lucide-react";

export function ChatbotLauncher({
  open,
  onClick,
  className,
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-end gap-1.5", className)}>
      {!open ? (
        <span className="hidden rounded-full border border-white/10 bg-bg-elevated/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 shadow-lg backdrop-blur-sm sm:block">
          Ask Infinity
        </span>
      ) : null}
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={open ? "infinity-chatbot-panel" : undefined}
        className={cn(
          "focus-ring group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-bg-elevated to-bg text-orange shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_24px_rgba(249,115,22,0.15)] transition-all duration-300",
          "hover:scale-105 hover:border-orange/40 hover:shadow-[0_12px_48px_rgba(168,85,247,0.25)]",
          "active:scale-[0.98]",
          open && "ring-2 ring-purple/50",
        )}
      >
        {!open ? (
          <span className="absolute inset-0 rounded-full border border-orange/30 chatbot-pulse-ring" aria-hidden />
        ) : null}
        <MessageCircle
          className={cn(
            "h-7 w-7 transition-transform duration-300",
            open && "rotate-12 scale-90 text-purple",
          )}
          strokeWidth={1.75}
          aria-hidden
        />
        {!open ? (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-orange to-purple text-[9px] font-bold text-white ring-2 ring-bg">
            1
          </span>
        ) : null}
        <span className="sr-only">{open ? "Close chat assistant" : "Open chat assistant"}</span>
      </button>
    </div>
  );
}
