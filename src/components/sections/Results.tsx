'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

interface ResultCard {
  id: number;
  nameKey: string;
  subKey: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  image?: string;
  isPlaceholder?: boolean;
  placeholderBadge?: string;
  placeholderColor?: string;
}

const RESULTS_DATA: ResultCard[] = [
  {
    id: 1,
    nameKey: 'c5Name',
    subKey: 'c5Industry',
    stat1: 'c5Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c5Stat2Value',
    stat2Label: 'c5Stat2Label',
    image: '/images/centrale-logo.png',
  },
  {
    id: 2,
    nameKey: 'c4Name',
    subKey: 'c4Industry',
    stat1: 'c4Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c4Stat2Value',
    stat2Label: 'c4Stat2Label',
    image: 'https://www.chorfiformation.com/wp-content/themes/twentytwelve/images/logo_chorfi.png',
  },
  {
    id: 3,
    nameKey: 'c3Name',
    subKey: 'c3Industry',
    stat1: 'c3Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c3Stat2Value',
    stat2Label: 'c3Stat2Label',
    image: 'https://www.costless.ma/wp-content/uploads/2024/06/logo-costless-1.png',
  },
  {
    id: 4,
    nameKey: 'c2Name',
    subKey: 'c2Industry',
    stat1: 'c2Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c2Stat2Value',
    stat2Label: 'c2Stat2Label',
    image: 'https://a5ed361a0fe354c28675b91939f7ae8b.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=1.25,fit=contain/f1775950902906x332108057836529660/Logo%20UGR.png',
  },
  {
    id: 5,
    nameKey: 'c6Name',
    subKey: 'c6Industry',
    stat1: 'c6Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c6Stat2Value',
    stat2Label: 'c6Stat2Label',
    image: '/images/AGV-VERT-Logo.jpg',
  },
  {
    id: 6,
    nameKey: 'c1Name',
    subKey: 'c1Industry',
    stat1: 'c1Stat1Value',
    stat1Label: 'c1Stat1Label',
    stat2: 'c1Stat2Value',
    stat2Label: 'c1Stat2Label',
    image: 'https://a4b4ff22885fa8925abe601e10903fce.cdn.bubble.io/cdn-cgi/image/w=96,h=96,f=auto,dpr=1.25,fit=contain/f1772740427257x804213727305202200/Logo%20Klu%CC%88b.png',
  },
];

// Duplicate data array for seamless infinite looping
const TRACK_DATA: ResultCard[] = [...RESULTS_DATA, ...RESULTS_DATA];

export default function Results() {
  const t = useTranslations('results');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardStepWidth, setCardStepWidth] = useState(0);

  // Measure card width + gap for pixel-perfect sliding
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children[0]) {
        const firstCard = trackRef.current.children[0] as HTMLElement;
        setCardStepWidth(firstCard.offsetWidth + 24); // 24px gap
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Handle seamless infinite reset when sliding forward past the end
  useEffect(() => {
    if (currentIndex === RESULTS_DATA.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Re-enable transition after silent reset
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const frameId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isTransitioning, currentIndex]);

  const handleNext = () => {
    if (currentIndex >= RESULTS_DATA.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      // Jump silently to cloned position, then slide back
      setIsTransitioning(false);
      setCurrentIndex(RESULTS_DATA.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(RESULTS_DATA.length - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Auto-play interval with pause on hover / interaction
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          isRTL ? handleNext() : handlePrev();
        } else {
          isRTL ? handlePrev() : handleNext();
        }
      }
      touchStartX.current = null;
    }
    setIsPaused(false);
  };

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const activeDotIndex = currentIndex % RESULTS_DATA.length;
  const moveDistance = cardStepWidth * currentIndex;

  return (
    <section
      id="results"
      style={{
        scrollMarginTop: '100px',
        backgroundColor: '#ffffff',
        padding: '120px 32px',
        position: 'relative',
        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            marginBottom: '56px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 56px auto',
            lineHeight: 1.6,
          }}
        >
          {t('subtext')}
        </p>

        {/* Carousel Outer Wrapper */}
        <div
          className="carousel-outer-wrapper"
          style={{ position: 'relative', width: '100%' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={isRTL ? handleNext : handlePrev}
            className="results-nav-btn prev-btn"
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              [isRTL ? 'right' : 'left']: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#0f172a',
              transition: 'all 0.2s ease',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points={isRTL ? '9 18 15 12 9 6' : '15 18 9 12 15 6'}></polyline>
            </svg>
          </button>

          <button
            onClick={isRTL ? handlePrev : handleNext}
            className="results-nav-btn next-btn"
            aria-label="Next slide"
            style={{
              position: 'absolute',
              [isRTL ? 'left' : 'right']: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#0f172a',
              transition: 'all 0.2s ease',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points={isRTL ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}></polyline>
            </svg>
          </button>

          {/* Carousel Viewport */}
          <div
            className="results-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              overflow: 'hidden',
              padding: '16px 4px',
              margin: '0 -4px',
            }}
          >
            <div
              ref={trackRef}
              style={{
                display: 'flex',
                gap: '24px',
                transform: `translateX(${isRTL ? moveDistance : -moveDistance}px)`,
                transition: isTransitioning ? 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
                willChange: 'transform',
              }}
            >
              {TRACK_DATA.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  className="results-card-item"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                      }}
                    >
                      {card.isPlaceholder ? (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '8px',
                            background:
                              card.id === 5
                                ? 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'
                                : 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '18px',
                            color: card.placeholderColor,
                            letterSpacing: '0.02em',
                          }}
                        >
                          {card.placeholderBadge}
                        </div>
                      ) : (
                        <Image
                          src={card.image!}
                          alt={t(card.nameKey)}
                          width={64}
                          height={64}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '4px',
                            objectFit: 'contain',
                          }}
                          unoptimized
                        />
                      )}
                    </div>

                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
                          color: '#0f172a',
                          margin: '0 0 4px 0',
                          letterSpacing: '-0.01em',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        title={t(card.nameKey)}
                      >
                        {t(card.nameKey)}
                      </h3>
                      <p
                        style={{
                          fontSize: '15px',
                          color: '#64748b',
                          fontWeight: 400,
                          margin: 0,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        title={t(card.subKey)}
                      >
                        {t(card.subKey)}
                      </p>
                    </div>
                  </div>

                  {/* Data Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      paddingTop: '20px',
                      borderTop: '1px solid #f1f5f9',
                    }}
                  >
                    {/* Stat 1 */}
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#94a3b8',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '6px',
                        }}
                      >
                        {t(card.stat1Label)}
                      </p>
                      <p
                        style={{
                          fontSize: '32px',
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
                        height: '44px',
                        background: '#f1f5f9',
                        margin: '0 16px',
                      }}
                    />

                    {/* Stat 2 */}
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#94a3b8',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '6px',
                        }}
                      >
                        {t(card.stat2Label)}
                      </p>
                      <p
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
                          color: '#0f172a',
                          lineHeight: 1.2,
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
          </div>

          {/* Pagination Indicators (Dots / Pills) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '32px',
            }}
          >
            {RESULTS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to client ${idx + 1}`}
                style={{
                  width: activeDotIndex === idx ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeDotIndex === idx ? '#0D3EA6' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
        /* Desktop: 3 cards visible */
        .results-card-item {
          flex: 0 0 calc((100% - 48px) / 3);
          min-width: 0;
        }

        .results-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08) !important;
        }

        .results-nav-btn:hover {
          background: #0D3EA6 !important;
          color: #ffffff !important;
          border-color: #0D3EA6 !important;
          box-shadow: 0 8px 20px rgba(13, 62, 166, 0.25) !important;
        }

        .results-cta-btn:hover {
          background: #09328a;
          transform: scale(1.02);
        }

        /* Tablet: 2 cards visible */
        @media (max-width: 1024px) {
          .results-card-item {
            flex: 0 0 calc((100% - 24px) / 2);
          }
          .results-nav-btn.prev-btn {
            left: -8px !important;
          }
          .results-nav-btn.next-btn {
            right: -8px !important;
          }
        }

        /* Mobile: 1 card visible */
        @media (max-width: 640px) {
          #results {
            padding: 80px 20px !important;
          }
          .results-card-item {
            flex: 0 0 100%;
            padding: 22px 18px !important;
          }
          .results-nav-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .results-nav-btn.prev-btn {
            left: -4px !important;
          }
          .results-nav-btn.next-btn {
            right: -4px !important;
          }
        }
      `}</style>
    </section>
  );
}
