import { cn } from "@/lib/cn";

export function NavChevron({ open, className }: { open?: boolean; className?: string }) {
  return (
    <svg
      className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
