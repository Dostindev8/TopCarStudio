"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SocialChip } from "@/components/ui/SocialChip";

export function About() {
  const { t } = useI18n();
  return (
    <SectionFrame id="estudio" density="low" variant="gold-dust" className="border-y border-[var(--tc-line)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[var(--radius-card)] border border-tc-gold/45 bg-tc-black lg:max-w-none">
          <Image
            src={ASSETS.audi}
            alt="Audi Q3 en producción cinematográfica de Top Car Studio"
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center px-6 pt-6 sm:pt-8">
            <Image
              src={ASSETS.logoClear}
              alt="Logo Top Car Studio — Cinematic Premium Timeless"
              width={420}
              height={220}
              className="h-auto w-[min(88%,22rem)] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.65)]"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={ASSETS.logoClear}
            alt=""
            width={480}
            height={480}
            className="pointer-events-none absolute -right-6 top-0 hidden h-auto w-[min(70%,22rem)] object-contain opacity-[0.07] lg:block"
            aria-hidden
          />
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title mt-3">Top Car Studio</h2>
          <p className="relative mt-6 max-w-md text-base leading-relaxed text-tc-grey">{t.about.copy}</p>
          <div className="relative mt-8">
            <SocialChip handle={SITE.instagramHandle} href={SITE.instagramUrl} />
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
