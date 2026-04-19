import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");

  return (
    <>
      <Navbar />
      <main style={{ padding: '80px 32px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', color: '#111' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px', color: '#1F3C88' }}>{t("title")}</h1>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>{t("lastUpdated")}</p>
        
        <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>{t("intro")}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{t("section1Title")}</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#444' }}>{t("section1Text")}</p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{t("section2Title")}</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#444' }}>{t("section2Text")}</p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{t("section3Title")}</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#444' }}>{t("section3Text")}</p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{t("section4Title")}</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#444' }}>{t("section4Text")}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
