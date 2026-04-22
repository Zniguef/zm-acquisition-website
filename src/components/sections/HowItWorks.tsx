'use client';

import { useTranslations } from 'next-intl';

const STEPS = [
  { 
    id: 1, 
    titleKey: 'step1Title', 
    textKey: 'step1Text', 
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
        {/* Magnifying Glass overlaying document */}
        <circle cx="16" cy="16" r="4" fill="#ffffff" strokeWidth="1.5" />
        <line x1="18.8" y1="18.8" x2="22" y2="22" strokeWidth="2.5" />
      </svg>
    )
  },
  { 
    id: 2, 
    titleKey: 'step2Title', 
    textKey: 'step2Text', 
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 14v-3z"></path>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
        <line x1="2" y1="12" x2="2" y2="12"></line>
        <path d="M19 8v8"></path>
      </svg>
    )
  },
  { 
    id: 3, 
    titleKey: 'step3Title', 
    textKey: 'step3Text', 
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <path d="M9 21V9"></path>
      </svg>
    )
  },
  { 
    id: 4, 
    titleKey: 'step4Title', 
    textKey: 'step4Text', 
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        {/* Simple funnel symbol over browser */}
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" fill="#ffffff" strokeWidth="1.5" />
      </svg>
    )
  },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: '#ffffff',
        padding: '100px 32px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        
        {/* Headline (No label based on mockup) */}
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.15,
            marginBottom: '48px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          {t('headline')}
        </h2>

        {/* Steps container */}
        <div className="steps-container" style={{ position: 'relative' }}>
          
          {/* Dashed Connector Line */}
          <div className="step-connector" />

          {STEPS.map((step) => (
            <div key={step.id} className="step-wrapper">
              
              {/* Step circle */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  backgroundColor: '#ffd441',
                  color: '#ffffff',
                  fontSize: '40px',
                  fontWeight: 900,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.2)',
                }}
              >
                {step.id}
              </div>

              {/* Step Icon */}
              <div style={{ margin: '48px auto 24px auto', display: 'flex', justifyContent: 'center' }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '12px',
                  textAlign: 'center',
                }}
              >
                {t(step.titleKey)}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  color: '#475569',
                  lineHeight: 1.6,
                  textAlign: 'center',
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              >
                {t(step.textKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          position: relative;
          gap: 24px;
        }

        .step-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
          background: #ffffff;
          padding: 32px 24px;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .step-wrapper:hover {
          transform: translateY(-5px);
        }

        .step-connector {
          display: none;
        }

        @media (max-width: 768px) {
          #how-it-works {
            padding: 48px 16px !important;
          }
          .steps-container {
            flex-direction: column;
            gap: 64px;
            align-items: center;
          }
          .step-wrapper {
            width: 100%;
          }
          .step-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
