'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACHIEVEMENTS = [
  {
    id: 1,
    year: '2026',
    title: 'GSSC',
    category: 'Competition',
    description:
      'Only Team representing India at the Global Stage at Asian Leadership Conference 2026, Seoul.',
    tags: ['AI', 'Startup', 'Competition'],
    accent: 'text-blue-400',
    border: 'border-blue-500/25',
    dotBg: 'bg-blue-500',
    badge: '◆',
  },
  {
    id: 2,
    year: '2024',
    title: '',
    category: 'COMPETITION',
    description:
      'Description of a competition win, hackathon placement, or ranking in a national/international event.',
    tags: ['Quant', 'Competition'],
    accent: 'text-violet-400',
    border: 'border-violet-500/25',
    dotBg: 'bg-violet-500',
    badge: '◈',
  },
  {
    id: 3,
    year: '2023',
    title: 'Achievement Placeholder',
    category: 'ENGINEERING',
    description:
      'Description of a notable engineering project, production deployment, or systems-level technical milestone.',
    tags: ['Systems', 'Engineering'],
    accent: 'text-cyan-400',
    border: 'border-cyan-500/25',
    dotBg: 'bg-cyan-500',
    badge: '⬡',
  },
  {
    id: 4,
    year: '2023',
    title: 'Achievement Placeholder',
    category: 'ACADEMIC',
    description:
      'Description of an academic distinction, scholarship award, or institutional recognition at IIT Delhi.',
    tags: ['Academic', 'IIT Delhi'],
    accent: 'text-emerald-400',
    border: 'border-emerald-500/25',
    dotBg: 'bg-emerald-500',
    badge: '◉',
  },
]

// ─── Individual timeline card ─────────────────────────────────────────────────

function AchievementCard({
  item,
  index,
}: {
  item: (typeof ACHIEVEMENTS)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-14"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-6 top-5 w-3.5 h-3.5 -translate-x-1/2 rounded-full border-2 ${item.border} bg-[#000010] flex items-center justify-center`}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${item.dotBg} opacity-80`} />
      </div>

      {/* Card */}
      <div
        className={`
          glass rounded-xl p-6 border ${item.border}
          group hover:bg-white/[0.02] transition-all duration-300
        `}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`font-mono text-[10px] ${item.accent} tracking-widest`}>
                {item.category}
              </span>
              <span className="text-white/10">·</span>
              <span className="font-mono text-[10px] text-white/30">{item.year}</span>
            </div>
            <h3 className="font-display font-semibold text-white/75 text-base group-hover:text-white/90 transition-colors">
              {item.title}
            </h3>
          </div>
          <span
            className={`text-xl ${item.accent} opacity-35 group-hover:opacity-70 transition-opacity shrink-0 ml-4`}
          >
            {item.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/35 text-sm leading-relaxed mb-4">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${item.border} ${item.accent} opacity-60`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Achievements page ────────────────────────────────────────────────────────

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">// ACHIEVEMENT.LOG</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text">
            ACHIEVEMENTS
          </h1>
          <p className="mt-4 font-mono text-xs text-white/25 tracking-widest">
            RECORDS: {ACHIEVEMENTS.length} / GROWING
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-violet-500/15 to-transparent" />

          <div className="space-y-6">
            {ACHIEVEMENTS.map((item, i) => (
              <AchievementCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Loading more indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-white/[0.06]">
            <div className="relative">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping opacity-60" />
            </div>
            <span className="font-mono text-[10px] text-white/25 tracking-widest">
              MORE ENTRIES PENDING
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
