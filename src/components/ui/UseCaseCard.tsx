"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function UseCaseCard({
  index,
  icon: Icon,
  title,
  description,
  shine,
}: {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
  shine: boolean;
}) {
  return (
    <article className="use-case-card relative rounded-[var(--radius-card)] border border-[var(--tcs-border)] bg-[var(--tcs-panel)]/90 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <p className="font-display text-sm tracking-[0.2em] text-tc-gold">
          {String(index).padStart(2, "0")}
        </p>
        <span
          className={cn(
            "icon-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-tc-white",
            shine ? "icon-ring-lit border-tc-gold text-tc-gold" : "border-tc-gold/35",
          )}
          aria-hidden
        >
          <Icon className="relative z-10 h-5 w-5" strokeWidth={1.6} />
        </span>
      </div>
      <h3 className="mt-5 w-fit text-lg tracking-[0.22em] text-tc-gold uppercase">{title}</h3>
      <span className="mt-2 block h-px w-12 bg-tc-gold" aria-hidden />
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-tc-grey">{description}</p>
    </article>
  );
}
