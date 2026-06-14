"use client";

import { cn } from "@/lib/cn";

export function ChatbotQuickActions({
  actions,
  onPick,
  className,
  variant = "default",
}: {
  actions: { id: string; label: string }[];
  onPick: (id: string) => void;
  className?: string;
  variant?: "default" | "followup";
}) {
  if (!actions.length) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {actions.map((a) => (
        <button
          key={a.id}
          type="button"
          onClick={() => onPick(a.id)}
          className={cn(
            "focus-ring rounded-full px-3 py-1.5 text-xs font-semibold transition",
            variant === "default"
              ? "border border-orange/35 bg-orange/10 text-orange-glow hover:border-orange/55 hover:bg-orange/20"
              : "border border-purple/30 bg-purple/10 text-purple hover:border-purple/50 hover:bg-purple/20",
          )}
        >
          {a.label}
        </button>
      ))}
    </div>
  );
}
