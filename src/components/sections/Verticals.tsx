"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, Megaphone, ShoppingCart, Ticket } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { UseCaseCard } from "@/components/ui/UseCaseCard";

const ICONS = [ShoppingCart, CalendarDays, Ticket, Megaphone] as const;

export function Verticals() {
  const { t } = useI18n();
  const grid = useRef<HTMLDivElement>(null);
  const [shine, setShine] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setShine((n) => (n + 1) % ICONS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = grid.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = root.querySelectorAll("article");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <SectionFrame id="para-quien" density="medium" variant="gold-drift" className="border-y border-[var(--tc-line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="section-kicker">{t.verticals.kicker}</p>
        <h2 className="section-title mt-3 max-w-3xl">{t.verticals.title}</h2>
        <div ref={grid} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {t.verticals.items.map((v, i) => (
            <UseCaseCard
              key={v.title}
              index={i + 1}
              icon={ICONS[i]!}
              title={v.title}
              description={v.copy}
              shine={shine === i}
            />
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
