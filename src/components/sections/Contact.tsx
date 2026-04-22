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
    otherService: '',
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
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>
                {t('name')} <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>
              </label>
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
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>
                {t('phone')} <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>
              </label>
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
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>
                {t('email')} <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>
              </label>
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
                {t('businessType')} <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  required
                  style={{
                    width: '100%',
                    padding: '14px 40px 14px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    fontSize: '15px',
                    outline: 'none',
                    appearance: 'none',
                    color: '#0f172a',
                    cursor: 'pointer',
                  }}
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                >
                  <option value="">{t('businessTypePlaceholder')}</option>
                  <option value="gym">Gym / Fitness</option>
                  <option value="coaching">Coaching / Training</option>
                  <option value="agency">Real Estate / Agency</option>
                  <option value="other">Other Service</option>
                </select>
                <div 
                  style={{ 
                    position: 'absolute', 
                    right: '16px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Conditional Other Service Input */}
            {formData.businessType === 'other' && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>
                  {t('otherServiceLabel')} <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('otherServicePlaceholder')}
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
                  onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                />
              </div>
            )}

            {/* CTA Button */}
            <button
              type="submit"
              className="form-submit-btn"
              style={{
                width: '100%',
                background: '#0D3EA6',
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
        <div className="contact-content-column" style={{ flex: '1.2', minWidth: '320px' }}>
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
          <div className="contact-checklist" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="#facc15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'inherit' }} className="platforms-logos">
              {[
                {
                  key: 'fb',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                },
                {
                  key: 'ig',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                },
                {
                  key: 'google',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                }
              ].map((item) => (
                <div
                  key={item.key}
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#f1f5f9',
                    color: '#475569',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .form-submit-btn:hover {
          background: #1e40af !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .form-submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 1023px) {
           #contact {
             padding: 64px 24px !important;
           }
           #contact > div {
             flex-direction: column-reverse;
             text-align: center;
             gap: 64px !important;
           }
           .contact-content-column {
             display: flex;
             flex-direction: column;
             align-items: center;
           }
           .subtext-container {
             max-width: 100% !important;
             margin: 0 auto 48px auto !important;
           }
           #contact h2 {
             margin-bottom: 24px;
             text-align: center;
           }
           .contact-checklist {
             align-items: flex-start !important;
             text-align: left !important;
           }
           .checklist-item {
             text-align: left !important;
           }
           .platforms-logos {
             justify-content: center !important;
           }
        }
        @media (max-width: 768px) {
           #contact {
             padding: 48px 16px !important;
           }
        }
      `}</style>
    </section>
  );
}
