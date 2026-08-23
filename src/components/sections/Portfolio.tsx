"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ASSETS, PORTFOLIO, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { SnakeBorder } from "@/components/ui/SnakeBorder";

export function Portfolio() {
  const { t } = useI18n();
  const [open, setOpen] = useState<(typeof PORTFOLIO)[number] | null>(null);
  const [snake, setSnake] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setSnake((n) => (n + 1) % PORTFOLIO.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="portfolio" className="relative isolate overflow-hidden bg-tc-black">
      <Image
        src={ASSETS.landscape}
        alt=""
        fill
        quality={90}
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-tc-black/78" />
      <ParticlesBackground density="low" variant="gold-dust" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="section-kicker">{t.portfolio.kicker}</p>
        <h2 className="section-title mt-3">{t.portfolio.title}</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6">
          {PORTFOLIO.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpen(item)}
              className="group relative overflow-hidden bg-tc-black/88 text-left shadow-[0_0_0_1px_rgba(201,162,39,0.12)]"
            >
              <SnakeBorder active={snake === i} />
              <span className="relative block aspect-[9/16] bg-tc-black">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain"
                  draggable={false}
                />
              </span>
              <span className="block border-t border-[var(--tc-line)] px-4 py-3 text-[11px] tracking-[0.28em] text-tc-gold uppercase">
                {item.title}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-tc-gold px-6 py-3 text-xs tracking-[0.22em] text-tc-gold uppercase"
          >
            <InstagramIcon />
            {t.portfolio.more}
          </a>
        </div>
      </div>
      {open ? (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button type="button" className="absolute top-5 right-5 text-tc-white" aria-label={t.portfolio.close}>
            <X />
          </button>
          <div className="relative h-[82vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={open.src} alt={open.title} fill quality={100} className="object-contain" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
