"use client";

import { ASSETS, LAUNCH_OFFER } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";

export function Offer() {
  const { t, waOffer } = useI18n();
  return (
    <SectionFrame id="oferta" src={ASSETS.landscape}>
      <div className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="offer-pulse mx-auto max-w-4xl border border-tc-gold/40 bg-tc-black/75 px-6 py-14 text-center backdrop-blur-sm sm:px-12">
          <p className="text-[11px] tracking-[0.4em] text-tc-gold uppercase">{t.offer.kicker}</p>
          <h2 className="font-display mt-4 text-3xl uppercase sm:text-5xl">{t.offer.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-tc-grey sm:text-base">{t.offer.copy}</p>
          <p className="mt-6 text-tc-gold">
            {LAUNCH_OFFER.remainingSlots} / {LAUNCH_OFFER.totalSlots} {t.offer.slots}
          </p>
          <div className="mt-8">
            <MagneticButton href={waOffer} className="px-10 py-4 text-base">
              {t.offer.cta}
            </MagneticButton>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
