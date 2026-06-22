import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { CASE_STUDIES } from "@/data/caseStudies";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: "Études de cas — ZM Acquisition",
    description:
      "Résultats documentés de campagnes réelles. Leads générés, coûts, ROAS et ROI pour chaque client.",
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudiesPage");

  return (
    <>
      <Navbar />
      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

        {/* ── Page Header ──────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#fff",
            borderBottom: "1px solid #e2e8f0",
            padding: "80px 32px 60px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                color: "#1d4ed8",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "100px",
                marginBottom: "20px",
              }}
            >
              {t("heroLabel")}
            </span>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                color: "#0f172a",
                margin: "0 0 16px 0",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {t("heroHeadline1")}{" "}
              <span style={{ color: "#2563eb" }}>{t("heroHeadline2")}</span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                margin: "0 auto 40px auto",
                maxWidth: "560px",
                lineHeight: 1.7,
              }}
            >
              {t("heroSubtext")}
            </p>

            {/* Aggregate stats */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "48px",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: `${CASE_STUDIES.length}`, label: t("stat1Label") },
                { value: "1 102+", label: t("stat2Label") },
                { value: "$0.88", label: t("stat3Label") },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: 900,
                      color: "#1d4ed8",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cards Grid ───────────────────────────────────────────────────── */}
        <section style={{ padding: "60px 32px 80px 32px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "28px",
              }}
            >
              {CASE_STUDIES.map((study, index) => (
                <CaseStudyCard key={study.slug} study={study} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#fff",
            borderTop: "1px solid #e2e8f0",
            padding: "64px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 900,
                color: "#0f172a",
                margin: "0 0 12px 0",
                letterSpacing: "-0.02em",
              }}
            >
              {t("ctaHeadline")}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#475569",
                margin: "0 0 32px 0",
                lineHeight: 1.6,
              }}
            >
              {t("ctaSubtext")}
            </p>
            <a
              href="/#contact"
              style={{
                display: "inline-block",
                background: "#1d4ed8",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 36px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(29,78,216,0.25)",
                transition: "opacity 0.15s",
              }}
            >
              {t("ctaButton")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
