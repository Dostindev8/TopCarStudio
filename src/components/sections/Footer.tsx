"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

export function Footer() {
  const year = new Date().getFullYear();
  const { t, waQuote } = useI18n();
  const links = [
    { href: "#servicios", label: t.nav.servicios },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#estudio", label: t.nav.about },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--tc-line)] bg-tc-black">
      <ParticlesBackground density="low" variant="gold-dust" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Image
            src={ASSETS.logoClear}
            alt={SITE.name}
            width={88}
            height={60}
            quality={100}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-tc-grey">{SITE.tagline}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-tc-gold uppercase">{t.footer.nav}</p>
          <ul className="mt-4 space-y-2">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-tc-grey hover:text-tc-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-tc-gold uppercase">{t.nav.servicios}</p>
          <ol className="mt-4 space-y-2">
            {t.services.items.map((s, i) => (
              <li key={s.title} className="text-sm text-tc-grey">
                0{i + 1} {s.title}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-tc-gold uppercase">{t.nav.contacto}</p>
          <a href={`tel:${SITE.phoneTel}`} className="mt-4 block text-sm text-tc-white">
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-tc-gold"
            aria-label={`Instagram ${SITE.instagramHandle}`}
          >
            <InstagramIcon />
            {SITE.instagramHandle}
          </a>
          <a
            href={waQuote}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-tc-gold"
            aria-label={`WhatsApp ${SITE.phoneDisplay}`}
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <p className="mt-6 text-[11px] text-tc-grey">{t.footer.legalSoon}</p>
        </div>
      </div>
      <p className="relative z-10 border-t border-[var(--tc-line)] px-5 py-6 text-center text-xs text-tc-grey">
        © {year} {SITE.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
