"use client";

import Image from "next/image";
import { ASSETS, LAUNCH_OFFER } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useI18n } from "@/components/I18nProvider";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

export function Offer() {
  const { t, waOffer } = useI18n();
  return (
    <section id="oferta" className="relative isolate min-h-[32rem] overflow-hidden bg-tc-black">
      <Image
        src={ASSETS.studio}
        alt="Garage cinematográfico de Top Car Studio"
        fill
        quality={95}
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <ParticlesBackground density="low" variant="gold-drift" />
      <div className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl rounded-[var(--radius-card)] border border-tc-gold/70 bg-black/80 px-5 py-10 text-center backdrop-blur-md sm:px-10 sm:py-14">
          <p className="section-kicker">{t.offer.kicker}</p>
          <h2 className="section-title mt-4">{t.offer.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-tc-grey sm:text-base">{t.offer.copy}</p>
          <p className="mt-6 text-sm tracking-wide text-tc-gold sm:text-base">
            {LAUNCH_OFFER.remainingSlots} / {LAUNCH_OFFER.totalSlots} {t.offer.slots}
          </p>
          <div className="mt-8">
            <MagneticButton href={waOffer} className="cta-glow w-full whitespace-normal px-5 py-4 text-[11px] sm:w-auto sm:px-10 sm:text-sm">
              {t.offer.cta}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
