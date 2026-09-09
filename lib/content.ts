export const person = {
  firstName: 'Vignesh',
  lastName: 'Kanike',
  fullName: 'Vignesh Kanike',
  institution: 'IIT Delhi',
  role: 'Student at IIT Delhi',
  focus: 'AI Safety, Mechanistic Interpretability, Reinforcement Learning, Generative Engine Optimization',
  bio: 'I am a student at IIT Delhi. I work on AI safety, Mechanistic Interpretability, Reinforcement Learning and Generative Engine Optimization; how models decide what to show, and how a recommendation holds or fails across a conversation. At AEOsim I am building measurement for multi-turn AI visibility. I am also an AI Fellow at Activate VC, where I worked at AEOS Games building India\'s First AAA Game Unleash the Avatar. I always try to find patterns and anti-patterns. I\'m also a PolyMath ;)',
  tags: [
    'AI Safety',
    'Mechanistic Interpretability',
    'Reinforcement Learning',
    'Generative Engine Optimization',
  ],
} as const

export const focusAreas = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    body: 'Designing and deploying intelligent systems that reason under uncertainty, from transformer architectures to reinforcement learning agents.',
  },
  {
    id: 'ventures',
    title: 'Entrepreneurship',
    body: 'Building with real users, iterating quickly, and shipping at scale. Always exploring new ideas and ventures, currently in the AI and web3 spaces.',
  },
  {
    id: 'chain',
    title: 'Blockchain',
    body: 'Designing decentralized systems focused on transparency, security, and ownership, from smart contract architecture to scalable web3 product infrastructure.',
  },
] as const

export const experience = [
  {
    company: 'AEOsim',
    role: 'Builder and Operator, Head of RnD',
    dates: 'Feb 2026 - Present',
    location: 'New Delhi, India',
    bullets: [
      'Engineered Analytika, the first-ever platform designed to measure multi-turn AI visibility, establishing industry-first, proprietary metrics to accurately quantify a brand’s visibility across generative engines.',
      'Developed research-backed methods for optimizing content and Product Detail Pages (PDPs); secured active content partnerships with organizations like Kojable, The GEO Community, and GEOZ, while driving weekly research-based publications.',
      'Secured strategic R&D partnerships with large enterprises while an undergraduate, taking the tool from concept to production; represented India as the sole national team at GSSC Seoul and earned selection to Founders Inc. Canopy.',
    ],
  },
  {
    company: 'Activate VC',
    role: 'AI Fellow',
    dates: 'Jun 2026 - Present',
    location: 'Bengaluru, India',
    bullets: [
      'Selected as 1 of 14 AI Fellows across India; embedded at AEOS Labs to architect internal software tooling and production infrastructure for Unleash the Avatar, India’s first AAA game.',
      'Applied production-grade ML models to animation pipelines and game systems via the studio’s MLD research track, translating core research into scalable character and simulation workflows.',
      'Designed and deployed AI-driven solutions across the game engineering stack, directly reducing production overhead and asset bottlenecks on India’s most ambitious entertainment project.',
    ],
  },
  {
    company: 'Nomadiq',
    role: 'AI Engineer Intern',
    dates: 'June 2025 - Sep 2025',
    location: 'New Delhi, India',
    bullets: [
      'Engineered a natural language flight booking engine with real-time search integration, drastically minimizing user friction and drop-off during checkout.',
      'Architected backend automation pipelines for ticket fulfillment, eliminating operational bottlenecks and significantly reducing processing costs.',
      'Optimized critical transaction workflows and API reliability, boosting end-to-end booking success rates to 90%.',
    ],
  },
] as const

export const writing = [
  {
    date: '2026-09-05',
    displayDate: 'September 5, 2026',
    title:
      'Clarification as a Branch Point in AI Recommendations: Alternative Clarifying Answers Cut Brand-Set Jaccard Overlap 68% Below Within-Branch Noise',
    authors: 'Vignesh Kanike',
    href: 'https://www.aeosim.com/blog/clarification-branch-point',
    excerpt:
      'Twelve commercial categories on GPT-5.6 Luna: branch spread Jaccard 0.162 vs within-branch noise 0.511 ungrounded (68% lower), 12/12 positive paired gaps, and web_search left the effect intact.',
  },
  {
    date: '2026-08-31',
    displayDate: 'August 31, 2026',
    title:
      'AI Answer Alignment Beyond Factual Accuracy: Six Observation Dimensions, Materiality and Recurrence Gates, and Misalignment Rates Across Prompt Families',
    authors: 'Vignesh Kanike & Piush Vaish',
    href: 'https://www.aeosim.com/blog/ai-answer-alignment',
    excerpt:
      'Article 3/n on synthetic data in LLM visibility tools. Score six answer observations per run, gate on materiality and recurrence, and read misalignment as a rate by family, engine, and multi-turn trajectory.',
  },
  {
    date: '2026-08-27',
    displayDate: 'August 27, 2026',
    title:
      'Visibility Has a Third Axis: Separating Brand Exclusion from Engine Incoherence in Multi-Turn Drop Rates and Half-Life',
    authors: 'Vignesh Kanike',
    href: 'https://www.aeosim.com/blog/visibility-has-a-third-axis',
    excerpt:
      'Your drop rate is measuring two different things at once. Coherence separates justified brand exclusion from engine forgetfulness, and γ can reverse cross-engine rankings.',
  },
  {
    date: '2026-08-13',
    displayDate: 'August 13, 2026',
    title:
      'Measuring AI Search Visibility Beyond the First Response: A Markov Model for Brand Drop-Off, Recovery, and Half-Life Across Buying Turns',
    authors: 'Vignesh Kanike',
    href: 'https://www.aeosim.com/blog/visibility-has-two-axes',
    excerpt:
      'AI visibility research settled on repeated sampling for run-to-run variance. Brand presence also drifts across turns. A two-state Markov chain gives GEO teams drop rate, recovery rate, and visibility half-life.',
  },
] as const

export const socials = [
  {
    id: 'github',
    label: 'github',
    href: 'https://github.com/bruce249',
  },
  {
    id: 'linkedin',
    label: 'linkedin',
    href: 'https://linkedin.com/in/vigneshkanike/',
  },
  {
    id: 'x',
    label: 'x',
    href: 'https://x.com/heisenberg_249',
  },
] as const
