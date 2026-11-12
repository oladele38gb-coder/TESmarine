import { ClientMarquee } from "@/components/home/ClientMarquee";
import { CtaBand } from "@/components/home/CtaBand";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FleetTeaser } from "@/components/home/FleetTeaser";
import { Hero } from "@/components/home/Hero";
import { HseSplit } from "@/components/home/HseSplit";
import { KeyFigures } from "@/components/home/KeyFigures";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { company } from "@/content/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  url: company.url,
  logo: `${company.url}/brand/tes-logo.svg`,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: `${company.address.area}, ${company.address.city}`,
    addressCountry: "NG",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <KeyFigures />
      <ServicesGrid />
      <FeaturedProjects />
      <FleetTeaser />
      <HseSplit />
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
