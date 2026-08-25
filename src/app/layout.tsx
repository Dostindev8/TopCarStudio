import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "@/lib/constants";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CopyGuard } from "@/components/CopyGuard";
import { I18nProvider } from "@/components/I18nProvider";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Top Car Studio | Producción Audiovisual Cinematográfica para Vehículos — RD",
  description:
    "Contenido cinematográfico para vender, rentar, rifar o promocionar tu vehículo. Producción, edición y VFX de alto impacto. Agenda tu cita hoy.",
  openGraph: {
    title: "Top Car Studio",
    description: SITE.tagline,
    images: [{ url: "/brand/hero-noir.png", width: 1200, height: 630, alt: SITE.name }],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
    images: ["/brand/hero-noir.png"],
  },
  icons: {
    icon: "/brand/logo-clear.png",
    apple: "/brand/logo-clear.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body className="bg-tc-black font-sans antialiased">
        <div className="film-grain" aria-hidden />
        <I18nProvider>
          <CopyGuard />
          <Preloader />
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </I18nProvider>
        <MetaPixel />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
