"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ASSETS } from "@/lib/constants";
import { loadImage } from "@/lib/loadImage";

export function Preloader() {
  const overlay = useRef<HTMLDivElement>(null);
  const landWrap = useRef<HTMLDivElement>(null);
  const brand = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      loadImage(ASSETS.landscape),
      loadImage(ASSETS.logoClear),
      loadImage(ASSETS.hero),
    ]).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready || !overlay.current) return;

    document.body.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const leave = () => {
        document.body.style.overflow = "";
        setGone(true);
      };

      if (reduce) {
        gsap.to(overlay.current, { opacity: 0, duration: 0.4, onComplete: leave });
        return;
      }

      const tl = gsap.timeline({ onComplete: leave });

      gsap.set(brand.current, { opacity: 0, y: 24, scale: 0.88 });
      gsap.set(bar.current, { width: "0%" });

      tl.fromTo(
        landWrap.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1.18, opacity: 1, duration: 6, ease: "none" },
        0,
      );
      tl.to(brand.current, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power3.out" }, 2.05);
      tl.to(bar.current, { width: "100%", duration: 2.55, ease: "power1.inOut" }, 2.35);
      tl.to(overlay.current, { opacity: 0, duration: 0.75, ease: "power2.inOut" }, 5.25);
    }, overlay);

    let canSkip = false;
    const skipTimer = window.setTimeout(() => {
      canSkip = true;
    }, 3000);
    const onSkip = () => {
      if (!canSkip) return;
      ctx.revert();
      document.body.style.overflow = "";
      setGone(true);
    };
    window.addEventListener("pointerdown", onSkip);

    return () => {
      window.clearTimeout(skipTimer);
      window.removeEventListener("pointerdown", onSkip);
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [ready]);

  if (gone) return null;

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[100] overflow-hidden bg-tc-black"
      role="status"
      aria-live="polite"
      aria-label="Intro Top Car Studio"
    >
      <div ref={landWrap} className="absolute inset-0 will-change-transform">
        <Image
          src={ASSETS.landscape}
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      <div
        ref={brand}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 opacity-0"
      >
        <div className="relative h-[min(58vh,460px)] w-[min(92vw,480px)]">
          <Image
            src={ASSETS.logoClear}
            alt="Top Car Studio"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 92vw, 480px"
            className="object-contain"
          />
        </div>
        <p className="mt-1 text-[10px] tracking-[0.42em] text-tc-gold uppercase sm:text-[11px]">
          Cinematic · Premium · Timeless.
        </p>
        <div className="mt-7 h-3 w-full max-w-[280px] overflow-hidden rounded-full border border-tc-gold/55 bg-black/55 sm:max-w-[360px]">
          <div ref={bar} className="hazard-bar hazard-bar-move h-full w-0" />
        </div>
        <p className="mt-3 text-[10px] tracking-[0.38em] text-tc-gold/80 uppercase">Loading...</p>
      </div>
    </div>
  );
}
