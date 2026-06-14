"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
  scale?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = true,
  scale = false,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const offset = offsets[direction];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        ...offset,
        filter: blur ? "blur(8px)" : "blur(0px)",
        scale: scale ? 0.96 : 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
