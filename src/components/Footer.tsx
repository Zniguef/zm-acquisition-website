'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      style={{
        background: '#ffffff',
        padding: '48px 32px',
        borderTop: '1px solid #eeeeee',
        color: '#111111',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '32px',
          direction: 'ltr', // Always left-to-right
        }}
      >
        {/* Left: Brand & Copy */}
        <div style={{ textAlign: 'left' }} className="brand-section">
          <h4
            style={{
              fontSize: '14px',
              fontWeight: 900,
              color: '#1F3C88', // Updated from Green to Blue
              margin: '0 0 8px 0',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            ZM ACQUISITION
          </h4>
          <p
            style={{
              fontSize: '11px',
              color: '#666666',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} ZM Acquisition. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            {
              key: 'fb',
              url: '#',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            },
            {
              key: 'ig',
              url: '#',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            },
            {
              key: 'li',
              url: 'https://www.linkedin.com/company/zm-acquisition/',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            }
          ].map((item) => (
            <a
              key={item.key}
              href={item.url}
              target={item.url !== '#' ? "_blank" : undefined}
              rel={item.url !== '#' ? "noopener noreferrer" : undefined}
              style={{
                width: '40px',
                height: '40px',
                background: '#f5f5f5',
                color: '#111111',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#eeeeee';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f5f5f5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer > div {
            flex-direction: column !important;
            text-align: left !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
          .brand-section {
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}
