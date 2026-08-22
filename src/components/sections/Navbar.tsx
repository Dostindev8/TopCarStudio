"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ASSETS, SITE } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/components/I18nProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang, waQuote } = useI18n();
  const links = [
    { href: "#servicios", label: t.nav.servicios },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#estudio", label: t.nav.about },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[var(--tc-line)] bg-tc-black/85 backdrop-blur-md sm:h-20">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center">
          <Image
            id="nav-logo"
            src={ASSETS.logoClear}
            alt={SITE.name}
            width={160}
            height={160}
            quality={100}
            className="h-11 w-auto max-w-[7.5rem] object-contain sm:h-16 sm:max-w-[9rem]"
            priority
          />
        </a>
        <nav className="hidden items-center gap-7 xl:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.22em] text-tc-white uppercase transition-colors hover:text-tc-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-tc-gold/40 text-[10px] tracking-[0.16em]">
            <button
              type="button"
              className={`px-2.5 py-1 ${lang === "es" ? "bg-tc-gold text-tc-black" : "text-tc-gold"}`}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 ${lang === "en" ? "bg-tc-gold text-tc-black" : "text-tc-gold"}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <div className="hidden lg:block">
            <MagneticButton href={waQuote} variant="outline" className="!px-5 !py-2 text-[11px]">
              <WhatsAppIcon />
              WhatsApp
            </MagneticButton>
          </div>
          <button
            type="button"
            className="text-tc-gold lg:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[80] flex flex-col bg-[#0A0A0A] lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <Image src={ASSETS.logoClear} alt="" width={80} height={54} className="h-12 w-auto object-contain" />
            <button type="button" className="text-tc-gold" aria-label={t.nav.close} onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-7 px-6">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-3xl tracking-wide text-tc-gold uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <MagneticButton href={waQuote} variant="outline" className="mt-4">
              <WhatsAppIcon />
              WhatsApp
            </MagneticButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
