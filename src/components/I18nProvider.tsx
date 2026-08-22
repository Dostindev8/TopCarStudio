"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof dict)[Lang];
  waQuote: string;
  waOffer: string;
} | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = sessionStorage.getItem("tc-lang");
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    sessionStorage.setItem("tc-lang", l);
    document.documentElement.lang = l === "en" ? "en" : "es";
  };

  const value = useMemo(() => {
    const t = dict[lang];
    return {
      lang,
      setLang,
      t,
      waQuote: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.wa.quote)}`,
      waOffer: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.wa.offer)}`,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n");
  return ctx;
}
