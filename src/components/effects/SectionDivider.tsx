export function SectionDivider() {
  return (
    <div className="relative h-px w-full" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
      <div className="section-divider-beam absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange to-transparent" />
    </div>
  );
}
