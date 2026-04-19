'use client';

import { useTranslations } from 'next-intl';

const ICONS = {
  card1Title: (
    <svg width="48" height="48" fill="none" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  ),
  card2Title: (
    <svg width="48" height="48" fill="none" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  card3Title: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
       <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  ),
};

const CARDS = [
  { title: 'card1Title', text: 'card1Text', fullWidth: false },
  { title: 'card2Title', text: 'card2Text', fullWidth: false },
  { title: 'card3Title', text: 'card3Text', fullWidth: true },
] as const;

export default function Problem() {
  const t = useTranslations('problem');

  return (
    <section
      id="problem"
      className="problem-section"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        padding: '100px 32px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="problem-container"
        style={{
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(400px, 1.2fr)',
          gap: '80px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Text */}
        <div className="problem-content">
          <span
            style={{
              display: 'inline-block',
              background: '#FEF9C3', /* Yellowish to match the image */
              border: '1px solid #FDE047',
              color: '#0f172a', /* Dark slate navy */
              fontSize: '12px',
              fontWeight: 800,
              padding: '6px 16px',
              borderRadius: '24px',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {t('label')}
          </span>

          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            {t('headline')}
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: '#334155',
              lineHeight: 1.6,
              margin: '0',
            }}
          >
            {t('subtext')}
          </p>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="problem-cards-grid">
          {CARDS.map(({ title, text, fullWidth }) => (
            <div
              key={title}
              className={`problem-card ${fullWidth ? 'full-width' : ''}`}
              style={{
                background: '#ffffff',
                border: '1px solid #f1f5f9',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div className="problem-card-icon" style={{ marginBottom: '8px' }}>
                {ICONS[title]}
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0',
                }}
              >
                {t(title)}
              </h3>

              <p
                style={{
                  fontSize: '14px',
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
      </div>

      <style>{`
        .problem-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .problem-card.full-width {
          grid-column: 1 / -1;
        }

        @media (max-width: 1024px) {
          .problem-section {
            padding: 80px 24px !important;
          }
          .problem-container {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          .problem-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .problem-section {
            padding: 64px 16px !important;
          }
          .problem-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .problem-card.full-width {
            grid-column: auto;
          }
        }
      `}</style>
    </section>
  );
}
