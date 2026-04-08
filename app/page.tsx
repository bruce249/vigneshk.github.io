'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ─── Typing animation ─────────────────────────────────────────────────────────

const TAGLINES = ['AI Systems', 'Blockchain', 'Entrepreneurship']

function TypingAnimation() {
  const [displayText, setDisplayText] = useState('')
  const stateRef = useRef({ taglineIndex: 0, charIndex: 0, isDeleting: false })

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const tick = () => {
      const s = stateRef.current
      const current = TAGLINES[s.taglineIndex]

      if (!s.isDeleting) {
        if (s.charIndex < current.length) {
          s.charIndex++
          setDisplayText(current.slice(0, s.charIndex))
          timeoutId = setTimeout(tick, 110)
        } else {
          timeoutId = setTimeout(() => {
            s.isDeleting = true
            tick()
          }, 2000)
        }
      } else {
        if (s.charIndex > 0) {
          s.charIndex--
          setDisplayText(current.slice(0, s.charIndex))
          timeoutId = setTimeout(tick, 65)
        } else {
          s.isDeleting = false
          s.taglineIndex = (s.taglineIndex + 1) % TAGLINES.length
          timeoutId = setTimeout(tick, 250)
        }
      }
    }

    timeoutId = setTimeout(tick, 1100)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <span className="text-blue-400">
      {displayText}
      <span className="ml-px inline-block w-[2px] h-[1em] bg-blue-400 align-middle animate-blink" />
    </span>
  )
}

// ─── HUD corner bracket ───────────────────────────────────────────────────────

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const cls = {
    tl: 'top-0 left-0 border-t border-l',
    tr: 'top-0 right-0 border-t border-r',
    bl: 'bottom-0 left-0 border-b border-l',
    br: 'bottom-0 right-0 border-b border-r',
  }[pos]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${cls} w-5 h-5 border-blue-500/30`}
    />
  )
}

// ─── CTA buttons ──────────────────────────────────────────────────────────────

const CTA_BUTTONS = [
  { label: 'Social', href: '/social', delay: 0.95 },
  { label: 'About', href: '/about', delay: 1.05 },
  { label: 'Achievements', href: '/achievements', delay: 1.15 },
]

// ─── Home page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Radial glow — centered bloom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle violet secondary glow, offset */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '60%',
          width: 500,
          height: 300,
          background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* HUD telemetry — top left */}
      <div className="absolute top-20 left-6 font-mono text-[9px] text-white/[0.10] space-y-1.5 select-none hidden lg:block leading-relaxed">
        <div className="text-blue-500/25 mb-2 tracking-widest">// TELEMETRY</div>
        <div>LAT <span className="text-white/20">28.7041° N</span></div>
        <div>LON <span className="text-white/20">77.1025° E</span></div>
        <div>NODE <span className="text-white/20">IIT-DELHI</span></div>
        <div>UPTIME <span className="text-white/20">99.97%</span></div>
      </div>

      {/* HUD telemetry — top right */}
      <div className="absolute top-20 right-6 font-mono text-[9px] text-white/[0.10] space-y-1.5 text-right select-none hidden lg:block leading-relaxed">
        <div className="text-blue-500/25 mb-2 tracking-widest">BUILD //</div>
        <div><span className="text-white/20">2.4.1-STABLE</span></div>
        <div><span className="text-white/20">ENCRYPTED</span></div>
        <div><span className="text-white/20">VERIFIED</span></div>
        <div><span className="text-white/20">ONLINE</span></div>
      </div>

      {/* ── Center content with HUD frame ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-8 py-10 md:px-16 md:py-14">

        {/* Corner brackets — HUD decoration */}
        <Corner pos="tl" />
        <Corner pos="tr" />
        <Corner pos="bl" />
        <Corner pos="br" />

        {/* Section designation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="section-label mb-10"
        >
          ── AGENT PROFILE ──
        </motion.p>

        {/* Name — the centrepiece */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold tracking-[0.08em] leading-none"
          style={{
            fontSize: 'clamp(3.8rem, 13vw, 9rem)',
            background:
              'linear-gradient(135deg, #bfdbfe 0%, #c4b5fd 35%, #818cf8 65%, #93c5fd 100%)',
            backgroundSize: '250% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 7s ease infinite',
          }}
        >
          VIGNESH
        </motion.h1>

        {/* 001 — styled as a system tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex justify-center mt-3 mb-9"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.06]">
            <div className="w-1 h-1 rounded-full bg-blue-400/60 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.45em] text-blue-400/55">001</span>
          </div>
        </motion.div>

        {/* Tagline — typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.6 }}
          className="flex items-center justify-center gap-2.5 font-mono text-sm md:text-base text-white/35 mb-12"
        >
          <span className="text-blue-500/35 select-none text-lg leading-none">›</span>
          <TypingAnimation />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8, ease: 'easeOut' }}
          className="w-20 h-px mx-auto mb-11 bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"
        />

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CTA_BUTTONS.map((btn) => (
            <motion.div
              key={btn.href}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: btn.delay, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href={btn.href} className="btn-primary">
                <span className="mr-2 opacity-40 text-[10px]">→</span>
                {btn.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll cue — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 select-none"
      >
        <p className="font-mono text-[9px] tracking-[0.4em] text-white/14">SCROLL</p>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="w-px h-9 bg-gradient-to-b from-blue-500/30 to-transparent"
        />
      </motion.div>

      {/* Keyboard shortcut hint — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        className="absolute bottom-7 right-6 hidden md:flex items-center gap-1.5 select-none"
      >
        <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.04] font-mono text-[9px] text-white/22">
          Ctrl
        </kbd>
        <span className="text-white/12 text-[9px]">+</span>
        <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.04] font-mono text-[9px] text-white/22">
          K
        </kbd>
        <span className="font-mono text-[9px] text-white/14 ml-1 tracking-widest">CMD</span>
      </motion.div>
    </div>
  )
}
