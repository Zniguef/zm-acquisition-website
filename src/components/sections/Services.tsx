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
      className="services-section"
      style={{
        backgroundColor: '#f8fafc', /* Light gray/blue background from image */
        padding: '100px 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.15,
            marginBottom: '16px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: '18px',
            color: '#475569',
            marginBottom: '64px',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.6,
          }}
        >
          {t('subtext')}
        </p>

        {/* Cards grid */}
        <div className="services-cards-grid" style={{ width: '100%' }}>
          {SERVICES.map(({ num, title, text, tag }) => (
            <div
              key={num}
              className="service-card"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: '#0f172a',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 800,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                }}
              >
                {num}.
              </div>
              
              {/* Tag */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 800,
                  background: '#FEF9C3', /* Yellowish to match the image */
                  color: '#0f172a',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  marginBottom: '8px',
                }}
              >
                {t(tag)}
              </span>

              {/* Card title */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0',
                }}
              >
                {t(title)}
              </h3>

              {/* Card text */}
              <p
                style={{
                  fontSize: '15px',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {t(text)}
              </p>
            </div>
          ))}
        </div>

        {/* Report Note Banner */}
        <div
          style={{
            marginTop: '40px',
            width: '100%',
            padding: '20px 24px',
            background: '#fefce8',
            borderRadius: '16px',
            border: '2px dashed #fde047',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          {/* Pulsing Green Dot */}
          <div
            className="pulse-dot"
            style={{
              width: '12px',
              height: '12px',
              background: '#22C55E',
              borderRadius: '50%',
              position: 'relative',
            }}
          >
            <div 
               style={{
                 position: 'absolute',
                 top: '-4px', left: '-4px', right: '-4px', bottom: '-4px',
                 background: 'rgba(34, 197, 94, 0.3)',
                 borderRadius: '50%',
                 zIndex: 0
               }}
            />
          </div>
          <p style={{ fontSize: '16px', color: '#0f172a', fontWeight: 500, margin: 0 }}>
            {t('reportNote')}
          </p>
        </div>

      </div>

      <style>{`
        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .pulse-dot {
          animation: scalePulse 2s infinite;
        }

        @keyframes scalePulse {
          0% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(0.95);
          }
        }

        @media (max-width: 1024px) {
          .services-section {
            padding: 80px 24px !important;
          }
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .services-section {
            padding: 64px 16px !important;
          }
          .services-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
