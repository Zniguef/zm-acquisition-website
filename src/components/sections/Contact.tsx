'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section
      id="contact"
      style={{
        background: '#ffffff',
        padding: '100px 32px',
        color: '#111111',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          flexWrap: 'wrap-reverse',
        }}
      >
        {/* Left Column: Form Card */}
        <div
          style={{
            flex: '1',
            minWidth: '320px',
            background: '#ffffff',
            borderRadius: '12px',
            padding: '40px',
            borderLeft: '8px solid #1F3C88',
            borderTop: '1px solid #eeeeee',
            borderRight: '1px solid #eeeeee',
            borderBottom: '1px solid #eeeeee',
            color: '#111111',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          }}
        >
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 800,
              marginBottom: '8px',
              margin: '0 0 8px 0',
            }}
          >
            {t('formTitle')}
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#666666',
              marginBottom: '32px',
              margin: '0 0 32px 0',
            }}
          >
            {t('formSub')}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                {t('name')}
              </label>
              <input
                type="text"
                required
                placeholder={t('namePlaceholder')}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #eeeeee',
                  background: '#fcfcfc',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                {t('phone')}
              </label>
              <input
                type="tel"
                required
                placeholder={t('phonePlaceholder')}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #eeeeee',
                  background: '#fcfcfc',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                {t('email')}
              </label>
              <input
                type="email"
                required
                placeholder={t('emailPlaceholder')}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #eeeeee',
                  background: '#fcfcfc',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Business Type */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                {t('businessType')}
              </label>
              <select
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #eeeeee',
                  background: '#fcfcfc',
                  fontSize: '14px',
                  outline: 'none',
                  appearance: 'none',
                }}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              >
                <option value="">{t('businessTypePlaceholder')}</option>
                <option value="gym">Gym / Fitness</option>
                <option value="coaching">Coaching / Training</option>
                <option value="agency">Real Estate / Agency</option>
                <option value="other">Other Service</option>
              </select>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#1F3C88',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '12px',
                transition: 'background 0.2s, transform 0.1s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#162d6e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1F3C88')}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {t('cta')}
            </button>

            <p style={{ fontSize: '11px', color: '#999999', textAlign: 'center', lineHeight: 1.5, marginTop: '8px' }}>
              {t('disclaimer')}
            </p>
          </form>
        </div>

        {/* Right Column: Content */}
        <div style={{ flex: '1.2', minWidth: '320px' }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '32px',
              margin: '0 0 32px 0',
              color: '#111111',
            }}
          >
            {t.rich('headline', {
              highlight: (chunks) => <span style={{ color: '#1F3C88' }}>{chunks}</span>,
            })}
          </h2>

          <div
            style={{
              paddingLeft: '24px',
              borderLeft: '4px solid #1F3C88',
              marginBottom: '48px',
              maxWidth: '500px',
            }}
            className="subtext-container"
          >
            <p
              style={{
                fontSize: '18px',
                color: '#4A4A4A',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {t('subtext')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    background: '#1F3C88',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 5.5L4.5 9L13 1"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span style={{ fontSize: '16px', fontWeight: 500, color: '#111111' }}>{t(`benefit${i}`)}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', position: 'relative', height: '40px' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                    background: '#eeeeee',
                    marginLeft: i > 1 ? '-12px' : '0',
                    zIndex: 4 - i,
                  }}
                />
              ))}
            </div>
            <p style={{ fontSize: '14px', color: '#666666', margin: 0 }}>
              {t('socialProof')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        [dir="rtl"] .subtext-container {
          border-left: none;
          border-right: 4px solid #1F3C88;
          padding-left: 0;
          padding-right: 24px;
        }
        
        @media (max-width: 1023px) {
           #contact div:first-child {
             flex-direction: column-reverse;
             text-align: center;
           }
           .subtext-container {
             max-width: 100%;
             border: none !important;
             padding: 0 !important;
           }
           #contact div:first-child > div {
             width: 100%;
           }
           #contact h2 {
             margin-bottom: 24px;
           }
           #contact div:nth-child(2) {
             align-items: center;
           }
        }
      `}</style>
    </section>
  );
}
