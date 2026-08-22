"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { ASSETS, PORTFOLIO, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function Portfolio() {
  const { t } = useI18n();
  const [open, setOpen] = useState<(typeof PORTFOLIO)[number] | null>(null);

  return (
    <SectionFrame id="portfolio" src={ASSETS.audi}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-[11px] tracking-[0.4em] text-tc-gold uppercase">{t.portfolio.kicker}</p>
        <h2 className="font-display mt-3 text-4xl uppercase sm:text-6xl">{t.portfolio.title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <button key={item.id} type="button" onClick={() => setOpen(item)} className="group relative aspect-[9/16] bg-tc-black/80">
              <Image src={item.src} alt={item.title} fill quality={100} sizes="(max-width: 768px) 50vw, 33vw" className="object-contain" draggable={false} />
              <span className="absolute inset-0 bg-tc-gold/0 transition-colors group-hover:bg-tc-gold/15" />
              {item.type === "video" ? (
                <span className="absolute right-3 bottom-3 rounded-full bg-black/60 p-2 text-tc-gold">
                  <Play size={16} fill="currentColor" />
                </span>
              ) : null}
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
        <div role="dialog" aria-modal className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4" onClick={() => setOpen(null)}>
          <button type="button" className="absolute top-5 right-5 text-tc-white" aria-label={t.portfolio.close}>
            <X />
          </button>
          <div className="relative h-[80vh] w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <Image src={open.src} alt={open.title} fill quality={100} className="object-contain" />
          </div>
        </div>
      ) : null}
    </SectionFrame>
  );
}
