"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarse) return;

    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.classList.add("cursor-glow-active");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("cursor-glow-active");
    };
  }, []);

  return <div className="cursor-glow pointer-events-none fixed inset-0 z-[1]" aria-hidden />;
}
