"use client";

import Image from "next/image";
import { ASSETS, SITE } from "@/lib/constants";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();
  return (
    <footer className="border-t border-[var(--tc-line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src={ASSETS.logoClear} alt={SITE.name} width={88} height={60} quality={100} className="h-14 w-auto object-contain" />
          <p className="text-xs text-tc-grey">{SITE.tagline}</p>
        </div>
        <p className="text-center text-xs text-tc-grey">
          © {year} {SITE.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
