"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const el = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const hot = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setOn(true);

    let x = -40;
    let y = -40;
    let raf = 0;
    let pending = false;

    const paint = () => {
      pending = false;
      const node = el.current;
      if (!node) return;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.transform = `translate(-50%, -50%) scale(${hot.current ? 2.2 : 1})`;
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(paint);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      hot.current = Boolean(t?.closest("a, button"));
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(paint);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      ref={el}
      aria-hidden
      className="pointer-events-none fixed z-[90] mix-blend-difference"
      style={{
        left: -40,
        top: -40,
        transform: "translate(-50%, -50%)",
        width: 10,
        height: 10,
        borderRadius: 999,
        background: "#c9a227",
        transition: "transform 180ms ease",
      }}
    />
  );
}
