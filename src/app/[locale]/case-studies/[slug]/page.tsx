import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetailView from "@/components/case-studies/CaseStudyDetailView";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/data/caseStudies";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Pre-render every locale × every slug at build time.
export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CASE_STUDIES.map((study) => ({ locale, slug: study.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Étude de cas introuvable — ZM Acquisition" };
  }

  return {
    title: `${study.companyName} — Étude de cas | ZM Acquisition`,
    description: study.description.slice(0, 155),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyDetailView study={study} />
      </main>
      <Footer />
    </>
  );
}
