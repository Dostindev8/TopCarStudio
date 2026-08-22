import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Verticals } from "@/components/sections/Verticals";
import { Portfolio } from "@/components/sections/Portfolio";
import { Offer } from "@/components/sections/Offer";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { DotNav } from "@/components/sections/DotNav";
import { SITE } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.tagline,
  telephone: SITE.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressCountry: SITE.country,
  },
  url: SITE.url,
  sameAs: [SITE.instagramUrl],
  areaServed: "DO",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <DotNav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Verticals />
        <Portfolio />
        <Offer />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
