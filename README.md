# Top Car Studio — Website

Landing cinematográfica de una sola página. Stack: **Next.js 15 (App Router)**, TypeScript, Tailwind 4, Three.js / R3F, GSAP + Lenis, Vercel Analytics.

Headlines: **Anton** (condensada, mayúsculas). El serif del wordmark vive solo en el PNG del logo — nunca se recrea en CSS.

## Instalación

```bash
npm install
npm run dev
```

`http://localhost:3000` · `npm run build` · `npm start`

## Variables de entorno

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel. Vacío = no se carga. |

Cupos de oferta: `LAUNCH_OFFER.remainingSlots` en `src/lib/constants.ts`.

## Assets en `public/brand/`

| Archivo | Uso |
|---|---|
| `intro-preloader.png` | Fondo del intro (Imagen 1) |
| `hero-home.png` | Hero / Open Graph (Imagen 2) |
| `portfolio-audi-q3.png` | Portfolio + Sobre el estudio (Imagen 3, 9:16) |
| `portfolio-bmw-m4.png` | Portfolio (Imagen 4, 9:16) |
| `logo-official.png` | Emblema (nav, intro, favicon) |
| `hero-civic-forest.png` | Portfolio Civic |

Piezas futuras del grid deben mantener **logo arriba + auto abajo, 9:16**, para homogeneidad.

## Placeholders (cliente)

- Logo PNG transparente y SVG editable (hoy el emblema viene con fondo en algunas piezas).
- Fondo de carretera **sin** barra LOADING incrustada, para animar el logo aparte.
- Videos master (WebM + MP4) Mercedes / Durango HUD.
- URLs reales de TikTok y YouTube (hoy apuntan a Instagram).
- Cupos restantes de la oferta.
- `SITE.url` de producción.

## Contacto

WhatsApp `+1 (849) 265-2114` · Instagram [@topcarsstudio](https://www.instagram.com/topcarsstudio/). Sin formulario de email. Sin PII en `localStorage`.
