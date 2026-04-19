'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const FAQS = [
  { 
    id: 1, 
    q: 'q1', 
    a: 'a1',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"></path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
      </svg>
    )
  },
  { 
    id: 2, 
    q: 'q2', 
    a: 'a2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  { 
    id: 3, 
    q: 'q3', 
    a: 'a3',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M3 13h4l5-5c1.66-1.66 4.34-1.66 6 0s1.66 4.34 0 6l-5 5H6l-3-3v-3z"></path>
         <path d="M14 8l6 6"></path>
         <path d="M9 13l6 6"></path>
      </svg>
    )
  },
  { 
    id: 4, 
    q: 'q4', 
    a: 'a4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
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
        backgroundColor: '#ffffff',
        padding: '100px 32px',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Label */}
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#fde047',
              color: '#0f172a',
              fontSize: '12px',
              fontWeight: 800,
              padding: '6px 16px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {t('label')}
          </span>
        </div>

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
            color: '#475569',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          {t('subtext')}
        </p>

        {/* Accordion Stack */}
        <div className="faq-stack" style={{ width: '100%' }}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #f1f5f9',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen 
                    ? '0 10px 40px -10px rgba(0,0,0,0.1)' 
                    : '0 4px 10px rgba(0,0,0,0.03)',
                  borderLeft: isOpen ? '4px solid #facc15' : '1px solid #f1f5f9', // Active state Left Border
                  position: 'relative',
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
                        width: '36px',
                        height: '36px',
                        background: '#0f172a',
                        color: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {faq.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#0f172a',
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {t(faq.q)}
                    </h3>
                  </div>

                  {/* Chevron Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Answer Content */}
                <div
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 32px 32px 88px', // aligned with the text
                      fontSize: '16px',
                      color: '#64748b',
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
