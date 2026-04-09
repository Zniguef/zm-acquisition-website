'use client';

import { useTranslations } from 'next-intl';

const TAGS = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];

export default function About() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      style={{
        background: '#ffffff',
        padding: '80px 32px',
        color: '#111111',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        className="about-container"
      >
        {/* Left Column: Logo Card */}
        <div
          style={{
            flex: '1',
            minWidth: '300px',
            textAlign: 'center',
          }}
        >
          {/* Logo Circle */}
          <div
            style={{
              width: '180px',
              height: '180px',
              background: '#FFDE59',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            }}
          >
            <img
              src="/images/iconLogo2.png"
              alt="ZM Icon"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                objectFit: 'contain',
              }}
            />
          </div>

          <h3
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#111111',
              marginBottom: '4px',
              margin: '0 0 4px 0',
            }}
          >
            {t('name')}
          </h3>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#1F3C88',
              margin: 0,
            }}
          >
            {t('role')}
          </p>
        </div>

        {/* Right Column: Content */}
        <div
          style={{
            flex: '1.5',
            minWidth: '300px',
          }}
        >
          {/* Label */}
          <span
            style={{
              display: 'inline-block',
              background: '#FFF9DB',
              border: '1px solid #FFDE59',
              color: '#1F3C88',
              fontSize: '11px',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '20px',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {t('label')}
          </span>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.25,
              marginBottom: '24px',
              margin: '0 0 24px 0',
            }}
          >
            {t('headline')}
          </h2>

          <div
            style={{
              fontSize: '15px',
              color: '#4A4A4A',
              lineHeight: 1.7,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <p style={{ margin: 0 }}>{t('text1')}</p>
            <p style={{ margin: 0 }}>{t('text2')}</p>
          </div>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {TAGS.map((tagKey) => (
              <span
                key={tagKey}
                style={{
                  background: '#FFF9DB',
                  border: '1px solid #FFDE59',
                  color: '#1F3C88',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '100px',
                }}
              >
                {t(tagKey)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .about-container {
            flex-direction: column !important;
            text-align: center;
            gap: 48px !important;
          }
          .about-container > div {
             width: 100%;
          }
          .tag-container {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
