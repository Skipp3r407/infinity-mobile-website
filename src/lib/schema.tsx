import { site } from "@/lib/site";
import { services } from "@/lib/services";

export function localBusinessJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    name: site.legalName,
    alternateName: site.name,
    description: `${site.tagline}. Serving ${site.location}. ${site.status}.`,
    ...(baseUrl ? { image: `${baseUrl}/logo.png`, url: baseUrl } : { image: "/logo.png" }),
    telephone: site.phoneTel,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.owner,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Citrus County",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Citrus County, Florida",
    },
    priceRange: "$$",
    knowsAbout: services.map((s) => s.title),
    slogan: site.tagline,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
