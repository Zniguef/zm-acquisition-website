'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const REVIEWS = [
  { id: 1, name: 'r1Name', role: 'r1Role', text: 'r1Text' },
  { id: 2, name: 'r2Name', role: 'r2Role', text: 'r2Text' },
  { id: 3, name: 'r3Name', role: 'r3Role', text: 'r3Text' },
];

export default function Reviews() {
  const t = useTranslations('reviews');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section
      id="reviews"
      style={{
        backgroundColor: '#ffffff', /* Using pure white */
        padding: '100px 32px',
        color: '#0f172a',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Label and Headline */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#FDE047',
              color: '#0f172a',
              fontSize: '12px',
              fontWeight: 800,
              padding: '6px 16px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px',
            }}
          >
            {t('label')}
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {t('headline')}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="carousel-wrapper" style={{ position: 'relative', height: '400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Nav Arrows */}
          <button
            onClick={isRTL ? nextSlide : prevSlide}
            className="carousel-btn left-btn"
            style={{
              position: 'absolute',
              [isRTL ? 'right' : 'left']: '0px',
              zIndex: 10,
              background: '#ffffff',
              border: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points={isRTL ? "9 18 15 12 9 6" : "15 18 9 12 15 6"}></polyline>
            </svg>
          </button>

          <button
            onClick={isRTL ? prevSlide : nextSlide}
            className="carousel-btn right-btn"
            style={{
              position: 'absolute',
              [isRTL ? 'left' : 'right']: '0px',
              zIndex: 10,
              background: '#ffffff',
              border: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points={isRTL ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}></polyline>
            </svg>
          </button>

          {/* Cards */}
          <div className="cards-stage" style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '100%' }}>
            {REVIEWS.map((review, i) => {
              const offset = (i - activeIndex + 3) % 3;
              let pos = offset;
              if (offset === 2) pos = -1;

              // Absolute logical positions
              let left = '50%';
              let scale = 1;
              let zIndex = 2;
              let opacity = 1;
              let shadow = '0 20px 40px -10px rgba(0,0,0,0.1)';

              // Map position based on RTL mode
              const logicalPos = isRTL ? -pos : pos;

              if (logicalPos === -1) {
                left = '15%';
                scale = 0.85;
                zIndex = 1;
                opacity = 0.6;
                shadow = '0 4px 15px rgba(0,0,0,0.02)';
              } else if (logicalPos === 1) {
                left = '85%';
                scale = 0.85;
                zIndex = 1;
                opacity = 0.6;
                shadow = '0 4px 15px rgba(0,0,0,0.02)';
              }

              return (
                <div
                  key={review.id}
                  className="review-card-wrapper"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: left,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%',
                    maxWidth: '420px',
                  }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '24px',
                      padding: '40px 32px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '24px',
                      boxShadow: shadow,
                      border: '1px solid #f1f5f9',
                    }}
                  >
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FACC15" stroke="#FACC15" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p
                      style={{
                        fontSize: '18px',
                        color: '#0f172a',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        textAlign: 'center',
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      "{t(review.text)}"
                    </p>

                    {/* Author */}
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                        {t(review.name)}
                      </p>
                      <p style={{ fontSize: '13px', color: '#64748b', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {t(review.role)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Bars */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px' }}>
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: '64px',
                height: '6px',
                borderRadius: '8px',
                background: activeIndex === idx ? '#0f172a' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .carousel-btn:hover {
          transform: scale(1.1);
        }
        @media (max-width: 1024px) {
          .cards-stage {
            max-width: 700px !important;
          }
        }
        @media (max-width: 768px) {
          .carousel-wrapper {
            height: 480px !important;
          }
          .carousel-btn {
            display: none !important;
          }
          .review-card-wrapper {
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
