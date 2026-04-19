'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const CHECKS = [
  'check4',
  'check2',
  'check6',
  'check5',
  'check3',
  'check1',
] as const;

const STATS = [
  { number: 'stat1Number', label: 'stat1Label' },
  { number: 'stat2Number', label: 'stat2Label' },
  { number: 'stat3Number', label: 'stat3Label' },
] as const;

export default function Hero() {
  const t = useTranslations('hero');

  function scrollToContact(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        background: 'radial-gradient(100% 100% at 50% 0%, #eef6ff 0%, #ffffff 100%)',
        padding: '80px 32px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
        }}
      >
        {/* Top: 2-column Grid */}
        <div
          className="hero-top-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div className="hero-content">
            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#0f172a', /* Dark slate navy color exactly like the image */
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ display: 'block' }}>{t('headline1')}</span>
              <span style={{ display: 'block' }}>{t('headline2')}</span>
              <span style={{ display: 'block' }}>{t('headline3')}</span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: '18px',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '480px',
              }}
            >
              {t('subtext')}
            </p>

            {/* CTA Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a
                href="#contact-form"
                onClick={scrollToContact}
                id="hero-cta"
                style={{
                  display: 'inline-block',
                  background: '#FDE047', /* Bright yellow from image */
                  color: '#0f172a',
                  fontSize: '16px',
                  fontWeight: 700,
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 14px rgba(253, 224, 71, 0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#facc15';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FDE047';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {t('cta')}
              </a>

              {/* CTA Note */}
              <p
                style={{
                  fontSize: '14px',
                  color: '#475569',
                  margin: '0',
                }}
              >
                {t('ctaNote')}
              </p>
            </div>
          </div>

          {/* Right Column (Image Mockup) */}
          <div className="hero-mockup-wrapper" style={{ width: '100%' }}>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Workspace stats"
              width={800}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                objectFit: 'cover',
                display: 'block',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                border: '8px solid white',
              }}
              unoptimized
            />
          </div>
        </div>

        {/* Bottom part (Stats + Checks) */}
        <div className="hero-bottom-section" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Stats Row */}
          <div
            className="stats-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {STATS.map(({ number, label }) => (
              <div
                key={number}
                style={{
                  background: '#FEF9C3', /* Light pastel yellow/beige as in the image */
                  borderRadius: '16px',
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1,
                  }}
                >
                  {t(number)}
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#334155',
                    lineHeight: 1.2,
                  }}
                >
                  {t(label)}
                </div>
              </div>
            ))}
          </div>

          {/* Checklist Row */}
          <div
            className="checklist-row"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            {CHECKS.map((key) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#334155',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid #0f172a',
                    color: '#0f172a',
                    fontWeight: 800,
                    fontSize: '14px',
                  }}
                >
                  ✓
                </span>
                {t(key)}
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative N Logo at bottom */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', opacity: 0.15 }}>
          <Image src="/images/iconLogo.png" alt="N" width={40} height={40} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            padding: 64px 24px 48px !important;
          }
          .hero-top-grid {
            gap: 32px !important;
          }
          .stats-row {
            gap: 16px !important;
          }
          .stats-row > div {
            padding: 20px 16px !important;
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 48px 16px 32px !important;
          }
          .hero-top-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content p {
            text-align: center;
          }
          .stats-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .checklist-row {
            gap: 16px !important;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}

