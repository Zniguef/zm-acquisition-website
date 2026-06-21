'use client';

import { Link } from '@/i18n/navigation';
import type { CaseStudy } from '@/data/caseStudies';

interface Props {
  study: CaseStudy;
  index: number;
}

const ACCENT_COLORS = [
  { bg: '#eff6ff', border: '#bfdbfe', dot: '#2563eb', badge: '#1d4ed8' },
  { bg: '#f0fdf4', border: '#bbf7d0', dot: '#16a34a', badge: '#15803d' },
  { bg: '#fdf4ff', border: '#e9d5ff', dot: '#9333ea', badge: '#7e22ce' },
  { bg: '#fff7ed', border: '#fed7aa', dot: '#ea580c', badge: '#c2410c' },
];

export default function CaseStudyCard({ study, index }: Props) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <article
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow =
          '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow =
          '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)';
      }}
    >
      {/* Coloured top strip */}
      <div
        style={{
          background: accent.bg,
          borderBottom: `1px solid ${accent.border}`,
          padding: '24px 28px 20px 28px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: accent.badge,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Étude de cas {study.number}
            </span>
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 800,
                color: '#0f172a',
                margin: '4px 0 0 0',
                letterSpacing: '-0.02em',
              }}
            >
              {study.companyName}
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#64748b',
                margin: '2px 0 0 0',
              }}
            >
              {study.clientName}
            </p>
          </div>
          <span
            style={{
              background: '#fff',
              border: `1px solid ${accent.border}`,
              color: accent.badge,
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '100px',
              whiteSpace: 'nowrap',
            }}
          >
            {study.industry}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '24px 28px', flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Tagline */}
        <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
          {study.tagline}
        </p>

        {/* Key metrics row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}
        >
          {study.cardMetrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '12px 8px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 900,
                  color: accent.badge,
                  lineHeight: 1,
                }}
              >
                {m.value}
              </div>
              <div
                style={{ fontSize: '11px', color: '#94a3b8', marginTop: '3px', lineHeight: 1.3 }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Meta info */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            paddingTop: '4px',
            borderTop: '1px solid #f1f5f9',
          }}
        >
          <span style={{ fontSize: '12px', color: '#64748b' }}>
            <strong style={{ color: '#374151' }}>Durée :</strong> {study.period}
          </span>
          <span style={{ color: '#e2e8f0' }}>·</span>
          <span style={{ fontSize: '12px', color: '#64748b' }}>
            <strong style={{ color: '#374151' }}>Plateforme :</strong> {study.platform}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {study.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                background: accent.bg,
                border: `1px solid ${accent.border}`,
                color: accent.badge,
                fontSize: '11px',
                fontWeight: 600,
                padding: '3px 9px',
                borderRadius: '100px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
          <Link
            href={`/case-studies/${study.slug}` as `/case-studies/${string}`}
            style={{
              display: 'block',
              textAlign: 'center',
              background: accent.badge,
              color: '#fff',
              fontWeight: 700,
              fontSize: '14px',
              padding: '12px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Voir l&apos;étude complète →
          </Link>
        </div>
      </div>
    </article>
  );
}
