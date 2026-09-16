'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
        padding: '96px 24px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '32px',
        }}
      >
        {/* Main Content */}
        <div
          className="hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(35px, 5vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f172a',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            <span style={{ display: 'block' }}>{t('headline1')}</span>
            <span style={{ display: 'block' }}>{t('headline2')}</span>
            <span style={{ display: 'block' }}>{t('headline3')}</span>
          </h1>

          {/* Subtext */}
          <p
            className="hero-description"
            style={{
              fontSize: '18px',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '680px',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            {t('subtext')}
          </p>

          {/* CTA Button */}
          <div
            className="hero-cta-group"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <a
              href="#contact-form"
              onClick={scrollToContact}
              id="hero-cta"
              style={{
                display: 'inline-block',
                background: '#0D3EA6',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                marginBottom: '12px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(13, 62, 166, 0.4)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#1e40af';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#0D3EA6';
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
                textAlign: 'center',
              }}
            >
              {t('ctaNote')}
            </p>
          </div>
        </div>

        {/* Decorative N Logo at bottom */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', opacity: 0.15 }}>
          <Image src="/images/iconLogo.png" alt="N" width={40} height={40} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 56px 16px 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

