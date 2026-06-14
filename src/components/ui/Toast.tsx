"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type ToastProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
  variant?: "success" | "error";
};

export function Toast({ message, visible, onClose, variant = "success" }: ToastProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-4 right-4 z-[100] mx-auto max-w-md sm:bottom-8"
          role="status"
          aria-live="polite"
        >
          <div
            className={cn(
              "glass-panel flex items-start gap-3 rounded-xl px-4 py-4 shadow-2xl",
              variant === "success" && "border-orange/30",
              variant === "error" && "border-red-500/30",
            )}
          >
            {variant === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
            ) : null}
            <p className="flex-1 text-sm text-zinc-200">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="focus-ring shrink-0 rounded p-1 text-zinc-500 hover:text-white"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
