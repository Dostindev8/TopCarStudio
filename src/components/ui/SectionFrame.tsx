"use client";

import { ParticlesBackground, type ParticlesDensity, type ParticlesVariant } from "@/components/ui/ParticlesBackground";

export function SectionFrame({
  children,
  id,
  className = "",
  density = "low",
  variant = "gold-dust",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  density?: ParticlesDensity;
  variant?: ParticlesVariant;
}) {
  return (
    <section id={id} className={`relative isolate overflow-hidden bg-tc-black ${className}`}>
      <ParticlesBackground density={density} variant={variant} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
