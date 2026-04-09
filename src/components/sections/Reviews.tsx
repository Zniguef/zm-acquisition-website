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
        background: '#ffffff',
        padding: '100px 32px',
        color: '#111111',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Label and Headline */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              marginBottom: '16px',
            }}
          >
            {t('label')}
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {t('headline')}
          </h2>
        </div>

        {/* Slider Container */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="nav-btn prev"
            style={{
              position: 'absolute',
              top: '50%',
              [isRTL ? 'right' : 'left']: '-60px',
              transform: 'translateY(-50%)',
              background: '#ffffff',
              border: '1.5px solid #eeeeee',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isRTL ? <polyline points="9 18 15 12 9 6"></polyline> : <polyline points="15 18 9 12 15 6"></polyline>}
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="nav-btn next"
            style={{
              position: 'absolute',
              top: '50%',
              [isRTL ? 'left' : 'right']: '-60px',
              transform: 'translateY(-50%)',
              background: '#ffffff',
              border: '1.5px solid #eeeeee',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isRTL ? <polyline points="15 18 9 12 15 6"></polyline> : <polyline points="9 18 15 12 9 6"></polyline>}
            </svg>
          </button>

          {/* Slides Viewport */}
          <div style={{ overflow: 'hidden', padding: '10px 0' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(${isRTL ? (activeIndex * 100) : (-activeIndex * 100)}%)`,
              }}
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  style={{
                    flex: '0 0 100%',
                    padding: '0 10px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      background: '#fcfcfc',
                      border: '1.5px solid #eeeeee',
                      borderRadius: '24px',
                      padding: '48px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                    }}
                  >
                    {/* Stars */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFDE59" stroke="#FFDE59" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p
                      style={{
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        color: '#111111',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      "{t(review.text)}"
                    </p>

                    {/* Author */}
                    <div>
                      <p style={{ fontSize: '18px', fontWeight: 800, color: '#111111', margin: '0 0 4px 0' }}>
                        {t(review.name)}
                      </p>
                      <p style={{ fontSize: '14px', color: '#1F3C88', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {t(review.role)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px' }}>
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: activeIndex === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '10px',
                  background: activeIndex === idx ? '#1F3C88' : '#dddddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .nav-btn:hover {
          background: #111111 !important;
          border-color: #111111 !important;
          transform: translateY(-50%) scale(1.1);
        }
        .nav-btn:hover svg {
          stroke: #ffffff !important;
        }
        @media (max-width: 1023px) {
          .nav-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
