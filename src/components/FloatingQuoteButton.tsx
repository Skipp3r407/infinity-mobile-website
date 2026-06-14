"use client";

import { FileText } from "lucide-react";
import Link from "next/link";

export function FloatingQuoteButton() {
  return (
    <Link
      href="#quote"
      className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange to-purple-deep text-white shadow-[0_4px_24px_rgba(249,115,22,0.4)] transition hover:scale-105 hover:shadow-[0_8px_32px_rgba(168,85,247,0.4)]"
      aria-label="Request a quote"
    >
      <FileText className="h-6 w-6" aria-hidden />
    </Link>
  );
}
