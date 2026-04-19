'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter, Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LOCALE_LABELS: Record<string, string> = {
  ar: 'AR',
  en: 'EN',
  fr: 'FR',
};

const NAV_LINKS = [
  { key: 'services' as const, href: '/#services' },
  { key: 'results' as const, href: '/#results' },
  { key: 'about' as const, href: '/#about' },
  { key: 'faq' as const, href: '/#faq' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
    setIsLangOpen(false);
  }

  function scrollToContact(e: React.MouseEvent) {
    const el = document.getElementById('contact');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Helper text flags per locale to match mockup
  const getRegionText = (loc: string) => {
    switch(loc) {
       case 'fr': return 'FR';
       case 'en': return 'US';
       case 'ar': return 'AR';
       default: return 'GL';
    }
  }

  return (
    <header
      className="navbar-header"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #f1f5f9',
        height: '80px', // slightly taller for elegant feel
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* ── Left side (Logo) ── */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            {/* Brand name */}
            <span
              style={{
                fontWeight: 900,
                fontSize: '22px', // scaled up
                letterSpacing: '-0.02em',
                color: '#0f172a',
                whiteSpace: 'nowrap',
              }}
            >
              ZM ACQUISITION
            </span>
          </Link>
        </div>

        {/* ── Center Menu ── */}
        <ul
          className="hidden lg:flex"
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '32px', // spaced out more
            alignItems: 'center'
          }}
        >
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1e293b',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#2563eb')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#1e293b')}
              >
                {t(key)}
                {/* Note: User explicitly requested: "in service don't use drop down". 
                    So we omit the chevron on all components exactly as wanted */}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right side Actions ── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '24px' // More spacing
          }}
        >
          {/* Group 2 — Language Dropdown */}
          <div ref={langRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '15px',
                fontWeight: 700,
                padding: '6px 8px',
                border: 'none',
                background: 'transparent',
                color: '#0f172a',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                if (!isLangOpen) {
                  btn.style.opacity = '0.7';
                }
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if (!isLangOpen) {
                  btn.style.opacity = '1';
                }
              }}
              aria-label="Select Language"
              aria-expanded={isLangOpen}
            >
              <span style={{ minWidth: '20px', textAlign: 'center', color: '#0f172a' }}>
                {LOCALE_LABELS[locale]}
              </span>

              {/* Chevron Icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'transform 0.2s',
                  transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: locale === 'ar' ? 'auto' : 0,
                left: locale === 'ar' ? 0 : 'auto',
                background: '#ffffff',
                border: '1px solid #f1f5f9',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                padding: '8px',
                minWidth: '140px',
                zIndex: 100,
                opacity: isLangOpen ? 1 : 0,
                visibility: isLangOpen ? 'visible' : 'hidden',
                transform: isLangOpen ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: isLangOpen ? 'auto' : 'none',
              }}
            >
              {routing.locales.map((loc) => {
                const isActive = loc === locale;
                return (
                  <button
                     key={loc}
                     onClick={() => switchLocale(loc)}
                     style={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'flex-start', // Fixed to left/right align
                       gap: '12px',
                       width: '100%',
                       padding: '10px 14px',
                       borderRadius: '8px',
                       border: 'none',
                       background: isActive ? '#f8fafc' : 'transparent',
                       color: isActive ? '#0f172a' : '#475569',
                       fontSize: '15px',
                       fontWeight: isActive ? 700 : 500,
                       cursor: 'pointer',
                       textAlign: 'left',
                       transition: 'all 0.1s',
                     }}
                     onMouseEnter={(e) => {
                       if (!isActive) {
                         e.currentTarget.style.background = '#f1f5f9';
                         e.currentTarget.style.color = '#0f172a';
                       }
                     }}
                     onMouseLeave={(e) => {
                       if (!isActive) {
                         e.currentTarget.style.background = 'transparent';
                         e.currentTarget.style.color = '#475569';
                       }
                     }}
                  >
                    <span style={{ fontWeight: 800, width: '24px' }}>{getRegionText(loc)}</span>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                       <span>{loc === 'en' ? 'English' : loc === 'ar' ? 'العربية' : 'Français'}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 3 — CTA button (Desktop Only) */}
          <Link
            href="/#contact-form"
            id="navbar-cta"
            className="hidden lg:flex"
            onClick={scrollToContact}
            style={{
              alignItems: 'center',
              fontSize: '15px',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '8px',
              background: '#facc15',
              color: '#0f172a',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s',
              boxShadow: '0 4px 14px rgba(250, 204, 21, 0.2)' // matching mockups
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#fde047';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(250, 204, 21, 0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#facc15';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(250, 204, 21, 0.2)';
            }}
          >
            {t('cta')}
          </Link>

          {/* Group 4 — Hamburger Menu (Mobile Only) */}
          <button
            className="lg:hidden flex"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              padding: '4px',
              alignItems: 'center',
            }}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden flex"
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #f1f5f9',
            padding: '32px 24px',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#0f172a',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            href="/#contact-form"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              scrollToContact(e);
            }}
            style={{
              fontSize: '16px',
              fontWeight: 800,
              padding: '16px 24px',
              borderRadius: '12px',
              background: '#facc15',
              color: '#0f172a',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {t('cta')}
          </Link>
        </div>
      )}

      <style>{`
        .navbar-header {
          padding: 0 32px;
        }
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 768px) {
          .navbar-header {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </header>
  );
}
