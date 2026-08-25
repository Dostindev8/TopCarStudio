"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { useI18n } from "@/components/I18nProvider";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

export function Contact() {
  const { t, waQuote } = useI18n();
  return (
    <section id="contacto" className="relative isolate min-h-[70svh] overflow-hidden bg-tc-black">
      <Image
        src={ASSETS.studio}
        alt="Garage cinematográfico de Top Car Studio"
        fill
        quality={100}
        sizes="100vw"
        className="pointer-events-none object-cover object-[center_40%] sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <ParticlesBackground density="medium" variant="gold-dust" />
      <div
        className="pointer-events-none absolute inset-3 z-[5] rounded-[2px] border border-tc-gold/35 sm:inset-5"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="section-title max-w-[18ch] text-[clamp(1.85rem,6.2vw,4.35rem)] leading-[0.95]">
          {t.contact.title1}
          <br />
          <span className="text-tc-gold">{t.contact.title2}</span>
        </h2>
        <div className="mt-10 w-full max-w-xl">
          <MagneticButton
            href={waQuote}
            className="cta-glow w-full px-6 py-4 text-[11px] sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
          >
            <WhatsAppIcon />
            {t.contact.cta}
          </MagneticButton>
        </div>
        <a href={`tel:${SITE.phoneTel}`} className="mt-8 block text-lg tracking-wide text-tc-white sm:text-xl">
          {SITE.phoneDisplay}
        </a>
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-tc-white sm:text-base"
          aria-label={`Instagram ${SITE.instagramHandle}`}
        >
          <InstagramIcon />
          {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
