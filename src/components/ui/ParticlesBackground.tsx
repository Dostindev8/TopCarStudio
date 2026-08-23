"use client";

import { useEffect, useRef } from "react";

export type ParticlesDensity = "low" | "medium" | "high";
export type ParticlesVariant = "gold-dust" | "gold-drift";

interface ParticlesBackgroundProps {
  density?: ParticlesDensity;
  variant?: ParticlesVariant;
  className?: string;
}

const GOLD = { r: 201, g: 162, b: 39 };

function countFor(density: ParticlesDensity, width: number) {
  const mobile = width < 768;
  const table = {
    low: mobile ? 22 : 40,
    medium: mobile ? 32 : 64,
    high: mobile ? 42 : 88,
  } as const;
  return table[density];
}

export function ParticlesBackground({
  density = "low",
  variant = "gold-dust",
  className = "",
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = false;
    let inView = true;
    const scrollY = { current: window.scrollY };
    const particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      av: number;
    }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = countFor(density, w);
      particles.length = 0;
      const drift = variant === "gold-drift" ? 1 : 0.35;
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 2.2,
          vx: (Math.random() - 0.5) * 0.18 * drift,
          vy: 0.08 + Math.random() * 0.22,
          a: 0.12 + Math.random() * 0.28,
          av: (Math.random() - 0.5) * 0.008,
        });
      }
    };

    const draw = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const par = variant === "gold-drift" ? scrollY.current * 0.012 : scrollY.current * 0.006;
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${p.a})`;
        ctx.arc(p.x, (p.y + par) % (h + 8), p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running || !inView || reduced) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.av;
        if (p.a < 0.08 || p.a > 0.4) p.av *= -1;
        if (p.y > h + 6) {
          p.y = -6;
          p.x = Math.random() * w;
        }
        if (p.x < -6) p.x = w + 6;
        if (p.x > w + 6) p.x = -6;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    resize();
    draw();
    if (!reduced) {
      running = true;
      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !reduced) {
          running = true;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(tick);
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "80px" },
    );
    io.observe(wrap);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [density, variant]);

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
