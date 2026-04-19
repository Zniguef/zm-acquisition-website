'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
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
        backgroundColor: '#ffffff',
        padding: '100px 32px',
        color: '#0f172a',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '80px',
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
            borderRadius: '16px',
            padding: '48px',
            borderTop: '4px solid #facc15', // Golden top edge
            color: '#0f172a',
            boxShadow: '0 20px 60px -15px rgba(0,0,0,0.1)',
            border: '1px solid #f1f5f9',
            borderTopWidth: '4px',
            borderTopColor: '#facc15',
          }}
        >
          <h3
            style={{
              fontSize: '28px',
              fontWeight: 800,
              marginBottom: '16px',
              textAlign: 'center',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            {t('formTitle')}
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: '#475569',
              marginBottom: '32px',
              textAlign: 'center',
              lineHeight: 1.5,
              margin: '0 0 32px 0',
            }}
          >
            {t('formSub')}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Name */}
            <div>
              <input
                type="text"
                required
                placeholder={t('namePlaceholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  color: '#0f172a',
                }}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                required
                placeholder={t('phonePlaceholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  color: '#0f172a',
                }}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                required
                placeholder={t('emailPlaceholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  color: '#0f172a',
                }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Business Type */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>
                {t('businessType')}
              </label>
              <select
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  appearance: 'none',
                  color: '#0f172a',
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
              className="form-submit-btn"
              style={{
                width: '100%',
                background: '#0f172a',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '12px',
                transition: 'all 0.2s',
              }}
            >
              {t('cta')}
            </button>

            <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', lineHeight: 1.5, marginTop: '8px' }}>
              {t('disclaimer')}
            </p>
          </form>
        </div>

        {/* Right Column: Content */}
        <div style={{ flex: '1.2', minWidth: '320px' }}>
          <h2
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '32px',
              margin: '0 0 32px 0',
              color: '#0f172a',
              letterSpacing: '-0.03em',
            }}
          >
            {t('headlinePrefix')}
            <span style={{ color: '#0f172a' }}>{t('highlight')}</span>
            {t('headlineSuffix')}
          </h2>

          <div
            style={{
              marginBottom: '48px',
              maxWidth: '560px',
            }}
            className="subtext-container"
          >
            <p
              style={{
                fontSize: '20px',
                color: '#1e293b',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              {t('subtext')}
            </p>
          </div>

          {/* Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="#facc15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: '17px', fontWeight: 500, color: '#0f172a' }}>{t(`benefit${i}`)}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', marginBottom: '16px' }}>
            <p style={{ fontSize: '18px', color: '#1e293b', marginBottom: '16px', fontWeight: 500 }}>
              {locale === 'ar' ? 'نعمل على المنصات الرائدة' : 
               locale === 'fr' ? 'Nous travaillons sur les meilleures plateformes' : 
               'We work on leading platforms'}
            </p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              
              {/* Facebook Grey Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15 11H13V18H10V11H9V8H10V6.5C10 4.57 11.12 3.5 13 3.5H15V6H13.5C12.7 6 12.5 6.4 12.5 6.9V8H15L15 11Z"/>
              </svg>

              {/* Instagram Grey Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11.5c0 2.48-2.02 4.5-4.5 4.5S7 15.98 7 13.5 9.02 9 11.5 9 16 11.02 16 13.5zm1.5-6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S18.33 7 17.5 7z"/><circle cx="11.5" cy="13.5" r="2.5" fill="#ffffff" /><path d="M11.5 10c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5S13.43 10 11.5 10zm0 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>

              {/* LinkedIn Grey Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM8.5 17H6V9h2.5v8zM7.25 7.85c-.8 0-1.25-.53-1.25-1.18 0-.67.47-1.18 1.28-1.18s1.25.5 1.25 1.18c0 .66-.45 1.18-1.28 1.18zM18 17h-2.5v-4.14c0-.99-.35-1.66-1.23-1.66-.68 0-1.08.46-1.26.9-.06.15-.08.35-.08.56V17H10.4s.03-7.25 0-8h2.53v1.13A2.49 2.49 0 0 1 15.2 9c1.66 0 2.9 1.08 2.9 3.42V17h-.1z"/>
              </svg>

              {/* Google Grey Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2zm1 14.86c-2.43 0-4.42-1.92-4.5-4.34a4.444 4.444 0 011.23-3.26c1.83-1.87 4.84-2.02 6.84-.33l-1.47 1.58c-.99-.83-2.57-1.01-3.7-.17-.99.73-1.32 2.1-1.01 3.23.41 1.48 1.74 2.29 3.26 2.05 1.42-.23 2.45-1.5 2.5-2.95H13V11h5.12c.07.4.1.81.1 1.22 0 2.6-1.57 4.64-4.22 4.64z"/>
              </svg>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .form-submit-btn:hover {
          background: #1e293b !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .form-submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 1023px) {
           #contact > div {
             flex-direction: column-reverse;
             text-align: center;
             gap: 64px !important;
           }
           .subtext-container {
             max-width: 100% !important;
             margin: 0 auto 48px auto !important;
           }
           #contact h2 {
             margin-bottom: 24px;
           }
        }
      `}</style>
    </section>
  );
}
