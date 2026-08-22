"use client";

import { DOT_NAV } from "@/lib/constants";
import { useEffect, useState } from "react";

export function DotNav() {
  const [active, setActive] = useState<string>(DOT_NAV[0].href);

  useEffect(() => {
    const ids = DOT_NAV.map((d) => d.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(`#${vis.target.id}`);
      },
      { threshold: [0.25, 0.5] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Secciones"
      className="pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:pointer-events-auto lg:flex"
    >
      {DOT_NAV.map((d) => (
        <a
          key={d.href}
          href={d.href}
          aria-label={d.label}
          className="relative grid h-3 w-3 place-items-center"
        >
          <span
            className={
              active === d.href
                ? "h-2 w-2 rounded-full bg-tc-gold ring-2 ring-tc-gold/50 ring-offset-2 ring-offset-tc-black"
                : "h-1.5 w-1.5 rounded-full bg-tc-grey/70"
            }
          />
        </a>
      ))}
    </nav>
  );
}
