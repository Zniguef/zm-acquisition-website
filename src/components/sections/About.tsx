'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const TAGS = ['tag1', 'tag2', 'tag3'];

export default function About() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#ffffff',
        padding: '120px 32px',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Optional: subtle background dotted pattern on left side to match mockup */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0,
          width: '300px',
          backgroundSize: '20px 20px',
          backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '80px',
          alignItems: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
        className="about-container"
      >
        {/* Left Column: Image/Logo */}
        <div
          style={{
            flex: '1',
            minWidth: '320px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src="/images/logo.png"
            alt="ZM Logo"
            width={350}
            height={350}
            style={{
              width: '100%',
              maxWidth: '320px',
              height: 'auto',
              objectFit: 'contain',
              marginBottom: '0px',
            }}
          />

          <p
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#2563eb', // Nice bright blue like mockup
              margin: 0,
              marginTop: '-15px',
            }}
          >
            {t('role')}
          </p>
        </div>

        {/* Right Column: Content */}
        <div
          style={{
            flex: '1.2',
            minWidth: '320px',
          }}
        >
          {/* Headline (No label) */}
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 48px)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '32px',
              letterSpacing: '-0.02em',
            }}
          >
            {t('headline')}
          </h2>

          {/* Body Text */}
          <div
            style={{
              fontSize: '17px',
              color: '#334155',
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginBottom: '40px',
              fontWeight: 400,
            }}
          >
            {/* If original used text1, text2. Mockup has 3 paragraphs but we map whatever we have */}
            <p style={{ margin: 0 }}>{t('text1')}</p>
            <p style={{ margin: 0 }}>{t('text2')}</p>
          </div>

          {/* Tags */}
          <div className="tags-container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {TAGS.map((tagKey) => (
              <span
                key={tagKey}
                style={{
                  background: '#fef08a', // Mockup soft yellow
                  border: '1.5px solid #0f172a', // Mockup dark border
                  color: '#0f172a',
                  fontSize: '14px',
                  fontWeight: 700,
                  padding: '8px 18px',
                  borderRadius: '100px',
                  boxShadow: '2px 2px 0px #0f172a', // Hard drop shadow effect from mockup
                  transition: 'transform 0.1s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(1px, 1px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '1px 1px 0px #0f172a';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(0px, 0px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '2px 2px 0px #0f172a';
                }}
              >
                {t(tagKey)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*<style>{`
        .blob-bg {
          position: relative;
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #fef08a 0%, #facc15 100%);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: morph 8s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 10px 20px 30px rgba(255,255,255,0.4),
                      0 20px 40px rgba(250, 204, 21, 0.3);
        }

        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34%      { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67%      { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }

        @media (max-width: 1024px) {
          .about-container {
            flex-direction: column !important;
            text-align: center;
            gap: 64px !important;
          }
          .about-container > div {
             width: 100%;
          }
          .tags-container {
            justify-content: center;
          }
        }
      `}</style> */}
    </section>
  );
}
