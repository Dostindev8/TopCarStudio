"use client";

import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";

export function Services() {
  const { t } = useI18n();
  return (
    <SectionFrame id="servicios" density="low" variant="gold-dust">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="section-kicker">{t.services.kicker}</p>
        <h2 className="section-title mt-3">{t.services.title}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <article
              key={s.title}
              className="group border border-[var(--tc-line)] bg-tc-black/70 p-6 backdrop-blur-sm transition-colors hover:border-tc-gold/50"
            >
              <p className="font-display text-2xl text-tc-gold">0{i + 1}</p>
              <h3 className="mt-5 text-lg font-medium tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tc-grey">{s.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
