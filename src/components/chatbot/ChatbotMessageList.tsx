"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ChatbotCtaType } from "@/lib/chatbot-types";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  ctaType?: ChatbotCtaType;
};

function CtaRow({ cta }: { cta: ChatbotCtaType }) {
  if (cta === "call") {
    return (
      <a
        href={`tel:${site.phoneTel}`}
        className="mt-3 inline-flex w-full items-center justify-center rounded-lg btn-primary px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-white"
      >
        Call {site.phone}
      </a>
    );
  }
  if (cta === "quote") {
    return (
      <a
        href="#quote"
        className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-purple/40 bg-purple/10 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-purple transition hover:bg-purple/20"
      >
        Request a Quote
      </a>
    );
  }
  return (
    <a
      href="#services"
      className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-orange/40 bg-orange/10 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-orange-glow transition hover:bg-orange/20"
    >
      View Services
    </a>
  );
}

export function ChatbotMessageList({
  messages,
  typing,
}: {
  messages: ChatMessage[];
  typing?: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  return (
    <div
      className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4"
      role="log"
      aria-live="polite"
      aria-relevant="additions"
    >
      {messages.map((m) => (
        <div
          key={m.id}
          className={cn("flex gap-2", m.role === "user" ? "justify-end" : "justify-start")}
        >
          {m.role === "bot" ? (
            <div className="mt-1 h-7 w-7 shrink-0 overflow-hidden rounded-md ring-1 ring-orange/20">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-full w-full object-contain" />
            </div>
          ) : null}
          <div
            className={cn(
              "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
              m.role === "user"
                ? "bg-gradient-to-br from-orange/25 to-purple/20 text-white ring-1 ring-orange/25"
                : "bg-white/[0.06] text-zinc-200 ring-1 ring-white/[0.06]",
            )}
          >
            <p className="whitespace-pre-wrap">{m.text}</p>
            {m.role === "bot" && m.ctaType ? <CtaRow cta={m.ctaType} /> : null}
          </div>
        </div>
      ))}
      {typing ? (
        <div className="flex gap-2">
          <div className="mt-1 h-7 w-7 shrink-0 overflow-hidden rounded-md ring-1 ring-orange/20">
            <Image src="/logo.png" alt="" width={28} height={28} className="h-full w-full object-contain" />
          </div>
          <div className="flex items-center gap-1 rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/[0.06]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="chatbot-typing-dot h-2 w-2 rounded-full bg-orange/70"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      ) : null}
      <div ref={bottomRef} />
    </div>
  );
}
