"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { findBestFaqMatch, getConversationalReply } from "@/lib/chatbot-match";
import {
  chatbotFaqItems,
  faqCategories,
  staticQuickReplies,
  welcomeQuickActions,
  WELCOME_MESSAGE,
} from "@/lib/chatbot-faq";
import { site } from "@/lib/site";
import type { ChatbotFaqItem } from "@/lib/chatbot-types";
import { ChatbotHeader } from "@/components/chatbot/ChatbotHeader";
import { ChatbotLauncher } from "@/components/chatbot/ChatbotLauncher";
import { ChatbotMessageList, type ChatMessage } from "@/components/chatbot/ChatbotMessageList";
import { ChatbotQuickActions } from "@/components/chatbot/ChatbotQuickActions";

function fallbackAnswer(): string {
  return `I don't have a specific answer for that yet. Call ${site.name} at ${site.phone} or submit a quote — Michael can help directly.`;
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function typingDelay(text: string) {
  return Math.min(1200, 280 + text.length * 8);
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [browse, setBrowse] = useState<"off" | "categories" | "questions">("off");
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [followUps, setFollowUps] = useState<{ id: string; label: string }[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const showWelcomePicks =
    messages.length === 1 && messages[0]?.role === "bot" && messages[0]?.text === WELCOME_MESSAGE;

  const questionsInCategory = useMemo(() => {
    if (!categoryId) return [];
    return chatbotFaqItems.filter((i) => i.category === categoryId);
  }, [categoryId]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  const toggleOpen = () => {
    setOpen((prev) => {
      if (!prev) {
        queueMicrotask(() => {
          setMessages((m) =>
            m.length === 0 ? [{ id: uid(), role: "bot", text: WELCOME_MESSAGE }] : m,
          );
          setBrowse("off");
          setCategoryId(null);
          setFollowUps([]);
        });
      }
      return !prev;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pushBot = (
    text: string,
    opts?: { ctaType?: ChatbotFaqItem["ctaType"]; followUps?: string[] },
  ) => {
    const delay = typingDelay(text);
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "bot",
          text,
          ctaType: opts?.ctaType,
        },
      ]);
      if (opts?.followUps?.length) {
        setFollowUps(
          opts.followUps.map((label, i) => ({ id: `fu-${uid()}-${i}`, label })),
        );
      } else {
        setFollowUps([]);
      }
    }, delay);
    timersRef.current.push(t);
  };

  const pushUser = (text: string) => {
    setFollowUps([]);
    setMessages((prev) => [...prev, { id: uid(), role: "user", text }]);
  };

  const resolveFaq = (item: ChatbotFaqItem) => {
    pushBot(item.answer, { ctaType: item.ctaType, followUps: item.followUps });
  };

  const resolveQuick = (faqId?: string, staticKey?: string) => {
    if (staticKey && staticQuickReplies[staticKey]) {
      pushBot(staticQuickReplies[staticKey], {
        ctaType: staticKey === "call" ? "call" : undefined,
      });
      return;
    }
    if (faqId) {
      const item = chatbotFaqItems.find((f) => f.id === faqId);
      if (item) resolveFaq(item);
    }
  };

  const handleUserQuery = (q: string) => {
    const conversational = getConversationalReply(q);
    if (conversational) {
      let cta: ChatbotFaqItem["ctaType"];
      if (/call now/i.test(q)) cta = "call";
      else if (/quote/i.test(q)) cta = "quote";
      pushBot(conversational.text, { followUps: conversational.followUps, ctaType: cta });
      return;
    }

    const match = findBestFaqMatch(q, chatbotFaqItems);
    if (match) {
      resolveFaq(match);
    } else {
      pushBot(fallbackAnswer(), { ctaType: "call" });
    }
  };

  const handleQuickPick = (actionId: string) => {
    const action = welcomeQuickActions.find((w) => w.id === actionId);
    if (!action) return;
    pushUser(action.label);
    if ("staticKey" in action) {
      resolveQuick(undefined, action.staticKey);
    } else {
      resolveQuick(action.faqId, undefined);
    }
  };

  const handleFollowUp = (label: string) => {
    pushUser(label);
    if (/call now/i.test(label)) {
      resolveQuick(undefined, "call");
      return;
    }
    if (/quote/i.test(label)) {
      const item = chatbotFaqItems.find((f) => f.id === "q6");
      if (item) resolveFaq(item);
      return;
    }
    handleUserQuery(label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || typing) return;
    pushUser(q);
    setInput("");
    handleUserQuery(q);
  };

  const pickFaqItem = (item: ChatbotFaqItem) => {
    pushUser(item.question);
    setBrowse("off");
    setCategoryId(null);
    resolveFaq(item);
  };

  const welcomeActionButtons = useMemo(
    () => welcomeQuickActions.map((w) => ({ id: w.id, label: w.label })),
    [],
  );

  return (
    <div className="pointer-events-none flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            id="infinity-chatbot-panel"
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="pointer-events-auto flex max-h-[min(580px,calc(100vh-10rem))] w-[min(calc(100vw-2rem),400px)] flex-col overflow-hidden rounded-2xl metallic-border bg-bg shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_40px_rgba(168,85,247,0.08)]"
          >
            <ChatbotHeader onClose={() => setOpen(false)} />
            <ChatbotMessageList messages={messages} typing={typing} />

            {showWelcomePicks ? (
              <div className="border-t border-white/[0.06] bg-bg-elevated/80 px-4 py-3">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Quick picks
                </p>
                <ChatbotQuickActions actions={welcomeActionButtons} onPick={handleQuickPick} />
              </div>
            ) : null}

            {!showWelcomePicks && followUps.length > 0 && !typing ? (
              <div className="border-t border-white/[0.06] bg-bg-elevated/80 px-4 py-3">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Suggested
                </p>
                <ChatbotQuickActions
                  actions={followUps}
                  onPick={(id) => {
                    const item = followUps.find((f) => f.id === id);
                    if (item) handleFollowUp(item.label);
                  }}
                  variant="followup"
                />
              </div>
            ) : null}

            {browse === "categories" ? (
              <div className="max-h-36 overflow-y-auto border-t border-white/[0.06] bg-bg-elevated/80 px-3 py-2">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Topics
                  </span>
                  <button
                    type="button"
                    className="text-xs font-semibold text-orange hover:underline"
                    onClick={() => setBrowse("off")}
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {faqCategories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className="focus-ring rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:border-orange/30"
                      onClick={() => {
                        setCategoryId(c.id);
                        setBrowse("questions");
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {browse === "questions" && categoryId ? (
              <div className="max-h-40 overflow-y-auto border-t border-white/[0.06] bg-bg-elevated/80 px-3 py-2">
                <button
                  type="button"
                  className="mb-2 text-xs font-semibold text-orange hover:underline"
                  onClick={() => {
                    setBrowse("categories");
                    setCategoryId(null);
                  }}
                >
                  ← All topics
                </button>
                <ul className="space-y-1">
                  {questionsInCategory.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="focus-ring w-full rounded-lg px-2 py-1.5 text-left text-xs text-zinc-300 hover:bg-white/[0.05]"
                        onClick={() => pickFaqItem(item)}
                      >
                        {item.question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="border-t border-white/[0.08] bg-bg-elevated px-3 py-3">
              <button
                type="button"
                className="mb-2 text-xs font-semibold text-zinc-500 transition hover:text-orange"
                onClick={() => setBrowse(browse === "off" ? "categories" : "off")}
              >
                {browse === "off" ? "Browse question topics" : "Hide topics"}
              </button>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <label htmlFor="chatbot-input" className="sr-only">
                  Type your question
                </label>
                <input
                  id="chatbot-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, quotes, areas…"
                  disabled={typing}
                  className="focus-ring min-w-0 flex-1 rounded-xl border border-white/10 bg-bg px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 disabled:opacity-60"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={typing || !input.trim()}
                  className="focus-ring shrink-0 rounded-xl bg-gradient-to-r from-orange to-purple-deep px-4 py-2.5 text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition hover:brightness-110 disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden />
                </button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-auto">
        <ChatbotLauncher open={open} onClick={toggleOpen} />
      </div>
    </div>
  );
}
