"use client";

import { ASSETS } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";

export function Verticals() {
  const { t } = useI18n();
  return (
    <SectionFrame id="para-quien" src={ASSETS.civic} className="border-y border-[var(--tc-line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-[11px] tracking-[0.4em] text-tc-gold uppercase">{t.verticals.kicker}</p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl leading-[1.05] uppercase sm:text-5xl">{t.verticals.title}</h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {t.verticals.items.map((v, i) => (
            <article key={v.title} className="border border-[var(--tc-line)] bg-tc-black/75 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-display text-sm text-tc-gold">0{i + 1}</p>
              <h3 className="mt-3 text-2xl tracking-[0.18em] text-tc-gold uppercase">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tc-grey">{v.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
