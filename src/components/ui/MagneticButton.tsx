"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

export function MagneticButton({
  href,
  children,
  className,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.14em] uppercase transition-colors",
        variant === "solid" && "bg-tc-gold text-tc-black hover:bg-tc-gold-light",
        variant === "outline" &&
          "border border-tc-gold bg-transparent text-tc-gold hover:bg-tc-gold hover:text-tc-black",
        className,
      )}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(pointer: coarse)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.22;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
      }}
    >
      {children}
    </a>
  );
}
