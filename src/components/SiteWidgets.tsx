"use client";

import { ChatbotWidget } from "@/components/chatbot";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";

export function SiteWidgets() {
  return (
    <div className="pointer-events-none fixed bottom-[5.75rem] right-4 z-[55] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <div className="pointer-events-auto">
        <ChatbotWidget />
      </div>
      <FloatingQuoteButton />
    </div>
  );
}
