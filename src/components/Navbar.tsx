'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LOCALE_LABELS: Record<string, string> = {
  ar: 'AR',
  en: 'EN',
  fr: 'FR',
};

const NAV_LINKS = [
  { key: 'services' as const, href: '#services' },
  { key: 'results' as const, href: '#results' },
  { key: 'about' as const, href: '#about' },
  { key: 'faq' as const, href: '#faq' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isLangOpen, setIsLangOpen] = useState(false);
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
    // Replace the locale prefix in the URL, keeping the rest of the path intact.
    router.replace(pathname, { locale: nextLocale });
    setIsLangOpen(false);
  }

  function scrollToContact(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #eeeeee',
        height: '64px',
        padding: '0 32px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* ── Left side (Logo) ── */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <a
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <img
              src="/images/iconLogo.png"
              alt="ZM Acquisition"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />

            {/* Brand name */}
            <span
              style={{
                fontWeight: 900,
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: '#111111',
                whiteSpace: 'nowrap',
              }}
            >
              ZM ACQUISITION
            </span>
          </a>
        </div>

        {/* ── Center Menu ── */}
        <ul
          className="hidden md:flex"
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  color: '#4A4A4A',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#111111')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4A4A4A')}
              >
                {t(key)}
              </a>
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
            gap: '24px'
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
                fontSize: '11px',
                fontWeight: 600,
                padding: '6px 12px',
                borderRadius: '8px',
                border: '1px solid #eeeeee',
                background: '#ffffff',
                color: '#111111',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isLangOpen ? '0 0 0 2px rgba(255, 222, 89, 0.2)' : 'none',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                if (!isLangOpen) {
                  btn.style.borderColor = '#dddddd';
                  btn.style.background = '#f9f9f9';
                }
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if (!isLangOpen) {
                  btn.style.borderColor = '#eeeeee';
                  btn.style.background = '#ffffff';
                }
              }}
              aria-label="Select Language"
              aria-expanded={isLangOpen}
            >
              {/* World Icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.7 }}
              >
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>

              <span style={{ minWidth: '20px', textAlign: 'center' }}>
                {LOCALE_LABELS[locale]}
              </span>

              {/* Chevron Icon */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'transform 0.2s',
                  transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.5
                }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: locale === 'ar' ? 'auto' : 0,
                left: locale === 'ar' ? 0 : 'auto',
                background: '#ffffff',
                border: '1px solid #eeeeee',
                borderRadius: '10px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                padding: '6px',
                minWidth: '130px',
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
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      background: isActive ? '#fefce8' : 'transparent',
                      color: isActive ? '#111111' : '#4A4A4A',
                      fontSize: '11px',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.1s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#f9f9f9';
                        e.currentTarget.style.color = '#111111';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#4A4A4A';
                      }
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: isActive ? '#FFDE59' : 'transparent',
                        display: 'inline-block'
                      }} />
                      {loc === 'en' ? 'English' : loc === 'ar' ? 'العربية' : 'Français'}
                    </span>
                    <span style={{ fontSize: '10px', opacity: 0.5, fontWeight: 400 }}>
                      {LOCALE_LABELS[loc]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 3 — CTA button */}
          <a
            href="#contact-form"
            id="navbar-cta"
            onClick={scrollToContact}
            style={{
              fontSize: '11px',
              fontWeight: 700,
              padding: '8px 16px',
              borderRadius: '6px',
              background: '#FFDE59',
              color: '#111111',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#ffd633';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#FFDE59';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
