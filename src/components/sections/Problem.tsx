'use client';

import { useTranslations } from 'next-intl';

const CARDS = [
  { title: 'card1Title', text: 'card1Text', icon: '📉' },
  { title: 'card2Title', text: 'card2Text', icon: '🤝' },
  { title: 'card3Title', text: 'card3Text', icon: '📢' },
] as const;

export default function Problem() {
  const t = useTranslations('problem');

  return (
    <section
      id="problem"
      style={{
        background: '#ffffff',
        padding: '64px 32px',
        color: '#111111',
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
            marginBottom: '8px',
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
            marginBottom: '36px',
            margin: '0 0 36px 0',
          }}
        >
          {t('subtext')}
        </p>

        {/* Cards grid */}
        <div className="problem-grid">
          {CARDS.map(({ title, text, icon }) => (
            <div
              key={title}
              style={{
                background: '#f9f9f9',
                border: '1.5px solid #eeeeee',
                borderRadius: '10px',
                padding: '24px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = '#FFDE59')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = '#eeeeee')
              }
            >
              {/* Yellow accent dot */}
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#FFDE59',
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
              />

              {/* Card title */}
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: '8px',
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
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 767px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
