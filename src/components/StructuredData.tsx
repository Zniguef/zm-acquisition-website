import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export default async function StructuredData({ locale }: Props) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zm-acquisition.com";
  const tFaq = await getTranslations({ locale, namespace: "faq" });

  const localizedData = {
    fr: {
      name: "ZM Acquisition",
      description:
        "Générer un flux régulier d’opportunités commerciales grâce à l’acquisition digitale, sans dépendre de sources traditionnelles incontrôlables et imprévisibles.",
      serviceName: "Acquisition digitale & Génération de leads",
    },
    en: {
      name: "ZM Acquisition",
      description:
        "Generate a steady stream of sales opportunities through digital acquisition, without relying on unpredictable and uncontrollable traditional sources.",
      serviceName: "Digital Acquisition & Lead Generation",
    },
    ar: {
      name: "ZM Acquisition",
      description:
        "توليد تدفق منتظم من الفرص التجارية بفضل الاكتساب الرقمي، دون الاعتماد على المصادر التقليدية غير القابلة للتحكم وغير المتوقعة.",
      serviceName: "اكتساب العملاء الرقمي وتوليد الفرص التجارية",
    },
  }[locale] || {
    name: "ZM Acquisition",
    description: "Développez votre activité commerciale avec l'acquisition digitale.",
    serviceName: "Acquisition Digitale",
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "ZM Acquisition",
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/images/Logo.png`,
    image: `${siteUrl}/images/Logo.png`,
    description: localizedData.description,
    telephone: "+212721346136",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "MA",
    },
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "MENA" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/zm-acquisition/",
      "https://www.instagram.com/zm_acquisition/",
      "https://www.facebook.com/profile.php?id=61569770715656",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: localizedData.serviceName,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Génération de leads qualifiés & Acquisition B2B",
            description: "Génération de prospects qualifiés prêts à réserver vos services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction de Funnels & Landing Pages à haute conversion",
            description: "Pages de destination persuasives conçues pour maximiser les réservations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestion et optimisation de campagnes publicitaires (Meta Ads)",
            description: "Pilotage quotidien pour réduire le coût d'acquisition et stabiliser le retour sur investissement.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: tFaq("q1"),
        acceptedAnswer: {
          "@type": "Answer",
          text: tFaq("a1"),
        },
      },
      {
        "@type": "Question",
        name: tFaq("q2"),
        acceptedAnswer: {
          "@type": "Answer",
          text: tFaq("a2"),
        },
      },
      {
        "@type": "Question",
        name: tFaq("q3"),
        acceptedAnswer: {
          "@type": "Answer",
          text: tFaq("a3"),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
