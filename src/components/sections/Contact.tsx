"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { useI18n } from "@/components/I18nProvider";

export function Contact() {
  const { t, waQuote } = useI18n();
  return (
    <section id="contacto" className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
      <Image src={ASSETS.landscape} alt="" fill quality={90} sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-tc-black/78" />
      <div className="relative z-10">
        <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] uppercase">
          {t.contact.title1}
          <br />
          <span className="text-tc-gold">{t.contact.title2}</span>
        </h2>
        <div className="mt-10">
          <MagneticButton href={waQuote} className="px-10 py-5 text-base">
            <WhatsAppIcon />
            {t.contact.cta}
          </MagneticButton>
        </div>
        <a href={`tel:${SITE.phoneTel}`} className="mt-8 block text-xl tracking-wide text-tc-white">
          {SITE.phoneDisplay}
        </a>
        <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-tc-gold">
          <InstagramIcon />
          {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
