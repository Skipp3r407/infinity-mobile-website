"use client";

import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export function MobileStickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-bg/95 backdrop-blur-xl safe-area-pb md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="focus-ring btn-primary flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
        aria-label={`Call Infinity Mobile at ${site.phone}`}
      >
        <Phone className="h-5 w-5" aria-hidden />
        Call Now — {site.phone}
      </a>
    </div>
  );
}
