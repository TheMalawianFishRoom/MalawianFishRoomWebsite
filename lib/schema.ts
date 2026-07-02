import { siteConfig } from "./site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.name,

    url: siteConfig.url,

    logo: siteConfig.logo,

    email: siteConfig.email,

    telephone: siteConfig.phone,

    sameAs: [siteConfig.facebook],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "Store",

    name: siteConfig.name,

    image: siteConfig.logo,

    description: siteConfig.description,

    url: siteConfig.url,

    telephone: siteConfig.phone,

    email: siteConfig.email,

    address: {
      "@type": "PostalAddress",

      addressRegion: siteConfig.region,

      addressCountry: siteConfig.country,
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