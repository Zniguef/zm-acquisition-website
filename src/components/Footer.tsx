'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      style={{
        backgroundColor: '#f8fafc',
        padding: '50px 32px 80px 32px',
        color: '#0f172a',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '64px',
        }}
      >
        {/* Left: Brand & Copy */}
        <div style={{ textAlign: 'start', flex: '1', minWidth: '300px' }} className="brand-section">
          <h4
            style={{
              fontSize: '32px',
              fontWeight: 900,
              color: '#0f172a',
              margin: '0 0 16px 0',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            {t('brand')}
          </h4>
          <p
            style={{
              fontSize: '20px',
              color: '#1e293b',
              margin: '0 0 48px 0',
              fontWeight: 400,
            }}
          >
            {t('tagline')}
          </p>

          <div className="footer-copyright" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p
              style={{
                fontSize: '15px',
                color: '#0f172a',
                margin: 0,
                fontWeight: 500,
              }}
            >
              {t('copyright')}
            </p>
            <Link
              href="/privacy"
              style={{
                fontSize: '15px',
                color: '#0f172a',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              {t('privacy')}
            </Link>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1', minWidth: '200px', alignItems: 'center', marginTop: "10px" }}>
          {[
            { label: t('menu_services'), href: '#services' },
            { label: t('menu_caseStudies'), href: '#results' },
            { label: t('menu_faq'), href: '#faq' },
            { label: t('menu_contact'), href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '18px',
                color: '#0f172a',
                textDecoration: 'none',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: "40px", flex: '1', justifyContent: 'flex-end', minWidth: '200px', marginTop: "10px" }}>
          {[
            {
              key: 'fb',
              url: 'https://www.facebook.com/profile.php?id=61569770715656',
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            },
            {
              key: 'ig',
              url: 'https://www.instagram.com/zm_acquisition/',
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            },
            {
              key: 'li',
              url: 'https://www.linkedin.com/company/zm-acquisition/',
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            }
          ].map((item) => (
            <a
              key={item.key}
              href={item.url}
              target={item.url !== '#' ? "_blank" : undefined}
              rel={item.url !== '#' ? "noopener noreferrer" : undefined}
              style={{
                width: '56px',
                height: '56px',
                background: '#e2e8f0',
                color: '#0f172a',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#cbd5e1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            gap: 48px !important;
          }
          .brand-section {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-links,
          .footer-copyright {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
