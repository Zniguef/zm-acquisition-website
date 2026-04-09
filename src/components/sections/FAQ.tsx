'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const FAQS = [
  { id: 1, q: 'q1', a: 'a1' },
  { id: 2, q: 'q2', a: 'a2' },
  { id: 3, q: 'q3', a: 'a3' },
  { id: 4, q: 'q4', a: 'a4' },
];

export default function FAQ() {
  const t = useTranslations('faq');
  const [openId, setOpenId] = useState<number | null>(1); // Open first by default

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      style={{
        background: '#ffffff',
        padding: '80px 32px',
        color: '#111111',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Label */}
        <div style={{ marginBottom: '16px' }}>
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
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {t('label')}
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.2,
            marginBottom: '12px',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: '14px',
            color: '#4A4A4A',
            marginBottom: '48px',
            maxWidth: '600px',
          }}
        >
          {t('subtext')}
        </p>

        {/* Accordion Stack */}
        <div className="faq-stack">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  background: isOpen ? '#fcfcfc' : '#ffffff',
                  border: '1.5px solid #eeeeee',
                  borderRadius: '12px',
                  marginBottom: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  borderColor: isOpen ? '#FFDE59' : '#eeeeee',
                }}
              >
                {/* Header / Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    padding: '24px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        background: isOpen ? '#1F3C88' : '#111111',
                        color: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 900,
                        flexShrink: 0,
                        transition: 'background 0.3s',
                      }}
                    >
                      ?
                    </div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#111111',
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {t(faq.q)}
                    </h3>
                  </div>

                  {/* Chevron Icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#1F3C88' : '#666',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Answer Content */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 32px 24px 84px',
                      fontSize: '14px',
                      color: '#4A4A4A',
                      lineHeight: 1.7,
                    }}
                  >
                    {t(faq.a)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
