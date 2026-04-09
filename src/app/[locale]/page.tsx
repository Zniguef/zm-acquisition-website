import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Reviews from "@/components/sections/Reviews";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering for this page.
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Results />
        <Reviews />
        <HowItWorks />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

