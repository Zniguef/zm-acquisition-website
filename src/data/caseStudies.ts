// ─────────────────────────────────────────────────────────────────────────────
// Central case-study data store.
// To add a new case study, add an entry to the CASE_STUDIES array.
// ─────────────────────────────────────────────────────────────────────────────

export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
  color: string;
}

export interface ServiceOffered {
  name: string;
  icon: string;
  type: string;
}

export interface StrategyPhase {
  phase: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Insight {
  icon: string;
  title: string;
  text: string;
}

export interface RoiRow {
  label: string;
  value: string;
  color: string;
}

export interface CaseStudy {
  slug: string;
  number: string;              // e.g. "#001"
  clientName: string;
  companyName: string;         // short brand name shown on the card
  companyFullName: string;     // full legal / trading name
  industry: string;
  tagline: string;             // one-line description for the listing card
  description: string;        // paragraph shown in the detail header
  period: string;
  platform: string;
  tags: string[];

  // ── Card hero numbers (shown on the listing grid) ──────────────────────────
  cardMetrics: { value: string; label: string }[];

  // ── KPI grid in the detail page ─────────────────────────────────────────────
  metrics: Metric[];

  // ── Services section ────────────────────────────────────────────────────────
  services: ServiceOffered[];
  priceRange?: string;
  priceNote?: string;

  // ── Target audience ─────────────────────────────────────────────────────────
  audience: string[];

  // ── Strategy timeline ───────────────────────────────────────────────────────
  strategy: StrategyPhase[];

  // ── Results tab ─────────────────────────────────────────────────────────────
  roiBreakdown: RoiRow[];
  roiDisclaimer?: string;
  insights: Insight[];
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  // ── Case Study #001 — Cabinet CM2F ───────────────────────────────────────
  {
    slug: 'cabinet-cm2f-chorfi',
    number: '#001',
    clientName: 'Mohamed Chorfi',
    companyName: 'Cabinet CM2F',
    companyFullName: 'Cabinet d\'Expertise Comptable Et de Formation CHORFI MOHAMED CM2F',
    industry: 'Expertise Comptable & Formation',
    tagline: 'Formation comptable, fiscale et séminaires professionnels au Maroc',
    description:
      'Cabinet d\'expertise comptable et de formation professionnelle basé au Maroc. En 2 mois, nous avons généré 181 leads qualifiés pour un budget de $370 grâce à des campagnes Meta Ads ultra-ciblées sur les professionnels comptables.',
    period: '2 mois',
    platform: 'Meta Ads (Facebook & Instagram)',
    tags: ['Meta Ads', 'Formation comptable', 'Maroc', 'Lead Generation', 'Séminaires'],

    cardMetrics: [
      { value: '181', label: 'Leads générés' },
      { value: '$2.04', label: 'Coût par lead' },
      { value: '37×', label: 'ROAS' },
    ],

    metrics: [
      { value: '181', label: 'Leads générés', sublabel: 'En 2 mois de campagne', color: '#4f46e5' },
      { value: '$2.04', label: 'Coût par lead', sublabel: 'Budget total : $370', color: '#16a34a' },
      { value: '25', label: 'Clients convertis', sublabel: 'Taux de conversion 13.8%', color: '#db2777' },
      { value: '$14.80', label: 'Coût par client', sublabel: 'Sur budget publicitaire', color: '#ea580c' },
      { value: '37×', label: 'ROAS', sublabel: 'Retour sur dépense pub', color: '#ca8a04' },
      { value: '3 616%', label: 'ROI publicitaire', sublabel: 'Sur le budget ads seul', color: '#0891b2' },
    ],

    services: [
      { name: 'Formations en ligne', icon: '💻', type: 'Digital' },
      { name: 'Formations offline', icon: '🏛️', type: 'Présentiel' },
      { name: 'Séminaires', icon: '🎤', type: 'Évènementiel' },
    ],
    priceRange: '1 000 DH — 10 000 DH',
    priceNote: 'Variable selon le programme',

    audience: [
      'RAF — Responsable Administratif et Financier',
      'DAF — Directeur Administratif et Financier',
      'Chef Comptable',
      'Comptable Agréé',
      'Expert Comptable',
      'Auditeur',
      'Fiscaliste',
      'Comptable',
    ],

    strategy: [
      {
        phase: 'Phase 1',
        title: 'Recherche & Stratégie',
        description:
          'Analyse approfondie du marché marocain de la comptabilité. Identification des audiences RAF, DAF, Chef Comptable, Expert Comptable, Auditeur, Fiscaliste. Étude concurrentielle et définition du message marketing.',
        tags: ['Market Research', 'Audience Analysis', 'Competitive Intelligence'],
        icon: '🔍',
      },
      {
        phase: 'Phase 2',
        title: 'Construction du Funnel',
        description:
          'Création du funnel dédié aux formations en ligne et aux séminaires. Landing page optimisée pour la conversion avec message ciblé sur les professionnels comptables marocains.',
        tags: ['Landing Page', 'Funnel Build', 'Copywriting'],
        icon: '🏗️',
      },
      {
        phase: 'Phase 3',
        title: 'Lancement des Campagnes',
        description:
          'Déploiement de campagnes Meta Ads ciblant précisément les professionnels du secteur comptable et fiscal au Maroc. Créatifs adaptés pour les formations online ET les séminaires présentiel.',
        tags: ['Meta Ads', 'Campaign Setup', 'Creatives'],
        icon: '🚀',
      },
      {
        phase: 'Phase 4',
        title: 'Optimisation Continue',
        description:
          'Optimisation hebdomadaire des campagnes, A/B testing des créatifs, ajustement des audiences pour maintenir un CPL sous $2.50 tout au long de la collaboration.',
        tags: ['Optimization', 'A/B Testing', 'Reporting'],
        icon: '📈',
      },
    ],

    roiBreakdown: [
      { label: 'Budget ads investi', value: '$370', color: '#ea580c' },
      { label: 'Leads générés', value: '181', color: '#4f46e5' },
      { label: 'Clients convertis', value: '25', color: '#db2777' },
      { label: 'Revenu estimé (moy. 5 500 DH)', value: '~$13 750', color: '#16a34a' },
      { label: 'ROAS', value: '37×', color: '#ca8a04' },
      { label: 'ROI (ads seul)', value: '+3 616%', color: '#0891b2' },
    ],
    roiDisclaimer:
      '* Revenu estimé basé sur un prix moyen de 5 500 DH par programme (mi-gamme entre 1 000 DH et 10 000 DH). ROAS et ROI calculés sur le budget publicitaire seul.',

    insights: [
      {
        icon: '⚡',
        title: 'CPL exceptionnel',
        text: 'À $2.04 par lead, CM2F a obtenu l\'un des coûts par lead les plus bas du secteur formation B2B au Maroc.',
      },
      {
        icon: '🎯',
        title: 'Ciblage précis',
        text: 'Le ciblage ultra-spécifique sur les professionnels comptables (RAF, DAF, Expert-Comptable) a garanti une qualité de leads supérieure.',
      },
      {
        icon: '🔄',
        title: 'Double approche',
        text: 'Campagnes séparées pour les formations online et les séminaires présentiel, avec des créatifs et messages adaptés à chaque format.',
      },
      {
        icon: '💡',
        title: 'Conversion client',
        text: '25 clients sur 181 leads = 13.8% de taux de conversion. Pour un service B2B premium, ce ratio témoigne de la qualité des leads générés.',
      },
    ],
  },

  // ── Case Study #002 — Costless ───────────────────────────────────────────
  {
    slug: 'costless-rismy',
    number: '#002',
    clientName: 'Mohamed Rismy',
    companyName: 'Cabinet Costless',
    companyFullName: 'Costless – Conseiller en Optimisation de Coûts',
    industry: 'Conseil Financier & Formation',
    tagline: 'Conseil en optimisation des coûts et formation professionnelle',
    description:
      'COSTLESS est un cabinet de conseil financier et de formation professionnelle fondé par Mohamed Rismy, ancien cadre bancaire avec plus de 30 ans d\'expérience. Entre le 6 mai et le 9 juin 2026, nous avons généré 242 leads qualifiés pour un budget de $320 — soit un CPL de seulement $1.32.',
    period: '06 Mai 2026 — 09 Juin 2026',
    platform: 'Meta Ads (Facebook & Instagram)',
    tags: ['Meta Ads', 'Conseil Financier', 'Formation Pro', 'Maroc', 'Lead Generation'],

    cardMetrics: [
      { value: '242', label: 'Leads générés' },
      { value: '$1.32', label: 'Coût par lead' },
      { value: '4.69×', label: 'ROAS' },
    ],

    metrics: [
      { value: '242', label: 'Leads générés', sublabel: 'En 35 jours de campagne', color: '#4f46e5' },
      { value: '$1.32', label: 'Coût par lead', sublabel: 'Budget total : $320', color: '#16a34a' },
      { value: '3', label: 'Clients convertis', sublabel: 'Taux de conversion 1.24%', color: '#db2777' },
      { value: '$107', label: 'Coût par client', sublabel: 'Sur budget publicitaire', color: '#ea580c' },
      { value: '4.69×', label: 'ROAS', sublabel: '15 000 DH / $320', color: '#ca8a04' },
      { value: '+369%', label: 'ROI', sublabel: 'Sur le budget ads seul', color: '#0891b2' },
    ],

    services: [
      { name: 'Conseil en optimisation des coûts', icon: '💰', type: 'Conseil B2B' },
      { name: 'Formation professionnelle', icon: '🎓', type: 'Formation' },
    ],
    priceRange: '~5 000 DH / client',
    priceNote: 'Ticket moyen : 15 000 DH ÷ 3 clients',

    audience: [
      'Dirigeants de PME',
      'Directeurs Financiers',
      'Responsables Administratifs',
      'Cadres d\'entreprises',
      'Entrepreneurs',
      'Professionnels de la finance',
    ],

    strategy: [
      {
        phase: 'Phase 1',
        title: 'Positionnement & Recherche',
        description:
          'Analyse du profil de Mohamed Rismy — ancien cadre bancaire 30+ ans d\'expérience — comme élément différenciateur clé. Définition du message autour de la crédibilité et de l\'expertise terrain.',
        tags: ['Positioning', 'Market Research', 'Messaging'],
        icon: '🔍',
      },
      {
        phase: 'Phase 2',
        title: 'Funnel & Landing Page',
        description:
          'Construction du funnel orienté résultats concrets : économies réalisables, ROI mesurable. Landing page axée sur les cas d\'usage business réels et les gains financiers tangibles pour l\'entreprise cliente.',
        tags: ['Landing Page', 'Funnel Build', 'Copywriting'],
        icon: '🏗️',
      },
      {
        phase: 'Phase 3',
        title: 'Lancement Meta Ads',
        description:
          'Campagnes Facebook & Instagram ciblant les décideurs financiers et dirigeants de PME marocains. Créatifs mettant en avant l\'expertise de l\'ancien cadre bancaire et les économies clients potentielles.',
        tags: ['Meta Ads', 'Facebook', 'Instagram', 'Campaign Setup'],
        icon: '🚀',
      },
      {
        phase: 'Phase 4',
        title: 'Optimisation & Scaling',
        description:
          'Optimisation continue pour atteindre un CPL record de $1.32. Identification des créatifs et audiences les plus performants pour concentrer le budget sur ce qui convertit le mieux.',
        tags: ['Optimization', 'A/B Testing', 'Scaling'],
        icon: '📈',
      },
    ],

    roiBreakdown: [
      { label: 'Budget ads investi', value: '$320', color: '#ea580c' },
      { label: 'Leads générés', value: '242', color: '#4f46e5' },
      { label: 'Clients convertis', value: '3', color: '#db2777' },
      { label: 'Chiffre d\'affaires', value: '15 000 DH', color: '#16a34a' },
      { label: 'ROAS', value: '4.69×', color: '#ca8a04' },
      { label: 'ROI', value: '+368.75%', color: '#0891b2' },
    ],
    roiDisclaimer:
      '* Chiffre d\'affaires de 15 000 DH sur 3 clients. Ticket moyen : 5 000 DH / client. ROAS et ROI calculés sur le budget publicitaire seul.',

    insights: [
      {
        icon: '⚡',
        title: 'CPL record : $1.32',
        text: 'Le coût par lead de $1.32 est l\'un des meilleurs résultats de notre portefeuille — obtenu grâce à un message hyper-ciblé et un funnel optimisé.',
      },
      {
        icon: '🧑‍💼',
        title: 'L\'expérience comme actif',
        text: '30 ans d\'expérience bancaire de Mohamed Rismy ont été le cœur du message marketing, créant une confiance immédiate auprès des décideurs financiers.',
      },
      {
        icon: '📊',
        title: '242 leads en 35 jours',
        text: 'En moins de 5 semaines, COSTLESS a constitué une base de prospects qualifiés largement suffisante pour alimenter un pipeline commercial sur plusieurs mois.',
      },
      {
        icon: '💡',
        title: 'Budget maîtrisé',
        text: 'Avec seulement $320 investis, COSTLESS a généré un chiffre d\'affaires de 15 000 DH — preuve qu\'un système bien construit n\'a pas besoin d\'un budget massif pour performer.',
      },
    ],
  },
];

// Helper to get a case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
