import { siteConfig } from "@/lib/site-config";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
    },
    {
      url: `${siteConfig.url}/about`,
    },
    {
      url: `${siteConfig.url}/catalog`,
    },
    {
      url: `${siteConfig.url}/contact`,
    },
    {
      url: `${siteConfig.url}/faq`,
    },
  ];
}