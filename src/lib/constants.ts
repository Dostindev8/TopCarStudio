export const SITE = {
  name: "Top Car Studio",
  tagline: "Your cars. Your brand. Cinematic content.",
  slogan: "Cinematic. Premium. Timeless.",
  city: "Santo Domingo",
  country: "DO",
  phoneDisplay: "+1 (849) 265-2114",
  phoneTel: "+18492652114",
  whatsapp: "18492652114",
  instagramHandle: "@topcarsstudio",
  instagramUrl: "https://www.instagram.com/topcarsstudio/",
  /** TODO-CLIENTE: confirmar URLs exactas de TikTok/YouTube si existen */
  tiktokUrl: "https://www.instagram.com/topcarsstudio/",
  youtubeUrl: "https://www.instagram.com/topcarsstudio/",
  url: "https://topcarstudio.com",
} as const;

export const ASSETS = {
  landscape: "/brand/intro-landscape.png",
  intro: "/brand/intro-preloader.png",
  hero: "/brand/hero-noir.png",
  logo: "/brand/logo-official.png",
  logoClear: "/brand/logo-clear.png",
  audi: "/brand/portfolio-audi-q3.png",
  bmw: "/brand/portfolio-bmw-m4.png",
  sedan: "/brand/portfolio-sedan.png",
  studio: "/brand/studio-garage.png",
} as const;

export const WA = {
  quote: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero cotizar un paquete de contenido")}`,
  offer: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero info sobre la oferta de los primeros 3 clientes.")}`,
} as const;

/**
 * Cupos de la oferta de lanzamiento.
 * Editar solo estos números — no hace falta tocar JSX.
 * remainingSlots = cupos libres; totalSlots = cupo máximo (3 en el copy actual).
 * TODO-CLIENTE: actualizar remainingSlots cuando se ocupe un cupo.
 */
export const LAUNCH_OFFER = {
  totalSlots: 3,
  remainingSlots: 2,
} as const;

export const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#estudio", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const DOT_NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#oferta", label: "Oferta" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const HERO_SERVICES = [
  { id: "prod", label: "Producción" },
  { id: "edit", label: "Edición" },
  { id: "vfx", label: "VFX" },
  { id: "content", label: "Contenido" },
] as const;

export const SERVICES = [
  {
    id: "produccion",
    title: "Producción Audiovisual",
    copy: "Dirección, cámara y lighting cinematográfico para que cada vehículo se sienta de comercial de lujo.",
  },
  {
    id: "edicion",
    title: "Edición Profesional",
    copy: "Ritmo, color y sonido pensados para retener en el feed y convertir vistas en consultas.",
  },
  {
    id: "vfx",
    title: "VFX y Motion Graphics",
    copy: "Overlays de specs, HUD y gráficos de marca que elevan el auto sin ensuciar la imagen.",
  },
  {
    id: "redes",
    title: "Contenido para Redes Sociales",
    copy: "Piezas cortadas para Instagram, Reels y stories, listas para publicar con consistencia de marca.",
  },
  {
    id: "reels",
    title: "Reels Comerciales",
    copy: "Spots verticales de alto impacto para venta, renta, rifa o lanzamiento de inventario.",
  },
] as const;

export const VERTICALS = [
  {
    id: "ventas",
    title: "Ventas",
    copy: "El auto se ve más deseable. El comprador entiende el valor antes de preguntar el precio.",
  },
  {
    id: "rentas",
    title: "Rentas",
    copy: "Contenido que transmite experiencia, no solo un catálogo. Ideal para flotas y lujo por día.",
  },
  {
    id: "rifas",
    title: "Rifas",
    copy: "Urgencia visual y deseo: el premio se siente real, cinematográfico y cercano.",
  },
  {
    id: "promocion",
    title: "Promoción",
    copy: "Marca, concesionario o servicio: el vehículo como protagonista de una historia premium.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Agenda tu cita por WhatsApp",
    copy: "Un mensaje. Definimos fecha, vehículo y objetivo comercial.",
  },
  {
    step: "02",
    title: "Definimos el paquete y el vehículo",
    copy: "Look cinematográfico, duración, formatos de redes y entrega.",
  },
  {
    step: "03",
    title: "Día de producción",
    copy: "Grabación dirigida: luz, movimiento y detalle de producto.",
  },
  {
    step: "04",
    title: "Entrega editada + VFX",
    copy: "Piezas listas para publicar. Cinematic. Premium. Timeless.",
  },
] as const;

export const PORTFOLIO = [
  {
    id: "sedan",
    title: "Honda",
    type: "image" as const,
    src: ASSETS.sedan,
  },
  {
    id: "audi-q3",
    title: "Audi Q3",
    type: "image" as const,
    src: ASSETS.audi,
  },
  {
    id: "bmw-m4",
    title: "BMW M4",
    type: "image" as const,
    src: ASSETS.bmw,
  },
] as const;
