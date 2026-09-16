import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  return {
    title: "Merci | ZM Acquisition",
    description: "Votre demande a bien été reçue. Notre équipe examine vos informations.",
  };
}

export default async function ThankYouStarterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === "ar";
  const isFr = locale === "fr";

  const copy = {
    badge: isAr ? "تم الاستلام ✓" : isFr ? "Reçu ✓" : "Received ✓",
    heading: isAr ? "شكراً لك!" : isFr ? "Merci !" : "Thank you!",
    sub: isAr
      ? "لقد تلقينا طلبك بنجاح. يقوم فريقنا بمراجعة معلوماتك وسنتواصل معك قريباً."
      : isFr
      ? "Nous avons bien reçu votre demande. Notre équipe examine vos informations et reviendra vers vous très prochainement."
      : "We have received your request. Our team is reviewing your information and will get back to you shortly.",

    step1Title: isAr ? "نحن ندرس طلبك" : isFr ? "Nous étudions votre dossier" : "We review your request",
    step1Text: isAr
      ? "يقوم فريقنا بمراجعة التفاصيل لتحديد أفضل الحلول المناسبة لمشروعك."
      : isFr
      ? "Notre équipe analyse les détails de votre demande pour évaluer votre projet."
      : "Our team examines your details to assess the best solutions for your business.",

    step2Title: isAr ? "متابعة مخصصة" : isFr ? "Retour sous 24 à 48 heures" : "Follow-up within 24-48 hours",
    step2Text: isAr
      ? "سنتواصل معك عبر البريد الإلكتروني أو الهاتف مع الخطوات والتوصيات المناسبة."
      : isFr
      ? "Nous reviendrons vers vous par e-mail ou téléphone avec les prochaines étapes adaptées."
      : "We will get back to you via email or phone with the next recommended steps.",

    backHome: isAr ? "← العودة إلى الصفحة الرئيسية" : isFr ? "← Retour à l'accueil" : "← Back to home",

    socialProof: isAr
      ? "أكثر من 20 عملاً خدمياً وثق بنا لبناء منظومة اكتساب عملائهم"
      : isFr
      ? "Plus de 20 entreprises de services nous ont fait confiance pour construire leur système d'acquisition"
      : "20+ service businesses trusted us to build their client acquisition system",
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 90px)",
          background: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        <div style={{ maxWidth: "640px", width: "100%", textAlign: "center" }}>

          {/* ── Animated check circle ─────────────────────────────────────── */}
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px auto",
              boxShadow: "0 8px 32px rgba(29,78,216,0.30)",
              animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: "drawCheck 0.4s 0.3s ease both" }}
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>

          {/* ── Badge ─────────────────────────────────────────────────────── */}
          <span
            style={{
              display: "inline-block",
              background: "#dcfce7",
              border: "1px solid #bbf7d0",
              color: "#15803d",
              fontSize: "13px",
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: "100px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {copy.badge}
          </span>

          {/* ── Heading ───────────────────────────────────────────────────── */}
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 900,
              color: "#0f172a",
              margin: "0 0 16px 0",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {copy.heading}
          </h1>

          {/* ── Subtext ───────────────────────────────────────────────────── */}
          <p
            style={{
              fontSize: "17px",
              color: "#475569",
              lineHeight: 1.7,
              margin: "0 auto 48px auto",
              maxWidth: "500px",
            }}
          >
            {copy.sub}
          </p>

          {/* ── What happens next ─────────────────────────────────────────── */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "36px",
              marginBottom: "40px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              textAlign: isAr ? "right" : "left",
            }}
          >
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 24px 0",
              }}
            >
              {isAr ? "ما الذي يحدث بعد ذلك" : isFr ? "Ce qui se passe maintenant" : "What happens next"}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { step: "1", title: copy.step1Title, text: copy.step1Text, icon: "🔍" },
                { step: "2", title: copy.step2Title, text: copy.step2Text, icon: "📋" },
              ].map((item, idx, arr) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Step indicator + connector line */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#eff6ff",
                        border: "2px solid #bfdbfe",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    {idx < arr.length - 1 && (
                      <div
                        style={{
                          width: "2px",
                          height: "32px",
                          background: "#e2e8f0",
                          margin: "4px 0",
                        }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div style={{ paddingBottom: idx < arr.length - 1 ? "24px" : "0", paddingTop: "6px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#0f172a",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Social proof strip ────────────────────────────────────────── */}
          <p
            style={{
              fontSize: "13px",
              color: "#94a3b8",
              margin: "0 0 32px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            <span>⭐⭐⭐⭐⭐</span>
            <span>{copy.socialProof}</span>
          </p>

          {/* ── Only ONE redirect button to home ───────────────────────────── */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/"
              className="starter-home-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1d4ed8",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(29, 78, 216, 0.3)",
              }}
            >
              {copy.backHome}
            </Link>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes drawCheck {
          from { stroke-dashoffset: 40; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        .starter-home-btn {
          transition: all 0.2s ease !important;
        }
        .starter-home-btn:hover {
          background: #1e40af !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(29, 78, 216, 0.4) !important;
        }
      `}</style>
    </>
  );
}
