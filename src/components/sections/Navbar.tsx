"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ASSETS, SITE } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/components/I18nProvider";

const SECTION_IDS = ["inicio", "servicios", "portfolio", "estudio", "contacto"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const overlayRef = useRef<HTMLDivElement>(null);
  const { t, lang, setLang, waQuote } = useI18n();
  const menuId = useId();
  const links = [
    { href: "#servicios", label: t.nav.servicios },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#estudio", label: t.nav.about },
    { href: "#contacto", label: t.nav.contacto },
  ];

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !overlayRef.current) return;
      const nodes = overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    overlayRef.current?.querySelector("button")?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[var(--tc-line)] bg-tc-black/90 backdrop-blur-md sm:h-20">
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
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[11px] tracking-[0.22em] uppercase transition-colors hover:text-tc-gold ${
                active === item.href ? "text-tc-gold" : "text-tc-white"
              }`}
              aria-current={active === item.href ? "page" : undefined}
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
              aria-pressed={lang === "es"}
            >
              ES
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 ${lang === "en" ? "bg-tc-gold text-tc-black" : "text-tc-gold"}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <div className="block">
            <MagneticButton href={waQuote} variant="outline" className="!px-3 !py-1.5 text-[10px] sm:!px-5 sm:!py-2 sm:text-[11px]">
              <WhatsAppIcon />
              {t.hero.cta}
            </MagneticButton>
          </div>
          <button
            type="button"
            className="text-tc-gold xl:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id={menuId}
          ref={overlayRef}
          className="fixed inset-0 z-[80] flex flex-col bg-[#0A0A0A] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menu}
        >
          <div className="flex h-16 items-center justify-between px-4">
            <Image src={ASSETS.logoClear} alt="" width={80} height={54} className="h-12 w-auto object-contain" />
            <button type="button" className="text-tc-gold" aria-label={t.nav.close} onClick={close}>
              <X />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-7 px-6">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-3xl tracking-wide text-tc-gold uppercase"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <MagneticButton href={waQuote} variant="outline" className="mt-4">
              <WhatsAppIcon />
              {t.hero.cta}
            </MagneticButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
