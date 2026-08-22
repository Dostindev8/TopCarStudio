"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function About() {
  const { t } = useI18n();
  return (
    <section id="estudio" className="relative overflow-hidden border-y border-[var(--tc-line)]">
      <Image src={ASSETS.landscape} alt="" fill quality={90} sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-tc-black/80" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
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
          <p className="text-[11px] tracking-[0.4em] text-tc-gold uppercase">{t.about.kicker}</p>
          <h2 className="font-display mt-3 text-4xl uppercase sm:text-5xl">Top Car Studio</h2>
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
    </section>
  );
}
