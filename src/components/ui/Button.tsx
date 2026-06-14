"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wide transition disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" && "btn-primary text-white",
          variant === "outline" && "btn-outline text-fg",
          variant === "ghost" && "text-zinc-300 hover:bg-white/5 hover:text-white",
          size === "sm" && "px-4 py-2 text-xs",
          size === "md" && "px-5 py-2.5 text-sm",
          size === "lg" && "px-7 py-3.5 text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
