'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const RESULTS_DATA = [
  {
    id: 1,
    nameKey: 'c1Name',
    subKey: 'c1Industry',
    stat1: 'c1Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c1Stat2Value',
    stat2Label: 'c1Stat2Label',
    image: 'https://a4b4ff22885fa8925abe601e10903fce.cdn.bubble.io/cdn-cgi/image/w=96,h=96,f=auto,dpr=1.25,fit=contain/f1772740427257x804213727305202200/Logo%20Klu%CC%88b.png',
  },
  {
    id: 2,
    nameKey: 'c2Name',
    subKey: 'c2Industry',
    stat1: 'c2Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c2Stat2Value',
    stat2Label: 'c2Stat2Label',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=120&q=80',
  },
  {
    id: 3,
    nameKey: 'c3Name',
    subKey: 'c3Industry',
    stat1: 'c3Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c3Stat2Value',
    stat2Label: 'c3Stat2Label',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&q=80',
  },
  {
    id: 4,
    nameKey: 'c4Name',
    subKey: 'c4Industry',
    stat1: 'c4Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c4Stat2Value',
    stat2Label: 'c4Stat2Label',
    image: 'https://www.chorfiformation.com/wp-content/themes/twentytwelve/images/logo_chorfi.png',
  },
];

export default function Results() {
  const t = useTranslations('results');

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="results"
      style={{
        backgroundColor: '#ffffff',
        padding: '120px 32px',
        position: 'relative',
        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.1,
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
            color: '#64748b',
            marginBottom: '64px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 64px auto',
            lineHeight: 1.6,
          }}
        >
          {t('subtext')}
        </p>

        {/* Cards grid */}
        <div className="results-grid">
          {RESULTS_DATA.map((card) => (
            <div
              key={card.id}
              className="result-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '20px' }}>
                <div style={{ 
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  border: '1px solid #f1f5f9',
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px'
                }}>
                  <Image
                    src={card.image}
                    alt={t(card.nameKey)}
                    width={88}
                    height={88}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                    unoptimized
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: '0 0 4px 0',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {t(card.nameKey)}
                  </h3>
                  <p
                    style={{
                      fontSize: '18px',
                      color: '#64748b',
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {t(card.subKey)}
                  </p>
                </div>
              </div>

              {/* Data Row */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                paddingTop: '24px',
                borderTop: '1px solid #f1f5f9'
              }}>
                {/* Stat 1 */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#94a3b8',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                    }}
                  >
                    {t(card.stat1Label)}
                  </p>
                  <p
                    style={{
                      fontSize: '36px',
                      fontWeight: 900,
                      color: '#0f172a',
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {t(card.stat1)}
                  </p>
                </div>

                {/* Vertical Divider */}
                <div
                  style={{
                    width: '1px',
                    height: '50px',
                    background: '#f1f5f9',
                    margin: '0 24px',
                  }}
                />

                {/* Stat 2 */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#94a3b8',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                    }}
                  >
                    {t(card.stat2Label)}
                  </p>
                  <p
                    style={{
                      fontSize: '36px',
                      fontWeight: 900,
                      color: '#0f172a',
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {t(card.stat2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <button
            className="results-cta-btn"
            style={{
              background: '#0D3EA6',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 700,
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 10px 20px -5px rgba(13, 62, 166, 0.3)',
            }}
            onClick={scrollToContact}
          >
            {t('cta')}
          </button>
        </div>
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .result-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
        }
        .results-cta-btn:hover {
          background: #09328a;
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          #results {
            padding: 80px 20px !important;
          }
          .results-grid {
            grid-template-columns: 1fr;
          }
          .result-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
