'use client'

import { motion } from 'framer-motion'

// ─── Social links config ──────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    id: 'x',
    platform: 'X',
    handle: '@heisenberg_249',
    description: 'Real-time thoughts on AI, markets, and the systems that break my models.',
    href: 'https://x.com/heisenberg_249',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    accentColor: 'rgba(226, 232, 240,',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-500/20',
    hoverBorder: 'hover:border-slate-400/40',
    bgGradient: 'from-slate-500/[0.07] to-slate-600/[0.02]',
    glowColor: 'rgba(148, 163, 184, 0.2)',
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@bruce249',
    description: 'Open-source work, experiments, and repositories.',
    href: 'https://github.com/bruce249',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    accentColor: 'rgba(59, 130, 246,',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-400/40',
    bgGradient: 'from-blue-500/[0.07] to-blue-600/[0.03]',
    glowColor: 'rgba(59, 130, 246, 0.25)',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'Vignesh Kanike',
    description: 'Research updates, professional network, and collaborations.',
    href: 'https://linkedin.com/in/vigneshkanike/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accentColor: 'rgba(139, 92, 246,',
    textColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    hoverBorder: 'hover:border-violet-400/40',
    bgGradient: 'from-violet-500/[0.07] to-violet-600/[0.03]',
    glowColor: 'rgba(139, 92, 246, 0.25)',
  },
]

// ─── Social page ─────────────────────────────────────────────────────────────

export default function SocialPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-4">// NETWORK.LINKS</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text">SOCIAL</h1>
        <p className="mt-4 font-mono text-xs text-white/25 tracking-widest">
          CONNECTIONS_ESTABLISHED
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-md space-y-4">
        {SOCIAL_LINKS.map((link, i) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`
              group flex items-center gap-5 p-6 rounded-2xl border
              bg-gradient-to-br ${link.bgGradient}
              ${link.borderColor} ${link.hoverBorder}
              backdrop-blur-xl transition-all duration-300
            `}
            style={{
              boxShadow: 'none',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
                `0 0 30px ${link.glowColor}, 0 8px 32px rgba(0,0,0,0.4)`
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
            }}
          >
            {/* Icon */}
            <div
              className={`${link.textColor} transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100`}
            >
              {link.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className={`font-display font-bold text-xl ${link.textColor} mb-0.5`}>
                {link.platform}
              </div>
              <div className="font-mono text-xs text-white/35 mb-2">{link.handle}</div>
              <div className="text-white/40 text-sm leading-relaxed">{link.description}</div>
            </div>

            {/* Arrow */}
            <motion.div
              className={`${link.textColor} opacity-30 group-hover:opacity-80 transition-all duration-300 shrink-0`}
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-12 font-mono text-[10px] text-white/15 tracking-[0.3em]"
      >
      </motion.p>
    </div>
  )
}
