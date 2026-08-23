"use client";

import { SITE } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";

export function Contact() {
  const { t, waQuote } = useI18n();
  return (
    <SectionFrame id="contacto" density="low" variant="gold-dust">
      <div className="px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="section-title text-[clamp(2rem,6vw,4.2rem)] leading-[0.95]">
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
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-tc-gold"
        >
          <InstagramIcon />
          {SITE.instagramHandle}
        </a>
      </div>
    </SectionFrame>
  );
}
