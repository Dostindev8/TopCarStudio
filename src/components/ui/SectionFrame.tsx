"use client";

import Image from "next/image";

export function SectionFrame({
  src,
  children,
  id,
  className = "",
}: {
  src: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt="" fill quality={90} sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-tc-black/82" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
