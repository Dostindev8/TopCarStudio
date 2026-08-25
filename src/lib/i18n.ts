export type Lang = "es" | "en";

export const dict = {
  es: {
    nav: {
      servicios: "Servicios",
      portfolio: "Portfolio",
      about: "Sobre nosotros",
      contacto: "Contacto",
      menu: "Abrir menú",
      close: "Cerrar menú",
    },
    hero: {
      l1: "Tus autos.",
      l2: "Tu marca.",
      l3: "Contenido cinematográfico.",
      cta: "Agendar cita",
      scroll: "Scroll",
      services: ["Producción", "Edición", "VFX", "Contenido"],
    },
    marquee: ["PRODUCCIÓN", "EDICIÓN", "VFX", "CONTENIDO PARA REDES", "REELS COMERCIALES"],
    services: {
      kicker: "Servicios",
      title: "Lo que producimos",
      items: [
        { title: "Producción Audiovisual", copy: "Dirección, cámara y lighting cinematográfico para que cada vehículo se sienta de comercial de lujo." },
        { title: "Edición Profesional", copy: "Ritmo, color y sonido pensados para retener en el feed y convertir vistas en consultas." },
        { title: "VFX y Motion Graphics", copy: "Overlays de specs, HUD y gráficos de marca que elevan el auto sin ensuciar la imagen." },
        { title: "Contenido para Redes Sociales", copy: "Piezas cortadas para Instagram, Reels y stories, listas para publicar con consistencia de marca." },
        { title: "Reels Comerciales", copy: "Spots verticales de alto impacto para venta, renta, rifa o lanzamiento de inventario." },
      ],
    },
    verticals: {
      kicker: "Para quién es esto",
      title: "Vender, rentar, rifar o promocionar: así deben verse.",
      items: [
        { title: "Ventas", copy: "El auto se ve más deseable. El comprador entiende el valor antes de preguntar el precio." },
        { title: "Rentas", copy: "Contenido que transmite experiencia, no solo un catálogo. Ideal para flotas y lujo por día." },
        { title: "Rifas", copy: "Urgencia visual y deseo: el premio se siente real, cinematográfico y cercano." },
        { title: "Promoción", copy: "Marca, concesionario o servicio: el vehículo como protagonista de una historia premium." },
      ],
    },
    portfolio: { kicker: "Portfolio", title: "Reel Wall", more: "Ver más en Instagram", close: "Cerrar" },
    offer: {
      kicker: "Urgencia",
      title: "Oferta especial – solo para los primeros 3 clientes",
      copy: 'Comenta o escríbenos "INFO" y recibe acceso a una oferta única: paquete de contenido con 1 mes de cobertura completa.',
      slots: "cupos disponibles",
      cta: "Reclamar mi cupo por WhatsApp",
    },
    process: {
      kicker: "Proceso",
      title: "Cómo funciona",
      items: [
        { title: "Agenda tu cita por WhatsApp", copy: "Un mensaje. Definimos fecha, vehículo y objetivo comercial." },
        { title: "Definimos el paquete y el vehículo", copy: "Look cinematográfico, duración, formatos de redes y entrega." },
        { title: "Día de producción", copy: "Grabación dirigida: luz, movimiento y detalle de producto." },
        { title: "Entrega editada + VFX", copy: "Piezas listas para publicar. Cinematic. Premium. Timeless." },
      ],
    },
    about: {
      kicker: "Sobre el estudio",
      copy: "En Top Car Studio creamos contenido pensado para hacer que tus vehículos, servicios y ofertas destaquen con una imagen profesional y cinematográfica. Convertimos vistas en clientes.",
      ig: "Instagram",
    },
    contact: {
      title1: "Haz que tus vehículos",
      title2: "destaquen",
      cta: "Agenda tu cita por WhatsApp",
    },
    footer: {
      rights: "Santo Domingo, RD.",
      nav: "Navegación",
      legalSoon: "Términos y privacidad: páginas legales pendientes (no hay enlace activo).",
    },
    wa: {
      quote: "Hola, quiero cotizar un paquete de contenido",
      offer: "Hola, quiero info sobre la oferta de los primeros 3 clientes.",
    },
  },
  en: {
    nav: {
      servicios: "Services",
      portfolio: "Portfolio",
      about: "About",
      contacto: "Contact",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      l1: "Your cars.",
      l2: "Your brand.",
      l3: "Cinematic content.",
      cta: "Book a session",
      scroll: "Scroll",
      services: ["Production", "Editing", "VFX", "Content"],
    },
    marquee: ["PRODUCTION", "EDITING", "VFX", "SOCIAL CONTENT", "COMMERCIAL REELS"],
    services: {
      kicker: "Services",
      title: "What we produce",
      items: [
        { title: "Audiovisual Production", copy: "Direction, camera and cinematic lighting so every vehicle feels like a luxury commercial." },
        { title: "Professional Editing", copy: "Pace, color and sound built to hold attention in the feed and turn views into inquiries." },
        { title: "VFX & Motion Graphics", copy: "Spec overlays, HUD and brand graphics that elevate the car without cluttering the frame." },
        { title: "Social Content", copy: "Cuts for Instagram, Reels and stories, ready to publish with consistent branding." },
        { title: "Commercial Reels", copy: "High-impact vertical spots for sales, rentals, raffles or inventory launches." },
      ],
    },
    verticals: {
      kicker: "Who this is for",
      title: "Sell, rent, raffle or promote — they should look like this.",
      items: [
        { title: "Sales", copy: "The car looks more desirable. The buyer understands the value before asking the price." },
        { title: "Rentals", copy: "Content that sells an experience, not just a catalog. Ideal for fleets and luxury-by-the-day." },
        { title: "Raffles", copy: "Visual urgency and desire: the prize feels real, cinematic and close." },
        { title: "Promotion", copy: "Brand, dealership or service: the vehicle as the lead of a premium story." },
      ],
    },
    portfolio: { kicker: "Portfolio", title: "Reel Wall", more: "See more on Instagram", close: "Close" },
    offer: {
      kicker: "Urgency",
      title: "Special offer – first 3 clients only",
      copy: 'Comment or message "INFO" for a unique package: a full month of cinematic coverage.',
      slots: "slots available",
      cta: "Claim my slot on WhatsApp",
    },
    process: {
      kicker: "Process",
      title: "How it works",
      items: [
        { title: "Book via WhatsApp", copy: "One message. We lock date, vehicle and commercial goal." },
        { title: "We define the package", copy: "Cinematic look, runtime, social formats and delivery." },
        { title: "Production day", copy: "Directed capture: light, motion and product detail." },
        { title: "Edited delivery + VFX", copy: "Ready to publish. Cinematic. Premium. Timeless." },
      ],
    },
    about: {
      kicker: "The studio",
      copy: "At Top Car Studio we create content so your vehicles, services and offers stand out with a professional cinematic image. We turn views into clients.",
      ig: "Instagram",
    },
    contact: {
      title1: "Make your vehicles",
      title2: "stand out",
      cta: "Book via WhatsApp",
    },
    footer: {
      rights: "Santo Domingo, DR.",
      nav: "Navigate",
      legalSoon: "Terms and privacy: legal pages pending (no active link yet).",
    },
    wa: {
      quote: "Hi, I want a quote for a content package",
      offer: "Hi, I want info on the first 3 clients offer.",
    },
  },
} as const;
