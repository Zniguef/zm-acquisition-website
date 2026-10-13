import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zm-acquisition.com";
  const locales = ["fr", "en", "ar"];

  const homeRoutes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "fr" ? 1.0 : 0.9,
    alternates: {
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        "x-default": `${baseUrl}/fr`,
      },
    },
  }));

  const privacyRoutes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/privacy`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.3,
    alternates: {
      languages: {
        fr: `${baseUrl}/fr/privacy`,
        en: `${baseUrl}/en/privacy`,
        ar: `${baseUrl}/ar/privacy`,
        "x-default": `${baseUrl}/fr/privacy`,
      },
    },
  }));

  return [...homeRoutes, ...privacyRoutes];
}
