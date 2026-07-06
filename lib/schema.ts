import { siteConfig } from "./site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.name,

    url: siteConfig.url,

    logo: `${siteConfig.url}${siteConfig.logo}`,

    email: siteConfig.email,

    telephone: siteConfig.phone,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
    },

    sameAs: [siteConfig.facebook],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "PetStore",

    name: siteConfig.name,

    image: `${siteConfig.url}${siteConfig.logo}`,

    description: siteConfig.description,

    url: siteConfig.url,

    telephone: siteConfig.phone,

    email: siteConfig.email,

    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },

    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
    },

    areaServed: {
      "@type": "Country",
      name: "Canada",
    },

    keywords: siteConfig.keywords,

    sameAs: [siteConfig.facebook],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,
  };
}
