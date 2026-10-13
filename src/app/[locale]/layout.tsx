import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zm-acquisition.com";

  const metaByLocale: Record<
    string,
    { title: string; description: string; ogLocale: string }
  > = {
    fr: {
      title: "ZM Acquisition | Développez votre activité commerciale",
      description:
        "Générer un flux régulier d’opportunités commerciales grâce à l’acquisition digitale, sans dépendre de sources traditionnelles incontrôlables et imprévisibles.",
      ogLocale: "fr_MA",
    },
    en: {
      title: "ZM Acquisition | Scale and Grow Your Business",
      description:
        "Generate a steady stream of sales opportunities through digital acquisition, without relying on unpredictable and uncontrollable traditional sources.",
      ogLocale: "en_US",
    },
    ar: {
      title: "ZM Acquisition | طوّر نشاطك التجاري",
      description:
        "توليد تدفق منتظم من الفرص التجارية بفضل الاكتساب الرقمي، دون الاعتماد على المصادر التقليدية غير القابلة للتحكم وغير المتوقعة.",
      ogLocale: "ar_MA",
    },
  };

  const meta = metaByLocale[locale] || metaByLocale.fr;

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    applicationName: "ZM Acquisition",
    authors: [{ name: "ZM Acquisition" }],
    creator: "ZM Acquisition",
    publisher: "ZM Acquisition",
    formatDetection: {
      telephone: true,
      email: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        ar: "/ar",
        "x-default": "/fr",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      siteName: "ZM Acquisition",
      locale: meta.ogLocale,
      type: "website",
      images: [
        {
          url: "/images/Logo.png",
          width: 1200,
          height: 630,
          alt: "ZM Acquisition",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/Logo.png"],
    },
    icons: {
      icon: "/images/iconLogo.png",
      apple: "/images/iconLogo.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google1e5c98f12096387e",
      other: {
        "facebook-domain-verification": ["az4vro2biaf27iqbb4tcrit3obdzqv"],
      },
    },
  };
}

// Required for static export: pre-render a page for each locale at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming locale is supported; 404 otherwise.
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this layout and all its pages.
  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={poppins.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Preconnect & DNS prefetch for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0TQ1TQD3JC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0TQ1TQD3JC');
          `}
        </Script>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2061581244777975');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white font-sans antialiased" suppressHydrationWarning>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2061581244777975&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
