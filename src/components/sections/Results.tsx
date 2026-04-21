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
        padding: '100px 32px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 48px)',
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
            color: '#64748b',
            marginBottom: '56px',
            textAlign: 'center',
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
                background: '#ffffff',
                border: '1px solid #f1f5f9',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
                <Image
                  src={card.image}
                  alt="Industry Icon"
                  width={64}
                  height={64}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    border: '1px solid #e2e8f0',
                  }}
                  unoptimized
                />
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#0f172a',
                      textTransform: 'uppercase',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {t(card.nameKey)}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#64748b',
                      margin: 0,
                    }}
                  >
                    {t(card.subKey)}
                  </p>
                </div>
              </div>

              {/* Data Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Stat 1 */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#0f172a',
                      fontWeight: 500,
                      margin: '0 0 12px 0',
                    }}
                  >
                    {t(card.stat1Label)}
                  </p>
                  <p
                    style={{
                      fontSize: '40px',
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
                    height: '60px',
                    background: '#e2e8f0',
                    margin: '0 16px',
                  }}
                />

                {/* Stat 2 */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#0f172a',
                      fontWeight: 500,
                      margin: '0 0 12px 0',
                    }}
                  >
                    {t(card.stat2Label)}
                  </p>
                  <p
                    style={{
                      fontSize: '40px',
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
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            style={{
              background: '#FDE047',
              color: '#0f172a',
              fontSize: '16px',
              fontWeight: 700,
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(253, 224, 71, 0.4)',
            }}
            onClick={scrollToContact}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
              (e.currentTarget as HTMLElement).style.background = '#facc15';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.background = '#FDE047';
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
          gap: 24px;
        }
        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
