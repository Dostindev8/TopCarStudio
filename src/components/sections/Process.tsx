"use client";

import { ASSETS } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";

export function Process() {
  const { t } = useI18n();
  return (
    <SectionFrame id="proceso" src={ASSETS.bmw}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-[11px] tracking-[0.4em] text-tc-gold uppercase">{t.process.kicker}</p>
        <h2 className="font-display mt-3 text-4xl uppercase sm:text-6xl">{t.process.title}</h2>
        <ol className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.items.map((p, i) => (
            <li
              key={p.title}
              className={`border border-[var(--tc-line)] bg-tc-black/70 p-6 backdrop-blur-sm ${i === t.process.items.length - 1 ? "" : "lg:border-r-0"}`}
            >
              <span className="font-display text-4xl text-tc-gold">0{i + 1}</span>
              <h3 className="mt-4 text-base font-medium leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-tc-grey">{p.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
}
