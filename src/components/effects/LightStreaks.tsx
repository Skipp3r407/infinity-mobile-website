export function LightStreaks({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="light-streak light-streak-1 absolute h-px w-[140%] -rotate-[25deg] bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
      <div className="light-streak light-streak-2 absolute h-px w-[120%] -rotate-[18deg] bg-gradient-to-r from-transparent via-purple/30 to-transparent" />
      <div className="light-streak light-streak-3 absolute h-px w-[100%] -rotate-[30deg] bg-gradient-to-r from-transparent via-orange/25 to-transparent" />
    </div>
  );
}
