"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SectionFrame } from "@/components/ui/SectionFrame";

export function About() {
  const { t } = useI18n();
  return (
    <SectionFrame id="estudio" density="low" variant="gold-dust" className="border-y border-[var(--tc-line)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <div className="relative aspect-[9/16] max-h-[720px] border border-[var(--tc-line)] bg-tc-black">
          <Image
            src={ASSETS.audi}
            alt="Top Car Studio"
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            draggable={false}
          />
        </div>
        <div>
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title mt-3">Top Car Studio</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-tc-grey">{t.about.copy}</p>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-tc-gold px-5 py-2.5 text-sm text-tc-gold"
          >
            <InstagramIcon />
            {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </SectionFrame>
  );
}
