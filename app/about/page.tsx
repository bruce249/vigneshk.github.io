'use client'

import { motion } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────

const SPECS = [
  { label: 'INSTITUTION', value: 'IIT Delhi' },
  { label: 'FOCUS', value: 'AI, Blockchain, Entrepreneurship' },
  { label: 'APPROACH', value: 'Systems Thinking' },
  { label: 'STATUS', value: 'Active / Building' },
]

const PILLARS = [
  {
    icon: '⬡',
    title: 'Artificial Intelligence',
    body: 'Designing and deploying intelligent systems that reason under uncertainty — from transformer architectures to reinforcement learning agents.',
    accent: 'text-blue-400',
    border: 'border-blue-500/15',
    bg: 'hover:bg-blue-500/[0.03]',
  },
  {
    icon: '◆',
    title: 'Entrepreneurship',
    body: 'Building with real users, iterating quickly, and shipping at scale. I&#39;m always exploring new ideas and ventures — currently in the AI and web3 spaces.',
    accent: 'text-violet-400',
    border: 'border-violet-500/15',
    bg: 'hover:bg-violet-500/[0.03]',
  },
  {
    icon: '⌬',
    title: 'Blockchain',
    body: 'Designing decentralized systems focused on transparency, security, and ownership, from smart contract architecture to scalable web3 product infrastructure.',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/15',
    bg: 'hover:bg-cyan-500/[0.03]',
  },
]

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

// ─── About page ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          {...fadeUp(0.15)}
          className="text-center mb-14"
        >
          <p className="section-label mb-4">// IDENTITY.MODULE</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text">ABOUT</h1>
        </motion.div>

        {/* Bio card */}
        <motion.div
          {...fadeUp(0.25)}
          className="glass rounded-2xl p-8 mb-6 border border-white/[0.06]"
        >
          <p className="text-white/65 text-lg leading-relaxed">
            Student at{' '}
            <span className="text-blue-400 font-semibold">IIT Delhi</span>
            {' '}— operating at the intersection of{' '}
            <span className="text-violet-400 font-semibold">artificial intelligence</span>,
            blockchain, and entrepreneurship.
          </p>
          <p className="mt-5 text-white/40 text-base leading-relaxed">
            I build with a systems mindset. Whether it&apos;s an AI model, a blockchain protocol,
            or a product strategy, the principle is the same: design for clarity, optimize for
            reliability, and execute for impact.
          </p>
          <p className="mt-4 text-white/40 text-base leading-relaxed">
            I focus on real outcomes over surface-level hype. Every project I work on is built to
            perform under uncertainty, scale in production, and create measurable value.
          </p>
        </motion.div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.label}
              {...fadeUp(0.35 + i * 0.08)}
              className="glass rounded-xl p-4 border border-white/[0.06] text-center"
            >
              <p className="font-mono text-[10px] text-white/25 tracking-widest mb-2">
                {spec.label}
              </p>
              <p className="text-white/75 text-sm font-medium">{spec.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="space-y-3">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`
                glass rounded-xl p-6 border ${pillar.border}
                flex items-start gap-4 group
                transition-all duration-300 ${pillar.bg}
              `}
            >
              <span
                className={`text-2xl ${pillar.accent} opacity-50 group-hover:opacity-90 transition-opacity mt-0.5 shrink-0`}
              >
                {pillar.icon}
              </span>
              <div>
                <h3 className={`font-display font-semibold ${pillar.accent} mb-1.5`}>
                  {pillar.title}
                </h3>
                <p className="text-white/38 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-8 text-center"
        >
          <p className="font-mono text-xs text-white/20 italic tracking-wide">
            &quot;The goal is to turn data into information, and information into insight.&quot;
          </p>
        </motion.div>
      </div>
    </div>
  )
}
