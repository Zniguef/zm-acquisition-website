'use client';

import { useTranslations } from 'next-intl';

const RESULTS_DATA = [
  {
    id: 1,
    nameKey: 'c1Name',
    subKey: 'c1Industry',
    stat1: 'c1Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c1Stat2Value',
    stat2Label: 'c1Stat2Label',
  },
  {
    id: 2,
    nameKey: 'c2Name',
    subKey: 'c2Industry',
    stat1: 'c2Stat1Value',
    stat1Label: 'c1Stat1Label', // Reusing 'Qualified Leads' label key
    stat2: 'c2Stat2Value',
    stat2Label: 'c2Stat2Label',
  },
  {
    id: 3,
    nameKey: 'c3Name',
    subKey: 'c3Industry',
    stat1: 'c3Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c3Stat2Value',
    stat2Label: 'c3Stat2Label',
  },
  {
    id: 4,
    nameKey: 'c4Name',
    subKey: 'c4Industry',
    stat1: 'c4Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c4Stat2Value',
    stat2Label: 'c4Stat2Label',
  },
];

export default function Results() {
  const t = useTranslations('results');

  return (
    <section
      id="results"
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
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.2,
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
        <div className="results-grid">
          {RESULTS_DATA.map((card) => (
            <div
              key={card.id}
              style={{
                background: '#fcfcfc',
                border: '1.5px solid #eeeeee',
                borderRadius: '12px',
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
              {/* Card Label */}
              <h3
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#1F3C88',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                  margin: '0 0 4px 0',
                }}
              >
                {t(card.nameKey)}
              </h3>

              {/* Card Sub-label */}
              <p
                style={{
                  fontSize: '12px',
                  color: '#888888',
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}
              >
                {t(card.subKey)}
              </p>

              {/* Data Row */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Stat 1 */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: '#111111',
                      lineHeight: 1,
                      marginBottom: '4px',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {t(card.stat1)}
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      color: '#666666',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {t(card.stat1Label)}
                  </p>
                </div>

                {/* Vertical Divider */}
                <div
                  style={{
                    width: '1px',
                    height: '40px',
                    background: '#eeeeee',
                    margin: '0 24px',
                  }}
                />

                {/* Stat 2 */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: '#111111',
                      lineHeight: 1,
                      marginBottom: '4px',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {t(card.stat2)}
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      color: '#666666',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {t(card.stat2Label)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            style={{
              background: '#FFDE59',
              color: '#111111',
              fontSize: '15px',
              fontWeight: 700,
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
              (e.currentTarget as HTMLElement).style.background = '#ffd633';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.background = '#FFDE59';
            }}
          >
            {t('cta')}
          </button>
        </div>
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 639px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
