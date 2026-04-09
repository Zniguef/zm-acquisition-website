'use client';

import { useTranslations } from 'next-intl';

const CHECKS = [
  'check1',
  'check2',
  'check3',
  'check4',
  'check5',
  'check6',
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
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="hero"
      style={{
        background: '#ffffff',
        padding: '56px 32px 48px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '48px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Badge */}
          <span
            style={{
              display: 'inline-block',
              background: '#FFF9DB',
              border: '1px solid #FFDE59',
              color: '#1F3C88',
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: '20px',
              marginBottom: '16px',
            }}
          >
            {t('badge')}
          </span>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(36px, 7vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#111111',
              marginBottom: '24px',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ display: 'block' }}>{t('headline1')}</span>
            <span style={{ display: 'block' }}>{t('headline2')}</span>
            <span style={{ display: 'block', color: '#1F3C88' }}>{t('headline3')}</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: '14px',
              color: '#4A4A4A',
              lineHeight: 1.8,
              marginBottom: '28px',
              maxWidth: '480px',
              margin: '0 0 28px 0',
            }}
          >
            {t('subtext')}
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#contact-form"
              onClick={scrollToContact}
              id="hero-cta"
              style={{
                display: 'inline-block',
                background: '#FFDE59',
                color: '#111111',
                fontSize: '14px',
                fontWeight: 700,
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginBottom: '10px',
                transition: 'all 0.15s, transform 0.1s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#ffd633';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#FFDE59';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {t('cta')}
            </a>

            {/* CTA Note */}
            <p
              style={{
                fontSize: '11px',
                color: '#4A4A4A',
                margin: '0',
              }}
            >
              {t('ctaNote')}
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div>
          {/* Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            {STATS.map(({ number, label }) => (
              <div
                key={number}
                style={{
                  background: '#FFF9DB',
                  border: '1px solid #FFDE59',
                  borderRadius: '8px',
                  padding: '14px 12px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: '#1F3C88',
                    lineHeight: 1,
                  }}
                >
                  {t(number)}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: '#4A4A4A',
                    marginTop: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {t(label)}
                </div>
              </div>
            ))}
          </div>

          {/* Checklist Box */}
          <div
            style={{
              background: '#f9f9f9',
              border: '1px solid #eeeeee',
              borderRadius: '10px',
              padding: '16px',
            }}
          >
            {CHECKS.map((key, i) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: '#4A4A4A',
                  padding: '6px 0',
                  borderBottom: i < CHECKS.length - 1 ? '1px solid #eeeeee' : 'none',
                }}
              >
                <span
                  style={{
                    color: '#1F3C88',
                    fontWeight: 800,
                    fontSize: '13px',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {t(key)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: single-column grid */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
