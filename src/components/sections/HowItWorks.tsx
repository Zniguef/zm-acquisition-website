'use client';

import { useTranslations } from 'next-intl';

const STEPS = [
  { id: 1, title: 'step1Title', text: 'step1Text' },
  { id: 2, title: 'step2Title', text: 'step2Text' },
  { id: 3, title: 'step3Title', text: 'step3Text' },
  { id: 4, title: 'step4Title', text: 'step4Text' },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section
      id="how-it-works"
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
            marginBottom: '48px',
            margin: '0 0 48px 0',
          }}
        >
          {t('subtext')}
        </p>

        {/* Steps container */}
        <div className="steps-container">
          {STEPS.map((step, index) => (
            <div key={step.id} className="step-wrapper">
              <div className="step-content">
                {/* Step circle */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: '#1F3C88',
                    color: '#ffffff',
                    fontSize: '24px',
                    fontWeight: 800,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {step.id}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '8px',
                    margin: '0 0 8px 0',
                    textAlign: 'center',
                  }}
                >
                  {t(step.title)}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '12px',
                    color: '#4A4A4A',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    maxWidth: '180px',
                    margin: '0 auto',
                  }}
                >
                  {t(step.text)}
                </p>
              </div>

              {/* Connector line (Horizontal on desktop, hidden or vertical on mobile) */}
              {index < STEPS.length - 1 && (
                <div className="step-divider" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .step-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
        }

        .step-content {
          flex: 1;
        }

        .step-divider {
          width: 40px;
          height: 3px;
          background: #FFDE59;
          margin: 0 10px;
          margin-top: -85px; /* Adjust based on circle center */
        }

        @media (max-width: 1023px) {
          .steps-container {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }
          .step-wrapper {
            flex-direction: column;
            width: 100%;
          }
          .step-divider {
            width: 3px;
            height: 30px;
            margin: 10px 0;
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
