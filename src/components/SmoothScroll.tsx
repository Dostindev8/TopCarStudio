"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      const nav = document.querySelector("header");
      const offset = -(nav instanceof HTMLElement ? nav.offsetHeight : 80);
      lenis.scrollTo(el, { offset, duration: 1.05 });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
