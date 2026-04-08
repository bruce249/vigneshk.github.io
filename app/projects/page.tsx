'use client'

import { motion } from 'framer-motion'

// ─── Placeholder card ─────────────────────────────────────────────────────────

function PlaceholderCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 border border-white/[0.05] min-h-[200px] flex flex-col justify-between group hover:border-blue-500/15 transition-all duration-300"
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-9 h-9 rounded-lg bg-blue-500/[0.08] border border-blue-500/15 flex items-center justify-center">
            <span className="text-blue-400/40 text-sm">◇</span>
          </div>
          <span className="font-mono text-[10px] text-white/15 tracking-widest">CLASSIFIED</span>
        </div>

        {/* Skeleton lines */}
        <div className="space-y-2 mb-4">
          <div className="h-3.5 w-3/4 rounded-md bg-white/[0.05]" />
          <div className="h-2.5 w-full rounded-md bg-white/[0.03]" />
          <div className="h-2.5 w-5/6 rounded-md bg-white/[0.03]" />
          <div className="h-2.5 w-4/5 rounded-md bg-white/[0.03]" />
        </div>
      </div>

      {/* Tags skeleton */}
      <div className="flex gap-2 mt-2">
        {[40, 52, 36].map((w, i) => (
          <div
            key={i}
            className="h-5 rounded-full bg-white/[0.04]"
            style={{ width: `${w}px` }}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ─── Projects page ────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">// PROJECT.MANIFEST</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text">PROJECTS</h1>
          <p className="mt-4 font-mono text-xs text-white/25 tracking-widest">
            STATUS: CLASSIFIED / PENDING RELEASE
          </p>
        </motion.div>

        {/* Placeholder grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[0, 1, 2, 3].map((i) => (
            <PlaceholderCard key={i} index={i} />
          ))}
        </div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="glass rounded-2xl px-10 py-8 border border-blue-500/[0.12] text-center max-w-sm w-full">
            <div className="text-4xl text-blue-400/20 mb-4">◈</div>
            <h3 className="font-display font-semibold text-white/45 mb-2">
              Projects Under Construction
            </h3>
            <p className="text-white/25 text-sm font-mono">Content will be populated manually</p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping opacity-50" />
              </div>
              <span className="font-mono text-[10px] text-blue-400/30 tracking-widest">
                AWAITING DATA
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-center mt-8 font-mono text-[10px] text-white/12 tracking-widest"
        >
          // ADD YOUR PROJECTS TO THIS FILE MANUALLY
        </motion.p>
      </div>
    </div>
  )
}
