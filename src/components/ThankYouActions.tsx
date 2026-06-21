'use client';

import { Link } from '@/i18n/navigation';

interface Props {
  backHome: string;
  caseStudies: string;
}

export default function ThankYouActions({ backHome, caseStudies }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'inline-block',
          background: '#1d4ed8',
          color: '#fff',
          fontWeight: 700,
          fontSize: '15px',
          padding: '13px 28px',
          borderRadius: '10px',
          textDecoration: 'none',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {backHome}
      </Link>
      <Link
        href="/case-studies"
        style={{
          display: 'inline-block',
          background: '#fff',
          color: '#1d4ed8',
          fontWeight: 700,
          fontSize: '15px',
          padding: '13px 28px',
          borderRadius: '10px',
          textDecoration: 'none',
          border: '1px solid #bfdbfe',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#eff6ff')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
      >
        {caseStudies}
      </Link>
    </div>
  );
}
