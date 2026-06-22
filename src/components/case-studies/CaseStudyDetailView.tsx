'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import type { CaseStudy } from '@/data/caseStudies';
import { useTranslations } from 'next-intl';

interface Props {
  study: CaseStudy;
}

type Tab = 'overview' | 'strategy' | 'results';

export default function CaseStudyDetailView({ study }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const t = useTranslations('caseStudyDetail');

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>

      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid #e2e8f0',
          padding: '14px 32px',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
            <Link href="/case-studies" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
              {t('breadcrumbList')}
            </Link>
            <span>›</span>
            <span style={{ color: '#374151', fontWeight: 500 }}>{study.companyName}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero Header ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid #e2e8f0',
          padding: '48px 32px',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '40px',
            }}
          >
            {/* Left */}
            <div style={{ flex: '1', minWidth: '280px' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1d4ed8',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  marginBottom: '16px',
                }}
              >
                {t('caseStudyPrefix')} {study.number}
              </span>

              <h1
                style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 900,
                  color: '#0f172a',
                  margin: '0 0 6px 0',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                }}
              >
                {study.companyName}
              </h1>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '0 0 20px 0' }}>
                {study.companyFullName}
              </p>

              <p
                style={{
                  fontSize: '15px',
                  color: '#374151',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                  margin: '0 0 24px 0',
                }}
              >
                {study.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #e2e8f0',
                      color: '#334155',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '100px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: meta card */}
            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                minWidth: '220px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                { label: t('client'), value: study.clientName },
                { label: t('duration'), value: study.period },
                { label: t('platform'), value: study.platform },
                { label: t('industry'), value: study.industry },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      margin: '0 0 2px 0',
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tab Bar ───────────────────────────────────────────────────────── */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid #e2e8f0',
          padding: '0 32px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '0' }}
        >
          {(
            [
              { id: 'overview', label: t('tabOverview') },
              { id: 'strategy', label: t('tabStrategy') },
              { id: 'results', label: t('tabResults') },
            ] as { id: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #2563eb' : '2px solid transparent',
                color: activeTab === tab.id ? '#1d4ed8' : '#64748b',
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: '14px',
                padding: '16px 20px',
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ───────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 32px' }}>

        {/* ─ Overview ─ */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* KPI Grid */}
            <div>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0 0 20px 0',
                }}
              >
                {t('keyMetrics')}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: '16px',
                }}
              >
                {study.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderTop: `3px solid ${m.color}`,
                      borderRadius: '12px',
                      padding: '20px 16px',
                      textAlign: 'center',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      transition: 'transform 0.15s, box-shadow 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(24px, 3vw, 34px)',
                        fontWeight: 900,
                        color: m.color,
                        lineHeight: 1,
                        marginBottom: '6px',
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '3px' }}
                    >
                      {m.label}
                    </div>
                    {m.sublabel && (
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{m.sublabel}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Services & Audience */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Services */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: '#0f172a',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    margin: '0 0 16px 0',
                  }}
                >
                  {t('promotedServices')}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {study.services.map((s) => (
                    <div
                      key={s.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        borderRadius: '10px',
                        padding: '12px 14px',
                      }}
                    >
                      <span style={{ fontSize: '22px' }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>
                          {s.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>{s.type}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {study.priceRange && (
                  <div
                    style={{
                      marginTop: '16px',
                      background: '#fffbeb',
                      border: '1px solid #fde68a',
                      borderRadius: '10px',
                      padding: '12px 14px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#92400e',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        margin: '0 0 2px 0',
                      }}
                    >
                      {t('priceRange')}
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 900, color: '#78350f', margin: 0 }}>
                      {study.priceRange}
                    </p>
                    {study.priceNote && (
                      <p style={{ fontSize: '12px', color: '#a16207', margin: '2px 0 0 0' }}>
                        {study.priceNote}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Audience */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: '#0f172a',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    margin: '0 0 16px 0',
                  }}
                >
                  {t('targetAudience')}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {study.audience.map((role) => (
                    <div
                      key={role}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        borderRadius: '8px',
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#2563eb',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─ Strategy ─ */}
        {activeTab === 'strategy' && (
          <div>
            <h2
              style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 32px 0' }}
            >
              {t('strategyImplemented')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {study.strategy.map((phase, idx) => (
                <div key={phase.title} style={{ display: 'flex', gap: '20px' }}>
                  {/* Icon + line */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: '#eff6ff',
                        border: '2px solid #bfdbfe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                      }}
                    >
                      {phase.icon}
                    </div>
                    {idx < study.strategy.length - 1 && (
                      <div
                        style={{
                          width: '2px',
                          flex: '1',
                          minHeight: '32px',
                          background: '#e2e8f0',
                          marginTop: '6px',
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      flex: '1',
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '20px 24px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      marginBottom: idx < study.strategy.length - 1 ? '0' : '0',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '10px',
                        flexWrap: 'wrap',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#2563eb',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {phase.phase}
                      </span>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 800,
                          color: '#0f172a',
                          margin: 0,
                        }}
                      >
                        {phase.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#475569',
                        lineHeight: 1.7,
                        margin: '0 0 14px 0',
                      }}
                    >
                      {phase.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {phase.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: '#1d4ed8',
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: '100px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─ Results ─ */}
        {activeTab === 'results' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* ROI Breakdown */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <h2
                style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 24px 0' }}
              >
                {t('roi')}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '14px',
                }}
              >
                {study.roiBreakdown.map((row) => (
                  <div
                    key={row.label}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '16px 12px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '24px',
                        fontWeight: 900,
                        color: row.color,
                        marginBottom: '4px',
                      }}
                    >
                      {row.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                      {row.label}
                    </div>
                  </div>
                ))}
              </div>
              {study.roiDisclaimer && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    margin: '20px 0 0 0',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {study.roiDisclaimer}
                </p>
              )}
            </div>

            {/* Key Insights */}
            <div>
              <h2
                style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 20px 0' }}
              >
                {t('keyInsights')}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                }}
              >
                {study.insights.map((insight) => (
                  <div
                    key={insight.title}
                    style={{
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '24px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      transition: 'box-shadow 0.15s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)')
                    }
                  >
                    <div style={{ fontSize: '28px', marginBottom: '10px' }}>{insight.icon}</div>
                    <h4
                      style={{
                        fontSize: '15px',
                        fontWeight: 800,
                        color: '#0f172a',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {insight.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                      {insight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)',
                borderRadius: '20px',
                padding: '40px 36px',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('ctaHeadline')}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#bfdbfe',
                  margin: '0 0 28px 0',
                  maxWidth: '480px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {t('ctaSubtext')}
              </p>
              <Link
                href="/#contact"
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: '#1d4ed8',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px 36px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {t('ctaButton')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
