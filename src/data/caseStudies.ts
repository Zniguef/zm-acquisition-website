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
      'Cabinet d\'expertise comptable et de formation professionnelle basé au Maroc. En 2 mois, nous avons généré 181 leads qualifiés grâce à des campagnes Meta Ads ultra-ciblées sur les professionnels comptables.',
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
      { value: '$2.04', label: 'Coût par lead', sublabel: 'Campagne Meta Ads', color: '#16a34a' },
      { value: '37×', label: 'ROAS', sublabel: 'Retour sur dépense pub', color: '#ca8a04' },
      { value: '3 616%', label: 'ROI publicitaire', sublabel: 'Performance globale', color: '#0891b2' },
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
      { label: 'Leads générés', value: '181', color: '#4f46e5' },
      { label: 'ROAS', value: '37×', color: '#ca8a04' },
      { label: 'ROI', value: '+3 616%', color: '#0891b2' },
    ],

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
        text: 'Un taux de conversion élevé sur leads qualifiés. Pour un service B2B premium, ce ratio témoigne de la qualité des leads générés.',
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
      'COSTLESS est un cabinet de conseil financier et de formation professionnelle fondé par Mohamed Rismy, ancien cadre bancaire avec plus de 30 ans d\'expérience. En 35 jours, nous avons généré 242 leads qualifiés grâce à des campagnes Meta Ads ciblées sur les décideurs financiers et dirigeants de PME.',
    period: '35 jours',
    platform: 'Meta Ads (Facebook & Instagram)',
    tags: ['Meta Ads', 'Conseil Financier', 'Formation Pro', 'Maroc', 'Lead Generation'],

    cardMetrics: [
      { value: '242', label: 'Leads générés' },
      { value: '$1.32', label: 'Coût par lead' },
      { value: '4.69×', label: 'ROAS' },
    ],

    metrics: [
      { value: '242', label: 'Leads générés', sublabel: 'En 35 jours de campagne', color: '#4f46e5' },
      { value: '$1.32', label: 'Coût par lead', sublabel: 'Campagne Meta Ads', color: '#16a34a' },
      { value: '4.69×', label: 'ROAS', sublabel: 'Retour sur dépense pub', color: '#ca8a04' },
      { value: '+369%', label: 'ROI', sublabel: 'Performance globale', color: '#0891b2' },
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
      { label: 'Leads générés', value: '242', color: '#4f46e5' },
      { label: 'ROAS', value: '4.69×', color: '#ca8a04' },
      { label: 'ROI', value: '+368.75%', color: '#0891b2' },
    ],

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
        title: 'Système performant',
        text: 'Un système bien construit génère des résultats mesurables sans nécessiter un budget massif — preuve que la stratégie prime sur la dépense.',
      },
    ],
  },

  // ── Case Study #003 — KLÜB Studio ────────────────────────────────────────
  {
    slug: 'klub-studio-ghita',
    number: '#003',
    clientName: 'Ghita',
    companyName: 'KLÜB Studio',
    companyFullName: 'KLÜB Studio — Studio de Pilates',
    industry: 'Studio de Pilates',
    tagline: 'Studio Pilates premium au Maroc — acquisition de clientes via Meta Ads',
    description:
      'KLÜB Studio est un studio de Pilates premium. De mars à juin 2026 (4 mois), nos campagnes Meta Ads ont généré 1 035 leads qualifiés grâce à un ciblage précis et une offre d\'entrée à faible friction.',
    period: '4 mois',
    platform: 'Meta Ads (Facebook & Instagram)',
    tags: ['Meta Ads', 'Studio Pilates', 'Maroc', 'Lead Generation', 'Fitness'],

    cardMetrics: [
      { value: '1 035', label: 'Leads générés' },
      { value: '$0.88', label: 'Coût par lead' },
      { value: '~1.97×', label: 'ROAS (M1)' },
    ],

    metrics: [
      { value: '1 035', label: 'Leads générés', sublabel: 'Mars — Juin 2026 · 4 mois', color: '#4f46e5' },
      { value: '$0.88', label: 'Coût par lead', sublabel: 'Campagne Meta Ads', color: '#16a34a' },
      { value: '~1.97×', label: 'ROAS (mois 1)', sublabel: 'Retour sur dépense pub', color: '#ca8a04' },
      { value: '1.30%', label: 'CTR moyen', sublabel: 'CPM $1.83 · CPC $0.14', color: '#0891b2' },
    ],

    services: [
      { name: 'Séance d\'essai', icon: '🧘', type: 'Essai' },
      { name: 'Abonnement direct', icon: '📋', type: 'Forfait' },
      { name: 'Pack découverte', icon: '🎁', type: 'Pack' },
    ],
    priceRange: '150 MAD — ~850 MAD',
    priceNote: 'Séance essai 150 MAD · Forfait moy. ~850 MAD',

    audience: [
      'Femmes actives 25–45 ans',
      'Intérêt bien-être & fitness',
      'Milieu urbain au Maroc',
      'Profil premium / lifestyle',
    ],

    strategy: [
      {
        phase: 'Phase 1',
        title: 'Recherche & Positionnement',
        description:
          'Analyse du marché du Pilates au Maroc, définition du profil de la cliente idéale. Positionnement autour de l\'expérience premium et du bien-être féminin. Message centré sur l\'essai sans engagement pour réduire la friction.',
        tags: ['Market Research', 'Audience Analysis', 'Messaging'],
        icon: '🔍',
      },
      {
        phase: 'Phase 2',
        title: 'Funnel & Offre d\'essai',
        description:
          'Construction d\'un funnel basé sur une offre d\'entrée à friction nulle — la séance d\'essai à 150 MAD. Landing page optimisée pour maximiser les conversions et qualifier les prospects avant le contact.',
        tags: ['Landing Page', 'Funnel Build', 'Offre d\'essai'],
        icon: '🏗️',
      },
      {
        phase: 'Phase 3',
        title: 'Lancement 3 Campagnes Meta',
        description:
          'Déploiement de 3 campagnes complémentaires sur Facebook & Instagram. Ciblage géographique et démographique précis sur la clientèle féminine marocaine, avec des créatifs adaptés au studio.',
        tags: ['Meta Ads', 'Facebook', 'Instagram', '3 Campagnes'],
        icon: '🚀',
      },
      {
        phase: 'Phase 4',
        title: 'Optimisation & Conversion',
        description:
          'Suivi des parcours de conversion : séance d\'essai → abonnement. 4 upgrades identifiés (Noussaiba, Hosana, Rabia, Aziza) sur 15 séances d\'essai = 26.7% de taux d\'upgrade. Optimisation continue pour maintenir le CPL sous $1.',
        tags: ['Optimization', 'Conversion Tracking', 'Upsell'],
        icon: '📈',
      },
    ],

    roiBreakdown: [
      { label: 'Leads générés', value: '1 035', color: '#4f46e5' },
      { label: 'ROAS (mois 1 estimé)', value: '~1.97×', color: '#ca8a04' },
    ],

    insights: [
      {
        icon: '💎',
        title: '$0.88 par lead',
        text: 'Un CPL de $0.88 pour un studio de Pilates premium est exceptionnel — obtenu grâce à un ciblage précis et une offre d\'entrée à faible friction (séance d\'essai 150 MAD).',
      },
      {
        icon: '🎯',
        title: 'Stratégie séance d\'essai',
        text: 'La majorité des clientes sont passées par une séance d\'essai avant de s\'abonner. Une offre d\'entrée bien pensée réduit la résistance à l\'achat et crée un pipeline prévisible.',
      },
      {
        icon: '🔄',
        title: '26.7% d\'upgrade',
        text: 'Un taux d\'upgrade élevé des séances d\'essai vers les forfaits — signe d\'une expérience studio de qualité.',
      },
      {
        icon: '📊',
        title: '679 leads · 3 campagnes',
        text: 'Trois campagnes complémentaires ont généré un flux massif de prospects qualifiés à très faible coût — preuve qu\'un système bien structuré surpasse largement les approches mono-campagne.',
      },
    ],
  },

  // ── Case Study #004 — UGR ───────────────────────────────────────────────
  {
    slug: 'ugr-universe-gazon',
    number: '#004',
    clientName: 'UGR',
    companyName: 'UGR',
    companyFullName: 'UGR — Universe Gazon en Rouleaux',
    industry: 'Gazon Naturel en Rouleau',
    tagline: 'Acquisition B2B & B2C via Meta Ads — particuliers et professionnels du paysage',
    description:
      'UGR est un producteur et fournisseur de gazon naturel en rouleau au Maroc, opérant à la fois en B2C (particuliers) et en B2B (professionnels du paysagisme, promoteurs, hôtels). En 3 mois, nos campagnes Meta Ads ont généré 684 leads qualifiés grâce à une stratégie double marché.',
    period: '3 mois',
    platform: 'Meta Ads (Facebook & Instagram)',
    tags: ['Meta Ads', 'Gazon Naturel', 'B2B', 'B2C', 'Lead Generation', 'Maroc'],

    cardMetrics: [
      { value: '684', label: 'Leads générés' },
      { value: '$1.57', label: 'CPL moyen' },
      { value: 'B2B & B2C', label: 'Marchés ciblés' },
    ],

    metrics: [
      { value: '684', label: 'Leads générés', sublabel: 'B2C + B2B · 3 mois', color: '#4f46e5' },
      { value: '537', label: 'Leads B2C', sublabel: 'CPL $1.32 · CTR 1.58%', color: '#16a34a' },
      { value: '148', label: 'Leads B2B', sublabel: 'CPL $2.47 · CTR 2.14%', color: '#0891b2' },
      { value: '1.72%', label: 'CTR global', sublabel: 'Moyenne B2C & B2B', color: '#ca8a04' },
    ],

    services: [
      { name: 'Gazon naturel en rouleau', icon: '🌿', type: 'B2C' },
      { name: 'Fourniture gazon professionnel', icon: '🏗️', type: 'B2B' },
    ],

    audience: [
      'Particuliers — jardins résidentiels',
      'Entreprises de paysagisme',
      'Promoteurs immobiliers',
      'Hôtels & complexes touristiques',
      'Syndics de copropriété',
      'Cabinets d\'architecture & paysagisme',
      'Entreprises & sites industriels',
    ],

    strategy: [
      {
        phase: 'Phase 1',
        title: 'Segmentation double marché',
        description:
          'Analyse des deux segments cibles — B2C (particuliers souhaitant aménager leur jardin) et B2B (professionnels du paysage, promoteurs, hôtels). Définition de messages et d\'angles distincts pour chaque audience.',
        tags: ['Market Research', 'Audience Segmentation', 'B2B & B2C'],
        icon: '🔍',
      },
      {
        phase: 'Phase 2',
        title: 'Création des Funnels',
        description:
          'Deux funnels distincts : un funnel B2C axé sur l\'esthétique et la facilité d\'installation, un funnel B2B centré sur la fiabilité de la supply, les volumes et la qualité professionnelle du gazon.',
        tags: ['Funnel Build', 'Landing Page', 'Copywriting'],
        icon: '🏗️',
      },
      {
        phase: 'Phase 3',
        title: 'Lancement des Campagnes',
        description:
          'Déploiement de campagnes Meta Ads séparées pour le B2C et le B2B. Créatifs adaptés à chaque segment — visuels jardin résidentiel pour les particuliers, références chantiers et projets professionnels pour les décideurs.',
        tags: ['Meta Ads', 'Campaign Setup', 'Creatives'],
        icon: '🚀',
      },
      {
        phase: 'Phase 4',
        title: 'Optimisation & Scaling',
        description:
          'Optimisation continue des deux campagnes en parallèle. Ajustement des audiences, des créatifs et des messages pour maximiser la qualité des leads entrants sur les deux marchés.',
        tags: ['Optimization', 'A/B Testing', 'Scaling'],
        icon: '📈',
      },
    ],

    roiBreakdown: [
      { label: 'Leads générés', value: '684', color: '#4f46e5' },
      { label: 'Leads B2C', value: '537', color: '#16a34a' },
      { label: 'Leads B2B', value: '148', color: '#0891b2' },
    ],

    insights: [
      {
        icon: '🎯',
        title: 'Double marché, double performance',
        text: 'Opérer simultanément en B2C et B2B avec des campagnes distinctes a permis d\'adresser deux profils de clients très différents sans compromettre la pertinence du message.',
      },
      {
        icon: '🌿',
        title: 'CPL B2C exceptionnel',
        text: 'À $1.32 par lead, la campagne B2C a attiré un volume important de particuliers qualifiés à un coût très compétitif pour le secteur.',
      },
      {
        icon: '🏗️',
        title: 'B2B : qualité avant quantité',
        text: 'La campagne B2B a généré 148 leads professionnels avec un CTR de 2.14% — des décideurs engagés issus du paysagisme, de la promotion immobilière et de l\'hôtellerie.',
      },
      {
        icon: '📊',
        title: '684 leads en 3 mois',
        text: 'Un pipeline commercial solide constitué en seulement 3 mois, couvrant à la fois le marché résidentiel et le marché professionnel.',
      },
    ],
  },
];

// Helper to get a case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
