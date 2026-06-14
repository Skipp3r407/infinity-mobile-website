"use client";

import { site } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { startTransition, useEffect, useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "infinity-splash-dismissed";

const loadingPhases = [
  { at: 0, label: "Powering up" },
  { at: 28, label: "Loading services" },
  { at: 58, label: "Calibrating systems" },
  { at: 82, label: "Ready to roll" },
] as const;

function randomDurationMs(): number {
  return 2800 + Math.floor(Math.random() * 1400);
}

export function LoadingScreen() {
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<"off" | "on" | "exit">("off");
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const activePhase =
    [...loadingPhases].reverse().find((p) => progress >= p.at)?.label ?? loadingPhases[0].label;

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* private mode */
    }

    const duration = reduced ? 900 : randomDurationMs();

    queueMicrotask(() => {
      document.body.dataset.splashLock = "1";
      document.body.style.overflow = "hidden";
      startTransition(() => setMode("on"));
      startRef.current = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startRef.current;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 2.4);
        setProgress(Math.round(eased * 100));

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          startTransition(() => setMode("exit"));
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reduced]);

  useEffect(() => {
    return () => {
      delete document.body.dataset.splashLock;
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (mode !== "exit") return;

    exitTimerRef.current = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      delete document.body.dataset.splashLock;
      document.body.style.overflow = "";
      startTransition(() => setMode("off"));
    }, 700);

    return () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [mode]);

  if (mode === "off") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="splash"
        role="status"
        aria-live="polite"
        aria-busy={mode === "on"}
        initial={{ opacity: 1 }}
        animate={{ opacity: mode === "exit" ? 0 : 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050506] ${
          mode === "exit" ? "pointer-events-none" : ""
        }`}
      >
          <div className="absolute inset-0 garage-texture opacity-80" aria-hidden />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(249,115,22,0.14),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"
            aria-hidden
          />
          <div className="splash-scanline absolute inset-0 opacity-30" aria-hidden />
          <div className="absolute inset-x-0 top-1/2 h-px shimmer-line opacity-20" aria-hidden />

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="splash-logo-glow absolute -inset-10 rounded-full" aria-hidden />
              <div className="splash-ring absolute -inset-6 rounded-full border border-orange/20" aria-hidden />
              <div
                className="splash-ring-reverse absolute -inset-10 rounded-full border border-purple/15"
                aria-hidden
              />

              <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
                <svg
                  className="absolute inset-0 h-full w-full -rotate-90"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="url(#splash-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={`${progress * 2.89} 289`}
                    className="transition-[stroke-dasharray] duration-150 ease-out"
                  />
                  <defs>
                    <linearGradient id="splash-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                <Image
                  src="/logo.png"
                  alt="Infinity Mobile"
                  width={280}
                  height={180}
                  className="relative h-auto w-28 object-contain sm:w-36"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <p className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                Infinity <span className="text-gradient-accent">Mobile</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                {site.location}
              </p>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-10 w-full max-w-xs"
            >
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="text-orange">{activePhase}</span>
                <span className="text-zinc-500">{progress}%</span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="splash-progress-bar h-full rounded-full bg-gradient-to-r from-orange via-orange-glow to-purple transition-[width] duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-3 flex justify-between gap-1" aria-hidden>
                {loadingPhases.map((phase) => (
                  <span
                    key={phase.label}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      progress >= phase.at ? "bg-orange/60" : "bg-white/[0.06]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8 text-xs text-zinc-500"
            >
              {site.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mode === "exit" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-bg"
            aria-hidden
          />

          <span className="sr-only">{site.name} is loading. {progress} percent complete.</span>
        </motion.div>
    </AnimatePresence>
  );
}
