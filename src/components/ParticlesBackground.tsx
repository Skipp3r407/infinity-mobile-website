"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: "orange" | "purple";
};

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const ctx2d = ctx;
    let animationId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const count = 28;

    function resize() {
      const parent = canvasEl.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvasEl.width = width;
      canvasEl.height = height;
    }

    function initParticles() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.3 - 0.15,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.5 ? "orange" : "purple",
      }));
    }

    function draw() {
      ctx2d.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const gradient = ctx2d.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        if (p.hue === "orange") {
          gradient.addColorStop(0, `rgba(249, 115, 22, ${p.opacity})`);
          gradient.addColorStop(1, "rgba(249, 115, 22, 0)");
        } else {
          gradient.addColorStop(0, `rgba(168, 85, 247, ${p.opacity})`);
          gradient.addColorStop(1, "rgba(168, 85, 247, 0)");
        }

        ctx2d.beginPath();
        ctx2d.fillStyle = gradient;
        ctx2d.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx2d.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx2d.beginPath();
            ctx2d.strokeStyle = `rgba(168, 85, 247, ${0.08 * (1 - dist / 120)})`;
            ctx2d.lineWidth = 0.5;
            ctx2d.moveTo(a.x, a.y);
            ctx2d.lineTo(b.x, b.y);
            ctx2d.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    if (canvasEl.parentElement) observer.observe(canvasEl.parentElement);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden
    />
  );
}
