'use client';

import { useTranslations } from 'next-intl';

const SERVICES = [
  { num: 1, title: 's1Title', text: 's1Text', tag: 's1Tag' },
  { num: 2, title: 's2Title', text: 's2Text', tag: 's2Tag' },
  { num: 3, title: 's3Title', text: 's3Text', tag: 's3Tag' },
  { num: 4, title: 's4Title', text: 's4Text', tag: 's4Tag' },
  { num: 5, title: 's5Title', text: 's5Text', tag: 's5Tag' },
  { num: 6, title: 's6Title', text: 's6Text', tag: 's6Tag' },
] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section
      id="services"
      style={{
        background: '#ffffff',
        padding: '64px 32px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.3,
            margin: '0 0 8px 0',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: '13px',
            color: '#4A4A4A',
            margin: '0 0 36px 0',
          }}
        >
          {t('subtext')}
        </p>

        {/* Cards grid */}
        <div className="services-grid">
          {SERVICES.map(({ num, title, text, tag }) => (
            <div
              key={num}
              className="service-card"
              style={{
                background: '#fcfcfc',
                border: '1.5px solid #eeeeee',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ((e.currentTarget as HTMLElement).style.borderColor = '#FFDE59');
                ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)');
              }}
              onMouseLeave={(e) => {
                ((e.currentTarget as HTMLElement).style.borderColor = '#eeeeee');
                ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)');
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  background: '#1F3C88',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 800,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  flexShrink: 0,
                }}
              >
                {num}
              </div>

              {/* Card title */}
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#111111',
                  margin: '0 0 8px 0',
                }}
              >
                {t(title)}
              </h3>

              {/* Card text */}
              <p
                style={{
                  fontSize: '12px',
                  color: '#4A4A4A',
                  lineHeight: 1.7,
                  margin: '0 0 12px 0',
                }}
              >
                {t(text)}
              </p>

              {/* Tag */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: 600,
                  background: '#FFF9DB',
                  border: '1px solid #FFDE59',
                  color: '#1F3C88',
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                {t(tag)}
              </span>
            </div>
          ))}
        </div>

        {/* Report Note */}
        <div
          style={{
            marginTop: '32px',
            padding: '16px 24px',
            background: '#f8f9fa',
            borderRadius: '12px',
            border: '1px dashed #FFDE59',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              background: '#1F3C88',
              borderRadius: '50%',
              boxShadow: '0 0 8px #22C55E',
            }}
          />
          <p style={{ fontSize: '13px', color: '#111111', fontWeight: 600, margin: 0 }}>
            {t('reportNote')}
          </p>
        </div>



      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1023px) and (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .web-section {
            padding: 32px !important;
            text-align: center;
            justify-content: center !important;
          }
           .web-section > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
