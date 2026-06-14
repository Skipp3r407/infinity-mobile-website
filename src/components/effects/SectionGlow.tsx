type SectionGlowProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  color?: "orange" | "purple" | "mixed";
};

const positions = {
  "top-left": "left-0 top-0 -translate-x-1/4 -translate-y-1/4",
  "top-right": "right-0 top-0 translate-x-1/4 -translate-y-1/4",
  "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

const colors = {
  orange: "bg-orange/10",
  purple: "bg-purple/10",
  mixed: "bg-gradient-to-br from-orange/10 to-purple/10",
};

export function SectionGlow({
  position = "top-right",
  color = "mixed",
}: SectionGlowProps) {
  return (
    <div
      className={`pointer-events-none absolute h-96 w-96 rounded-full blur-[120px] pulse-glow ${positions[position]} ${colors[color]}`}
      aria-hidden
    />
  );
}
