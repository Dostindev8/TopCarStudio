"use client";

import { useI18n } from "@/components/I18nProvider";

export function Marquee() {
  const { t } = useI18n();
  const row = [...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee];
  return (
    <div className="relative isolate overflow-x-hidden overflow-y-hidden border-y border-[var(--tc-line)] bg-tc-black-soft py-4">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {row.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-8 text-sm tracking-[0.28em] text-tc-gold uppercase">
            {label}
            <span aria-hidden className="text-tc-gold-dim">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
