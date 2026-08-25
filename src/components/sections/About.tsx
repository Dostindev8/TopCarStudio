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
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md rounded-[var(--radius-card)] border border-tc-gold/45 bg-tc-black lg:max-w-none">
          <Image
            src={ASSETS.audi}
            alt="Audi Q3 y logo oficial de Top Car Studio"
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-center p-2 sm:p-3"
            draggable={false}
          />
        </div>
        <div>
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title mt-3">Top Car Studio</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-tc-grey">{t.about.copy}</p>
          <div className="mt-8">
            <SocialChip handle={SITE.instagramHandle} href={SITE.instagramUrl} />
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
