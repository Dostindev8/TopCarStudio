"use client";

import Image from "next/image";
import { Box, Clapperboard, Rocket, Video } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { useI18n } from "@/components/I18nProvider";
import { SITE } from "@/lib/constants";

const ICONS = [Video, Clapperboard, Box, Rocket];

export function Hero() {
  const { t, waQuote } = useI18n();

  return (
    <section className="relative isolate h-[100svh] min-h-[640px] overflow-hidden" id="inicio">
      <div className="absolute inset-0 bg-tc-black">
        <Image
          src={ASSETS.hero}
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/82 via-black/35 to-black/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-tc-black to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-5 pt-[5.5rem] pb-6 sm:px-10 sm:pt-28 lg:px-14">
        <div className="max-w-[20rem] sm:max-w-[28rem]">
          <h1 className="font-display text-[clamp(1.7rem,7.5vw,4.6rem)] leading-[0.92] uppercase">
            <span className="block text-tc-white">{t.hero.l1}</span>
            <span className="block text-tc-white">{t.hero.l2}</span>
            <span className="block text-tc-gold">{t.hero.l3}</span>
          </h1>
          <div className="mt-5">
            <MagneticButton href={waQuote} variant="outline" className="!px-5 !py-2.5 text-[11px] backdrop-blur-sm">
              <WhatsAppIcon />
              {t.hero.cta}
            </MagneticButton>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {t.hero.services.map((label, i) => {
              const Icon = ICONS[i];
              return (
                <li key={label} className="flex items-center gap-2 text-tc-gold">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                  <span className="text-[9px] tracking-[0.22em] uppercase">{label}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex w-full items-center justify-between">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tc-gold"
              aria-label={`Instagram ${SITE.instagramHandle}`}
            >
              <InstagramIcon />
            </a>
            <div className="flex flex-col items-center text-[9px] tracking-[0.4em] text-tc-gold uppercase">
              <span className="scroll-line mb-2 inline-block h-7 w-px bg-tc-gold" />
              {t.hero.scroll}
            </div>
            <span className="w-5" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
